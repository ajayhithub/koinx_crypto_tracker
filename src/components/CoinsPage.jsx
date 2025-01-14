import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
} from 'chart.js';
import './CoinsPage.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const CoinsPage = () => {
    const [recommendedCoins, setRecommendedCoins] = useState([]);
    const [trendingCoins, setTrendingCoins] = useState([]);
    const [historicalData, setHistoricalData] = useState({}); 

    useEffect(() => {
        
        axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 5,
                page: 1,
                price_change_percentage: '24h',
            },
        }).then((response) => {
            setRecommendedCoins(response.data);
        });

      
        axios.get('https://api.coingecko.com/api/v3/search/trending').then((response) => {
            const trending = response.data.coins.map((coin) => ({
                id: coin.item.id,
                name: coin.item.name,
                symbol: coin.item.symbol,
                image: coin.item.large,
            }));
            setTrendingCoins(trending);

           
            trending.forEach((coin) => {
                axios
                    .get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart`, {
                        params: {
                            vs_currency: 'usd',
                            days: 7, 
                        },
                    })
                    .then((res) => {
                        setHistoricalData((prevData) => ({
                            ...prevData,
                            [coin.id]: res.data.prices, 
                        }));
                    })
                    .catch((error) => console.error(`Failed to fetch data for ${coin.id}:`, error));
            });
        });
    }, []);

   
    const prepareChartData = (prices) => {
        if (!prices) return null;
        return {
            labels: prices.map(() => ''), 
            datasets: [
                {
                    label: '',
                    data: prices.map((price) => price[1]), 
                    borderColor: '#0071bd',
                    backgroundColor: 'rgba(0, 113, 189, 0.2)',
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 0, 
                },
            ],
        };
    };

   
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false, 
            },
            y: {
                display: false, 
            },
        },
        plugins: {
            legend: {
                display: false, 
            },
            tooltip: {
                enabled: false, 
            },
        },
    };

    return (
        <div className="coins-page">
            <h2>You May Also Like</h2>
            <div className="coins-grid">
                {recommendedCoins.map((coin) => (
                    <div key={coin.id} className="coin-card">
                        <img src={coin.image} alt={coin.name} />
                        <h3>{coin.name} ({coin.symbol.toUpperCase()})</h3>
                        <p>${coin.current_price.toFixed(2)}</p>
                        <p className={coin.price_change_percentage_24h > 0 ? 'positive' : 'negative'}>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </p>
                    </div>
                ))}
            </div>

            <h2>Trending Coins</h2>
            <div className="coins-grid">
                {trendingCoins.map((coin) => (
                    <div key={coin.id} className="coin-card">
                        <img src={coin.image} alt={coin.name} />
                        <h3>{coin.name} ({coin.symbol.toUpperCase()})</h3>
                       
                        {historicalData[coin.id] ? (
                            <Line
                                data={prepareChartData(historicalData[coin.id])}
                                options={chartOptions}
                                height={150}
                            />
                        ) : (
                            <p>Loading chart...</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoinsPage;

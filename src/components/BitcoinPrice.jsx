import { useEffect, useState } from 'react';
import './BitcoinPrice.css';
import axios from 'axios';

const BitcoinPrice = ({ usdPrice, inrPrice, change }) => {
    const [bitcoinRank, setBitcoinRank] = useState(1);
    const [bitcoinLogo, setBitcoinLogo] = useState('');

    useEffect(() => {
      
        axios.get('https://api.coingecko.com/api/v3/coins/bitcoin')
            .then((response) => {
                const { market_cap_rank, image } = response.data;
                setBitcoinRank(market_cap_rank);
                setBitcoinLogo(image.large); 
            })
            .catch((error) => console.error("Error fetching Bitcoin details:", error));
    }, []);

    return (
        <div className="bitcoin-price">
            <div className="price-header">
                <h2>Bitcoin <span className="rank">Rank #{bitcoinRank || "loading..."}</span></h2>
                {bitcoinLogo && <img src={bitcoinLogo} alt="Bitcoin Logo" className="bitcoin-logo" />}
            </div>
            <h1>${usdPrice}</h1>
            <h3>₹{inrPrice}</h3>
            <p className="change">⬆ {change}% (24H)</p>
        </div>
    );
};

export default BitcoinPrice;

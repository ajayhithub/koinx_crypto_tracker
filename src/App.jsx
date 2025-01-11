import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import BitcoinPrice from './components/BitcoinPrice.jsx';
import Chart from './components/Chart.jsx';
import GetStarted from './components/GetStarted.jsx';
import TrendingCoins from './components/TrendingCoins.jsx';
import './App.css';
import axios from 'axios';
import Tabs from "./components/Tabs.jsx";
import OverviewTab from "./components/OverviewTab.jsx";
import Fundamentals from "./components/Fundamentals.jsx";
import NewsInsightsTab from "./components/NewsInsightsTab.jsx";
import SentimentsTab from "./components/SentimentsTab.jsx";
import TeamTab from "./components/TeamTab.jsx";
import TechnicalsTab from "./components/TechnicalsTab.jsx";
import TokenomicsTab from "./components/TokenomicsTab.jsx";
import CoinsPage from './components/CoinsPage.jsx';
import "./components/Fundamentals.css";

const App = () => {
  const [activeTab, setActiveTab] = useState(0); // Change state to track index of the active tab
  const [bitcoinData, setBitcoinData] = useState({});
  const [trendingCoins, setTrendingCoins] = useState([]);
  const mockData = {
      price: "$16,815.46",
      marketCap: "$323,507,290,047",
      tradingVolume: "$23,249,202,782",
      marketCapRank: 1,
      allTimeHigh: {
          price: "$69,044.77",
          change: "-75.6%",
          date: "Nov 10, 2021",
      },
      allTimeLow: {
          price: "$67.81",
          change: "24,729.1%",
          date: "Jul 06, 2013",
      },
      dominance: 38.343,
      volumeToMarketCap: 0.0718,
      high24h: "$16,874.12",
      low24h: "$16,382.07",
      high7d: "$16,874.12",
      low7d: "$16,382.07",
      high52w: "$49,743.83",
      low52w: "$16,930.22",
  };

  const renderActiveTabContent = () => {
    switch (activeTab) {
        case 0:
            return <OverviewTab />;
        case 1:
            return <Fundamentals data={mockData} />;
        case 2:
            return <NewsInsightsTab />;
        case 3:
            return <SentimentsTab />;
        case 4:
            return <TeamTab />;
        case 5:
            return <TechnicalsTab />;
        case 6:
            return <TokenomicsTab />;
        default:
            return <OverviewTab />;
    }
  };

  useEffect(() => {
      // Fetch Bitcoin Data
      axios.get('https://api.coingecko.com/api/v3/simple/price', {
          params: {
              ids: 'bitcoin',
              vs_currencies: 'usd,inr',
              include_24hr_change: 'true',
          },
      }).then((response) => {
          setBitcoinData(response.data.bitcoin);
      });

      // Fetch Trending Coins
      axios.get('https://api.coingecko.com/api/v3/search/trending').then((response) => {
          const coins = response.data.coins.map((coin) => ({
              id: coin.item.id,
              name: coin.item.name,
              symbol: coin.item.symbol,
              image: coin.item.large,
              change: coin.item.price_btc, // Adjust if necessary
          }));
          setTrendingCoins(coins);
      });
  }, []);

  return (
      <div className="app">
          <Header />
          <div className="content">
              <div className="left">
                  <BitcoinPrice
                      usdPrice={bitcoinData.usd}
                      inrPrice={bitcoinData.inr}
                      change={bitcoinData.usd_24h_change}
                  />
                  <Chart />
              </div>
              <div className="right">
                  <GetStarted />
                  <TrendingCoins coins={trendingCoins} />
              </div>
          </div>

          <div>
              <Tabs
                  tabs={["Overview", "Fundamentals", "News Insights", "Sentiments", "Team", "Technicals", "Tokenomics"]}
                  activeTab={activeTab} // Pass activeTab as prop to Tabs
                  onTabClick={setActiveTab} // Notify parent component on tab change
              />
              {renderActiveTabContent()}
          </div>
          
          <div>
            <CoinsPage />
          </div>

      </div>
  );
};

export default App;

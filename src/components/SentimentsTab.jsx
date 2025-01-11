import { useState, useEffect } from "react";
import "./SentimentsTab.css";
import axios from "axios";

const SentimentsTab = () => {
  const [keyEvents, setKeyEvents] = useState([]);
  const [analystEstimates, setAnalystEstimates] = useState({ buy: 0, hold: 0, sell: 0 });

  useEffect(() => {
    
    axios
      .get("https://api.coingecko.com/api/v3/global") 
      .then((response) => {
        const mockEvents = [
          { title: "Bitcoin Reaches $40K", description: "BTC surpassed $40,000 for the first time." },
          { title: "Ethereum Merge Completed", description: "Ethereum successfully transitioned to PoS." },
        ];
        setKeyEvents(mockEvents); 
      })
      .catch((error) => console.error("Error fetching key events:", error));

    
    axios
      .get("https://api.coingecko.com/api/v3/simple/price", {
        params: {
          ids: "bitcoin",
          vs_currencies: "usd",
          include_market_cap: "true",
          include_24hr_vol: "true",
        },
      })
      .then((response) => {
        const mockEstimates = { buy: 50, hold: 30, sell: 20 }; 
        setAnalystEstimates(mockEstimates);
      })
      .catch((error) => console.error("Error fetching analyst estimates:", error));
  }, []);

  return (
    <div className="sentiments-tab">
      <h2>Sentiment</h2>
      <h3>Key Events</h3>
      <div className="key-events">
        {keyEvents.length > 0 ? (
          keyEvents.map((event, index) => (
            <div className="key-event-card" key={index}>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
          ))
        ) : (
          <p>Loading key events...</p>
        )}
      </div>

     
      <h3>Analyst Estimates</h3>
      <div className="analyst-estimates">
        <div className="circular-buy">{analystEstimates.buy}%</div>
        <div className="bar-chart-container">
          <div className="bar-row">
            <span>Buy</span>
            <div className="bar-background">
              <div
                className="bar-fill-buy"
                style={{ width: `${analystEstimates.buy}%` }}
              ></div>
            </div>
            <span>{analystEstimates.buy}%</span>
          </div>
          <div className="bar-row">
            <span>Hold</span>
            <div className="bar-background">
              <div
                className="bar-fill-hold"
                style={{ width: `${analystEstimates.hold}%` }}
              ></div>
            </div>
            <span>{analystEstimates.hold}%</span>
          </div>
          <div className="bar-row">
            <span>Sell</span>
            <div className="bar-background">
              <div
                className="bar-fill-sell"
                style={{ width: `${analystEstimates.sell}%` }}
              ></div>
            </div>
            <span>{analystEstimates.sell}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentsTab;

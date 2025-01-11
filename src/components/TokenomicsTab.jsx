import { useEffect, useState } from "react";
import "./TokenomicsTab.css";

const TokenomicsTab = () => {
  const [tokenomicsData, setTokenomicsData] = useState(null);

  // useEffect(() => {
  //   // Replace with your API endpoint
  //   fetch("https://api.example.com/tokenomics")
  //     .then((response) => response.json())
  //     .then((data) => setTokenomicsData(data))
  //     .catch((error) => console.error("Error fetching tokenomics data:", error));
  // }, []);

  useEffect(() => {
    
    const mockData = {
      crowdsale: 80,
      foundation: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut Vulputate ipsum aliquet odio nisi eu ac risus ",
    };

    
    setTimeout(() => {
      setTokenomicsData(mockData);
    }, 1000);
  }, []);

  if (!tokenomicsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tokenomics-tab">
      <h2>Tokenomics</h2>
      <div className="distribution-chart">
        <div>
          <svg width="100" height="100" viewBox="0 0 36 36" className="chart">
            <circle
              className="circle-background"
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
            />
            <circle
              className="circle crowdsale"
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              strokeDasharray={`${tokenomicsData.crowdsale} ${100 - tokenomicsData.crowdsale}`}
              strokeDashoffset="25"
            />
            <circle
              className="circle foundation"
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              strokeDasharray={`${tokenomicsData.foundation} ${100 - tokenomicsData.foundation}`}
              strokeDashoffset={`-${tokenomicsData.crowdsale - 25}`}
            />
          </svg>
        </div>
        <div className="labels">
          <div>
            <span className="crowdsale-label"></span> Crowdsale Investors: {tokenomicsData.crowdsale}%
          </div>
          <div>
            <span className="foundation-label"></span> Foundation: {tokenomicsData.foundation}%
          </div>
        </div>
      </div>
      <p>{tokenomicsData.description}</p>
    </div>
  );
};

export default TokenomicsTab;
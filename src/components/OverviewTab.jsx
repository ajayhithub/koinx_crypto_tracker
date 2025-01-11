
import Performance from "./Performance";
import Fundamentals from "./Fundamentals";

const OverviewTab = () => {
    const performanceData = {
        todaysLow: "46,930.22",
        todaysHigh: "49,343.83",
        yearLow: "16,930.22",
        yearHigh: "49,743.83",
        current: 50, // Percentage
    };
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
    
    return (
        <div>
            <Performance performance={performanceData} />
            <Fundamentals data={mockData} />
        </div>
    );
};

export default OverviewTab;

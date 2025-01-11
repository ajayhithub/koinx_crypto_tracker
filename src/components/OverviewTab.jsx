
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

    // const fundamentalsData = [
    //     { label: "Bitcoin Price", value: "$16,815.46" },
    //     { label: "Market Cap", value: "$323,507,290,047" },
    //     { label: "Market Cap Dominance", value: "38.343%" },
    //     { label: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
    //     { label: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
    //     { label: "Trading Volume", value: "$23,249,202,782" },
    //     { label: "Market Cap Rank", value: "#1" },
    //     { label: "All-Time High", value: "$69,044.77 -75.6%" },
    //     { label: "All-Time Low", value: "$67.81 +24729.1%" },
    // ];

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

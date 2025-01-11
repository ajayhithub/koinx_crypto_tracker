import "./Fundamentals.css";

const Fundamentals = ({ data }) => {
    const {
        price,
        marketCap,
        tradingVolume,
        marketCapRank,
        allTimeHigh,
        allTimeLow,
        dominance,
        volumeToMarketCap,
        high24h,
        low24h,
        high7d,
        low7d,
        high52w,
        low52w,
    } = data;

    // Convert price strings to numbers for calculation
    // const parsePrice = (price) => parseFloat(price.replace(/[$,]/g, ""));

    // const low24 = parsePrice(low24h);
    // const high24 = parsePrice(high24h);
    // const low52 = parsePrice(low52w);
    // const high52 = parsePrice(high52w);
    // const currentPrice = parsePrice(price);

    // // Calculate percentages for the performance bars
    // const todayPercentage = ((currentPrice - low24) / (high24 - low24)) * 100;
    // const yearPercentage = ((currentPrice - low52) / (high52 - low52)) * 100;

    return (
        <div className="fundamentals-container">   
            <h2>Fundamentals</h2>
            <div className="fundamentals-grid">
                <div>
                    <span>Bitcoin Price</span>
                    <span>{price}</span>
                </div>
                <div>
                    <span>24h Low / 24h High</span>
                    <span>
                        {low24h} / {high24h}
                    </span>
                </div>
                <div>
                    <span>7d Low / 7d High</span>
                    <span>
                        {low7d} / {high7d}
                    </span>
                </div>
                <div>
                    <span>Trading Volume</span>
                    <span>{tradingVolume}</span>
                </div>
                <div>
                    <span>Market Cap</span>
                    <span>{marketCap}</span>
                </div>
                <div>
                    <span>Market Cap Rank</span>
                    <span>#{marketCapRank}</span>
                </div>
                <div>
                    <span>Market Cap Dominance</span>
                    <span>{dominance}%</span>
                </div>
                <div>
                    <span>Volume / Market Cap</span>
                    <span>{volumeToMarketCap}</span>
                </div>
                <div>
                    <span>All-Time High</span>
                    <span>
                        {allTimeHigh.price} ({allTimeHigh.change} on{" "}
                        {allTimeHigh.date})
                    </span>
                </div>
                <div>
                    <span>All-Time Low</span>
                    <span>
                        {allTimeLow.price} ({allTimeLow.change} on{" "}
                        {allTimeLow.date})
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Fundamentals;

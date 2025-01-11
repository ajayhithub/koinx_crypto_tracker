import './TrendingCoins.css';

const TrendingCoins = ({ coins }) => {
    return (
        <div className="trending-coins">
            <h3>Trending Coins (24h)</h3>
            <ul>
                {coins.slice(0, 8).map((coin) => ( // Limit to the first 7 coins
                    <li key={coin.id} className="coin-item">
                        <img src={coin.image} alt={`${coin.name} logo`} className="coin-logo" />
                        <div className="coin-details">
                            <span className="coin-name">
                                {coin.name} ({coin.symbol.toUpperCase()})
                            </span>
                            <span className={`coin-change ${coin.change > 0 ? 'positive' : 'negative'}`}>
                                {coin.change.toFixed(2)}%
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrendingCoins;

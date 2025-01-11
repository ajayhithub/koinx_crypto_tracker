
import "./Performance.css"; 

const Performance = ({ performance }) => {
    const { todaysLow, todaysHigh, yearLow, yearHigh, current } = performance;

    return (
        <div className="performance-container">
            <h2 className="performance-title">Performance</h2>
            <div className="performance-chart">
                <div className="chart-labels">
                    <span className="low-label">Today's Low</span>
                    <span className="high-label">Today's High</span>
                </div>
                <div className="chart-bar">
                    <span className="bar-progress" style={{ width: `${current}%` }}></span>
                </div>
                <div className="chart-values">
                    <span className="value">{todaysLow}</span>
                    <span className="value">{todaysHigh}</span>
                </div>
            </div>

            <div className="year-performance">
                <div className="year-labels">
                    <span className="low-label">52W Low</span>
                    <span className="high-label">52W High</span>
                </div>
                <div className="year-chart-bar">
                    <span className="bar-progress" style={{ width: `${(current / 100) * 70}%` }}></span>
                </div>
                <div className="year-values">
                    <span className="value">{yearLow}</span>
                    <span className="value">{yearHigh}</span>
                </div>
            </div>
        </div>
    );
};

export default Performance;

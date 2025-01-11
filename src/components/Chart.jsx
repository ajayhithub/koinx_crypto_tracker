import { useEffect } from 'react';

const Chart = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://s3.tradingview.com/tv.js";
        script.async = true;
        script.onload = () => {
            new window.TradingView.widget({
                container_id: "chart",
                symbol: "BTCUSD",
                interval: "D",
                theme: "light",
                style: "1",
                locale: "en",
                autosize: true,
            });
        };
        document.getElementById('chart-container').appendChild(script);
    }, []);

    return <div id="chart-container"><div id="chart" style={{ height: "500px" }}></div></div>;
};

export default Chart;

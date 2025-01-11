import './NewsInsightsTab.css'; // Import the CSS for this component

const NewsInsightsTab = () => {
  return (
    <div className="news-insights-container">
      {/* About Bitcoin Section */}
      <section className="section about-bitcoin">
        <h1>About Bitcoin</h1>
        <h2>What is Bitcoin?</h2>
        <p>
          Bitcoin's price today is <strong>US$16,951.82</strong>, with a 24-hour
          trading volume of <strong>$19.14 B</strong>. BTC is{" "}
          <strong>+0.36%</strong> in the last 24 hours. It is currently{" "}
          <strong>-7.70%</strong> from its 7-day all-time high of{" "}
          <strong>$18,366.66</strong>, and <strong>3.40%</strong> from its
          7-day all-time low of <strong>$16,394.75</strong>. BTC has a
          circulating supply of <strong>19.24 M BTC</strong> and a max supply
          of <strong>21 M BTC</strong>.
        </p>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultrices
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
        </p>
      </section>

      {/* Already Holding Bitcoin Section */}
      <section className="section holding-bitcoin">
        <h2>Already Holding Bitcoin?</h2>
        <div className="holding-bitcoin">
          <div className="profit">
            <h3>Calculate your Profits</h3>
            <button>Check Now →</button>
          </div>
          <div className="tax">
            <h3>Calculate your tax liability</h3>
            <button>Check Now →</button>
          </div>
        </div>
        <div className="additional-info">
          <p>
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NewsInsightsTab;

import "./Tabs.css";

const Tabs = ({ tabs, activeTab, onTabClick }) => {
    const handleTabClick = (index) => {
        onTabClick(index); // Notify the parent component about the active tab
    };

    return (
        <div className="tabs-container">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className={activeTab === index ? "active" : ""}
                    onClick={() => handleTabClick(index)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tabs;


import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>KoinX Crypto Tracker</h1>
            </div>
            <nav className="nav-links">
                <a href="#crypto-taxes">Crypto Taxes</a>
                <a href="#free-tools">Free Tools</a>
                <a href="#resource-center">Resource Center</a>
                <a href="#get-started" className="get-started">Get Started</a>
            </nav>
        </header>
    );
};

export default Header;

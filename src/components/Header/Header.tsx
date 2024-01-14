import { useState } from 'react';
import { Link } from "react-router-dom";
import headerStyles from './Header.module.css';
import { appStrings } from '../../content/strings';

function Header() {
    const [activeLink, setActiveLink] = useState('');

    const handleNavLinkClick = (path: string) => {
        setActiveLink(path);
    };

    return (
        <header className={headerStyles.headerBar}>
            <div className={headerStyles.brandLogo}>
                <img src={appStrings.logo} alt="HealthCareLogo" className={headerStyles.logoImage}/>
                HealthCare
            </div>
            <nav className={headerStyles.navigation}>
                <Link to="/" className={`${headerStyles.navLink} ${activeLink === '/' ? headerStyles.activeLink : ''}`} onClick={() => handleNavLinkClick('/')}>Home</Link>
                <Link to="/find-doctor" className={`${headerStyles.navLink} ${activeLink === '/find-doctor' ? headerStyles.activeLink : ''}`} onClick={() => handleNavLinkClick('/find-doctor')}>Find a doctor</Link>
                <Link to="/apps" className={`${headerStyles.navLink} ${activeLink === '/apps' ? headerStyles.activeLink : ''}`} onClick={() => handleNavLinkClick('/apps')}>Apps</Link>
                <Link to="/testimonials" className={`${headerStyles.navLink} ${activeLink === '/testimonials' ? headerStyles.activeLink : ''}`} onClick={() => handleNavLinkClick('/testimonials')}>Testimonials</Link>
                <Link to="/about" className={`${headerStyles.navLink} ${activeLink === '/about' ? headerStyles.activeLink : ''}`} onClick={() => handleNavLinkClick('/about')}>About us</Link>
            </nav>
        </header>
    );
}

export default Header;

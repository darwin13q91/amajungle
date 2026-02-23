import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { getNavigationItems } from '../config/routes';
import NavigationList from './NavigationList';
import ScrollProgress from './ScrollProgress';

/**
 * Header Component
 * 
 * Main navigation header with fixed positioning and scroll effects.
 * Features:
 * - Responsive logo (hides text on mobile)
 * - Navigation menu with mobile hamburger menu
 * - Theme toggle button
 * - CTA button with hover effects
 * - Fixed positioning with scroll effects
 * - Page navigation support with React Router
 * - Scroll progress indicator
 * 
 * @returns JSX.Element The header component
 */

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Get navigation items from centralized config
  const navigationItems = getNavigationItems();

  // Get current page from location
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (page: string, sectionId?: string) => {
    closeMobileMenu();
    
    // Navigate to the page
    const path = page === 'home' ? '/' : `/${page}`;
    navigate(path);
    
    // If we're navigating to a section on the home page, scroll to it
    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  
  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Mobile menu backdrop */}
      <div 
        className={`mobile-nav-backdrop ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
      
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <button 
          className="logo-area" 
          onClick={() => handleNavigation('home')}
        >
          <span className="logo-custom">
            <span className="logo-initials">Ama</span>
          </span>
          <span className="logo-text">jungle</span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <NavigationList 
            items={navigationItems}
            currentPage={currentPage}
            onNavigate={handleNavigation}
          />
        </nav>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <NavigationList 
            items={navigationItems}
            currentPage={currentPage}
            onNavigate={handleNavigation}
          />
        </nav>

        <div className="header-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          >
            <span className="theme-icon">
              {isDark ? '☀️' : '🌙'}
            </span>
          </button>
          
          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <button 
            className="cta-btn header-cta" 
            onClick={() => handleNavigation('contact')}
          >
            Free Consultation
          </button>
        </div>
      </div>
    </header>    </>  );
};

export default Header;
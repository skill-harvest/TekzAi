import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiChevronDown } from 'react-icons/fi';
import logo from '../assets/TEKZAI-LOGO-WW-1.2.png';
import { products } from '../data/siteContent';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const previousNavigationRef = useRef(location.key);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);
  const productsRef = useRef(null);
  const productsToggleRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 900px)').matches);

  const closePanels = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const media = window.matchMedia('(max-width: 900px)');
    const onResize = (event) => {
      setIsMobile(event.matches);
      closePanels();
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    media.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      media.removeEventListener('change', onResize);
    };
  }, []);

  useEffect(() => {
    closePanels();
    const navigationChanged = previousNavigationRef.current !== location.key;
    previousNavigationRef.current = location.key;
    if (!location.hash) {
      if (navigationChanged) window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start',
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);

  useEffect(() => {
    if (!isMenuOpen || !isMobile) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isMenuOpen, isMobile]);

  useEffect(() => {
    if (!isMenuOpen && !isProductsOpen) return;

    const onPointerDown = (event) => {
      if (!panelRef.current?.contains(event.target)) {
        closePanels();
      } else if (!productsRef.current?.contains(event.target)) {
        setIsProductsOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        if (isProductsOpen) {
          setIsProductsOpen(false);
          productsToggleRef.current?.focus();
        } else {
          setIsMenuOpen(false);
          toggleRef.current?.focus();
        }
      }

      if (event.key === 'Tab' && isMobile && isMenuOpen) {
        const focusable = [...panelRef.current.querySelectorAll('a, button')]
          .filter((element) => element.getClientRects().length && !element.closest('[inert]'));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen, isProductsOpen, isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
    setIsProductsOpen(false);
  };

  return (
    <header className={`tek-nav${scrolled ? ' tek-nav--scrolled' : ''}${isMenuOpen ? ' tek-nav--open' : ''}`}>
      <div className="tek-nav__backdrop" aria-hidden="true" onClick={closePanels} />
      <nav className="tek-nav__panel" aria-label="Main navigation" ref={panelRef}>
        <Link className="tek-nav__brand" to="/" aria-label="TekzAi home" onClick={closePanels}>
          <img src={logo} alt="TekzAi Solutions" width="588" height="167" />
        </Link>
        <button
          className="tek-nav__toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isMenuOpen}
          aria-controls="tek-navigation"
          onClick={toggleMenu}
          ref={toggleRef}
        >
          <span />
          <span />
        </button>
        <div className="tek-nav__body" id="tek-navigation" inert={isMobile && !isMenuOpen ? '' : undefined}>
          <div className="tek-nav__body-inner">
            <ul className="tek-nav__links">
              <li className="tek-nav__mobile-home">
                <NavLink className="tek-nav__link" to="/" onClick={closePanels}>Home</NavLink>
              </li>
              <li className="tek-nav__products" ref={productsRef}>
                <button
                  className={`tek-nav__link tek-nav__products-toggle${location.pathname === '/products' || location.pathname.startsWith('/products/') ? ' active' : ''}`}
                  type="button"
                  aria-expanded={isProductsOpen}
                  aria-controls="tek-products"
                  onClick={() => setIsProductsOpen((open) => !open)}
                  ref={productsToggleRef}
                >
                  Products <FiChevronDown className={isProductsOpen ? 'is-rotated' : ''} aria-hidden="true" />
                </button>
                <div className={`tek-nav__dropdown${isProductsOpen ? ' tek-nav__dropdown--open' : ''}`} id="tek-products" inert={!isProductsOpen ? '' : undefined}>
                  <div className="tek-nav__dropdown-inner">
                    <p className="tek-nav__eyebrow">BUILT FOR YOUR EVERYDAY</p>
                    {products.map(({ id, title, headline, tone, icon: Icon }) => (
                      <Link className="tek-nav__product" key={id} to={`/products/${id}`} aria-current={location.pathname.replace(/\/$/, '') === `/products/${id}` ? 'page' : undefined} onClick={closePanels}>
                        <span className={`tek-nav__product-icon tone-${tone}`}><Icon aria-hidden="true" /></span>
                        <span className="tek-nav__product-copy">
                          <span className="tek-nav__product-name">{title}</span>
                          <span className="tek-nav__product-detail">{headline}</span>
                        </span>
                        <FiArrowUpRight aria-hidden="true" />
                      </Link>
                    ))}
                    <Link className="tek-nav__all-products" to="/products" onClick={closePanels}>
                      Explore all products <FiArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </li>
              <li><NavLink className="tek-nav__link" to="/services" onClick={closePanels}>Services</NavLink></li>
              <li><NavLink className="tek-nav__link" to="/about" onClick={closePanels}>About us</NavLink></li>
            </ul>
            <div className="tek-nav__actions">
              <NavLink className="tek-nav__link tek-nav__contact" to="/contact" onClick={closePanels}>Contact</NavLink>
              <Link className="button button--dark tek-nav__cta" to="/contact" onClick={closePanels}>
                Let’s talk <span className="tek-nav__cta-arrow"><FiArrowUpRight aria-hidden="true" /></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

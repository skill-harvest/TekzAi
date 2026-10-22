import { Link } from 'react-router-dom';
import { FiArrowUp, FiArrowUpRight, FiMail, FiMapPin, FiMessageCircle, FiPhone } from 'react-icons/fi';
import { contact } from '../data/siteContent';
import logo from '../assets/TEKZAI-LOGO-WW-1.2.png';
import './Footer.css';

function Footer() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__main"><div className="site-footer__brand"><Link to="/" aria-label="TekzAi home"><img src={logo} alt="TekzAi Solutions" width="588" height="167" loading="lazy" /></Link><p>Thoughtful technology.<br />Real-world possibilities.</p><span>YOUR NEXT CHAPTER, BUILT TOGETHER.</span></div><nav className="site-footer__nav" aria-label="Footer navigation"><p className="eyebrow">TAKE A LOOK AROUND</p><Link to="/about">About us <FiArrowUpRight aria-hidden="true" /></Link><Link to="/services">Our services <FiArrowUpRight aria-hidden="true" /></Link><Link to="/products">Our products <FiArrowUpRight aria-hidden="true" /></Link><Link to="/contact">Let’s talk <FiArrowUpRight aria-hidden="true" /></Link></nav><div className="site-footer__contact"><p className="eyebrow">GOOD THINGS START WITH HELLO</p><a href={`mailto:${contact.email}`}><FiMail aria-hidden="true" />{contact.email}</a><a href={contact.phoneHref}><FiPhone aria-hidden="true" />{contact.phone}</a><a href={contact.maps} target="_blank" rel="noopener noreferrer"><FiMapPin aria-hidden="true" />{contact.address}</a><span className="site-footer__hours">{contact.hours}</span></div></div>
        <div className="site-footer__bottom"><span>© {new Date().getFullYear()} TekzAi. All rights reserved.</span><span>Thoughtfully made by TekzAi.</span><button type="button" onClick={backToTop}>Back to top <FiArrowUp aria-hidden="true" /></button></div>
      </footer>
      <nav className="mobile-dock" aria-label="Quick contact"><a href={contact.phoneHref}><FiPhone aria-hidden="true" /><span>Call us</span></a><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><FiMessageCircle aria-hidden="true" /><span>WhatsApp</span></a><button type="button" onClick={backToTop}><FiArrowUp aria-hidden="true" /><span>Back to top</span></button></nav>
    </>
  );
}

export default Footer;

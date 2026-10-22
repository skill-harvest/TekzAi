import { Link } from 'react-router-dom';
import {
  FiArrowRight, FiArrowUpRight, FiCpu, FiMessageCircle,
} from 'react-icons/fi';
import { products } from '../data/siteContent';
import HeroShowcase from './HeroShowcase';
import './HomeHero.css';

const productSuite = products.map(({ id, code, title, icon }) => ({ id, label: code.slice(4), name: title, icon }));

function HomeHero() {
  return (
    <section className="tek-hero" aria-labelledby="tek-hero-title">
      <div className="tek-hero__aurora" aria-hidden="true" />

      <div className="tek-hero__intro">
        <div className="tek-hero__mark" aria-hidden="true"><FiCpu /></div>
        <p className="tek-hero__eyebrow tek-hero__reveal">
          <FiArrowRight aria-hidden="true" />
          BIG IDEAS. REAL-WORLD IMPACT.
          <FiArrowRight aria-hidden="true" />
        </p>
        <h1 className="tek-hero__title tek-hero__reveal" id="tek-hero-title">
          <span>Technology that</span>
          <span>moves you forward.</span>
        </h1>
        <p className="tek-hero__description tek-hero__reveal">
          We build thoughtful software, intelligent AI, and cloud solutions
          around your business — turning complex challenges into your next
          competitive advantage.
        </p>
        <p className="tek-hero__specialty tek-hero__reveal">YOUR VISION. OUR EXPERTISE.</p>
        <div className="tek-hero__actions tek-hero__reveal">
          <Link className="tek-hero__consultation" to="/contact">
            <span className="tek-hero__chat-icon" aria-hidden="true"><FiMessageCircle /></span>
            <span className="tek-hero__consultation-copy">
              <span>Book a free consultation</span>
              <span>A friendly chat. A clear next step.</span>
            </span>
            <FiArrowUpRight className="tek-hero__consultation-arrow" aria-hidden="true" />
          </Link>
          <Link className="tek-hero__explore" to="/services">
            Explore our solutions <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <p className="tek-hero__note tek-hero__reveal">Great things start with a simple conversation.</p>
      </div>

      <ul className="tek-hero__suite tek-hero__reveal" aria-label="Explore the TekzAi product suite">
        {productSuite.map(({ id, label, name, icon: Icon }) => (
          <li key={id}>
            <Link to={`/products/${id}`} aria-label={`TKZ-${label}: ${name}`}>
              <Icon aria-hidden="true" />
              <span>tkz<span className="tek-hero__suite-dot">.</span><span>{label.toLowerCase()}</span></span>
            </Link>
          </li>
        ))}
      </ul>

      <HeroShowcase />
    </section>
  );
}

export default HomeHero;

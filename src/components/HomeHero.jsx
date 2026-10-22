import { Link } from 'react-router-dom';
import {
  FiArrowRight, FiArrowUpRight, FiBookOpen, FiBox,
  FiCheck, FiCloud, FiCode, FiCpu, FiMessageCircle,
} from 'react-icons/fi';
import { products } from '../data/siteContent';
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

      <div className="tek-hero__showcase tek-hero__reveal" aria-label="What we build">
        <Link className="tek-hero__frame tek-hero__frame--left" to="/products/tkz-amt" aria-label="Explore TKZ asset management">
          <div className="tek-hero__asset-preview">
            <div className="tek-hero__preview-bar"><span /><span /><span /><span>tkz.amt</span></div>
            <div className="tek-hero__asset-heading"><FiBox aria-hidden="true" /><span>Everything,<br />in its place.</span></div>
            <div className="tek-hero__asset-grid" aria-hidden="true">
              <span><FiBox /><i /></span><span><FiCpu /><i /></span>
              <span><FiCloud /><i /></span><span><FiCode /><i /></span>
            </div>
            <span className="tek-hero__preview-label">ASSET MANAGEMENT <FiArrowUpRight aria-hidden="true" /></span>
          </div>
        </Link>

        <Link className="tek-hero__frame tek-hero__frame--main" to="/services" aria-label="Explore custom software, AI, and cloud solutions">
          <div className="tek-hero__technology-preview">
            <div className="tek-hero__preview-brand"><FiCpu aria-hidden="true" /> TEKZAI <span>IDEAS INTO IMPACT</span></div>
            <div className="tek-hero__preview-copy">
              <span>MADE FOR WHAT’S NEXT.</span>
              <p>Less complexity.<br /><span>More possibility.</span></p>
            </div>
            <div className="tek-hero__sculpture" aria-hidden="true">
              <div className="tek-hero__orbit tek-hero__orbit--one" />
              <div className="tek-hero__orbit tek-hero__orbit--two" />
              <div className="tek-hero__core"><FiCpu /></div>
              <span className="tek-hero__satellite tek-hero__satellite--one"><FiCode /></span>
              <span className="tek-hero__satellite tek-hero__satellite--two"><FiCloud /></span>
              <span className="tek-hero__satellite tek-hero__satellite--three"><FiBox /></span>
            </div>
            <div className="tek-hero__preview-footer"><span>SOFTWARE · AI · CLOUD</span><FiArrowUpRight aria-hidden="true" /></div>
          </div>
        </Link>

        <Link className="tek-hero__frame tek-hero__frame--right" to="/products/tkz-lms" aria-label="Explore TKZ learning management">
          <div className="tek-hero__learning-preview">
            <div className="tek-hero__preview-bar"><span /><span /><span /><span>tkz.lms</span></div>
            <div className="tek-hero__learning-icon" aria-hidden="true"><FiBookOpen /></div>
            <p>A little learning.<br />A world of possibility.</p>
            <div className="tek-hero__lesson" aria-hidden="true"><span><FiCheck /></span><i /><FiArrowRight /></div>
            <div className="tek-hero__lesson" aria-hidden="true"><span><FiBookOpen /></span><i /><FiArrowRight /></div>
            <span className="tek-hero__preview-label">LEARNING MANAGEMENT <FiArrowUpRight aria-hidden="true" /></span>
          </div>
        </Link>
      </div>
      <p className="tek-hero__showcase-note">Thoughtfully built. Ready for your next chapter.</p>
    </section>
  );
}

export default HomeHero;

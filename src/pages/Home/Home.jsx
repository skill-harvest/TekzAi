import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiCheck, FiCloud, FiCode, FiCpu } from 'react-icons/fi';
import HomeHero from '../../components/HomeHero';
import { ContactCta, WorkingTogether } from '../../components/SiteUI';
import { products, services, testimonials } from '../../data/siteContent';
import './Home.css';

function Home() {
  return (
    <>
      <HomeHero />
      <section className="site-section home-story" aria-labelledby="home-story-heading">
        <div className="home-story__copy reveal">
          <p className="eyebrow">A LITTLE ABOUT US</p>
          <h2 id="home-story-heading">A technology partner.<br />An extension of<br />your team.</h2>
          <p>Great technology starts with understanding people. At TekzAi, we get to know your business, your challenges, and where you want to go. Then we build the right way forward.</p>
          <p>From a custom application to a connected enterprise, we bring thoughtful ideas, technical expertise, and a partnership you can count on.</p>
          <Link className="text-link" to="/about">Get to know TekzAi <FiArrowUpRight aria-hidden="true" /></Link>
        </div>
        <div className="idea-visual reveal" aria-hidden="true">
          <span className="idea-visual__caption">GOOD IDEAS DESERVE GREAT TECHNOLOGY.</span>
          <span className="idea-visual__label">Your ambition</span>
          <span className="idea-visual__line" />
          <div className="idea-visual__core"><FiCpu /><span>tekzai<span>.</span></span></div>
          <div className="idea-visual__nodes"><span><FiCode /> Software</span><span><FiCpu /> AI</span><span><FiCloud /> Cloud</span></div>
          <span className="idea-visual__line" />
          <span className="idea-visual__result"><FiCheck /> Real-world possibilities</span>
          <span className="idea-visual__footnote">THOUGHTFULLY CONNECTED. BUILT AROUND YOU.</span>
        </div>
      </section>

      <section className="section-surface section-surface--lavender" aria-labelledby="home-services-heading">
        <div className="site-section">
          <div className="section-heading reveal"><div><p className="eyebrow">WHAT WE BRING TO THE TABLE</p><h2 id="home-services-heading">Your challenges.<br />Our kind of thing.</h2></div><p>Practical expertise. Considered solutions.<br />Technology that works for your business.</p></div>
          <div className="home-services-grid">
            {services.slice(0, 4).map(({ id, icon: Icon, title, short }, index) => (
              <Link className="home-service-card reveal" to={`/services#${id}`} key={id}>
                <div className="home-service-card__top"><span className="icon-tile"><Icon aria-hidden="true" /></span><span className="small-number">0{index + 1}</span></div>
                <h3>{title}</h3><p>{short}</p><span className="card-link">Explore service <FiArrowUpRight aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
          <div className="section-bottom reveal"><span>From data and security to everything in between.</span><Link className="text-link" to="/services">View all services <FiArrowRight aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="site-section" aria-labelledby="home-products-heading">
        <div className="section-heading reveal"><div><p className="eyebrow">MEET YOUR EVERYDAY ADVANTAGE</p><h2 id="home-products-heading">Less busywork.<br />More possibility.</h2></div><p>A connected suite of tools for the things<br />your business does every day.</p></div>
        <ul className="product-list">
          {products.map(({ id, code, icon: Icon, title, headline, tone }) => <li className="reveal" key={id}><Link className="product-list__row" to={`/products/${id}`}><span className={`icon-tile tone-${tone}`}><Icon aria-hidden="true" /></span><span className="product-list__name"><span className="eyebrow">{code}</span><h3>{title}</h3></span><span className="product-list__description">{headline}</span><span className="circle-arrow"><FiArrowUpRight aria-hidden="true" /></span></Link></li>)}
        </ul>
      </section>

      <WorkingTogether />

      <section className="section-surface section-surface--mint" aria-labelledby="home-testimonials-heading">
        <div className="site-section">
          <div className="section-heading reveal"><div><p className="eyebrow">GOOD WORDS. GREAT PARTNERSHIPS.</p><h2 id="home-testimonials-heading">The people we build for<br />say it best.</h2></div><Link className="text-link" to="/about#testimonials">More client stories <FiArrowUpRight aria-hidden="true" /></Link></div>
          <div className="quote-grid">
            {[testimonials[2], testimonials[0]].map(({ name, initials, quote }) => <figure className="quote-card reveal" key={name}><span className="quote-mark" aria-hidden="true">“</span><blockquote>{quote}</blockquote><figcaption><span className="avatar-initials">{initials}</span><span>{name}<small>A TekzAi client</small></span></figcaption></figure>)}
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}

export default Home;

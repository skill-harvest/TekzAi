import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';
import { ContactCta, PageIntro, WorkingTogether } from '../../components/SiteUI';
import { services } from '../../data/siteContent';
import './Services.css';

function Services() {
  return (
    <>
      <PageIntro />
      <section className="site-section" aria-labelledby="services-heading">
        <div className="section-heading reveal"><div><p className="eyebrow">CONSIDER IT COVERED</p><h2 id="services-heading">The right expertise.<br />Right when you need it.</h2></div><p>A complete suite of services, thoughtfully<br />connected around your business.</p></div>
        <div className="service-catalog">
          {services.map(({ id, icon: Icon, title, description, features }, index) => (
            <article className="service-detail reveal anchor-section" id={id} key={id}>
              <div className="service-detail__top"><span className="icon-tile"><Icon aria-hidden="true" /></span><span className="small-number">SERVICE / 0{index + 1}</span></div>
              <h3>{title}</h3><p>{description}</p>
              <ul className="feature-list">{features.map((feature) => <li key={feature}><FiCheck aria-hidden="true" />{feature}</li>)}</ul>
              <Link className="text-link" to="/contact">Let’s explore the possibilities <FiArrowUpRight aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </section>
      <WorkingTogether />
      <section className="service-note site-section reveal"><p className="eyebrow">BUILT FOR THE BIG PICTURE</p><h2>A single solution.<br />Or a whole new way forward.</h2><p>Whether you need a focused application or a complete digital transformation, we’ll help you find the right starting point.</p><Link className="text-link" to="/products">Meet our ready-to-use products <FiArrowUpRight aria-hidden="true" /></Link></section>
      <ContactCta />
    </>
  );
}

export default Services;

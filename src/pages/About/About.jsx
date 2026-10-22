import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiCompass, FiHeart, FiShield, FiTarget, FiZap } from 'react-icons/fi';
import { ContactCta, PageIntro } from '../../components/SiteUI';
import { testimonials } from '../../data/siteContent';
import collaboration from '../../assets/about_us_banner_image.jpg';
import './About.css';

const values = [
  { icon: FiZap, title: 'Innovation, with purpose.', description: 'We embrace technology to solve real problems, create useful possibilities, and help your business grow.' },
  { icon: FiShield, title: 'Integrity, always.', description: 'Trust is built in the everyday. We work with honesty, transparency, and respect for the people we partner with.' },
  { icon: FiHeart, title: 'Your success, shared.', description: 'Your goals guide our decisions. We care about the result, the experience, and the relationship that comes with it.' },
];
const differences = [
  ['Expertise & innovation', 'Fresh thinking, backed by the technical knowledge to make it work.'],
  ['Tailored to you', 'Solutions shaped around your needs, your industry, and your ambitions.'],
  ['People at the center', 'Your success is our priority, at every step of the partnership.'],
  ['Support from start to finish', 'A team that stays close, from the first conversation to life after launch.'],
  ['Security & reliability', 'Dependable, scalable solutions designed with care for what matters.'],
];

function About() {
  return (
    <>
      <PageIntro />
      <section className="site-section about-story" aria-labelledby="about-story-heading">
        <div className="reveal"><p className="eyebrow">A LITTLE MORE HUMAN</p><h2 id="about-story-heading">Thoughtful by design.<br />People at heart.</h2><p>Technology can do remarkable things. We believe its real value is in what it helps people achieve.</p><p>TekzAi is a cloud application development and technology solutions company. We bring together custom software, AI, cloud expertise, enterprise systems, and data analytics to help businesses work better and move forward.</p><p>Every business has a different story. We take time to understand yours, then build reliable, secure solutions that fit your goals and grow alongside you.</p><Link className="text-link" to="/services">See what we can build together <FiArrowUpRight aria-hidden="true" /></Link></div>
        <figure className="about-story__image reveal"><img src={collaboration} alt="People collaborating around a table with notes and business plans" width="6000" height="4000" loading="lazy" /><figcaption><span>BETTER, TOGETHER.</span><span>Ideas become possibilities when people connect.</span></figcaption></figure>
      </section>

      <section className="mission-panel reveal" aria-labelledby="mission-heading"><div className="mission-panel__symbol" aria-hidden="true"><FiCompass /></div><div><p className="eyebrow">OUR REASON FOR BEING</p><h2 id="mission-heading">Help good businesses<br />do great things.</h2><p>Our mission is to empower businesses with innovative digital solutions that improve productivity, support sustainable growth, and open the door to what comes next. Reliable, secure, and tailored to the people who use them.</p></div><FiTarget className="mission-panel__target" aria-hidden="true" /></section>

      <section className="site-section" aria-labelledby="values-heading"><div className="section-heading reveal"><div><p className="eyebrow">WHAT WE STAND FOR</p><h2 id="values-heading">Good work starts<br />with good values.</h2></div><p>The principles behind our decisions,<br />our work, and every partnership.</p></div><div className="values-grid">{values.map(({ icon: Icon, title, description }) => <article className="value-card reveal" key={title}><span className="icon-tile"><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article>)}</div></section>

      <section className="section-surface section-surface--lavender" aria-labelledby="difference-heading"><div className="site-section difference-layout"><div className="difference-layout__heading reveal"><p className="eyebrow">THE TEKZAI WAY</p><h2 id="difference-heading">More than a provider.<br />A partner in<br />your progress.</h2><p>We bring curiosity to every challenge and commitment to every relationship.</p></div><ol className="difference-list">{differences.map(([title, description], index) => <li className="reveal" key={title}><span className="small-number">0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol></div></section>

      <section className="site-section anchor-section" id="testimonials" aria-labelledby="testimonials-heading"><div className="section-heading reveal"><div><p className="eyebrow">IN OUR CLIENTS’ WORDS</p><h2 id="testimonials-heading">The best part?<br />Who we build it with.</h2></div><p>Real experiences from the people<br />and businesses we work alongside.</p></div><div className="quote-grid">{testimonials.map(({ name, initials, quote }) => <figure className="quote-card reveal" key={name}><span className="quote-mark" aria-hidden="true">“</span><blockquote>{quote}</blockquote><figcaption><span className="avatar-initials">{initials}</span><span>{name}<small>A TekzAi client</small></span></figcaption></figure>)}</div></section>
      <ContactCta />
    </>
  );
}

export default About;

import { Link, useLocation, useParams } from 'react-router-dom';
import {
  FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCheck,
  FiCheckCircle, FiMessageCircle, FiPlus, FiUsers,
} from 'react-icons/fi';
import { products } from '../../data/siteContent';
import { productDetails } from '../../data/productDetails';
import NotFound from '../NotFound';
import './ProductDetail.css';

const sections = [
  ['overview', 'Overview'],
  ['features', 'Features'],
  ['workflow', 'How it works'],
  ['use-cases', 'Who it’s for'],
  ['faqs', 'Questions'],
];

function ProductDetail() {
  const { productId } = useParams();
  const { hash } = useLocation();
  const product = products.find(({ id }) => id === productId);
  const detail = product && productDetails[product.id];
  if (!product || !detail) return <NotFound />;

  const Icon = product.icon;
  const path = `/products/${product.id}`;
  const enquiryPath = `/contact?product=${product.id}`;
  const related = products.filter(({ id }) => id !== product.id).slice(0, 2);
  const faqs = [...detail.faqs, {
    question: 'How do we get started?',
    answer: `Start with a conversation about ${product.code}. Tell us about your team, your current workflow, and what you want to improve. We’ll review the fit, discuss your requirements, and talk through scope, pricing, and the next steps with you.`,
  }];

  return (
    <article className="project-detail" key={product.id}>
      <header className="project-hero">
        <div className="project-hero__glow" aria-hidden="true" />
        <div className="project-hero__inner">
          <nav className="breadcrumbs project-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span>
            <Link to="/products">Products</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{product.code}</span>
          </nav>

          <div className="project-hero__layout">
            <div className="project-hero__copy">
              <p className="eyebrow">{product.code} <span aria-hidden="true">/</span> {product.title.toUpperCase()}</p>
              <h1>{product.headline}</h1>
              <p className="project-hero__description">{product.description}</p>
              <div className="project-hero__actions">
                <Link className="button button--dark" to={enquiryPath}>Discuss {product.code} <FiArrowUpRight aria-hidden="true" /></Link>
                <Link className="text-link" to={`${path}#features`}>Explore the features <FiArrowRight aria-hidden="true" /></Link>
              </div>
              <span className="project-hero__note">Thoughtfully built. Ready for your everyday.</span>
            </div>

            <div className={`project-preview tone-${product.tone}`} aria-label={`${product.code} at a glance`}>
              <div className="project-preview__top"><span>THE TEKZAI PRODUCT SUITE</span><span>{product.code}</span></div>
              <span className="project-preview__icon" aria-hidden="true"><Icon /></span>
              <p className="project-preview__name">{product.title}</p>
              <ul>{product.features.slice(0, 3).map((feature) => <li key={feature}><FiCheck aria-hidden="true" />{feature}</li>)}</ul>
              <span className="project-preview__foot">LESS FRICTION. MORE FORWARD.</span>
            </div>
          </div>
        </div>
      </header>

      <nav className="project-sections" aria-label="On this page">
        {sections.map(([id, label]) => <Link key={id} to={`${path}#${id}`} aria-current={hash === `#${id}` || (!hash && id === 'overview') ? 'location' : undefined}>{label}</Link>)}
        <Link className="project-sections__back" to="/products"><FiArrowLeft aria-hidden="true" />All products</Link>
      </nav>

      <section className="site-section project-overview anchor-section" id="overview" aria-labelledby="overview-heading">
        <div className="project-overview__copy reveal">
          <p className="eyebrow">THE BIG PICTURE</p>
          <h2 id="overview-heading">{detail.overviewTitle}</h2>
          {detail.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <aside className="project-facts reveal" aria-label="Product summary">
          <span className={`icon-tile tone-${product.tone}`}><Icon aria-hidden="true" /></span>
          <p className="eyebrow">A LITTLE MORE AT A GLANCE</p>
          <dl>
            <div><dt>THE PRODUCT</dt><dd>{product.code}<span>{product.title}</span></dd></div>
            <div><dt>THE FOCUS</dt><dd>{detail.focus}</dd></div>
            <div><dt>BUILT FOR</dt><dd>{detail.audience}</dd></div>
          </dl>
        </aside>
      </section>

      <section className="project-benefits site-section" aria-labelledby="benefits-heading">
        <h2 className="sr-only" id="benefits-heading">What {product.code} helps you do</h2>
        {detail.benefits.map(({ title, description }, index) => <div className="project-benefit reveal" key={title}><span className="small-number">0{index + 1} / THE EVERYDAY ADVANTAGE</span><h3>{title}</h3><p>{description}</p></div>)}
      </section>

      <section className="section-surface section-surface--lavender anchor-section" id="features" aria-labelledby="features-heading">
        <div className="site-section">
          <div className="section-heading reveal"><div><p className="eyebrow">A CLOSER LOOK</p><h2 id="features-heading">The details that make<br />the difference.</h2></div><p>Explore the capabilities at the heart<br />of {product.code}.</p></div>
          <div className="project-features">
            {product.features.map((feature, index) => <div className="project-feature reveal" key={feature}><div className="project-feature__top"><FiCheckCircle aria-hidden="true" /><span className="small-number">0{index + 1}</span></div><h3>{feature}</h3><p>{detail.featureDetails[index]}</p></div>)}
          </div>
        </div>
      </section>

      <section className="site-section anchor-section" id="workflow" aria-labelledby="workflow-heading">
        <div className="section-heading reveal"><div><p className="eyebrow">FROM THE FIRST STEP FORWARD</p><h2 id="workflow-heading">A clearer way<br />to get things done.</h2></div><p>How {product.code} connects<br />the work that matters.</p></div>
        <ol className="project-workflow">
          {detail.workflow.map(({ title, description }, index) => <li className="process-step reveal" key={title}><span className="process-step__number">0{index + 1}<FiArrowRight aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></li>)}
        </ol>
      </section>

      <section className="section-surface section-surface--mint anchor-section" id="use-cases" aria-labelledby="use-cases-heading">
        <div className="site-section">
          <div className="section-heading reveal"><div><p className="eyebrow">PEOPLE. TEAMS. POSSIBILITIES.</p><h2 id="use-cases-heading">Built around the people<br />who put it to work.</h2></div><p>A few of the ways {product.code}<br />can fit into everyday business.</p></div>
          <div className="project-use-cases">{detail.useCases.map(({ title, description }) => <div className="project-use-case reveal" key={title}><span className="icon-tile tone-mint"><FiUsers aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></div>)}</div>
        </div>
      </section>

      <section className="site-section project-faq-layout anchor-section" id="faqs" aria-labelledby="faqs-heading">
        <div className="project-faq-layout__intro reveal"><p className="eyebrow">A FEW THINGS YOU MIGHT BE WONDERING</p><h2 id="faqs-heading">Good questions.<br />Clearer answers.</h2><p>Something else on your mind?<br />We’re always happy to talk it through.</p><Link className="text-link" to={enquiryPath}>Ask us about {product.code} <FiArrowUpRight aria-hidden="true" /></Link></div>
        <div className="project-faqs reveal">{faqs.map(({ question, answer }) => <details key={question} name={`${product.id}-questions`}><summary>{question}<FiPlus aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="contact-cta project-enquiry reveal" aria-labelledby="product-enquiry-heading">
        <span className="contact-cta__mark" aria-hidden="true"><FiMessageCircle /></span>
        <p className="eyebrow">YOUR BUSINESS. YOUR NEXT CHAPTER.</p>
        <h2 id="product-enquiry-heading">Let’s explore what<br />{product.code} could make possible.</h2>
        <p>Tell us about your team and what you want to improve.<br className="desktop-break" /> We’ll help you find the right next step.</p>
        <Link className="button button--dark" to={enquiryPath}>Discuss {product.code} <FiArrowUpRight aria-hidden="true" /></Link>
        <span className="contact-cta__note">A friendly chat. A clear next step.</span>
      </section>

      <section className="site-section project-related" aria-labelledby="related-heading">
        <div className="section-heading reveal"><div><p className="eyebrow">MORE WAYS TO MOVE FORWARD</p><h2 id="related-heading">Meet the rest<br />of the possibilities.</h2></div><Link className="text-link" to="/products">Explore the product suite <FiArrowUpRight aria-hidden="true" /></Link></div>
        <div className="project-related__grid">{related.map(({ id, icon: RelatedIcon, code, title, headline, tone }) => <Link className="project-related__card reveal" key={id} to={`/products/${id}`}><div><span className={`icon-tile tone-${tone}`}><RelatedIcon aria-hidden="true" /></span><span className="eyebrow">{code}</span></div><h3>{title}</h3><p>{headline}</p><span className="card-link">Discover the product <FiArrowUpRight aria-hidden="true" /></span></Link>)}</div>
      </section>
    </article>
  );
}

export default ProductDetail;

import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiCheck } from 'react-icons/fi';
import { ContactCta, PageIntro } from '../../components/SiteUI';
import { products } from '../../data/siteContent';
import './Products.css';

function Products() {
  return (
    <>
      <PageIntro />
      <div className="product-jump-links" aria-label="Jump to a product">{products.map(({ id, code, icon: Icon }) => <Link key={id} to={`/products#${id}`}><Icon aria-hidden="true" />{code}<FiArrowRight aria-hidden="true" /></Link>)}</div>
      <div className="site-section product-catalog">
        {products.map(({ id, code, icon: Icon, title, headline, description, features, tone }, index) => (
          <section className="catalog-product anchor-section" id={id} key={id} aria-labelledby={`${id}-title`}>
            <div className={`product-visual tone-${tone} reveal`} aria-hidden="true"><span className="product-visual__label">THE TEKZAI PRODUCT SUITE <span>0{index + 1}</span></span><div className="product-visual__window"><span className="product-visual__code">{code.toLowerCase().replace('-', '.')}</span><span className="product-visual__icon"><Icon /></span><span className="product-visual__headline">{headline}</span><div className="product-visual__chips"><span><FiCheck /> Connected</span><span><FiCheck /> Intuitive</span><span><FiCheck /> Made for you</span></div></div><span className="product-visual__foot">LESS FRICTION. MORE FORWARD.</span></div>
            <div className="catalog-product__copy reveal"><p className="eyebrow">{code} / {title.toUpperCase()}</p><h2 id={`${id}-title`}>{headline}</h2><p>{description}</p><ul className="feature-list">{features.map((feature) => <li key={feature}><FiCheck aria-hidden="true" />{feature}</li>)}</ul><div className="catalog-product__actions"><Link className="button button--dark" to={`/products/${id}`}>Discover {code} <FiArrowUpRight aria-hidden="true" /></Link><Link className="text-link" to={`/contact?product=${id}`}>Talk to us <FiArrowRight aria-hidden="true" /></Link></div></div>
          </section>
        ))}
      </div>
      <section className="product-tailored site-section reveal"><span className="eyebrow">A LITTLE DIFFERENT? SO ARE WE.</span><h2>Your business isn’t off the shelf.<br />Your software doesn’t have to be.</h2><p>Need something more specific? We also build custom solutions around the way your business works.</p><Link className="text-link" to="/services#custom-software">Explore custom development <FiArrowUpRight aria-hidden="true" /></Link></section>
      <ContactCta />
    </>
  );
}

export default Products;

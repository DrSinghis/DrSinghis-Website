import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  MessageCircle,
  Package,
  ArrowUpRight,
} from 'lucide-react';

import refitForteImage from '../assets/refit-forte.png';
import acticlearCreamImage from '../assets/products/acticlear-cream.jpeg';
import acticlearSoapImage from '../assets/products/acticlear-soap.jpeg';
import acticlearImage from '../assets/products/acticlear.jpeg';
import actiskanImage from '../assets/products/actiskan.jpeg';
import ayurkamaImage from '../assets/products/ayurkama.jpeg';
import dardonilImage from '../assets/products/dardonil.jpeg';
import dermozinCapImage from '../assets/products/dermozin-cap.jpeg';
import dermozinOilImage from '../assets/products/dermozin-oil.jpeg';
import dynacareCapImage from '../assets/products/dynacare-cap.jpeg';
import dynacareGelImage from '../assets/products/dynacare-gel.JPG';
import dynacareTonicImage from '../assets/products/dynacare-tonic.jpeg';
import enkuffImage from '../assets/products/enkuff.jpeg';
import femolivCapImage from '../assets/products/femoliv-cap.jpeg';
import femolivDsImage from '../assets/products/femoliv-ds.jpeg';
import femozymeImage from '../assets/products/femozyme.jpeg';
import immunoskanPlusImage from '../assets/products/immuno-skan-plus.jpeg';
import immunoskanImage from '../assets/products/immuno-skan.jpeg';
import kristoneImage from '../assets/products/kristone.jpeg';
import kufcheImage from '../assets/products/kufche.jpeg';
import ladooImage from '../assets/products/ladoo.jpeg';
import nefrotezImage from '../assets/products/nefrotez.jpeg';
import rassSanjeevniImage from '../assets/products/rass-sanjeevni.JPG';
import relivitImage from '../assets/products/relivit.jpeg';
import skamazinImage from '../assets/products/skamazin.jpeg';
import stocleanGImage from '../assets/products/stoclean-g.jpeg';
import supercountImage from '../assets/products/supercount.jpeg';
import urifitImage from '../assets/products/urifit.JPG';
import wumacareCapImage from '../assets/products/wumacare-cap.jpeg';
import wumacareTonicImage from '../assets/products/wumacare-tonic.JPG';
import zepileCapImage from '../assets/products/zepile-cap.jpeg';
import zingCapImage from '../assets/products/zing-cap.jpeg';
import zingImage from '../assets/products/zing.JPG';
import zodsafeCapImage from '../assets/products/zodsafe-cap.jpeg';
import zodsafeOilImage from '../assets/products/zodsafe-oil.jpeg';
import zodsafeImage from '../assets/products/zodsafe.JPG';

const WHATSAPP_NUMBER = '918091909991';

const products = [
  { name: 'Acticlear Hair solution', unit: '100 ml', mrp: 270, dosage: 'Apply daily for better results', description: 'Controls dandruff and hair fall', category: 'Hair & Skin Care', image: acticlearImage },
  { name: 'Acticlear Hair wash', unit: '100 ml', mrp: 270, dosage: 'Use as directed', description: 'Cleans scalp and reduces dandruff', category: 'Hair & Skin Care', image: acticlearImage },
  { name: 'Actcilear Soap', unit: '100 gram', mrp: 126, dosage: 'Use daily', description: 'Daily bathing soap', category: 'Hair & Skin Care', image: acticlearSoapImage },
  { name: 'Acticlear Cream', unit: '30 gram', mrp: 306, dosage: 'Use as directed', description: 'Skin care cream', category: 'Hair & Skin Care', image: acticlearCreamImage },
  { name: 'Ayurkama capsule', unit: '30 cap', mrp: 900, dosage: 'As directed by physician', description: 'Ayurvedic capsule', category: 'Tablets & Capsules', image: ayurkamaImage },
  { name: 'Actiskan capsule', unit: '30 cap', mrp: 720, dosage: 'As directed by physician', description: 'Ayurvedic capsule', category: 'Tablets & Capsules', image: actiskanImage },
  { name: 'Dynacare v wash', unit: '100 ml', mrp: 225, dosage: 'Use as directed', description: 'Intimate hygiene', category: 'Other Products', image: dynacareGelImage },
  { name: 'Dynacare Mom', unit: '', mrp: null, dosage: '', description: '', category: 'Other Products' },
  { name: 'Dynacare syrup', unit: '100 ml', mrp: 81, dosage: 'As directed by physician', description: 'Female cordial syrup', category: 'Syrups & Drops', image: dynacareTonicImage },
  { name: 'Dynacare syrup', unit: '200 ml', mrp: 171, dosage: 'As directed by physician', description: 'Female cordial syrup', category: 'Syrups & Drops', image: dynacareTonicImage },
  { name: 'Dynacare capsule', unit: '30 cap', mrp: 270, dosage: 'As directed by physician', description: 'Ayurvedic capsule', category: 'Tablets & Capsules', image: dynacareCapImage },
  { name: 'Dardonill oil', unit: '60 ml', mrp: 171, dosage: 'Apply as directed', description: 'Massage oil', category: 'Oils & Sprays', image: dardonilImage },
  { name: 'Dermozin 7x oil', unit: '100 ml', mrp: 225, dosage: 'Apply as directed', description: 'Skin care oil', category: 'Hair & Skin Care', image: dermozinOilImage },
  { name: 'Dermozin capsule', unit: '30 cap', mrp: 270, dosage: 'As directed by physician', description: 'Ayurvedic capsule', category: 'Tablets & Capsules', image: dermozinCapImage },
  { name: 'Ennkuff', unit: '100 ml', mrp: 108, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: enkuffImage },
  { name: 'Femoliv capsule', unit: '30 cap', mrp: 270, dosage: 'As directed by physician', description: 'Liver care', category: 'Tablets & Capsules', image: femolivCapImage },
  { name: 'Femoliv ds syrup', unit: '200 ml', mrp: 198, dosage: 'As directed by physician', description: 'Liver care syrup', category: 'Syrups & Drops', image: femolivDsImage },
  { name: 'Femoliv ds syrup', unit: '100 ml', mrp: 99, dosage: 'As directed by physician', description: 'Liver care syrup', category: 'Syrups & Drops', image: femolivDsImage },
  { name: 'Femoliv ds tablet', unit: '60 tab', mrp: 270, dosage: 'As directed by physician', description: 'Liver care tablets', category: 'Tablets & Capsules', image: femolivDsImage },
  { name: 'Femoliv syrup', unit: '100 ml', mrp: 90, dosage: 'As directed by physician', description: 'Liver care syrup', category: 'Syrups & Drops', image: femolivDsImage },
  { name: 'Femoliv syrup', unit: '200 ml', mrp: 144, dosage: 'As directed by physician', description: 'Liver care syrup', category: 'Syrups & Drops', image: femolivDsImage },
  { name: 'Femozyme tablet', unit: '60 tab', mrp: 180, dosage: 'As directed by physician', description: 'Enzyme tablets', category: 'Tablets & Capsules', image: femozymeImage },
  { name: 'Femozyme syrup', unit: '100 ml', mrp: 90, dosage: 'As directed by physician', description: 'Enzyme syrup', category: 'Syrups & Drops', image: femozymeImage },
  { name: 'Femozyme syrup', unit: '200 ml', mrp: 171, dosage: 'As directed by physician', description: 'Enzyme syrup', category: 'Syrups & Drops', image: femozymeImage },
  { name: 'Immunoskan syrup', unit: '200 ml', mrp: 180, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: immunoskanImage },
  { name: 'Immunoskan capsule', unit: '10 strip', mrp: 180, dosage: 'As directed by physician', description: 'Ayurvedic capsule', category: 'Tablets & Capsules', image: immunoskanPlusImage },
  { name: 'kristone syrup', unit: '100 ml', mrp: 81, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: kristoneImage },
  { name: 'Kristone syrup', unit: '200 ml', mrp: 171, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: kristoneImage },
  { name: 'Kristone capsule', unit: '30 cap', mrp: 270, dosage: 'As directed by physician', description: 'Ayurvedic capsule', category: 'Tablets & Capsules', image: kristoneImage },
  { name: 'Kufche', unit: '100 ml', mrp: 108, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: kufcheImage },
  { name: 'Ladodrops', unit: '30 ml', mrp: 81, dosage: 'As directed by physician', description: 'Drops', category: 'Syrups & Drops', image: ladooImage },
  { name: 'Nefrotez syrup', unit: '100ml', mrp: 81, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: nefrotezImage },
  { name: 'Nefortez syrup', unit: '200 ml', mrp: 171, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: nefrotezImage },
  { name: 'Rasssanjeevni syrup', unit: '100ml', mrp: 99, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: rassSanjeevniImage },
  { name: 'Rasssanjeevni syrup', unit: '200 ml', mrp: 180, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: rassSanjeevniImage },
  { name: 'Relivit capsule', unit: '10 strip', mrp: 153, dosage: 'As directed by physician', description: 'Multivitamin capsule', category: 'Tablets & Capsules', image: relivitImage },
  { name: 'Relivit syrup', unit: '100 ml', mrp: 81, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: relivitImage },
  { name: 'Relivit syrup', unit: '200 ml', mrp: 171, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: relivitImage },
  { name: 'Stoclean g', unit: '80 grams', mrp: 154, dosage: 'As directed by physician', description: 'Product for constipation', category: 'Other Products', image: stocleanGImage },
  { name: 'Skamazin syrup', unit: '100 ml', mrp: 81, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: skamazinImage },
  { name: 'Skamazin syrup', unit: '200 ml', mrp: 171, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: skamazinImage },
  { name: 'Supercount capsule', unit: '30 cap', mrp: 720, dosage: 'As directed by physician', description: 'Ayurvedic capsule', category: 'Tablets & Capsules', image: supercountImage },
  { name: 'Urifit syrup', unit: '100 ml', mrp: 99, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: urifitImage },
  { name: 'Urifit syrup', unit: '200 ml', mrp: 180, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: urifitImage },
  { name: 'Wumacare capsule', unit: '30 cap', mrp: 990, dosage: 'As directed by physician', description: 'Ayurvedic capsule', category: 'Tablets & Capsules', image: wumacareCapImage },
  { name: 'Wumacare syrup', unit: '200 ml', mrp: 180, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: wumacareTonicImage },
  { name: 'Zing syrup', unit: '100 ml', mrp: 81, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: zingImage },
  { name: 'Zing syrup', unit: '200 ml', mrp: 171, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: zingImage },
  { name: 'zing capsule', unit: '10 strip', mrp: 153, dosage: 'As directed by physician', description: 'Ayurvedic capsule', category: 'Tablets & Capsules', image: zingCapImage },
  { name: 'Zing capsule', unit: '30 cap', mrp: 350, dosage: 'As directed by physician', description: 'Ayurvedic capsule', category: 'Tablets & Capsules', image: zingCapImage },
  { name: 'Zodsafe spray', unit: '50 ml', mrp: 180, dosage: 'Apply as directed', description: 'Spray', category: 'Oils & Sprays', image: zodsafeImage },
  { name: 'Zodsafe oil', unit: '50 ml', mrp: 144, dosage: 'Apply as directed', description: 'Oil', category: 'Oils & Sprays', image: zodsafeOilImage },
  { name: 'Zodsafe syrup', unit: '100 ml', mrp: 99, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: zodsafeImage },
  { name: 'Zodsale syrup', unit: '200 ml', mrp: 180, dosage: 'As directed by physician', description: 'Ayurvedic syrup', category: 'Syrups & Drops', image: zodsafeImage },
  { name: 'Zodsafe capsule', unit: '10 strip', mrp: 180, dosage: 'As directed by physician', description: 'Ayurvedic capsule', category: 'Tablets & Capsules', image: zodsafeCapImage },
  { name: 'Zodsafe capsule', unit: '30 cap', mrp: 270, dosage: 'As directed by physician', description: 'Ayurvedic capsule', category: 'Tablets & Capsules', image: zodsafeCapImage },
  { name: 'Zepile capsule', unit: '30 cap', mrp: 270, dosage: 'As directed by physician', description: 'Ayurvedic capsule', category: 'Tablets & Capsules', image: zepileCapImage },
  {name: 'REFIT FORTE',unit: '30 cap',mrp: 2999,dosage: 'As directed by physician',description: 'Ayurvedic wellness product',category: 'Other Products',image: refitForteImage,
  },
];

const categories = [
  'All Products',
  'Tablets & Capsules',
  'Syrups & Drops',
  'Hair & Skin Care',
  'Oils & Sprays',
  'Other Products',
];

function ProductImage({ image, name, category }) {
  if (!image) {
    return (
      <div className="catalogue-demo-image" role="img" aria-label={`${name} product image unavailable`}>
        <div className="demo-package">
          <div className="demo-package-cap" />
          <div className="demo-package-label">
            <span className="demo-brand">DR. SINGHI'S</span>
            <span className="demo-leaf">✦</span>
            <strong>{name}</strong>
            <small>{category}</small>
          </div>
        </div>
        <span className="demo-image-note">IMAGE COMING SOON</span>
      </div>
    );
  }

  return (
    <div className="catalogue-demo-image catalogue-real-image">
      <img src={image} alt={name} loading="lazy" />
    </div>
  );
}

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState(
    () => searchParams.get('search') || ''
  );

  useEffect(() => {
    setSearchTerm(searchParams.get('search') || '');
  }, [searchParams]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);

    const nextParams = new URLSearchParams(searchParams);

    if (value.trim()) {
      nextParams.set('search', value);
    } else {
      nextParams.delete('search');
    }

    setSearchParams(nextParams, { replace: true });
  };

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'All Products' ||
        product.category === activeCategory;

      const searchableText =
        `${product.name} ${product.category} ${product.description} ${product.unit}`
          .toLowerCase();

      return matchesCategory && (!query || searchableText.includes(query));
    });
  }, [activeCategory, searchTerm]);

  const makeWhatsAppLink = (product) => {
    const packSize = product.unit ? ` (${product.unit})` : '';

    const message =
      `Hello Dr. Singhi's, I would like to enquire about ` +
      `${product.name}${packSize}. Please confirm availability and product details.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const clearFilters = () => {
    setSearchTerm('');
    setActiveCategory('All Products');
    setSearchParams({}, { replace: true });
  };

  return (
    <main className="products-page section">
      <section className="catalogue-heading">
        <p className="eyebrow centered">EXPLORE OUR RANGE</p>
        <h1>
          Our <em>Products</em>
        </h1>
        <p className="section-intro">
          Explore the Dr. Singhi's product range. Search by name or choose a
          category to find a product.
        </p>
      </section>

      <section className="catalogue-controls" aria-label="Product filters">
        <label className="catalogue-search">
          <Search size={19} aria-hidden="true" />
          <input
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(event) => handleSearchChange(event.target.value)}
            aria-label="Search products"
          />
        </label>

        <div className="catalogue-categories" aria-label="Filter by category">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`category-chip${
                activeCategory === category ? ' active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <div className="catalogue-results-line">
        <span>
          <Package size={17} />
          {filteredProducts.length} product listings
        </span>
        <span>Browse our product range</span>
      </div>

      {filteredProducts.length > 0 ? (
        <section className="catalogue-grid" aria-label="Products">
          {filteredProducts.map((product, index) => (
            <article
              className="catalogue-card"
              key={`${product.name}-${product.unit}-${index}`}
            >
              <ProductImage
                image={product.image}
                name={product.name}
                category={product.category}
              />

              <div className="catalogue-card-content">
                <span className="catalogue-card-category">
                  {product.category}
                </span>

                <h2>{product.name}</h2>

                {product.unit && (
                  <p className="catalogue-pack-size">
                    Pack size: {product.unit}
                  </p>
                )}

                {product.description && <p>{product.description}</p>}

                {product.dosage && (
                  <p className="catalogue-dosage">
                    <strong>Listed dosage:</strong> {product.dosage}
                  </p>
                )}

                {product.mrp !== null && product.mrp !== undefined ? (
                  <p className="catalogue-price-note">MRP: ₹{product.mrp}</p>
                ) : (
                  <p className="catalogue-price-note">
                    Price/details to be confirmed
                  </p>
                )}

                <a
                  className="catalogue-enquire"
                  href={makeWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={17} />
                  Enquire on WhatsApp
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <div className="catalogue-empty">
          <Search size={28} />
          <h2>No products found</h2>
          <p>
            Try another search term or choose a different category.
          </p>
          <button
            type="button"
            className="category-chip active"
            onClick={clearFilters}
          >
            Clear filters
          </button>
        </div>
      )}
    </main>
  );
}
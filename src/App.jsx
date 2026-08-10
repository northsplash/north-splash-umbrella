import React, { useState } from "react";

const businesses = [
  {
    name: "North Splash ProClean",
    category: "Commercial Cleaning",
    description:
      "Professional commercial cleaning solutions designed to keep businesses polished, healthy, and ready for business.",
    domain: "NSProClean.com",
    url: "https://nsproclean.com",
    initials: "PC",
  },
  {
    name: "North Splash Grounds",
    category: "Landscaping",
    description:
      "Professional landscaping and exterior grounds services built to create clean, attractive, and well-maintained properties.",
    domain: "NSGrounds.com",
    url: "https://nsgrounds.com",
    initials: "NG",
  },
  {
    name: "North Splash PropertyCare",
    category: "Property Maintenance",
    description:
      "Reliable property maintenance solutions for keeping residential and commercial properties operating at their best.",
    domain: "NSPropertyCare.com",
    url: "https://nspropertycare.com",
    initials: "PC",
  },
  {
    name: "NS Social Club",
    category: "Bowling & Entertainment",
    description:
      "A social entertainment destination bringing bowling, recreation, events, food, and community together.",
    domain: "NSSocialClub.com",
    url: "https://nssocialclub.com",
    initials: "SC",
  },
  {
    name: "North Splash Renew",
    category: "Pressure Washing",
    description:
      "Exterior cleaning and pressure washing services that restore curb appeal and bring properties back to life.",
    domain: "NSRenew.com",
    url: "https://nsrenew.com",
    initials: "NR",
  },
  {
    name: "North Splash ClearOut",
    category: "Junk Removal",
    description:
      "Straightforward junk removal and property cleanout services for homes, businesses, moves, and renovations.",
    domain: "NSClearOut.com",
    url: "https://nsclearout.com",
    initials: "CO",
  },
  {
    name: "NS Dynasty",
    category: "Apartments",
    description:
      "Residential communities designed around comfort, convenience, quality, and long-term living.",
    domain: "NSDynasty.com",
    url: "https://nsdynasty.com",
    initials: "ND",
  },
  {
    name: "Riche Et Beau",
    category: "Women's Clothing",
    description:
      "A women's fashion brand centered around refined style, confidence, beauty, and elevated everyday fashion.",
    domain: "RicheEtBeau.com",
    url: "https://richeetbeau.com",
    initials: "RB",
  },
  {
    name: "North Splash Auto Luxe",
    category: "Mobile Detailing",
    description:
      "Premium mobile automotive detailing brought directly to the customer's location.",
    domain: "NSAutoLuxe.com",
    url: "https://nsautoluxe.com",
    initials: "AL",
  },
  {
    name: "NS Venture Works",
    category: "Business Essentials",
    description:
      "Business essentials and professional services helping entrepreneurs build, launch, brand, and grow.",
    domain: "NSVentureWorks.com",
    url: "https://nsventureworks.com",
    initials: "VW",
  },
];

function Logo({ compact = false }) {
  return (
    <div className={`logo ${compact ? "logo-compact" : ""}`}>
      <div className="logo-mark">
        <span>N</span>
        <span>S</span>
      </div>

      <div className="logo-text">
        <strong>NORTH SPLASH</strong>
        {!compact && <small>ENTERPRISES</small>}
      </div>
    </div>
  );
}

function App() {
  const [activePage, setActivePage] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(businesses.map((business) => business.category)),
  ];

  const filteredBusinesses =
    selectedCategory === "All"
      ? businesses
      : businesses.filter(
          (business) => business.category === selectedCategory
        );

  const navigate = (page) => {
    setActivePage(page);
    setMobileMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Thank you for contacting North Splash. Your message has been received."
    );
  };

  return (
    <div className="site">
      <header className="header">
        <button
          className="brand-button"
          onClick={() => navigate("home")}
          aria-label="North Splash home"
        >
          <Logo compact />
        </button>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${mobileMenu ? "nav-open" : ""}`}>
          <button
            className={activePage === "home" ? "nav-link active" : "nav-link"}
            onClick={() => navigate("home")}
          >
            Home
          </button>

          <button
            className={
              activePage === "businesses" ? "nav-link active" : "nav-link"
            }
            onClick={() => navigate("businesses")}
          >
            Businesses
          </button>

          <button
            className={activePage === "about" ? "nav-link active" : "nav-link"}
            onClick={() => navigate("about")}
          >
            About
          </button>

          <button
            className={
              activePage === "network" ? "nav-link active" : "nav-link"
            }
            onClick={() => navigate("network")}
          >
            Our Network
          </button>

          <button
            className={
              activePage === "contact" ? "nav-link active" : "nav-link"
            }
            onClick={() => navigate("contact")}
          >
            Contact
          </button>
        </nav>

        <button
          className="header-cta"
          onClick={() => navigate("businesses")}
        >
          Explore North Splash
        </button>
      </header>

      <main>
        {activePage === "home" && (
          <section className="page home-page">
            <div className="hero">
              <div className="hero-content">
                <div className="eyebrow">ONE COMPANY. MANY POSSIBILITIES.</div>

                <h1>
                  Building businesses
                  <br />
                  <em>under one umbrella.</em>
                </h1>

                <p>
                  North Splash is a growing family of businesses spanning
                  commercial services, property, entertainment, automotive,
                  fashion, and business solutions.
                </p>

                <div className="hero-actions">
                  <button
                    className="primary-button"
                    onClick={() => navigate("businesses")}
                  >
                    Explore Our Businesses
                    <span>↗</span>
                  </button>

                  <button
                    className="secondary-button"
                    onClick={() => navigate("about")}
                  >
                    Discover North Splash
                  </button>
                </div>
              </div>

              <div className="hero-visual">
                <div className="umbrella-symbol">
                  <div className="umbrella-top">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="umbrella-handle"></div>
                </div>

                <div className="hero-ring ring-one"></div>
                <div className="hero-ring ring-two"></div>

                <div className="hero-stat">
                  <strong>10</strong>
                  <span>BRANDS &amp; COUNTING</span>
                </div>
              </div>
            </div>

            <section className="home-intro">
              <div>
                <span className="section-label">THE NORTH SPLASH VISION</span>
                <h2>
                  Different industries.
                  <br />
                  <em>One connected vision.</em>
                </h2>
              </div>

              <p>
                North Splash brings distinct brands together under one
                organization. Each business has its own identity, purpose,
                customers, and future while benefiting from the strength of a
                larger network.
              </p>
            </section>

            <section className="home-preview">
              <div className="preview-header">
                <div>
                  <span className="section-label">OUR PORTFOLIO</span>
                  <h2>Explore the family.</h2>
                </div>

                <button
                  className="text-button"
                  onClick={() => navigate("businesses")}
                >
                  View all businesses →
                </button>
              </div>

              <div className="mini-grid">
                {businesses.slice(0, 4).map((business) => (
                  <button
                    className="mini-card"
                    key={business.name}
                    onClick={() => navigate("businesses")}
                  >
                    <div className="mini-logo">{business.initials}</div>
                    <span>{business.category}</span>
                    <strong>{business.name}</strong>
                  </button>
                ))}
              </div>
            </section>
          </section>
        )}

        {activePage === "businesses" && (
          <section className="page inner-page">
            <div className="page-heading">
              <span className="section-label">THE PORTFOLIO</span>
              <h1>
                Our <em>businesses.</em>
              </h1>
              <p>
                Explore the companies that make up the North Splash family.
                Each brand serves a different market while sharing the same
                commitment to quality, growth, and innovation.
              </p>
            </div>

            <div className="category-bar">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    selectedCategory === category ? "category active" : "category"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="business-grid">
              {filteredBusinesses.map((business, index) => (
                <article className="business-card" key={business.name}>
                  <div className="business-card-top">
                    <span className="business-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="business-logo">
                      {business.initials}
                    </div>
                  </div>

                  <span className="business-category">
                    {business.category}
                  </span>

                  <h2>{business.name}</h2>

                  <p>{business.description}</p>

                  <div className="business-card-bottom">
                    <span>{business.domain}</span>

                    <a
                      href={business.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="visit-link"
                    >
                      Visit Brand ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {activePage === "about" && (
          <section className="page inner-page about-page">
            <div className="page-heading">
              <span className="section-label">ABOUT NORTH SPLASH</span>
              <h1>
                More than a brand.
                <br />
                <em>A business ecosystem.</em>
              </h1>
              <p>
                North Splash is designed as an umbrella organization for a
                growing collection of independent businesses.
              </p>
            </div>

            <div className="about-layout">
              <div className="about-large">
                <span>01</span>
                <h2>
                  Build.
                  <br />
                  Connect.
                  <br />
                  Grow.
                </h2>
              </div>

              <div className="about-copy">
                <h3>Our approach</h3>

                <p>
                  We believe businesses can be stronger when they are part of
                  something bigger. North Splash creates a foundation where
                  individual companies can develop their own identities while
                  benefiting from shared vision and opportunity.
                </p>

                <p>
                  From property services and commercial cleaning to fashion,
                  entertainment, automotive services, and business essentials,
                  our portfolio is intentionally diverse.
                </p>

                <p>
                  The goal is simple: create businesses that can stand on their
                  own while building a network that becomes stronger together.
                </p>
              </div>
            </div>

            <div className="values-grid">
              <div>
                <span>01</span>
                <h3>Entrepreneurship</h3>
                <p>
                  Creating opportunities and turning ideas into real
                  businesses.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>Quality</h3>
                <p>
                  Building brands that customers can recognize and trust.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Growth</h3>
                <p>
                  Continuously expanding our capabilities, markets, and
                  portfolio.
                </p>
              </div>

              <div>
                <span>04</span>
                <h3>Connection</h3>
                <p>
                  Creating a network where individual businesses can benefit
                  from shared opportunity.
                </p>
              </div>
            </div>
          </section>
        )}

        {activePage === "network" && (
          <section className="page inner-page network-page">
            <div className="page-heading">
              <span className="section-label">THE NETWORK</span>
              <h1>
                One umbrella.
                <br />
                <em>Multiple industries.</em>
              </h1>
              <p>
                North Splash connects businesses across several industries,
                creating a diverse portfolio built for long-term growth.
              </p>
            </div>

            <div className="network-visual">
              <div className="network-center">
                <div className="network-center-logo">NS</div>
                <strong>NORTH SPLASH</strong>
                <span>THE UMBRELLA</span>
              </div>

              {businesses.map((business, index) => {
                const positions = [
                  "network-one",
                  "network-two",
                  "network-three",
                  "network-four",
                  "network-five",
                  "network-six",
                  "network-seven",
                  "network-eight",
                  "network-nine",
                  "network-ten",
                ];

                return (
                  <div
                    className={`network-node ${positions[index]}`}
                    key={business.name}
                  >
                    <div>{business.initials}</div>
                    <span>{business.name}</span>
                  </div>
                );
              })}
            </div>

            <div className="network-statement">
              <span className="section-label">THE BIGGER PICTURE</span>
              <h2>
                Independent brands.
                <br />
                <em>Shared opportunity.</em>
              </h2>
              <p>
                Every North Splash company has room to grow independently,
                while the larger network creates opportunities for collaboration,
                shared resources, cross-industry relationships, and future
                expansion.
              </p>
            </div>
          </section>
        )}

        {activePage === "contact" && (
          <section className="page inner-page contact-page">
            <div className="page-heading">
              <span className="section-label">CONTACT NORTH SPLASH</span>
              <h1>
                Let's build
                <br />
                <em>something bigger.</em>
              </h1>
              <p>
                Interested in North Splash, one of our companies, a business
                opportunity, or a potential partnership? Start here.
              </p>
            </div>

            <div className="contact-layout">
              <div className="contact-info">
                <div className="contact-block">
                  <span>GENERAL INQUIRIES</span>
                  <h3>North Splash</h3>
                  <p>Business &amp; partnership inquiries</p>
                </div>

                <div className="contact-block">
                  <span>ONLINE</span>
                  <p>northsplash.com</p>
                </div>

                <div className="contact-block">
                  <span>PORTFOLIO</span>
                  <p>10 businesses and growing.</p>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    Name
                    <input type="text" placeholder="Your name" required />
                  </label>

                  <label>
                    Email
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>

                <label>
                  I'm interested in
                  <select defaultValue="">
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>North Splash</option>
                    {businesses.map((business) => (
                      <option key={business.name}>{business.name}</option>
                    ))}
                    <option>Partnership</option>
                    <option>Business Opportunity</option>
                    <option>Other</option>
                  </select>
                </label>

                <label>
                  Message
                  <textarea
                    placeholder="Tell us how we can help..."
                    rows="7"
                    required
                  ></textarea>
                </label>

                <button type="submit" className="primary-button">
                  Send Message <span>↗</span>
                </button>
              </form>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div>
            <Logo />
            <p>
              A growing family of businesses
              <br />
              under one umbrella.
            </p>
          </div>

          <div className="footer-links">
            <span>Explore</span>

            <button onClick={() => navigate("businesses")}>
              Businesses
            </button>

            <button onClick={() => navigate("about")}>About</button>

            <button onClick={() => navigate("network")}>
              Our Network
            </button>

            <button onClick={() => navigate("contact")}>Contact</button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} North Splash. All rights reserved.</span>
          <span>northsplash.com</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

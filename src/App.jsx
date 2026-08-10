import { useEffect, useState } from "react";

const BUSINESSES = [
  {
    id: "proclean",
    number: "01",
    category: "Commercial Cleaning",
    name: "North Splash ProClean",
    shortName: "NS ProClean",
    domain: "https://nsproclean.com",
    description:
      "Professional commercial cleaning solutions designed to keep businesses clean, polished, and ready for business.",
    accent: "Cleaning & Facilities",
    icon: "✦"
  },
  {
    id: "grounds",
    number: "02",
    category: "Landscaping",
    name: "North Splash Grounds",
    shortName: "NS Grounds",
    domain: "https://nsgrounds.com",
    description:
      "Professional landscaping and exterior grounds services designed to keep properties looking maintained, welcoming, and cared for.",
    accent: "Outdoor Services",
    icon: "◆"
  },
  {
    id: "propertycare",
    number: "03",
    category: "Property Maintenance",
    name: "North Splash PropertyCare",
    shortName: "NS PropertyCare",
    domain: "https://nspropertycare.com",
    description:
      "Property maintenance solutions for keeping buildings, communities, and properties operating at their best.",
    accent: "Property Services",
    icon: "▦"
  },
  {
    id: "socialclub",
    number: "04",
    category: "Bowling & Entertainment",
    name: "NS Social Club",
    shortName: "NS Social Club",
    domain: "https://nssocialclub.com",
    description:
      "A social entertainment destination built around bowling, experiences, events, and bringing people together.",
    accent: "Entertainment",
    icon: "●"
  },
  {
    id: "renew",
    number: "05",
    category: "Pressure Washing",
    name: "North Splash Renew",
    shortName: "NS Renew",
    domain: "https://nsrenew.com",
    description:
      "Exterior cleaning and pressure washing services focused on renewing the appearance of residential and commercial properties.",
    accent: "Exterior Renewal",
    icon: "◇"
  },
  {
    id: "clearout",
    number: "06",
    category: "Junk Removal",
    name: "North Splash ClearOut",
    shortName: "NS ClearOut",
    domain: "https://nsclearout.com",
    description:
      "Junk removal and clean-out services that make it easier to reclaim space and move properties, homes, and businesses forward.",
    accent: "Removal Services",
    icon: "×"
  },
  {
    id: "dynasty",
    number: "07",
    category: "Apartments",
    name: "NS Dynasty",
    shortName: "NS Dynasty",
    domain: "https://nsdynasty.com",
    description:
      "A residential property brand focused on creating places people are proud to call home.",
    accent: "Residential Living",
    icon: "⌂"
  },
  {
    id: "richeetbeau",
    number: "08",
    category: "Women's Clothing",
    name: "Riche Et Beau",
    shortName: "Riche Et Beau",
    domain: "https://richeetbeau.com",
    description:
      "A women's fashion brand centered around style, confidence, elegance, and expressing your individual beauty.",
    accent: "Fashion",
    icon: "◇"
  },
  {
    id: "autoluxe",
    number: "09",
    category: "Mobile Detailing",
    name: "North Splash Auto Luxe",
    shortName: "NS Auto Luxe",
    domain: "https://nsautoluxe.com",
    description:
      "Mobile automotive detailing designed to bring a premium vehicle-care experience directly to the customer.",
    accent: "Automotive",
    icon: "◈"
  },
  {
    id: "ventureworks",
    number: "10",
    category: "Business Essentials",
    name: "NS Venture Works",
    shortName: "NS Venture Works",
    domain: "https://nsventureworks.com",
    description:
      "Business essentials and creative solutions designed to help entrepreneurs build, brand, launch, and grow.",
    accent: "Business Solutions",
    icon: "＋"
  }
];

const CATEGORIES = [
  "All",
  "Property & Facilities",
  "Lifestyle & Entertainment",
  "Retail & Fashion",
  "Automotive",
  "Business Solutions"
];

function categoryGroup(category) {
  if (
    [
      "Commercial Cleaning",
      "Landscaping",
      "Property Maintenance",
      "Pressure Washing",
      "Junk Removal",
      "Apartments"
    ].includes(category)
  ) {
    return "Property & Facilities";
  }

  if (category === "Bowling & Entertainment") {
    return "Lifestyle & Entertainment";
  }

  if (category === "Women's Clothing") {
    return "Retail & Fashion";
  }

  if (category === "Mobile Detailing") {
    return "Automotive";
  }

  return "Business Solutions";
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <div className={`menu-icon ${open ? "open" : ""}`}>
      <span />
      <span />
      <span />
    </div>
  );
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="North Splash home">
      <span className="logo-mark">
        <span />
        <span />
        <span />
      </span>

      <span className="logo-wordmark">
        <strong>NORTH</strong>
        <em>SPLASH</em>
      </span>
    </a>
  );
}

function BusinessCard({ business, index }) {
  return (
    <article
      className="business-card"
      style={{ "--delay": `${index * 60}ms` }}
    >
      <div className="business-card-top">
        <span className="business-number">{business.number}</span>

        <span className="business-icon">
          {business.icon}
        </span>
      </div>

      <div className="business-card-content">
        <p className="eyebrow">{business.category}</p>

        <h3>{business.name}</h3>

        <p className="business-description">
          {business.description}
        </p>
      </div>

      <div className="business-card-bottom">
        <span>{business.accent}</span>

        <a
          href={business.domain}
          target="_blank"
          rel="noreferrer"
          className="circle-arrow"
          aria-label={`Visit ${business.name}`}
        >
          <ArrowIcon />
        </a>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filteredBusinesses =
    activeCategory === "All"
      ? BUSINESSES
      : BUSINESSES.filter(
          (business) =>
            categoryGroup(business.category) === activeCategory
        );

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site" id="top">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <Logo />

          <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`}>
            <a href="#businesses" onClick={closeMenu}>
              Businesses
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#network" onClick={closeMenu}>
              Our Network
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <a
            className="nav-cta"
            href="#businesses"
            onClick={closeMenu}
          >
            Explore North Splash
            <ArrowIcon />
          </a>

          <button
            className="mobile-menu-button"
            aria-label="Open navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-grid" />

          <div className="container hero-container">
            <div className="hero-copy">
              <div className="hero-label">
                <span className="label-line" />
                THE NORTH SPLASH NETWORK
              </div>

              <h1>
                One brand.
                <br />
                <span>Multiple businesses.</span>
              </h1>

              <p className="hero-description">
                North Splash brings a growing collection of
                businesses together under one vision, connecting
                customers with services, experiences, products,
                and opportunities built to move life and business
                forward.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="#businesses"
                >
                  Explore Our Businesses
                  <ArrowIcon />
                </a>

                <a
                  className="button button-ghost"
                  href="#about"
                >
                  Discover North Splash
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <div className="hero-glow" />

              <div className="hero-center">
                <span>NS</span>
                <small>NORTH SPLASH</small>
              </div>

              <div className="floating-card floating-card-one">
                <span className="floating-icon">01</span>
                <div>
                  <strong>10</strong>
                  <small>Businesses</small>
                </div>
              </div>

              <div className="floating-card floating-card-two">
                <span className="floating-icon">∞</span>
                <div>
                  <strong>1</strong>
                  <small>Growing Network</small>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="container hero-bottom-inner">
              <span>COMMERCIAL</span>
              <i />
              <span>PROPERTY</span>
              <i />
              <span>ENTERTAINMENT</span>
              <i />
              <span>FASHION</span>
              <i />
              <span>AUTOMOTIVE</span>
              <i />
              <span>BUSINESS</span>
            </div>
          </div>
        </section>

        <section className="intro-section" id="about">
          <div className="container intro-grid">
            <div>
              <p className="section-kicker">
                ABOUT NORTH SPLASH
              </p>

              <h2>
                Built as a network.
                <br />
                Designed for growth.
              </h2>
            </div>

            <div className="intro-copy">
              <p>
                North Splash is the umbrella connecting a diverse
                collection of businesses across services,
                property, entertainment, fashion, automotive,
                and business solutions.
              </p>

              <p>
                Each company has its own identity and purpose,
                while North Splash provides the larger vision:
                building businesses that can stand on their own
                while becoming stronger as part of something
                bigger.
              </p>

              <div className="intro-signature">
                <span className="signature-line" />
                <span>THE NORTH SPLASH VISION</span>
              </div>
            </div>
          </div>
        </section>

        <section className="businesses-section" id="businesses">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">
                  THE BUSINESS PORTFOLIO
                </p>

                <h2>
                  Meet the businesses
                  <br />
                  <span>behind the brand.</span>
                </h2>
              </div>

              <p className="heading-description">
                From keeping properties beautiful to creating
                memorable experiences, North Splash operates
                across multiple industries with one common goal:
                delivering value.
              </p>
            </div>

            <div className="filter-row">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? "filter active"
                      : "filter"
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="business-grid">
              {filteredBusinesses.map((business, index) => (
                <BusinessCard
                  key={business.id}
                  business={business}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="network-section" id="network">
          <div className="network-background">
            <div className="network-line line-one" />
            <div className="network-line line-two" />
            <div className="network-line line-three" />
          </div>

          <div className="container network-container">
            <div className="network-copy">
              <p className="section-kicker">
                THE NORTH SPLASH NETWORK
              </p>

              <h2>
                Different industries.
                <br />
                <span>One ecosystem.</span>
              </h2>

              <p>
                North Splash is designed to create connections
                between businesses instead of keeping them in
                separate silos. A customer looking for one
                service can discover an entire network of
                solutions.
              </p>

              <a
                className="button button-primary"
                href="#contact"
              >
                Connect With North Splash
                <ArrowIcon />
              </a>
            </div>

            <div className="network-diagram">
              <div className="diagram-ring ring-a" />
              <div className="diagram-ring ring-b" />
              <div className="diagram-ring ring-c" />

              <div className="diagram-center">
                <strong>NS</strong>
                <span>NORTH SPLASH</span>
              </div>

              <span className="node node-one">CLEAN</span>
              <span className="node node-two">BUILD</span>
              <span className="node node-three">LIVE</span>
              <span className="node node-four">PLAY</span>
              <span className="node node-five">STYLE</span>
              <span className="node node-six">DRIVE</span>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container">
            <div className="section-heading values-heading">
              <div>
                <p className="section-kicker">
                  WHY NORTH SPLASH
                </p>

                <h2>
                  More than a collection
                  <br />
                  <span>of businesses.</span>
                </h2>
              </div>
            </div>

            <div className="values-grid">
              <div className="value-card">
                <span className="value-number">01</span>
                <h3>One Vision</h3>
                <p>
                  Every business can have its own personality
                  while contributing to a larger North Splash
                  vision.
                </p>
              </div>

              <div className="value-card">
                <span className="value-number">02</span>
                <h3>Multiple Solutions</h3>
                <p>
                  Customers can discover services across
                  multiple industries without having to search
                  endlessly for the next solution.
                </p>
              </div>

              <div className="value-card">
                <span className="value-number">03</span>
                <h3>Built to Grow</h3>
                <p>
                  The network is designed to expand as new
                  businesses, services, and opportunities join
                  the North Splash family.
                </p>
              </div>

              <div className="value-card">
                <span className="value-number">04</span>
                <h3>Customer First</h3>
                <p>
                  Every company ultimately exists to create a
                  better experience for the people and businesses
                  it serves.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="directory-section">
          <div className="container">
            <div className="directory-header">
              <div>
                <p className="section-kicker">
                  NORTH SPLASH DIRECTORY
                </p>

                <h2>
                  Find your
                  <br />
                  <span>next service.</span>
                </h2>
              </div>

              <p>
                Choose a business below and continue directly to
                its dedicated website.
              </p>
            </div>

            <div className="directory-list">
              {BUSINESSES.map((business) => (
                <a
                  href={business.domain}
                  target="_blank"
                  rel="noreferrer"
                  className="directory-item"
                  key={business.id}
                >
                  <span className="directory-number">
                    {business.number}
                  </span>

                  <div className="directory-name">
                    <small>{business.category}</small>
                    <strong>{business.name}</strong>
                  </div>

                  <span className="directory-link">
                    Visit Website
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-container">
            <div className="contact-panel">
              <div className="contact-copy">
                <p className="section-kicker">
                  LET'S CONNECT
                </p>

                <h2>
                  Looking for a
                  <br />
                  <span>North Splash solution?</span>
                </h2>

                <p>
                  Whether you're looking for a service, exploring
                  a business opportunity, or interested in
                  connecting with the North Splash network, we'd
                  love to hear from you.
                </p>

                <a
                  className="button button-light"
                  href="mailto:support@northsplash.com"
                >
                  Contact North Splash
                  <ArrowIcon />
                </a>
              </div>

              <div className="contact-details">
                <div>
                  <span>Email</span>
                  <a href="mailto:support@northsplash.com">
                    support@northsplash.com
                  </a>
                </div>

                <div>
                  <span>Phone</span>
                  <a href="tel:+13309903956">
                    330-990-3956
                  </a>
                </div>

                <div>
                  <span>Online</span>
                  <strong>northsplash.com</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <Logo />

            <p>
              One brand. Multiple businesses. Built for what's
              next.
            </p>
          </div>

          <div className="footer-column">
            <span>Explore</span>

            <a href="#businesses">Businesses</a>
            <a href="#about">About</a>
            <a href="#network">Our Network</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <span>Business Network</span>

            {BUSINESSES.slice(0, 5).map((business) => (
              <a
                key={business.id}
                href={business.domain}
                target="_blank"
                rel="noreferrer"
              >
                {business.shortName}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <span>More Businesses</span>

            {BUSINESSES.slice(5).map((business) => (
              <a
                key={business.id}
                href={business.domain}
                target="_blank"
                rel="noreferrer"
              >
                {business.shortName}
              </a>
            ))}
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} North Splash. All
            rights reserved.
          </span>

          <span>
            NORTH SPLASH NETWORK
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;

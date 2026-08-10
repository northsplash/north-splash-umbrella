import React, { useState } from "react";

const businesses = [
  {
    name: "North Splash ProClean",
    category: "Commercial Cleaning",
    short: "Commercial cleaning",
    description:
      "Professional commercial cleaning solutions for businesses, facilities, and properties.",
    domain: "NSProClean.com",
    url: "https://nsproclean.com",
    initials: "PC",
  },
  {
    name: "North Splash Grounds",
    category: "Landscaping",
    short: "Landscaping",
    description:
      "Professional landscaping and grounds services designed to keep properties looking their best.",
    domain: "NSGrounds.com",
    url: "https://nsgrounds.com",
    initials: "NG",
  },
  {
    name: "North Splash PropertyCare",
    category: "Property Maintenance",
    short: "Property maintenance",
    description:
      "Reliable property maintenance solutions for residential and commercial properties.",
    domain: "NSPropertyCare.com",
    url: "https://nspropertycare.com",
    initials: "PP",
  },
  {
    name: "NS Social Club",
    category: "Bowling & Entertainment",
    short: "Entertainment",
    description:
      "A social entertainment destination bringing recreation, bowling, events, and community together.",
    domain: "NSSocialClub.com",
    url: "https://nssocialclub.com",
    initials: "SC",
  },
  {
    name: "North Splash Renew",
    category: "Pressure Washing",
    short: "Exterior renewal",
    description:
      "Professional pressure washing and exterior cleaning designed to restore curb appeal.",
    domain: "NSRenew.com",
    url: "https://nsrenew.com",
    initials: "NR",
  },
  {
    name: "North Splash ClearOut",
    category: "Junk Removal",
    short: "Junk removal",
    description:
      "Property cleanouts and junk removal for homes, businesses, renovations, and moves.",
    domain: "NSClearOut.com",
    url: "https://nsclearout.com",
    initials: "CO",
  },
  {
    name: "NS Dynasty",
    category: "Apartments",
    short: "Residential living",
    description:
      "Residential communities focused on comfort, convenience, quality, and modern living.",
    domain: "NSDynasty.com",
    url: "https://nsdynasty.com",
    initials: "ND",
  },
  {
    name: "Riche Et Beau",
    category: "Women's Clothing",
    short: "Women's fashion",
    description:
      "An elevated women's fashion brand focused on style, confidence, and individuality.",
    domain: "riche-et-beau-site.vercel.app",
    url: "https://riche-et-beau-site.vercel.app/",
    initials: "RB",
  },
  {
    name: "North Splash Auto Luxe",
    category: "Mobile Detailing",
    short: "Mobile detailing",
    description:
      "Premium mobile automotive detailing brought directly to customers.",
    domain: "northsplash.com",
    url: "https://northsplash.com/",
    initials: "AL",
  },
  {
    name: "NS Venture Works",
    category: "Business Essentials",
    short: "Business essentials",
    description:
      "Business essentials and professional services helping entrepreneurs build and grow.",
    domain: "northsplash.shop",
    url: "https://www.northsplash.shop/",
    initials: "VW",
  },
];

const pageData = {
  home: {
    title: "Home",
  },
  businesses: {
    title: "Businesses",
  },
  about: {
    title: "About",
  },
  network: {
    title: "Our Network",
  },
  contact: {
    title: "Contact",
  },
};

function Logo({ footer = false }) {
  return (
    <div className={`logo ${footer ? "footer-logo" : ""}`}>
      <div className="logo-icon">
        <span>N</span>
        <span>S</span>
      </div>

      <div className="logo-name">
        <strong>NORTH SPLASH</strong>
        <small>ENTERPRISES</small>
      </div>
    </div>
  );
}

function App() {
  const [activePage, setActivePage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(businesses.map((business) => business.category)),
  ];

  const filteredBusinesses =
    category === "All"
      ? businesses
      : businesses.filter((business) => business.category === category);

  const navigate = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitContact = (event) => {
    event.preventDefault();

    alert(
      "Thank you for contacting North Splash. Your message has been submitted."
    );
  };

  return (
    <div className="site">

      {/* HEADER */}

      <header className="header">

        <button
          className="brand-button"
          onClick={() => navigate("home")}
          aria-label="North Splash Home"
        >
          <Logo />
        </button>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navigation ${menuOpen ? "navigation-open" : ""}`}>

          {Object.keys(pageData).map((page) => (
            <button
              key={page}
              className={
                activePage === page
                  ? "navigation-link active"
                  : "navigation-link"
              }
              onClick={() => navigate(page)}
            >
              {pageData[page].title}
            </button>
          ))}

        </nav>

        <button
          className="nav-cta"
          onClick={() => navigate("businesses")}
        >
          Explore North Splash
          <span>↗</span>
        </button>

      </header>

      <main>

        {/* HOME */}

        {activePage === "home" && (
          <div className="home-page">

            <section className="hero">

              <div className="hero-content">

                <div className="hero-label">
                  NORTH SPLASH ENTERPRISES
                </div>

                <h1>
                  One vision.
                  <br />
                  <span>Many businesses.</span>
                </h1>

                <p>
                  North Splash is a growing family of companies built across
                  multiple industries, connected by one vision for growth,
                  quality, and opportunity.
                </p>

                <div className="hero-buttons">

                  <button
                    className="green-button"
                    onClick={() => navigate("businesses")}
                  >
                    Explore Our Businesses
                    <span>↗</span>
                  </button>

                  <button
                    className="outline-button"
                    onClick={() => navigate("about")}
                  >
                    Discover North Splash
                  </button>

                </div>

                <div className="hero-metrics">

                  <div>
                    <strong>10</strong>
                    <span>Businesses</span>
                  </div>

                  <div>
                    <strong>01</strong>
                    <span>Umbrella</span>
                  </div>

                  <div>
                    <strong>∞</strong>
                    <span>Possibilities</span>
                  </div>

                </div>

              </div>

              <div className="hero-art">

                <div className="green-orbit orbit-one" />
                <div className="green-orbit orbit-two" />

                <div className="umbrella">

                  <div className="umbrella-canopy">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="umbrella-pole" />

                  <div className="umbrella-handle" />

                </div>

                <div className="hero-art-label">
                  <span>THE UMBRELLA</span>
                  <strong>NORTH SPLASH</strong>
                </div>

              </div>

            </section>

            {/* HOME TEASERS */}

            <section className="teaser-section">

              <div className="section-heading">

                <div>
                  <span className="section-kicker">
                    EXPLORE NORTH SPLASH
                  </span>

                  <h2>
                    Everything starts
                    <br />
                    <em>under one roof.</em>
                  </h2>
                </div>

                <p>
                  Get to know the companies, vision, and network behind North
                  Splash.
                </p>

              </div>

              <div className="teaser-grid">

                <button
                  className="teaser-card teaser-businesses"
                  onClick={() => navigate("businesses")}
                >

                  <div className="teaser-top">
                    <span>01</span>
                    <span>↗</span>
                  </div>

                  <div>
                    <span className="teaser-kicker">
                      THE PORTFOLIO
                    </span>

                    <h3>Our Businesses</h3>

                    <p>
                      Explore all ten North Splash companies and discover what
                      each brand does.
                    </p>
                  </div>

                  <strong className="teaser-link">
                    View Businesses →
                  </strong>

                </button>

                <button
                  className="teaser-card teaser-about"
                  onClick={() => navigate("about")}
                >

                  <div className="teaser-top">
                    <span>02</span>
                    <span>↗</span>
                  </div>

                  <div>
                    <span className="teaser-kicker">
                      THE COMPANY
                    </span>

                    <h3>About North Splash</h3>

                    <p>
                      Learn about the vision behind the umbrella and the
                      philosophy connecting every company.
                    </p>
                  </div>

                  <strong className="teaser-link">
                    Discover More →
                  </strong>

                </button>

                <button
                  className="teaser-card teaser-network"
                  onClick={() => navigate("network")}
                >

                  <div className="teaser-top">
                    <span>03</span>
                    <span>↗</span>
                  </div>

                  <div>
                    <span className="teaser-kicker">
                      THE CONNECTION
                    </span>

                    <h3>Our Network</h3>

                    <p>
                      See how the North Splash companies connect beneath one
                      growing corporate umbrella.
                    </p>
                  </div>

                  <strong className="teaser-link">
                    Explore Network →
                  </strong>

                </button>

                <button
                  className="teaser-card teaser-contact"
                  onClick={() => navigate("contact")}
                >

                  <div className="teaser-top">
                    <span>04</span>
                    <span>↗</span>
                  </div>

                  <div>
                    <span className="teaser-kicker">
                      START A CONVERSATION
                    </span>

                    <h3>Contact Us</h3>

                    <p>
                      Have a business opportunity, partnership idea, or
                      question? Let's connect.
                    </p>
                  </div>

                  <strong className="teaser-link">
                    Get In Touch →
                  </strong>

                </button>

              </div>

            </section>

            {/* FEATURED BUSINESSES */}

            <section className="featured-section">

              <div className="featured-heading">

                <div>
                  <span className="section-kicker">
                    A GROWING PORTFOLIO
                  </span>

                  <h2>
                    Meet the
                    <br />
                    <em>North Splash family.</em>
                  </h2>
                </div>

                <button
                  className="text-link"
                  onClick={() => navigate("businesses")}
                >
                  View all 10 businesses →
                </button>

              </div>

              <div className="featured-grid">

                {businesses.slice(0, 6).map((business, index) => (
                  <button
                    key={business.name}
                    className="featured-card"
                    onClick={() => navigate("businesses")}
                  >

                    <span className="featured-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="featured-logo">
                      {business.initials}
                    </div>

                    <span className="featured-category">
                      {business.category}
                    </span>

                    <strong>{business.name}</strong>

                    <span className="featured-arrow">↗</span>

                  </button>
                ))}

              </div>

            </section>

            {/* HOME CTA */}

            <section className="home-cta">

              <div>

                <span className="section-kicker">
                  THE NEXT CHAPTER
                </span>

                <h2>
                  There is more
                  <br />
                  <em>under the umbrella.</em>
                </h2>

              </div>

              <button
                className="green-button large"
                onClick={() => navigate("contact")}
              >
                Connect With North Splash
                <span>↗</span>
              </button>

            </section>

          </div>
        )}

        {/* BUSINESSES */}

        {activePage === "businesses" && (
          <section className="inner-page">

            <div className="page-heading">

              <span className="section-kicker">
                THE PORTFOLIO
              </span>

              <h1>
                Our
                <br />
                <em>Businesses.</em>
              </h1>

              <p>
                Ten distinct businesses. Multiple industries. One growing
                North Splash network.
              </p>

            </div>

            <div className="category-filter">

              {categories.map((item) => (
                <button
                  key={item}
                  className={category === item ? "filter active" : "filter"}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}

            </div>

            <div className="business-grid">

              {filteredBusinesses.map((business, index) => (
                <article
                  className="business-card"
                  key={business.name}
                >

                  <div className="business-top">

                    <span className="business-index">
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

                  <div className="business-footer">

                    <span>{business.domain}</span>

                    <a
                      href={business.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website ↗
                    </a>

                  </div>

                </article>
              ))}

            </div>

          </section>
        )}

        {/* ABOUT */}

        {activePage === "about" && (
          <section className="inner-page">

            <div className="page-heading">

              <span className="section-kicker">
                ABOUT NORTH SPLASH
              </span>

              <h1>
                Built to
                <br />
                <em>build.</em>
              </h1>

              <p>
                North Splash is the umbrella organization connecting a
                growing collection of businesses across different industries.
              </p>

            </div>

            <div className="about-feature">

              <div className="about-number">
                01
              </div>

              <div>
                <span className="section-kicker">
                  THE VISION
                </span>

                <h2>
                  Different businesses.
                  <br />
                  <em>Shared direction.</em>
                </h2>

                <p>
                  North Splash was created around a simple idea: businesses do
                  not have to operate in isolation. By bringing different
                  brands together under one umbrella, each company can maintain
                  its own identity while becoming part of something larger.
                </p>

                <p>
                  Our portfolio spans commercial services, property,
                  entertainment, fashion, automotive services, and business
                  solutions.
                </p>

              </div>

            </div>

            <div className="values-grid">

              <div>
                <span>01</span>
                <h3>Build</h3>
                <p>
                  Turn ideas into businesses with real purpose and potential.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>Connect</h3>
                <p>
                  Create relationships between companies, customers, and
                  communities.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Grow</h3>
                <p>
                  Continue expanding into new markets and opportunities.
                </p>
              </div>

              <div>
                <span>04</span>
                <h3>Elevate</h3>
                <p>
                  Build brands that look, operate, and feel professional.
                </p>
              </div>

            </div>

          </section>
        )}

        {/* NETWORK */}

        {activePage === "network" && (
          <section className="inner-page">

            <div className="page-heading">

              <span className="section-kicker">
                OUR NETWORK
              </span>

              <h1>
                One
                <br />
                <em>umbrella.</em>
              </h1>

              <p>
                Every North Splash company serves its own market while
                contributing to a larger ecosystem of businesses.
              </p>

            </div>

            <div className="network">

              <div className="network-core">
                <div className="network-core-logo">
                  NS
                </div>

                <strong>NORTH SPLASH</strong>

                <span>ENTERPRISES</span>
              </div>

              {businesses.map((business, index) => (
                <div
                  key={business.name}
                  className={`network-business network-position-${index + 1}`}
                >

                  <div>
                    {business.initials}
                  </div>

                  <span>
                    {business.name}
                  </span>

                </div>
              ))}

            </div>

            <div className="network-bottom">

              <span className="section-kicker">
                THE BIGGER PICTURE
              </span>

              <h2>
                Independent brands.
                <br />
                <em>Shared opportunity.</em>
              </h2>

              <p>
                The North Splash network gives each company room to develop
                while creating opportunities for collaboration, shared
                resources, cross-industry relationships, and future growth.
              </p>

            </div>

          </section>
        )}

        {/* CONTACT */}

        {activePage === "contact" && (
          <section className="inner-page">

            <div className="page-heading">

              <span className="section-kicker">
                CONTACT NORTH SPLASH
              </span>

              <h1>
                Let's build
                <br />
                <em>something bigger.</em>
              </h1>

              <p>
                Have a question, partnership opportunity, business idea, or
                general inquiry? Send us a message.
              </p>

            </div>

            <div className="contact-layout">

              <div className="contact-details">

                <div className="contact-detail">

                  <span>COMPANY</span>

                  <h3>
                    North Splash Enterprises
                  </h3>

                  <p>
                    The umbrella behind the North Splash business network.
                  </p>

                </div>

                <div className="contact-detail">

                  <span>ONLINE</span>

                  <p>
                    northsplash.com
                  </p>

                </div>

                <div className="contact-detail">

                  <span>PORTFOLIO</span>

                  <p>
                    10 businesses and growing.
                  </p>

                </div>

              </div>

              <form
                className="contact-form"
                onSubmit={submitContact}
              >

                <div className="form-row">

                  <label>
                    Name
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                    />
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
                  What can we help with?

                  <select defaultValue="" required>

                    <option value="" disabled>
                      Select an option
                    </option>

                    <option>
                      General Inquiry
                    </option>

                    <option>
                      Business Partnership
                    </option>

                    <option>
                      Business Opportunity
                    </option>

                    <option>
                      North Splash Business
                    </option>

                    <option>
                      Other
                    </option>

                  </select>

                </label>

                <label>
                  Message

                  <textarea
                    rows="7"
                    placeholder="Tell us about your inquiry..."
                    required
                  />

                </label>

                <button
                  className="green-button"
                  type="submit"
                >
                  Send Message
                  <span>↗</span>
                </button>

              </form>

            </div>

          </section>
        )}

      </main>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-main">

          <div>

            <Logo footer />

            <p>
              A growing family of businesses
              <br />
              under one umbrella.
            </p>

          </div>

          <div className="footer-nav">

            <span>EXPLORE</span>

            <button onClick={() => navigate("home")}>
              Home
            </button>

            <button onClick={() => navigate("businesses")}>
              Businesses
            </button>

            <button onClick={() => navigate("about")}>
              About
            </button>

            <button onClick={() => navigate("network")}>
              Our Network
            </button>

            <button onClick={() => navigate("contact")}>
              Contact
            </button>

          </div>

          <div className="footer-nav">

            <span>PORTFOLIO</span>

            {businesses.slice(0, 5).map((business) => (
              <a
                key={business.name}
                href={business.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {business.name}
              </a>
            ))}

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} North Splash Enterprises.
            All rights reserved.
          </span>

          <span>
            northsplash.com
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;

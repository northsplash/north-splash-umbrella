import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

/*
=========================================================
NORTH SPLASH UMBRELLA
EDIT YOUR BUSINESS DOMAINS HERE
=========================================================
*/

const businesses = [
  {
    name: "North Splash ProClean",
    short: "ProClean",
    category: "Commercial Cleaning",
    number: "01",
    description:
      "Professional commercial cleaning solutions designed to keep businesses clean, polished, and ready for business.",
    image: "/images/proclean.jpg",
    domain: "https://nsproclean.com",
    accent: "CLEAN",
  },
  {
    name: "North Splash Grounds",
    short: "Grounds",
    category: "Landscaping",
    number: "02",
    description:
      "Landscape care and outdoor property solutions that create cleaner, healthier, better-looking spaces.",
    image: "/images/grounds.jpg",
    domain: "https://nsgrounds.com",
    accent: "GROUNDS",
  },
  {
    name: "North Splash PropertyCare",
    short: "PropertyCare",
    category: "Property Maintenance",
    number: "03",
    description:
      "Reliable property maintenance services helping properties stay functional, attractive, and cared for.",
    image: "/images/propertycare.jpg",
    domain: "https://nspropertycare.com",
    accent: "CARE",
  },
  {
    name: "NS Social Club",
    short: "Social Club",
    category: "Bowling & Entertainment",
    number: "04",
    description:
      "A social entertainment destination built around bowling, recreation, food, events, and memorable experiences.",
    image: "/images/social-club.jpg",
    domain: "https://nssocialclub.com",
    accent: "SOCIAL",
  },
  {
    name: "North Splash Renew",
    short: "Renew",
    category: "Pressure Washing",
    number: "05",
    description:
      "Exterior cleaning and pressure washing services that bring surfaces back to life.",
    image: "/images/renew.jpg",
    domain: "https://nsrenew.com",
    accent: "RENEW",
  },
  {
    name: "North Splash ClearOut",
    short: "ClearOut",
    category: "Junk Removal",
    number: "06",
    description:
      "Junk removal and property cleanout services designed to make clearing unwanted items simple.",
    image: "/images/clearout.jpg",
    domain: "https://nsclearout.com",
    accent: "CLEAR",
  },
  {
    name: "NS Dynasty",
    short: "Dynasty",
    category: "Apartments",
    number: "07",
    description:
      "Residential living developed around comfort, convenience, community, and long-term value.",
    image: "/images/dynasty.jpg",
    domain: "https://nsdynasty.com",
    accent: "LIVING",
  },
  {
    name: "Riche Et Beau",
    short: "Riche Et Beau",
    category: "Women's Clothing",
    number: "08",
    description:
      "A women's fashion brand focused on elevated style, confidence, beauty, and individuality.",
    image: "/images/riche-et-beau.jpg",
    domain: "https://richeetbeau.com",
    accent: "STYLE",
  },
  {
    name: "North Splash Auto Luxe",
    short: "Auto Luxe",
    category: "Mobile Detailing",
    number: "09",
    description:
      "Premium mobile vehicle detailing that brings a luxury automotive experience directly to the customer.",
    image: "/images/auto-luxe.jpg",
    domain: "https://nsautoluxe.com",
    accent: "AUTO",
  },
  {
    name: "NS Venture Works",
    short: "Venture Works",
    category: "Business Essentials",
    number: "10",
    description:
      "Business essentials and creative services helping entrepreneurs build, launch, and grow.",
    image: "/images/venture-works.jpg",
    domain: "https://nsventureworks.com",
    accent: "VENTURE",
  },
];

/* =====================================================
   NAVIGATION
===================================================== */

const navItems = [
  { id: "home", label: "Home" },
  { id: "businesses", label: "Businesses" },
  { id: "about", label: "About" },
  { id: "network", label: "Our Network" },
  { id: "contact", label: "Contact" },
];

/* =====================================================
   HOOKS
===================================================== */

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

/* =====================================================
   HEADER
===================================================== */

function Header({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    setPage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <button className="brand" onClick={() => go("home")}>
        <span className="brand-mark">
          <span>N</span>
          <i></i>
        </span>

        <span className="brand-text">
          <strong>NORTH SPLASH</strong>
          <small>BUSINESS NETWORK</small>
        </span>
      </button>

      <nav className={menuOpen ? "main-nav open" : "main-nav"}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={page === item.id ? "active" : ""}
            onClick={() => go(item.id)}
          >
            {item.label}
          </button>
        ))}

        <button className="nav-cta" onClick={() => go("businesses")}>
          Explore Network
          <span>↗</span>
        </button>
      </nav>

      <button
        className="mobile-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

/* =====================================================
   HOME
===================================================== */

function Home({ setPage }) {
  const featured = businesses.slice(0, 4);

  return (
    <main>
      <section className="hero">
        <div className="hero-grid"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-content">
          <div className="eyebrow reveal">
            <span></span>
            THE NORTH SPLASH NETWORK
          </div>

          <h1 className="hero-title reveal">
            ONE VISION.
            <br />
            <em>MANY</em> POSSIBILITIES.
          </h1>

          <p className="hero-description reveal">
            North Splash brings a growing collection of businesses,
            services, experiences, and opportunities together under one
            connected network.
          </p>

          <div className="hero-actions reveal">
            <button className="button button-green" onClick={() => setPage("businesses")}>
              Explore Our Businesses
              <span>↗</span>
            </button>

            <button className="button button-outline" onClick={() => setPage("about")}>
              Discover North Splash
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="/images/north-splash-hero.jpg"
              alt="North Splash"
            />

            <div className="hero-image-overlay"></div>

            <div className="floating-card floating-card-top">
              <span>NETWORK</span>
              <strong>10+</strong>
              <small>BUSINESS VENTURES</small>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="pulse-dot"></span>
              <div>
                <strong>BUILDING</strong>
                <small>THE NEXT CHAPTER</small>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <i></i>
        </div>
      </section>

      <section className="intro-section">
        <div className="section-number">01 / 05</div>

        <div className="intro-copy reveal">
          <p className="eyebrow green">A NETWORK BUILT TO GROW</p>

          <h2>
            More than businesses.
            <br />
            <span>A connected ecosystem.</span>
          </h2>

          <p>
            North Splash is designed as an umbrella for ventures across
            property, lifestyle, automotive, entertainment, business services,
            and more.
          </p>

          <button className="text-link" onClick={() => setPage("about")}>
            Learn about North Splash <span>↗</span>
          </button>
        </div>

        <div className="intro-stat reveal">
          <div className="big-number">10</div>
          <div className="stat-line"></div>
          <p>BRANDS<br />UNDER ONE<br />NETWORK</p>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow green">THE PORTFOLIO</p>
            <h2>Explore the<br /><span>North Splash family.</span></h2>
          </div>

          <button className="button button-dark" onClick={() => setPage("businesses")}>
            View All Businesses <span>↗</span>
          </button>
        </div>

        <div className="featured-grid">
          {featured.map((business, index) => (
            <BusinessCard
              key={business.name}
              business={business}
              index={index}
              onClick={() => setPage("businesses")}
            />
          ))}
        </div>
      </section>

      <section className="statement-section">
        <div className="statement-bg"></div>

        <div className="statement-content reveal">
          <p className="eyebrow">NORTH SPLASH</p>

          <h2>
            Built for today.
            <br />
            Designed for <span>what's next.</span>
          </h2>

          <p>
            From everyday services to destination experiences, every venture
            adds another piece to the North Splash story.
          </p>
        </div>
      </section>

      <section className="home-network-preview">
        <div className="network-preview-image reveal">
          <img
            src="/images/north-splash-network.jpg"
            alt="North Splash network"
          />
          <div className="image-number">NS / 001</div>
        </div>

        <div className="network-preview-copy reveal">
          <p className="eyebrow green">OUR NETWORK</p>
          <h2>
            Different industries.
            <br />
            <span>One standard.</span>
          </h2>

          <p>
            Each North Splash venture has its own identity, while sharing the
            same commitment to professionalism, growth, and customer
            experience.
          </p>

          <button className="text-link" onClick={() => setPage("network")}>
            Explore our network <span>↗</span>
          </button>
        </div>
      </section>
    </main>
  );
}

/* =====================================================
   BUSINESS CARD
===================================================== */

function BusinessCard({ business, index, onClick }) {
  return (
    <article className="business-card reveal" style={{ "--delay": `${index * 80}ms` }}>
      <div className="business-image">
        <img src={business.image} alt={business.name} />

        <div className="business-image-shade"></div>

        <span className="business-number">{business.number}</span>

        <span className="business-arrow">↗</span>
      </div>

      <div className="business-info">
        <p>{business.category}</p>

        <h3>{business.name}</h3>

        <div className="business-bottom">
          <span>{business.accent}</span>

          <button onClick={onClick}>
            Explore
            <span>→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

/* =====================================================
   BUSINESSES PAGE
===================================================== */

function Businesses() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(businesses.map((b) => b.category))];

  const filtered =
    filter === "All"
      ? businesses
      : businesses.filter((business) => business.category === filter);

  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="page-hero-grid"></div>

        <div className="page-hero-content reveal">
          <p className="eyebrow green">THE NORTH SPLASH PORTFOLIO</p>

          <h1>
            Our
            <br />
            <span>Businesses.</span>
          </h1>

          <p>
            A growing network of companies built to serve, create, entertain,
            develop, and move businesses and communities forward.
          </p>
        </div>

        <div className="page-hero-side">
          <span>10</span>
          <p>ACTIVE<br />VENTURES</p>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="filter-bar reveal">
          <div>
            <span>FILTER BY</span>
          </div>

          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={filter === category ? "selected" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-grid">
          {filtered.map((business, index) => (
            <BusinessCard
              key={business.name}
              business={business}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

/* =====================================================
   ABOUT
===================================================== */

function About() {
  return (
    <main className="inner-page">
      <section className="about-hero">
        <div className="about-copy reveal">
          <p className="eyebrow green">ABOUT NORTH SPLASH</p>

          <h1>
            One company.
            <br />
            <span>Many directions.</span>
          </h1>

          <p>
            North Splash is an umbrella business network created to bring
            multiple ventures together under a shared vision for growth,
            service, innovation, and opportunity.
          </p>
        </div>

        <div className="about-circle reveal">
          <div className="circle-ring"></div>
          <strong>NS</strong>
          <span>EST.</span>
        </div>
      </section>

      <section className="about-story">
        <div className="story-label reveal">
          <span>OUR STORY</span>
          <i></i>
        </div>

        <div className="story-content reveal">
          <h2>
            The goal isn't to build
            <br />
            <span>one business.</span>
          </h2>

          <p>
            It's to build a platform capable of supporting many.
          </p>

          <p>
            North Splash brings together service companies, lifestyle brands,
            property ventures, entertainment concepts, automotive services,
            and business solutions under one umbrella.
          </p>

          <p>
            Each company is designed to stand on its own while contributing to
            something larger.
          </p>
        </div>
      </section>

      <section className="values-section">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow green">THE NORTH SPLASH STANDARD</p>
            <h2>
              Built around
              <br />
              <span>four principles.</span>
            </h2>
          </div>
        </div>

        <div className="values-grid">
          {[
            ["01", "Quality", "Build things people are proud to use, own, visit, and recommend."],
            ["02", "Growth", "Create ventures with room to evolve, expand, and reach new markets."],
            ["03", "Experience", "Make the customer experience part of the product itself."],
            ["04", "Connection", "Build a network where individual ventures create collective strength."],
          ].map(([number, title, text]) => (
            <div className="value-card reveal" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

/* =====================================================
   NETWORK
===================================================== */

function Network() {
  return (
    <main className="inner-page">
      <section className="network-hero">
        <div className="network-hero-content reveal">
          <p className="eyebrow green">OUR NETWORK</p>

          <h1>
            Ten ventures.
            <br />
            <span>One ecosystem.</span>
          </h1>

          <p>
            The North Splash network connects businesses across multiple
            industries while allowing each brand to develop its own identity.
          </p>
        </div>

        <div className="network-orbit">
          <div className="orbit-center">NS</div>
          <div className="orbit-ring orbit-one"></div>
          <div className="orbit-ring orbit-two"></div>
          <div className="orbit-dot dot-one"></div>
          <div className="orbit-dot dot-two"></div>
          <div className="orbit-dot dot-three"></div>
        </div>
      </section>

      <section className="network-map">
        <div className="network-map-title reveal">
          <p className="eyebrow green">THE ECOSYSTEM</p>
          <h2>
            Different paths.
            <br />
            <span>Shared direction.</span>
          </h2>
        </div>

        <div className="network-list">
          {businesses.map((business, index) => (
            <a
              href={business.domain}
              target="_blank"
              rel="noreferrer"
              className="network-row reveal"
              key={business.name}
            >
              <span>{business.number}</span>

              <strong>{business.name}</strong>

              <em>{business.category}</em>

              <i>↗</i>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

/* =====================================================
   CONTACT
===================================================== */

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="inner-page contact-page">
      <section className="contact-hero">
        <div className="contact-copy reveal">
          <p className="eyebrow green">CONTACT NORTH SPLASH</p>

          <h1>
            Let's build
            <br />
            <span>what's next.</span>
          </h1>

          <p>
            Interested in one of our businesses, partnering with the network,
            or exploring an opportunity? Start the conversation.
          </p>
        </div>

        <div className="contact-mark reveal">
          <span>NS</span>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-details reveal">
          <p className="eyebrow green">GET IN TOUCH</p>

          <h2>
            Tell us
            <br />
            what's on your mind.
          </h2>

          <div className="contact-line">
            <span>NETWORK</span>
            <strong>North Splash</strong>
          </div>

          <div className="contact-line">
            <span>WEBSITE</span>
            <strong>northsplash.com</strong>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={submit}>
          <label>
            <span>YOUR NAME</span>
            <input required type="text" placeholder="Your name" />
          </label>

          <label>
            <span>EMAIL</span>
            <input required type="email" placeholder="you@example.com" />
          </label>

          <label>
            <span>INTERESTED IN</span>
            <select>
              <option>North Splash Network</option>
              {businesses.map((business) => (
                <option key={business.name}>{business.name}</option>
              ))}
            </select>
          </label>

          <label>
            <span>MESSAGE</span>
            <textarea required placeholder="Tell us how we can help..." />
          </label>

          <button className="button button-green submit-button" type="submit">
            {submitted ? "Message Ready ✓" : "Send Message"}
            <span>↗</span>
          </button>
        </form>
      </section>
    </main>
  );
}

/* =====================================================
   FOOTER
===================================================== */

function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <button className="brand footer-brand-button" onClick={() => setPage("home")}>
            <span className="brand-mark">
              <span>N</span>
              <i></i>
            </span>

            <span className="brand-text">
              <strong>NORTH SPLASH</strong>
              <small>BUSINESS NETWORK</small>
            </span>
          </button>

          <p>
            A growing network of businesses built under one vision.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <span>NAVIGATION</span>

            <button onClick={() => setPage("businesses")}>Businesses</button>
            <button onClick={() => setPage("about")}>About</button>
            <button onClick={() => setPage("network")}>Our Network</button>
            <button onClick={() => setPage("contact")}>Contact</button>
          </div>

          <div>
            <span>BUSINESSES</span>

            {businesses.slice(0, 5).map((business) => (
              <a
                key={business.name}
                href={business.domain}
                target="_blank"
                rel="noreferrer"
              >
                {business.short}
              </a>
            ))}
          </div>

          <div>
            <span>MORE</span>

            {businesses.slice(5).map((business) => (
              <a
                key={business.name}
                href={business.domain}
                target="_blank"
                rel="noreferrer"
              >
                {business.short}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} North Splash. All rights reserved.</span>

        <span>BUILT TO GROW.</span>
      </div>
    </footer>
  );
}

/* =====================================================
   APP
===================================================== */

function App() {
  const [page, setPage] = useState("home");

  useReveal();

  useEffect(() => {
    document.title =
      page === "home"
        ? "North Splash | Business Network"
        : `${navItems.find((item) => item.id === page)?.label || "North Splash"} | North Splash`;

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  return (
    <div className="app">
      <Header page={page} setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}
      {page === "businesses" && <Businesses />}
      {page === "about" && <About />}
      {page === "network" && <Network />}
      {page === "contact" && <Contact />}

      <Footer setPage={setPage} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

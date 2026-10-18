import { Sparkles, ArrowUpRight } from "lucide-react";
// Import the React hooks used by the page.
import { useEffect, useState } from "react";

// Import the website styles.
import "./index.css";

// Main page for the fictional luxury beauty and bridal studio.
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Reveal sections gently as visitors scroll down the page.
useEffect(() => {
  // Skip scroll animations when the visitor prefers reduced motion.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  // Find the main sections and cards that should animate into view.
  const elements = document.querySelectorAll(
    ".orchid-story-v2, .orchid-services-v2, .orchid-gallery-v2, .orchid-footer-v2, .service-v2-card, .gallery-v2-item"
  );

  // Observe each element as it enters the viewport.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
      if (entry.isIntersecting) {
  // Reveal the section when it enters the viewport.
  entry.target.classList.add("is-visible");

  // Replay the portrait entrance animation when the hero returns.
  if (entry.target.classList.contains("orchid-hero")) {
    const portrait = entry.target.querySelector(".hero-portrait");

    if (portrait) {
      portrait.classList.remove("portrait-replay");

      // Force the browser to restart the CSS animation.
      void portrait.offsetWidth;

      portrait.classList.add("portrait-replay");
    }
  }
}
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px",
    }
  );

  elements.forEach((element) => {
    element.classList.add("reveal-on-scroll");
    observer.observe(element);
  });

  // Clean up the observer when the component unmounts.
  return () => observer.disconnect();
}, []);

  return (
    <main className="orchid-site">
      {/* Navigation: restrained typography with a mobile menu. */}
      <header className="orchid-nav">
        <a className="orchid-logo" href="#home" aria-label="Orchid Noir home">
          ORCHID <span>NOIR</span>
          <small>BEAUTY · BRIDAL · ARTISTRY</small>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "CLOSE −" : "MENU +"}
        </button>

        <nav className={`orchid-links ${menuOpen ? "menu-open" : ""}`}>
          <a href="#story" onClick={() => setMenuOpen(false)}>OUR WORLD</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>SERVICES</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>PORTFOLIO</a>
          <a className="nav-appointment" href="#contact" onClick={() => setMenuOpen(false)}>
            BOOK A CONSULTATION <ArrowUpRight size={18} strokeWidth={1.5} />
          </a>
        </nav>
      </header>

      {/* Hero: bold editorial typography and an organic portrait reveal. */}
      <section className="orchid-hero" id="home">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-dot" />
            AN ARTISTRY HOUSE · EST. 2026
          </p>

          <h1 className="hero-title">
            <span className="title-line title-line-one">
              <span>BEAUTY</span>
            </span>
            <span className="title-line title-line-two">
             <em className="title-italic">BEYOND</em>
            </span>
            <span className="title-line title-line-three">
              <span>ORDINARY.</span>
            </span>
          </h1>

          <p className="hero-description">
            A little romance. A little rebellion.
            <br />
            An entirely personal kind of beautiful.
          </p>

          <a className="hero-cta" href="#services">
            <span>DISCOVER YOUR RITUAL</span>
            <span className="cta-arrow"><ArrowUpRight size={18} strokeWidth={1.5} /></span>
          </a>

          <div className="hero-index">
            <span>01</span>
            <span className="index-line" />
            <span>THE ART OF YOU</span>
          </div>
        </div>

        {/* The decorative frame reveals the portrait through an organic mask. */}
        <div className="hero-visual">
          <div className="portrait-halo" aria-hidden="true" />
          <div className="portrait-frame">
            <img
              className="hero-portrait"
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=85"
              alt="Beauty editorial portrait with soft, natural makeup"
            />
            <div className="portrait-tint" aria-hidden="true" />
          </div>

          <div className="portrait-label">
            <span>01 / 04</span>
            <span>SOFTLY UNCONVENTIONAL</span>
          </div>

          <div className="floating-note">
            <span className="note-star"><Sparkles size={16} strokeWidth={1.5} /></span>
            <span>YOUR BEAUTY,</span>
            <span>YOUR RULES.</span>
          </div>

          <div className="vertical-note">MAKE ROOM FOR MAGIC</div>
        </div>

        <div className="hero-bottom">
          <span>MAKEUP · SKIN · BRIDAL</span>
          <span className="hero-bottom-center">A DIFFERENT KIND OF BEAUTY HOUSE</span>
          <a href="#story">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>

      
      {/* Studio story: a contrasting section creates a visual pause. */}
      <section className="orchid-story-v2" id="story">
        <p className="eyebrow">A DIFFERENT KIND OF BEAUTY HOUSE</p>

        <div className="story-v2-layout">
          <span className="story-v2-mark" aria-hidden="true"><Sparkles size={16} strokeWidth={1.5} /></span>

          <h2>
            Beauty isn't
            <br />
            about becoming.
            <br />
            <em>It's about revealing.</em>
          </h2>

          <div className="story-v2-copy">
            <span className="story-v2-number">01 — OUR PHILOSOPHY</span>
            <p>
              We believe the most beautiful look is the one that still feels
              like you. Thoughtful artistry, considered details and a little
              unexpected magic make every appointment personal.
            </p>
            <a href="#services" className="text-link">
              DISCOVER OUR APPROACH <span><ArrowUpRight size={18} strokeWidth={1.5} /></span>
            </a>
          </div>
        </div>
      </section>

      {/* Services: three simple cards with an editorial number system. */}
      <section className="orchid-services-v2" id="services">
        <div className="section-v2-heading">
          <div>
            <p className="eyebrow">THE ARTISTRY MENU</p>
            <h2>Find your <em>ritual.</em></h2>
          </div>
          <p>
            For the everyday, the extraordinary,
            <br className="desktop-break" /> and every moment in between.
          </p>
        </div>

        <div className="service-v2-grid">
          <a className="service-v2-card" href="#contact">
            <div className="service-v2-image service-v2-image-one">
              <img
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=850&q=85"
                alt="Beauty portrait with softly defined makeup"
                loading="lazy"
              />
              <span className="service-v2-index">01</span>
              <span className="service-v2-arrow"><ArrowUpRight size={18} strokeWidth={1.5} /></span>
            </div>
            <p className="service-v2-kicker">THE EVERYDAY EDIT</p>
            <h3>Beauty rituals</h3>
            <p className="service-v2-description">
              Effortless looks, thoughtful details and beauty that feels like you.
            </p>
          </a>

          <a className="service-v2-card service-v2-card-offset" href="#contact">
            <div className="service-v2-image service-v2-image-two">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=850&q=85"
                alt="Elegant editorial portrait in soft natural light"
                loading="lazy"
              />
              
              <span className="service-v2-arrow"><ArrowUpRight size={18} strokeWidth={1.5} /></span>
            </div>
            <p className="service-v2-kicker">MADE FOR YOUR MOMENT</p>
            <h3>Occasion artistry</h3>
            <p className="service-v2-description">
              Expressive, polished looks for celebrations worth remembering.
            </p>
          </a>

          <a className="service-v2-card" href="#contact">
            <div className="service-v2-image service-v2-image-three">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=850&q=85"
                alt="Close-up beauty portrait with natural skin finish"
                loading="lazy"
              />
              <span className="service-v2-index">03</span>
              <span className="service-v2-arrow"><ArrowUpRight size={18} strokeWidth={1.5} /></span>
            </div>
            <p className="service-v2-kicker">YOUR ONCE-UPON-A-TIME</p>
            <h3>Bridal beauty</h3>
            <p className="service-v2-description">
              A considered bridal look for a day that belongs entirely to you.
            </p>
          </a>
        </div>

        <p className="service-v2-note">
          Every face is different. Every look begins with a conversation.
        </p>
      </section>

      {/* Portfolio: varied image sizes create a magazine-like composition. */}
      <section className="orchid-gallery-v2" id="gallery">
        <div className="gallery-v2-heading">
          <p className="eyebrow">A STUDY IN BEAUTY</p>
          <h2>Every face, <em>a story.</em></h2>
          <p>A little softness. A little boldness. Always entirely personal.</p>
        </div>

        <div className="gallery-v2-grid">
          <figure className="gallery-v2-item gallery-v2-large">
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1100&q=85"
              alt="Editorial beauty portrait"
              loading="lazy"
            />
            <figcaption>
              <span>01 / THE SOFT EDIT</span>
              <span>Natural elegance</span>
            </figcaption>
          </figure>

          <figure className="gallery-v2-item gallery-v2-small">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=850&q=85"
              alt="Fashion editorial portrait"
              loading="lazy"
            />
            <figcaption>
              <span>02 / THE MODERN MUSE</span>
              <span>Quiet confidence</span>
            </figcaption>
          </figure>

          <figure className="gallery-v2-item gallery-v2-bottom">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=85"
              alt="Beauty portrait in warm natural light"
              loading="lazy"
            />
            <figcaption>
              <span>03 / THE ROMANTIC</span>
              <span>Beauty in the details</span>
            </figcaption>
          </figure>

          <div className="gallery-v2-aside">
            <span className="gallery-v2-star"><Sparkles size={16} strokeWidth={1.5} /></span>
            <p>Not a mask.</p>
            <p><em>A little more you.</em></p>
            <span className="gallery-v2-aside-note">THE ORCHID NOIR POINT OF VIEW</span>
          </div>
        </div>
      </section>

      {/* Closing section: the primary enquiry action. */}
      <footer className="orchid-footer-v2" id="contact">
        <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
        <span className="footer-v2-star" aria-hidden="true"><Sparkles size={16} strokeWidth={1.5} /></span>
        <h2>
          Let's create
          <br />
          <em>your kind of beautiful.</em>
        </h2>
        <p>Tell us what you're dreaming of. We'll take it from there.</p>

        {/* Replace this placeholder URL with the studio's real WhatsApp link. */}
        <a
          className="footer-v2-cta"
          href="https://wa.me/917010508392"
          target="_blank"
          rel="noreferrer"
        >
          START A CONVERSATION <span><ArrowUpRight size={18} strokeWidth={1.5} /></span>
        </a>

        <div className="footer-v2-bottom">
          <a href="#home" className="footer-v2-logo">ORCHID NOIR</a>
          <span>BEAUTY · BRIDAL · ARTISTRY</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>

    </main>
  );
}

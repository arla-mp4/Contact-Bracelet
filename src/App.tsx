
/*
Cat Millwood
Date: 11/05/2026
Class: Personal Web Development
Assignment: QRLynk Personal Website
*/

import { useState } from "react";
import { motion } from "motion/react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedInterest, setExpandedInterest] = useState<string | null>(null);

  const sections = [
    { number: "01", title: "A little about me", id: "about" },
    { number: "02", title: "Things I create", id: "create" },
    { number: "03", title: "Find me elsewhere", id: "connect" },
  ];

  return (
    <main className="page">
          <header className="top-bar">
            <img
            src="/images/cat-millwood-logo.png"
            alt="Cat Millwood"
            className="logo"
          />
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "CLOSE −" : "MENU +"}
        </button>
      </header>

      {menuOpen && (
        <motion.nav
          className="dropdown-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {section.title}
            </a>
          ))}
        </motion.nav>
      )}

      <section className="hero">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          A LITTLE BIT OF EVERYTHING
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Well, hello
          <br />
          <span>there.</span>
        </motion.h1>

        <div className="hero-image-wrap">
          <motion.img
            className="hero-image"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900"
            alt="Portrait photograph"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />

          <div className="image-note">A face to the name ♡</div>
          <div className="image-number">EST. 2022</div>
        </div>

        <p className="hero-description">
          I'm Cat. A creative mind, a little tech-obsessed,
          and always working on something interesting.
        </p>

        <a href="#about" className="scroll-link">
          GET TO KNOW ME <span>↓</span>
        </a>
      </section>

      <section className="intro-section" id="about">
        <p className="eyebrow">01 / THE PERSON BEHIND THE BRACELET</p>
        <h2>
          More than
          <br />
          <span>a name.</span>
        </h2>
        <p>
          I'm interested in the intersection of creativity,
          technology, photography, and the little things
          that make life interesting.
        </p>
        <p className="small-note">
          Consider this your little introduction to my world.
        </p>
      </section>

      <button
  className="interest-card photography-card"
  onClick={() =>
    setExpandedInterest(expandedInterest === "photography" ? null : "photography")
  }
  aria-expanded={expandedInterest === "photography"}
>
  <span className="card-number">01 / TAP TO EXPLORE</span>
  <div>
    <p className="card-label">BEHIND THE CAMERA</p>
    <h3>Photography</h3>
    <p>People, stories, and moments worth keeping.</p>
    {expandedInterest === "photography" && (
      <p className="expanded-detail">
        Portraits, lifestyle sessions, special events, and capturing the moments
        people want to remember.
      </p>
    )}
  </div>
</button>

<button
  className="interest-card technology-card"
  onClick={() =>
    setExpandedInterest(expandedInterest === "technology" ? null : "technology")
  }
  aria-expanded={expandedInterest === "technology"}
>
  <span className="card-number">02 / TAP TO EXPLORE</span>
  <div>
    <p className="card-label">BUILDING THINGS</p>
    <h3>Technology</h3>
    <p>Code, creative projects, and figuring things out.</p>
    {expandedInterest === "technology" && (
      <p className="expanded-detail">
        Computer science, web development, hardware, and experimenting with
        new ideas.
      </p>
    )}
  </div>
</button>

<button
  className="interest-card life-card"
  onClick={() =>
    setExpandedInterest(expandedInterest === "life" ? null : "life")
  }
  aria-expanded={expandedInterest === "life"}
>
  <span className="card-number">03 / TAP TO EXPLORE</span>
  <div>
    <p className="card-label">ALWAYS LEARNING</p>
    <h3>Everything else</h3>
    <p>New ideas, new experiences, and whatever comes next.</p>
    {expandedInterest === "life" && (
      <p className="expanded-detail">
        The projects, experiences, interests, and unexpected opportunities
        that make life interesting.
      </p>
    )}
  </div>
</button>

      <section className="connect-section" id="connect">
        <p className="eyebrow">03 / LET'S CONNECT</p>

        <h2>
          Don't be
          <br />
          <span>a stranger.</span>
        </h2>

        <p>
          Have a question, an idea, or just want to say hello?
          Here's where you can find me.
        </p>

        <ContactCard />

        <p className="small-note">
          More links and socials coming soon.
        </p>
      </section>

      <footer className="footer">
        <span>MADE WITH A LITTLE PERSONALITY ♡</span>
        <span>CM. © 2026</span>
      </footer>
    </main>
  );
}

function ContactCard() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="contact-card">
      <div className="contact-card-top">
        <span>YOUR DIGITAL CONTACT CARD</span>
        <span>CM. / 2026</span>
      </div>

      <div className="contact-card-name">
        <p>THE PERSON BEHIND THE PAGE</p>
        <h3>Cat Millwood</h3>
        <span>Creative mind. Tech enthusiast. Photographer.</span>
      </div>

      <button
        className="contact-reveal"
        onClick={() => setShowDetails(!showDetails)}
        aria-expanded={showDetails}
      >
        {showDetails ? "HIDE DETAILS −" : "REVEAL CONTACT +"}
      </button>

      {showDetails && (
        <div className="contact-details">
          <p>EMAIL</p>
          <span>Coming soon</span>

          <p>SOCIALS</p>
          <span>Links coming soon</span>
        </div>
      )}
    </div>
  );
}

export default App;

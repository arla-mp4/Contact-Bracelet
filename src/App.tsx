import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import "./App.css";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaGlobe,
  FaEnvelope
} from "react-icons/fa6";

function App() {
  const location = useLocation();  
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { number: "01", title: "A little about me", id: "about" },
    { number: "02", title: "Things I create", id: "create" },
    { number: "03", title: "Find me elsewhere", id: "connect" },
  ];

    // CM - Display separate interest pages
  if (location.pathname !== "/") {
    const pageTitles: Record<string, string> = {
      "/photography": "Photography",
      "/technology": "Technology",
      "/everything-else": "Everything Else",
    };

    const pageTitle = pageTitles[location.pathname];

    return (
      <main className="page">
        <header className="top-bar">
          <img
            src="/images/cat-millwood-logo.png"
            alt="Cat Millwood"
            className="logo"
          />
          <Link to="/" className="menu-button">
            BACK HOME
          </Link>
        </header>

        <section className="intro-section">
    <p className="eyebrow">EXPLORE MY WORLD</p>
    <h2>{pageTitle || "Page not found"}</h2>

   {/* CM - Photography Portfolio */}
    {location.pathname === "/photography" && (
      <section className="photography-portfolio">

        {/* CM - Featured photography image */}
        <div className="photo-hero">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200"
            alt="Romantic outdoor photography"
          />
          <div className="photo-hero-overlay">
            <p className="eyebrow">CAT MILLWOOD PHOTOGRAPHY</p>
            <h2>Life looks good on you.</h2>
            <p>Real people. Real moments. Beautiful stories.</p>
          </div>
        </div>

        {/* CM - Introduction */}
        <div className="photo-intro">
          <p className="eyebrow">BEHIND THE CAMERA</p>
          <h2>More than just a picture.</h2>
          <p>
            Photography is my way of capturing people, stories,
            and the little moments that deserve to be remembered.
            Whether it's a milestone or an ordinary afternoon,
            there's something worth capturing in every story.
          </p>
        </div>

        {/* CM - Photography gallery */}
        <div className="photo-gallery">
          <div className="gallery-heading">
            <p className="eyebrow">A FEW FAVORITE MOMENTS</p>
            <h2>Through my lens.</h2>
          </div>

          <div className="gallery-grid">
            <img
              src="https://images-pw.pixieset.com/site/N1bbYp/VqGk1lr/000282-f9af4cc2-1500.jpg"
              alt="Portrait photography"
            />
            <img
              src="https://images-pw.pixieset.com/site/N1bbYp/50pwmyp/20260302_105018_AD5BEC-573eb665-1500.JPEG"
              alt="Wedding photography"
            />
            <img
              src="https://images-pw.pixieset.com/site/N1bbYp/nWR0llo/IMG_0320-7b0f672a-1500.jpg"
              alt="Lifestyle portrait"
            />
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=700"
              alt="Family photography"
            />
          </div>
        </div>

        {/* CM - Photography categories */}
        <div className="photo-categories">
          <p className="eyebrow">WHAT I LOVE TO CAPTURE</p>
          <h2>Your moments, your story.</h2>

          <div className="photo-category-list">
            <div>01 <span>Portraits & Lifestyle</span></div>
            <div>02 <span>Couples & Engagements</span></div>
            <div>03 <span>Graduations & Seniors</span></div>
            <div>04 <span>Weddings & Events</span></div>
            <div>05 <span>Personal Branding</span></div>
          </div>
        </div>

        {/* CM - Photography links */}
        <div className="photo-cta">
          <p className="eyebrow">LET'S MAKE SOMETHING MEMORABLE</p>
          <h2>Have a moment in mind?</h2>
          <a
            href="https://catmillwood.com"
            target="_blank"
            rel="noreferrer"
            className="scroll-link"
          >
            VISIT MY PHOTOGRAPHY WEBSITE ↗
          </a>

          <a
            href="https://www.instagram.com/cat.millwood.photography/"
            target="_blank"
            rel="noreferrer"
            className="scroll-link"
          >
            FOLLOW ALONG ON INSTAGRAM ↗
          </a>
        </div>

      </section>
    )}
    {location.pathname === "/technology" && (
      <>
        <p>
          I'm interested in computer science, web development,
          technology, and building things that solve problems.
        </p>

        <p className="small-note">
          Coding · Development · Hardware · Projects
        </p>

        <a href="https://github.com/arla-mp4" className="scroll-link">
          EXPLORE MY GITHUB ↗
        </a>
      </>
    )}

    {location.pathname === "/everything-else" && (
      <>
        <p>
          There's more to me than photography and technology.
          I'm always learning, exploring new interests, and
          finding new projects to get involved in.
        </p>

        <p className="small-note">
          Experiences · Creativity · Community · New Ideas
        </p>
      </>
    )}
  </section>
        </main>
      );
    }

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

        {/* CM - Navigation cards for separate pages */}
        <Link to="/photography" className="interest-card photography-card">
          <span className="card-number">01 / TAP TO EXPLORE ↗</span>
          <div>
            <p className="card-label">BEHIND THE CAMERA</p>
            <h3>Photography</h3>
            <p>People, stories, and moments worth keeping.</p>
          </div>
        </Link>

        <Link to="/technology" className="interest-card technology-card">
          <span className="card-number">02 / TAP TO EXPLORE ↗</span>
          <div>
            <p className="card-label">BUILDING THINGS</p>
            <h3>Technology</h3>
            <p>Code, creative projects, and figuring things out.</p>
          </div>
        </Link>

        <Link to="/everything-else" className="interest-card life-card">
          <span className="card-number">03 / TAP TO EXPLORE ↗</span>
          <div>
            <p className="card-label">ALWAYS LEARNING</p>
            <h3>Everything else</h3>
            <p>New ideas, new experiences, and whatever comes next.</p>
          </div>
        </Link>

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
        <ShareCard />

      </section>

      <footer className="footer">
        <span>MADE WITH A LITTLE PERSONALITY ♡</span>
        <span>CM. © 2026</span>
      </footer>
    </main>
  );
}

// CM - Share the QRLynk page
function ShareCard() {
  const [shareMessage, setShareMessage] = useState("Share my page");

  async function handleShare() {
    const pageUrl = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Cat Millwood",
          text: "Connect with me!",
          url: pageUrl,
        });
      } else {
        await navigator.clipboard.writeText(pageUrl);
        setShareMessage("Link copied!");

        setTimeout(() => {
          setShareMessage("Share my page");
        }, 2000);
      }
    } catch (error) {
      console.log("Sharing cancelled or unavailable.", error);
    }
  }

  return (
    <button className="share-card" onClick={handleShare}>
      <span className="share-card-icon">↗</span>

      <span className="share-card-text">
        <strong>{shareMessage}</strong>
        <small>Send my page to someone</small>
      </span>
    </button>
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
        <p>THE PERSON BEHIND THE CAMERA</p>
        <h3>Cat Millwood</h3>
        <span>Creative mind. Tech enthusiast. Photographer.</span>
      </div>

      <button
        className="contact-reveal"
        onClick={() => setShowDetails(!showDetails)}
        aria-expanded={showDetails}
      >
        {showDetails ? "HIDE DETAILS −" : "FIND ME ONLINE +"}
      </button>

      {showDetails && (
        <div className="contact-details">
          <p>PHOTOGRAPHY</p>

          <div className="contact-details-grid">
            <a className="social-card" href="https://www.instagram.com/cat.millwood.photography/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
              <strong>Instagram</strong>
              <span>Photography ↗</span>
            </a>

            <a className="social-card" href="https://www.tiktok.com/@cat.millwood.photography" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="social-icon" />
              <strong>TikTok</strong>
              <span>Photography ↗</span>
            </a>

            <a className="social-card" href="https://www.facebook.com/profile.php?id=61559059625772" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="social-icon" />
              <strong>Facebook</strong>
              <span>Photography ↗</span>
            </a>

            <a className="social-card" href="https://catmillwood.com" target="_blank" rel="noopener noreferrer">
              <FaGlobe className="social-icon" />
              <strong>Website</strong>
              <span>Photography ↗</span>
            </a>
          </div>

          <p>PERSONAL</p>

          <div className="contact-details-grid">
            <a className="social-card" href="https://www.instagram.com/cat_arlene/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
              <strong>Instagram</strong>
              <span>Personal ↗</span>
            </a>

            <a className="social-card" href="https://www.tiktok.com/@Cat_Unfiltered" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="social-icon" />
              <strong>TikTok</strong>
              <span>Personal ↗</span>
            </a>

            <a className="social-card" href="https://www.facebook.com/Cat.Millwood04" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="social-icon" />
              <strong>Facebook</strong>
              <span>Personal ↗</span>
            </a>
          </div>

          <p>PROFESSIONAL & TECH</p>

          <div className="contact-details-grid">
            <a className="social-card" href="https://www.linkedin.com/in/cat-millwood-4a694224b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="social-icon" />
              <strong>LinkedIn</strong>
              <span>Professional ↗</span>
            </a>

            <a className="social-card" href="https://github.com/arla-mp4" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
              <strong>GitHub</strong>
              <span>Projects ↗</span>
            </a>

            <a className="social-card" href="mailto:caitlinmillwood40@gmail.com">
              <FaEnvelope className="social-icon" />
              <strong>Email</strong>
              <span>Say hello ↗</span>
            </a>

            <a
              href="/contact/cat-millwood.vcf"
              download="Cat-Millwood.vcf"
              className="save-contact-card"
            >
              <div className="save-contact-icon">
                <span>＋</span>
              </div>

              <div className="save-contact-text">
                <strong>Save My Contact</strong>
                <span>Add me to your contacts</span>
              </div>

              <span className="save-contact-arrow">↓</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
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
    {/* CM - Technology Portfolio */}
      {location.pathname === "/technology" && (
        <section className="technology-portfolio">

          {/* CM - Technology hero */}
          <div className="tech-hero">
            <div className="tech-hero-content">
              <p className="eyebrow">THE TECH SIDE OF ME</p>
              <h2>Curious mind. Always building.</h2>
              <p>
                From writing code to working with hardware,
                I enjoy figuring out how things work and
                finding ways to make them better.
              </p>
            </div>
            <div className="tech-decoration">
              <span>01</span>
              <span>10</span>
              <span>01</span>
              <span>11</span>
              <span>00</span>
              <span>10</span>
            </div>
          </div>

          {/* CM - Featured projects */}
          <div className="tech-projects">
            <p className="eyebrow">CURRENTLY IN MY WORKBENCH</p>
            <h2>Things I'm building.</h2>

            <div className="tech-project-card">
              <div className="project-icon">QR</div>
              <div className="project-number">PROJECT 01</div>
              <h3>QRLynk (How I made this!)</h3>
              <p>
                An interactive digital contact experience
                designed to connect people through an NFC
                bracelet and personalized webpage.
              </p>
              <span className="project-tag">React · TypeScript · Vite</span>
              <a
                href="https://github.com/arla-mp4/Contact-Bracelet"
                target="_blank"
                rel="noreferrer"
              >
                VIEW PROJECT ON GITHUB ↗
              </a>
            </div>

            <div className="tech-project-card">
              <div className="project-icon">TKE</div>
              <div className="project-number">PROJECT 02</div>
              <h3>The Karen Experience</h3>
              <p>
                I built a terminal simulator to practice Java logic and custom exceptions,
                but mostly just to see how much chaos I could pack into a CLI tool before 
                I destroy my own brain from the brain rot gods themselves.
              </p>
              <span className="project-tag">React · TypeScript · Education</span>
              <a
                href="https://github.com/arla-mp4"
                target="_blank"
                rel="noreferrer"
              >
                EXPLORE MY GITHUB ↗
              </a>
            </div>
          </div>

          {/* CM - Technical interests */}
          <div className="tech-interests">
            <p className="eyebrow">WHAT I'M INTO</p>
            <h2>A little bit of everything.</h2>

            <div className="tech-interest-grid">
              <div className="tech-interest-card">
                <span>01</span>
                <h3>Development</h3>
                <p>Websites, applications, and creative coding.</p>
              </div>

              <div className="tech-interest-card">
                <span>02</span>
                <h3>Hardware</h3>
                <p>Computer architecture, circuits, and electronics.</p>
              </div>

              <div className="tech-interest-card">
                <span>03</span>
                <h3>Problem Solving</h3>
                <p>Breaking down problems and finding solutions.</p>
              </div>

              <div className="tech-interest-card">
                <span>04</span>
                <h3>Learning</h3>
                <p>Exploring new tools, systems, and technologies.</p>
              </div>
            </div>
          </div>

          {/* CM - GitHub link */}
          <div className="tech-cta">
            <p className="eyebrow">MORE OF WHAT I'M WORKING ON</p>
            <h2>Let's look at the code.</h2>
            <a
              href="https://github.com/arla-mp4"
              target="_blank"
              rel="noreferrer"
              className="scroll-link"
            >
              VISIT MY GITHUB ↗
            </a>
          </div>

        </section>
      )}

    {/* CM - Everything Else Personal Portfolio */}
      {location.pathname === "/everything-else" && (
        <section className="everything-portfolio">

          {/* CM - Personal introduction */}
          <div className="life-hero">
            <div className="life-hero-top">
              <p className="eyebrow">THE PERSON BEHIND THE PROJECTS</p>
              <span className="life-stamp">A LITTLE OF EVERYTHING</span>
            </div>

            <h2>
              One person.
              <br />
              A hundred interests.
              <br />
              Always growing.
            </h2>

            <p>
              Photography and technology are only two parts of my world.
              I'm also interested in people, communities, education,
              creativity, and understanding how the world works.
            </p>

            <div className="life-hero-footer">
              <span>CURIOUS BY NATURE</span>
              <span>EST. ALWAYS LEARNING ♡</span>
            </div>
          </div>

          {/* CM - About me */}
          <div className="life-about">
            <p className="eyebrow">A LITTLE MORE ABOUT ME</p>
            <h2>There's more to the story.</h2>

            <p>
              I enjoy having different interests and finding ways to
              connect them. One day I might be focused on a class,
              another day working on a community project, and another
              exploring a completely new opportunity.
            </p>

            <p>
              I like being involved, learning through experience, and
              taking on projects that let me approach things from
              different perspectives. I don't really want to limit
              myself to one subject or one type of experience.
            </p>

            <p>
              That's a big part of what makes this page important.
              It's a place for everything that doesn't necessarily
              fit into one category.
            </p>
          </div>

          {/* CM - Academic journey */}
          <div className="life-section">
            <div className="life-section-heading">
              <p className="eyebrow">01 / EDUCATION</p>
            </div>
            <h2>Learning goes beyond one subject.</h2>

            <div className="education-card">
              <div className="education-top">
                <span>UNIVERSITY OF ARKANSAS</span>
                <span>RAZORBACK COUNTRY</span>
              </div>

              <h3>My academic journey.</h3>

              <p className="education-degree">
                Bachelor of Arts in Computer Science
              </p>

              <p>
                My academic interests reach beyond traditional
                computer science. I'm combining technical studies
                with subjects that help me understand people,
                behavior, communities, and society.
              </p>

              <div className="education-divider" />

              <p className="eyebrow">MY AREAS OF STUDY</p>

              <div className="degree-list">
                <div>
                  <span className="degree-number">01</span>
                  <div>
                    <h4>Computer Science B.A.</h4>
                    <p>My primary degree program.<p>
                    </p>Expected Graduation Date: December 2028</p>
                  </div>
                </div>

                <div>
                  <span className="degree-number">02</span>
                  <div>
                    <h4>Minor in Psychology</h4>
                    <p>Understanding the mind and human behavior.</p>
                  </div>
                </div>

                <div>
                  <span className="degree-number">03</span>
                  <div>
                    <h4>Minor in Sociology</h4>
                    <p>Understanding society, relationships, and communities.</p>
                  </div>
                </div>

                <div>
                  <span className="degree-number">04</span>
                  <div>
                    <h4>Minor in Criminology</h4>
                    <p>Exploring crime, justice, and the criminal justice system.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="life-side-note">
              Different subjects. Different perspectives. One very curious mind.
            </p>
          </div>

          {/* CM - Psychology, sociology and criminology */}
          <div className="life-section">
            <p className="eyebrow">02 / UNDERSTANDING PEOPLE</p>
            <h2>Interested in the bigger picture.</h2>

            <p className="life-section-description">
              Some of my interests are less about building technology
              and more about understanding the people who use it,
              the communities they live in, and the systems around them.
            </p>

            <div className="subject-card">
              <div className="subject-card-header">
                <span>01</span>
                <span>THE INDIVIDUAL</span>
              </div>
              <div className="subject-symbol">𖡎</div>
              <h3>Psychology</h3>
              <p>
                How people think, feel, learn, and behave.
                Psychology offers a way to explore personality,
                decision-making, motivation, and the experiences
                that influence individuals.
              </p>
              <div className="subject-tags">
                <span>Personality</span>
                <span>Behavior</span>
                <span>Cognition</span>
                <span>Learning</span>
              </div>
            </div>

            <div className="subject-card">
              <div className="subject-card-header">
                <span>02</span>
                <span>THE COMMUNITY</span>
              </div>
              <div className="subject-symbol">🫀</div>
              <h3>Sociology</h3>
              <p>
                How people interact, how communities develop,
                and how social structures influence everyday life.
                Sociology connects individual experiences to
                larger patterns in society.
              </p>
              <div className="subject-tags">
                <span>Communities</span>
                <span>Culture</span>
                <span>Social systems</span>
                <span>Relationships</span>
              </div>
            </div>

            <div className="subject-card">
              <div className="subject-card-header">
                <span>03</span>
                <span>THE JUSTICE SYSTEM</span>
              </div>
              <div className="subject-symbol">🛡️</div>
              <h3>Criminology</h3>
              <p>
                Exploring crime, its causes, the criminal justice
                system, and the ways communities respond to
                challenges involving public safety and justice.
              </p>
              <div className="subject-tags">
                <span>Criminal justice</span>
                <span>Crime</span>
                <span>Public safety</span>
                <span>Society</span>
              </div>
            </div>
          </div>

          {/* CM - Community involvement */}
          <div className="life-section">
            <div className="life-section-heading">
              <p className="eyebrow">03 / COMMUNITY & INVOLVEMENT</p>
              <span className="life-section-symbol">♡</span>
            </div>

            <h2>Being part of something bigger.</h2>

            <p className="life-section-description">
              I enjoy opportunities that bring people together,
              encourage learning, and create something meaningful
              outside of a traditional classroom.
            </p>

            <div className="community-card">
              <div className="community-card-top">
                <span>COMMUNITY PROJECTS</span>
                <span>01</span>
              </div>

              <h3>NatureSTEAM</h3>

              <p>
                NatureSTEAM is a nonprofit organization involved
                in community projects that connect nature, science,
                technology, engineering, art, and mathematics.
              </p>

              <p>
                I'm interested in helping create activities and
                experiences that make learning more accessible,
                interactive, and enjoyable.
              </p>

              <div className="community-highlight">
                <span>UPCOMING PROJECT</span>
                <h4>Plant Yourself Here</h4>
                <p>
                  A hands-on Welcome Week activity centered around
                  decorating small plant pots, planting succulents
                  or herbs, and introducing participants to basic
                  plant biology, soil science, and growth.
                </p>
              </div>

              <div className="subject-tags">
                <span>Community</span>
                <span>Education</span>
                <span>STEAM</span>
                <span>Creativity</span>
              </div>
            </div>
          </div>

          {/* CM - Professional experiences */}
          <div className="life-section">
            <p className="eyebrow">04 / PROFESSIONAL EXPERIENCES</p>
            <h2>Learning by doing.</h2>

            <p className="life-section-description">
              Education is important, but some of the most useful
              experiences come from applying what I learn in real
              situations, working with other people, and taking
              responsibility for different projects.
            </p>

            <div className="experience-timeline">

              <div className="experience-item">
                <div className="experience-marker">01</div>
                <div className="experience-content">
                  <span>INTERNSHIP EXPERIENCE</span>
                  <h3>Learning in professional environments</h3>
                  <p>
                    Gaining experience through internships,
                    developing professional skills, and exploring
                    how academic knowledge applies outside the
                    university environment.
                  </p>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-marker">02</div>
                <div className="experience-content">
                  <span>WORK EXPERIENCE</span>
                  <h3>Building practical skills</h3>
                  <p>
                    Working while balancing school and other
                    responsibilities provides opportunities to
                    develop communication, organization,
                    problem-solving, and time-management skills.
                  </p>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-marker">03</div>
                <div className="experience-content">
                  <span>PERSONAL DEVELOPMENT</span>
                  <h3>Trying new things</h3>
                  <p>
                    Exploring opportunities that introduce new
                    challenges, different perspectives, and
                    experiences that contribute to personal
                    and professional growth.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* CM - Other interests */}
          <div className="life-section">
            <p className="eyebrow">05 / OUTSIDE THE CHECKLIST</p>
            <h2>Things that make life interesting.</h2>

            <p className="life-section-description">
              Not every interest needs to turn into a career,
              a class, or a project. Some things are simply
              interesting to explore.
            </p>

            <div className="life-interest-grid">

              <div className="life-interest-card">
                <h3>People & Stories</h3>
                <p>
                  Learning about different experiences,
                  perspectives, and the stories people have to tell.
                </p>
              </div>

              <div className="life-interest-card">
                <h3>Creativity</h3>
                <p>
                  Finding different ways to express ideas,
                  experiment, and create something new.
                </p>
              </div>

              <div className="life-interest-card">
                <h3>Community</h3>
                <p>
                  Getting involved in activities and projects
                  that bring people together.
                </p>
              </div>

              <div className="life-interest-card">
                <h3>Exploration</h3>
                <p>
                  Discovering new subjects, opportunities,
                  experiences, and things worth learning.
                </p>
              </div>

              <div className="life-interest-card">
                <h3>New Ideas</h3>
                <p>
                  Thinking about possibilities and finding
                  connections between completely different subjects.
                </p>
              </div>

              <div className="life-interest-card">
                <h3>Personal Growth</h3>
                <p>
                  Building new skills, learning from experiences,
                  and continuing to develop.
                </p>
              </div>

            </div>
          </div>

          {/* CM - Putting everything together */}
          <div className="life-summary">
            <p className="eyebrow">06 / THE BIGGER PICTURE</p>
            <h2>All of these things are part of the story.</h2>

            <p>
              Computer science gives me a technical perspective.
              Psychology, sociology, and criminology introduce
              different ways to understand people and society.
              Community involvement creates opportunities to
              put ideas into action. Work and internships provide
              experiences beyond the classroom.
            </p>

            <p>
              They may seem like very different interests, but
              they all contribute to the same thing: continuing
              to learn, explore, create, and find new opportunities.
            </p>

            <div className="life-summary-signoff">
              <span>THANKS FOR GETTING TO KNOW ME</span>
              <span>♡ CAT</span>
            </div>
          </div>

          {/* CM - Page navigation */}
          <div className="life-cta">
            <p className="eyebrow">THERE'S MORE TO EXPLORE</p>
            <h2>Take another look around.</h2>
            <p>
              Check out the other sides of what I do.
            </p>

            <Link to="/photography" className="life-page-link">
              <span>Photography</span>
              <span>01 ↗</span>
            </Link>

            <Link to="/technology" className="life-page-link">
              <span>Technology</span>
              <span>02 ↗</span>
            </Link>

            <Link to="/" className="life-page-link">
              <span>Back to home</span>
              <span>HOME ↗</span>
            </Link>
          </div>

        </section>
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
            src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/776324749_2082363015699187_6492662304823384581_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=EjieYggKEmUQ7kNvwHLck5K&_nc_oc=Adq40p3mnvfjtk54G5XxGUycax-128MJkjf_UBy_BZgOdGx9Is4iCAM-R9O3vgDih-k&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Tt5xMcIyOgBUNU0XGriCug&_nc_ss=7a2a8&oh=00_AQRgmtdtEAUcM33t1rYbIgtWakTRYxMJUCbSOjFEHfvAng&oe=6AF28814"
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
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/cat.millwood.photography/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Photography Instagram"
            title="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://catmillwood.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Photography Website"
            title="Photography Website"
          >
            <FaGlobe />
          </a>

          <a
            href="mailto:your-email@example.com"
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <span>MADE WITH SPARKLES AND LOVE ♡</span>

        <span>CAT MILLWOOD PHOTOGRAPHY © 2026</span>
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
        <span>CAT MILLWOOD / 2026</span>
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
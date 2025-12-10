import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStage, setActiveStage] = useState("school");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);

      if (progress < 0.2) setActiveStage("school");
      else if (progress < 0.4) setActiveStage("college");
      else if (progress < 0.6) setActiveStage("nuguilt");
      else if (progress < 0.8) setActiveStage("marketing");
      else setActiveStage("ekthaa");
    };

    handleScroll(); // set initial
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stageGradient = {
    school: "linear-gradient(135deg, #22c55e, #0ea5e9)",
    college: "linear-gradient(135deg, #6366f1, #ec4899)",
    nuguilt: "linear-gradient(135deg, #f97316, #facc15)",
    marketing: "linear-gradient(135deg, #a855f7, #3b82f6)",
    ekthaa: "linear-gradient(135deg, #0f766e, #22c55e)",
  };

  const stageLabel = {
    school: "School & Early Experiments",
    college: "College & Viral Content",
    nuguilt: "NuGuilt – Protein Startup Concept",
    marketing: "Digital Marketing & Internships",
    ekthaa: "Ekthaa – Building for MSMEs",
  };

  const walkerX = scrollProgress * 70 - 35; // -35vw to +35vw

  return (
    <div
      className="page-root"
      style={{ backgroundImage: stageGradient[activeStage] }}
    >
      <div className="color-overlay" />

      <header className="top-nav">
        <div className="logo-mark">SJ</div>
        <div className="nav-title">
          <span className="nav-name">Sidhartha Juluri</span>
          <span className="nav-tagline">
            Building Ekthaa · Content & Digital Marketing · Curious Problem Solver
          </span>
        </div>
      </header>

      <main className="content-wrapper">
        {/* HERO */}
        <section className="section hero">
          <div className="hero-left">
            <p className="hero-chip">Founder · Content Creator · Experimenting My Way Up</p>
            <h1 className="hero-title">
              I learn by trying,
              <br />
              failing and building again.
            </h1>
            <p className="hero-subtitle">
              I’m Sidhartha — a student founder obsessed with small businesses,
              digital marketing and turning scrappy ideas into real experiments.
              From short films in school to viral reels, failed startup concepts
              and now <strong>Ekthaa</strong>, I’m constantly testing what works
              in the real world.
            </p>
            <div className="hero-tags">
              <span>Founder @ Ekthaa</span>
              <span>NuGuilt (concept)</span>
              <span>SidStartsUp</span>
              <span>Digital Marketing</span>
              <span>Content & Reels</span>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <div className="avatar-circle">👣</div>
              <p className="hero-card-title">Timeline in One Line</p>
              <p className="hero-card-text">
                School kid who loved business → college creator making viral
                content → protein startup research rabbit hole → digital
                marketing & startup internships → building Ekthaa for MSMEs.
              </p>
            </div>
          </div>
        </section>

        {/* SCHOOL */}
        <section className="section">
          <div className="section-inner">
            <div className="section-header">
              <div className="pill">01 · School</div>
              <h2>School: Short Films, YouTube & Early Hustle</h2>
            </div>
            <div className="section-grid">
              <div className="section-text">
                <p>
                  My “startup brain” didn’t start in college. In school, I was
                  already experimenting — I{" "}
                  <strong>started a YouTube channel</strong>, made{" "}
                  <strong>2–3 short films</strong> and played with content just
                  because it was fun.
                </p>
                <p>
                  I didn’t think of it as “marketing” back then. I just loved
                  creating things, putting them out, and seeing how people
                  reacted. That curiosity is still the base of everything I do.
                </p>
              </div>
              <div className="section-card">
                <p className="card-title">What this phase taught me</p>
                <ul className="card-list">
                  <li>Not to be shy about putting my work online</li>
                  <li>Basic storytelling and editing instincts</li>
                  <li>That I enjoy building, not just studying</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COLLEGE / NEVERENDINGTALESSS */}
        <section className="section">
          <div className="section-inner">
            <div className="section-header">
              <div className="pill">02 · College</div>
              <h2>College: NeverEndingTalesss & Viral Reels</h2>
            </div>
            <div className="section-grid">
              <div className="section-text">
                <p>
                  In my B.Tech second year, I started{" "}
                  <strong>NeverEndingTalesss</strong>, a fun Instagram page about
                  college life. We posted around{" "}
                  <strong>100+ short videos</strong>, and{" "}
                  <strong>5–6 reels crossed 1M–2M+ views</strong>.
                </p>
                <p>
                  It wasn’t a “formal startup”, but it taught me how attention
                  works: what makes people share, comment and come back. That
                  experience later helped me with{" "}
                  <strong>SidStartsUp</strong> and client work.
                </p>
              </div>
              <div className="section-card">
                <p className="card-title">Skills I built here</p>
                <ul className="card-list">
                  <li>Short-form content scripting & editing</li>
                  <li>Understanding what makes reels go viral</li>
                  <li>Working with friends like a mini team</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* NUGUILT */}
        <section className="section">
          <div className="section-inner">
            <div className="section-header">
              <div className="pill">03 · NuGuilt</div>
              <h2>NuGuilt: A “Failed” Startup, Big Learnings</h2>
            </div>
            <div className="section-grid">
              <div className="section-text">
                <p>
                  When I started going to the gym, I realised how inconvenient
                  and expensive most protein options are. I also found that{" "}
                  <strong>over 70% of Indians are protein deficient</strong>.
                  That’s how <strong>NuGuilt</strong> was born — a concept-stage
                  healthy beverage brand for{" "}
                  <strong>zero-sugar, 30g+ protein milkshakes</strong> that
                  still taste like chocolate treats.
                </p>
                <p>
                  For three months I went deep: tasting zero-sugar ice creams
                  and shakes in the market, learning about{" "}
                  <strong>stevia, maltitol, erythritol</strong>, consulting
                  nutritionists and even talking to the founder of a{" "}
                  <strong>300+ outlet milkshake chain</strong>.
                </p>
                <p>
                  I planned a{" "}
                  <strong>cloud-kitchen + vending machine model</strong> first,
                  then D2C later — with a full business plan around low capital.
                </p>
              </div>
              <div className="section-card">
                <p className="card-title">What actually happened</p>
                <ul className="card-list">
                  <li>
                    Realised stable recipes need serious R&amp;D and capital
                  </li>
                  <li>Parked the idea, but kept sharing my research</li>
                  <li>
                    20–30 people recently reached out when I commented about
                    NuGuilt under a viral reel — unexpected validation that{" "}
                    <strong>demand is real</strong>
                  </li>
                </ul>
                <p className="card-foot">
                  NuGuilt didn’t launch, but it became a crash course in{" "}
                  <strong>consumer research, product basics and market
                  validation</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DIGITAL MARKETING & CONTENT */}
        <section className="section">
          <div className="section-inner">
            <div className="section-header">
              <div className="pill">04 · Content & Marketing</div>
              <h2>Digital Marketing, Agencies & SidStartsUp</h2>
            </div>
            <div className="section-grid">
              <div className="section-text">
                <p>
                  In parallel, I started exploring{" "}
                  <strong>digital marketing and content</strong> more seriously:
                  internships at <strong>Inflooo</strong>, freelance work with{" "}
                  <strong>rate it right it</strong>, roles at{" "}
                  <strong>GoExtraMile</strong> and collaborating with{" "}
                  <strong>OpenMind</strong>.
                </p>
                <p>
                  I handled end-to-end reels — ideas, scripting, shooting,
                  sometimes acting, editing and delivering{" "}
                  <strong>ready-to-post content</strong>. I used tools like{" "}
                  <strong>Canva, CapCut, NanoBanana and VEO3</strong> to ship
                  fast.
                </p>
                <p>
                  Then came <strong>SidStartsUp</strong> on Instagram — where I
                  share my startup journey and backstory. With just a handful of
                  posts I’ve already crossed{" "}
                  <strong>500k+ organic views</strong>, received{" "}
                  <strong>100+ founder comments</strong> and{" "}
                  <strong>30+ DMs</strong> about Ekthaa and opportunities.
                </p>
              </div>
              <div className="section-card">
                <p className="card-title">What this phase proved</p>
                <ul className="card-list">
                  <li>I can own the full content pipeline end to end</li>
                  <li>
                    I understand how to position early-stage startups online
                  </li>
                  <li>
                    Content + distribution is one of my core strengths, not just
                    a side skill
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EKTHAA */}
        <section className="section section-last">
          <div className="section-inner">
            <div className="section-header">
              <div className="pill">05 · Ekthaa</div>
              <h2>Ekthaa: Building for Small & Medium Businesses</h2>
            </div>
            <div className="section-grid">
              <div className="section-text">
                <p>
                  In September 2024, I started working on a simple idea called{" "}
                  <strong>Khatape</strong> — a basic digital credit ledger for
                  small shops. We built an early prototype, tested it in a real
                  shop, hit login and UX issues, fixed them, iterated and kept
                  improving.
                </p>
                <p>
                  That evolved into <strong>Ekthaa</strong>, a more ambitious
                  product built in stealth for <strong>MSMEs</strong>. Right
                  now, we’re in <strong>beta</strong>, refining the product with
                  real user feedback and preparing for a wider launch.
                </p>
                <p>
                  I’m currently <strong>leading the product, design, team and
                  operations</strong>, and even hiring interns to build parts of
                  the product (like the website) end-to-end.
                </p>
              </div>
              <div className="section-card">
                <p className="card-title">What I’m optimising for now</p>
                <ul className="card-list">
                  <li>Solving real problems for small businesses</li>
                  <li>Building a product I can deploy in real shops</li>
                  <li>
                    Learning everything I can — tech, marketing, ops, fundraising —
                    to become a stronger founder
                  </li>
                </ul>
                <p className="card-foot">
                  If you’re a founder, investor or someone who loves MSME
                  problems, I’m always up for a conversation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* WALKING TIMELINE */}
      <div className="timeline-bar">
        <div className="timeline-label">Your Journey</div>
        <div className="timeline-track">
          <div className="timeline-stage stage-1">School</div>
          <div className="timeline-stage stage-2">College</div>
          <div className="timeline-stage stage-3">NuGuilt</div>
          <div className="timeline-stage stage-4">Marketing</div>
          <div className="timeline-stage stage-5">Ekthaa</div>
          <div
            className="timeline-walker"
            style={{ transform: `translateX(${walkerX}vw)` }}
          >
            <div className="walker-avatar">🧑‍💻</div>
            <div className="walker-tag">{stageLabel[activeStage]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}


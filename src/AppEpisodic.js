import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientBlinds from "./GradientBlinds";
import "./AppEpisodic.css";

const episodes = [
  {
    id: "ep-01",
    label: "EP 01",
    title: "Early Life: The Kid With a Business Mindset",
    period: "Childhood → School",
    theme: "from-purple-700 via-purple-900 to-black",
    summary:
      "From childhood, I never imagined myself as a software engineer. My mind always leaned toward business, shops, customers, sales, and ideas.",
    whatIDid: [
      "Grew up more excited by business, shops, and customer interactions than academics or engineering dreams.",
      "Started a YouTube channel and made 2–3 short films, experimenting with shooting and storytelling.",
      "While others focused on ranks and placements, I focused on understanding how businesses operate.",
    ],
    learnings: [
      "My natural thinking was entrepreneurial from the start.",
      "Creating, selling, and experimenting excited me more than traditional career paths.",
      "Early content experiments built the foundation for future creative skills.",
    ],
  },
  {
    id: "ep-02",
    label: "EP 02",
    title: "First Crackers Shop Experience: The 3-Day ₹25K Realisation",
    period: "BTech 1st Year – Diwali",
    theme: "from-amber-700 via-orange-900 to-black",
    summary:
      "Worked at my uncle's Diwali crackers shop. My cousin and I handled one shop completely for 3 days and earned ₹25,000 each.",
    whatIDid: [
      "Managed the counter, talked to customers, and handled cash transactions.",
      "Managed stock, learned pricing strategies, and practiced negotiation.",
      "Got first real taste of business pressure, money flow, and fast decision-making.",
      "In just 3 days, earned ₹25,000 — more than most internships pay in months.",
    ],
    learnings: [
      "Business teaches more in 3 days than college teaches in 3 months.",
      "I naturally enjoy customer interaction and business hustle.",
      "Real customers, real cash, and real pressure made me realize I'm built for this.",
    ],
  },
  {
    id: "ep-03",
    label: "EP 03",
    title: "NeverEndingTalesss: My First Viral Content Project",
    period: "Early College",
    theme: "from-pink-700 via-rose-900 to-black",
    summary:
      "Started NeverEndingTalesss, an Instagram page focused on relatable college content. Created 100+ videos, and several went viral with 1M–2M+ views.",
    whatIDid: [
      "Created and edited around 100+ videos/reels focused on college life and relatable moments.",
      "Several reels went viral, crossing 1M–2M+ views and giving me a first taste of internet reach.",
      "Learned editing, storytelling, hooks, pacing, and how to hold attention.",
      "Eventually stopped due to workload, but this project sharpened my creative and content skills.",
    ],
    learnings: [
      "Content creation became a core skill for me — editing, storytelling, and virality.",
      "I understood how internet audiences react to different formats and hooks.",
      "Relatable storytelling + consistency can reach massive audiences organically.",
    ],
  },
  {
    id: "ep-04",
    label: "EP 04",
    title: "Clocydd: My First Attempt at a Real Business Brand",
    period: "College Period",
    theme: "from-sky-700 via-sky-900 to-black",
    summary:
      "Launched Clocydd as a print-on-demand brand, then shifted it into a buy-and-sell model. My first attempt at running an actual small business.",
    whatIDid: [
      "Started Clocydd as a print-on-demand brand and later pivoted into a buy-and-sell model.",
      "Handled designing, sourcing, selling, and understanding customer needs.",
      "Learned the basics of margin, sourcing, cost structure, and logistics.",
    ],
    learnings: [
      "Running a product brand involves real logistics and operations.",
      "Small experiments teach you about margins, sourcing, and product thinking.",
      "Even failed attempts sharpen your understanding of how businesses work.",
    ],
  },
  {
    id: "ep-05",
    label: "EP 05",
    title: "Second Crackers Shop Experience: The Hustle That Changed My Personality",
    period: "BTech 2nd Year – Diwali",
    theme: "from-orange-700 via-red-900 to-black",
    summary:
      "Went back to the crackers shop with much more responsibility. Slept 2–3 hours next to the roadside shop, talked to hundreds of customers, and earned ₹40,000 while my uncle made ₹5L+.",
    whatIDid: [
      "Handled the entire shop, sleeping only 2–3 hours next to the roadside stall.",
      "Talked to hundreds of customers, sold continuously without breaks.",
      "Earned ₹40,000 in 3 days and watched my uncle make over ₹5 lakhs.",
      "Transformed from introvert → extrovert, shy → confident, observer → salesperson.",
    ],
    learnings: [
      "Communication, confidence, and hustle can be learned through real high-pressure situations.",
      "Business rewards consistency, adaptability, and pressure-handling.",
      "I realized I truly enjoy dealing with customers and solving problems on the spot.",
      "This experience changed my personality completely — stepped fully out of my comfort zone.",
    ],
  },
  {
    id: "ep-06",
    label: "EP 06",
    title: "Waffle Hugs: My First 'Big Brand' Dream",
    period: "College Period",
    theme: "from-yellow-700 via-amber-900 to-black",
    summary:
      "A friend approached me with the idea of Waffle Hugs, a franchise-based waffle brand. I got extremely excited and tried to scale it like Tea Time or iD Fresh.",
    whatIDid: [
      "Studied franchise models and learned how Tea Time and iD Fresh scaled.",
      "Created franchise pitch ideas and understood operations cost and franchise fee structures.",
      "Explored outlets, locations, and tried convincing potential franchisees.",
      "In the end, we couldn't sell even one franchise — we were inexperienced and lacked real networks.",
    ],
    learnings: [
      "Scaling requires much more than a good product idea — distribution, trust, and networks matter.",
      "This was my first attempt at thinking big and scaling a brand beyond one store.",
      "This failure matured my business thinking significantly and pushed me toward understanding real startup building.",
      "Franchising sounds glamorous, but execution, trust, and systems are everything.",
    ],
  },
  {
    id: "ep-07",
    label: "EP 07",
    title: "Inflooo Internship: Breaking Into Digital Marketing",
    period: "College Period",
    theme: "from-indigo-700 via-indigo-900 to-black",
    summary:
      "A founder from a digital marketing agency (Inflooo) visited my college. I cold-DMed him asking for an internship, and he accepted.",
    whatIDid: [
      "Cold-DMed the founder after his college talk and secured an internship at Inflooo.",
      "Created reels, edited content, shot videos, and helped with creative ideas.",
      "Made content for my own college's social media handles.",
      "Discovered how agencies charge huge retainers and how reels/short videos are big business.",
    ],
    learnings: [
      "Cold DMs create opportunities — one message can change your trajectory.",
      "Digital marketing is a powerful skill with huge business potential.",
      "Branding and distribution matter more than most people think.",
      "I realized I could do this independently as well.",
    ],
  },
  {
    id: "ep-08",
    label: "EP 08",
    title: "The '₹30 Product → Advertiser Model' Idea",
    period: "College Period",
    theme: "from-cyan-700 via-teal-900 to-black",
    summary:
      "Thought of turning a daily ₹30 product everyone buys into ad space — sell for ₹25 with branding. Needed capital and support, so it didn't move forward.",
    whatIDid: [
      "Came up with an idea to convert an everyday ₹30 product into an advertising product sold for ₹25.",
      "The concept was to use everyday products as ad space for brands.",
      "Needed capital and support, but got demotivated when no one encouraged the idea.",
    ],
    learnings: [
      "Not all ideas need immediate execution, but thinking deeply improves creativity.",
      "Spotting gaps in everyday products and consumer behavior is a natural strength of mine.",
      "Capital and support can make or break early-stage ideas.",
    ],
  },
  {
    id: "ep-09",
    label: "EP 09",
    title: "NuGuilt: My Deepest Research Startup Attempt",
    period: "College Period → Present",
    theme: "from-emerald-700 via-green-900 to-black",
    summary:
      "Started creating the concept for NuGuilt: zero-sugar, 30g+ protein milkshakes that taste like normal chocolate milkshakes. Did deep research and validation.",
    whatIDid: [
      "Started NuGuilt inspired by my gym journey and learning that 73% of Indians are protein deficient.",
      "Tasted zero-sugar ice creams and shakes, studied sweeteners: stevia, maltitol, erythritol.",
      "Spoke to nutritionists, studied macros, and spoke to the founder of a 300+ milkshake chain.",
      "Planned cloud kitchen + vending machine model and built a detailed business plan.",
      "Recently shared my research, and 20–30 people approached me after a viral reel, validating the idea again.",
    ],
    learnings: [
      "I can go deep into research when I'm genuinely interested in solving a problem.",
      "Healthy food/fitness and consumer behavior have huge potential but need serious R&D and capital.",
      "Market validation is powerful — when people reach out, it proves demand exists.",
      "Product formulation in food-tech is complex but exciting.",
    ],
  },
  {
    id: "ep-10",
    label: "EP 10",
    title: "Rate It Right It: My First Marketing Leadership Experience",
    period: "College Period",
    theme: "from-blue-700 via-blue-900 to-black",
    summary:
      "A founder added me as a digital marketing content leader. I led 5 friends, created client videos (₹1100/video), and gained practical agency experience.",
    whatIDid: [
      "Joined different communities and groups to network and discovered the founder of RateItRightIt.",
      "Led a small content team of 5 friends and created videos for 2–3 clients.",
      "Made videos on a per-video basis (~₹1100/video) and managed deadlines.",
      "Gained practical experience in small-scale agency work, client communication, and team coordination.",
    ],
    learnings: [
      "I understood leadership, coordination, and managing small teams.",
      "Learned production timelines, client expectations, and quality under budget.",
      "Running a tiny content agency, even briefly, teaches real-world business skills.",
    ],
  },
  {
    id: "ep-11",
    label: "EP 11",
    title: "Crackers Arbitrage: My First Independent Profit",
    period: "Diwali Season",
    theme: "from-lime-700 via-lime-900 to-black",
    summary:
      "During a tough year when my uncle had losses, I used ₹5K from cash in hand, bought pop-pop boxes wholesale, sold retail, reinvested ~5 times, and made ₹15K profit.",
    whatIDid: [
      "My uncle had a tough year and couldn't pay me, but since I handled cash, I saw an opportunity.",
      "Used ₹5K to buy pop-pop boxes at wholesale, sold them retail.",
      "Reinvested the profit around 5 times and made ₹15K profit purely through arbitrage.",
    ],
    learnings: [
      "I can identify quick business opportunities and execute them fast.",
      "Arbitrage is powerful when executed with speed and smart reinvestment.",
      "Experimentation with real money builds confidence and risk appetite.",
    ],
  },
  {
    id: "ep-12",
    label: "EP 12",
    title: "Khatape: Solving My Parents' Credit Problem",
    period: "College Period",
    theme: "from-violet-700 via-purple-900 to-black",
    summary:
      "My parents struggled with customer credit tracking. So I built Khatape, a simple digital solution, deployed it in a real shop, and iterated based on feedback.",
    whatIDid: [
      "Observed how my parents and nearby shops handled customer credit — messy, manual, and easy to forget.",
      "Built a basic Khatape prototype to track credit digitally for small shops.",
      "Deployed it in one real shop and collected feedback daily.",
      "Faced real-world issues like login bugs, UX confusion, and reliability problems.",
      "Iterated on the MVP multiple times, fixing bugs and improving flows step by step.",
    ],
    learnings: [
      "Real problems at home can be the strongest startup ideas.",
      "MVPs in the wild behave very differently from how we imagine on a whiteboard.",
      "Shipping, testing, breaking, and fixing is the only way to improve a product.",
      "Product-building is iterative — perfection is impossible, but progress is everything.",
    ],
  },
  {
    id: "ep-13",
    label: "EP 13",
    title: "The ₹10 Lakh Bet: My Biggest Personal Risk",
    period: "Diwali Season",
    theme: "from-red-700 via-red-900 to-black",
    summary:
      "Took a ₹10,00,000 overdraft loan to operate a huge Diwali shop. Faced massive competition, adapted with a roadside stall, and escaped with ₹20K profit and ₹2L leftover stock.",
    whatIDid: [
      "Took a bold decision to invest ₹10,00,000 using a bank overdraft loan into a big cracker shop.",
      "Expected at least ₹1 lakh profit based on previous years' performance.",
      "Faced heavy competition from many small shops nearby pulling away walk-in customers.",
      "Opened a small roadside shop myself to pull traffic and push sales more aggressively.",
      "Used creative on-ground tactics to move stock, ultimately making ₹20K profit but stuck with ₹2 lakh worth of leftover crackers.",
    ],
    learnings: [
      "Risk feels very different when the money is borrowed and the liability is yours.",
      "Market reality beats planning — location, competition, and positioning can destroy or save a business.",
      "Sometimes winning is not huge profit — it's avoiding big loss and surviving to play the next game.",
      "Adaptability and quick pivots are crucial in high-stakes situations.",
    ],
  },
  {
    id: "ep-14",
    label: "EP 14",
    title: "Ekthaa: The Startup I'm Building For Real Now",
    period: "Sept 2024 → Present",
    theme: "from-slate-700 via-slate-900 to-black",
    summary:
      "Khatape evolved into Ekthaa. Started as 'Khatape' focused on credit tracking, then pivoted into a broader MSME platform. Currently in beta, building with a team.",
    whatIDid: [
      "Took everything learned from Khatape and crackers experience and decided to go bigger with Ekthaa.",
      "Started in Sept 2024 as 'Khatape' focused only on credit tracking, and gradually pivoted into Ekthaa.",
      "Expanded the vision to serve MSMEs with multiple features (currently in stealth mode).",
      "Built prototypes, tested in real shops, solved login and reliability issues, and kept iterating.",
      "Hired interns, guided them to build the end-to-end website and product flows.",
      "Currently running Ekthaa in beta mode, preparing for a public launch in early 2026.",
    ],
    learnings: [
      "Founding isn't one project — it's a long compound journey of all previous failures and experiments.",
      "Building a team and delegating work is a new level of responsibility and growth.",
      "I'm genuinely committed to building for small businesses and learning whatever is needed (tech, marketing, ops).",
      "Long-term thinking and consistent iteration matter more than overnight success.",
    ],
  },
  {
    id: "ep-15",
    label: "EP 15",
    title: "SidStartsUp: My Journey Through Content",
    period: "Recent → Present",
    theme: "from-fuchsia-700 via-fuchsia-900 to-black",
    summary:
      "Created @sidstartsup on Instagram, posted 13 videos that crossed 500K+ views, and connected with 100+ founders. Content became my superpower for building in public.",
    whatIDid: [
      "Started @sidstartsup on Instagram to document my founder journey and share learnings.",
      "Posted around 13 videos that collectively crossed 500K+ views.",
      "Got 100+ founders reacting and 30+ people DMing about Ekthaa and internships.",
      "Used tools like CapCut, Canva, NanoBanana, and VEO3 to script, shoot, and edit content.",
    ],
    learnings: [
      "Content is a cheat code for networking, brand-building, and opportunities.",
      "Good storytelling + decent editing is enough to stand out if you're consistent.",
      "Digital marketing and content aren't side skills for me — they're core strengths I bring as a founder.",
      "Building in public builds trust and attracts the right people to your journey.",
    ],
  },
];

function EpisodeCard({ episode, index, expanded, onClick }) {
  return (
    <motion.div
      layout
      className={`mb-8 rounded-3xl shadow-lg cursor-pointer overflow-hidden bg-gradient-to-br ${episode.theme}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="text-xs sm:text-sm uppercase tracking-[0.25em] mb-2 text-white/70 break-words text-center">
          {episode.label} • {episode.period}
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white break-words text-center">
          {episode.title}
        </h2>
        <p className="text-sm sm:text-base text-white/85 mb-2 break-words">
          {episode.summary}
        </p>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4"
            >
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-5 sm:p-6 shadow-lg">
                  <h3 className="text-sm font-semibold tracking-wide text-white/80 mb-3">
                    What I actually did
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base">
                    {episode.whatIDid.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-5 sm:p-6 shadow-lg">
                  <h3 className="text-sm font-semibold tracking-wide text-white/80 mb-3">
                    What I learned
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base">
                    {episode.learnings.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-xs sm:text-sm text-white/70">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                  Episode {index.toString().padStart(2, "0")} of {episodes.length.toString().padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function SidharthaStoryline() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white font-sans px-4 sm:px-8 lg:px-16">
      <section className="min-h-[40vh] flex items-center justify-center" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <GradientBlinds
            gradientColors={['#FF9FFC', '#5227FF']}
            angle={0}
            noise={0.3}
            blindCount={12}
            blindMinWidth={50}
            spotlightRadius={0.5}
            spotlightSoftness={1}
            spotlightOpacity={1}
            mouseDampening={0.15}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="lighten"
          />
        </div>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          style={{ position: 'relative', zIndex: 1 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-white/50 mb-4">
            EPISODIC PORTFOLIO
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold mb-5 leading-tight">
            I'm Sidhartha — a founder, content creator, and
            <span className="inline-block bg-gradient-to-r from-emerald-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
              business-obsessed problem solver
            </span>
            who learns by trying, failing, and iterating.
          </h1>
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl mx-auto mb-6">
            This website is my story as a timeline of experiments — from cracker shops and college reels to NuGuilt, Khatape, and now Ekthaa. Click any episode to see the full story.
          </p>
        </motion.div>
      </section>
      <div className="max-w-5xl mx-auto">
        {episodes.map((ep, idx) => (
          <EpisodeCard
            key={ep.id}
            episode={ep}
            index={idx + 1}
            expanded={expandedIndex === idx}
            onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
          />
        ))}
      </div>
      <section className="min-h-[30vh] flex items-center justify-center">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            This is not a "success story" page. It's a "work in progress" log.
          </h2>
          <p className="text-sm sm:text-lg text-white/80 mb-6">
            I don't have everything figured out. What I do have is proof that I keep showing up — in shops, in code, in content, and in every idea I chase. If you're a founder, a VC, or someone who enjoys building from scratch, you'll probably enjoy this journey.
          </p>
          <p className="text-xs sm:text-sm text-white/60">
            If you'd like to connect about Ekthaa, content, or future ideas like NuGuilt, feel free to reach out on LinkedIn or Instagram (@sidstartsup) or via email at <a href="mailto:sidhartha@ekthaa.app" className="text-emerald-300 underline">sidhartha@ekthaa.app</a>.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

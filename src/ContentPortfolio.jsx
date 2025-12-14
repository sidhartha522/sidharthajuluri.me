import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContentPortfolio.css';

const contentProjects = [
  {
    id: 'sidstartsup',
    name: 'SidStartsUp',
    platform: 'Instagram',
    profileUrl: 'https://www.instagram.com/sidstartsup?igsh=bmtxN2t6dGhhMXZr',
    shortDesc: 'Building a startup community through authentic founder content. 800+ followers, 600K+ views, 50+ founder connections.',
    fullDesc: `Started this Instagram page to document my own startup journey with Agta and connect with other founders. This isn't just a content page—it's my way of building a network while building my startup.

Initially posted personal background content to build an initial audience. Once I had ~100 followers, I shifted hard into startup-focused content. Posted consistently for a while, then exams hit—posting became irregular. Recently got back to consistent posting and that's when things exploded.

The numbers: 800+ followers with just ~15-20 posts, 600K+ total Reel views, 50-100 direct messages from founders and marketers, 500-600+ engaged community members, and even an inbound business call from a Hyderabad-based company.

What I learned: Niche + authenticity = real engagement. You don't need thousands of followers to build meaningful connections. Startup people want real stories, not highlight reels. Content can literally open doors if you do it right.`,
    thumbnails: [
      { id: 1, reelUrl: 'https://www.instagram.com/reel/example1/', image: '/placeholder1.jpg' },
      { id: 2, reelUrl: 'https://www.instagram.com/reel/example2/', image: '/placeholder2.jpg' },
      { id: 3, reelUrl: 'https://www.instagram.com/reel/example3/', image: '/placeholder3.jpg' }
    ],
    stats: '800+ followers • 600K+ views • 50+ DMs',
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'neverendingtalesss',
    name: 'NeverEndingTalesss',
    platform: 'Instagram',
    profileUrl: 'https://www.instagram.com/neverendingtalesss?igsh=MWp3ODhneG1kMXVxbg==',
    shortDesc: 'College life content that went viral. Multiple reels crossed 2M+ views. Relatable storytelling that resonated with students nationwide.',
    fullDesc: `Ran the official Instagram page for my class during B.Tech 1st Year. This was my first real taste of managing a page from scratch and understanding what makes content go viral.

Created college life Reels (relatable, funny, trending), event coverage, memes and inside jokes. I was doing everything—admin work, content planning, shooting, editing on CapCut, posting at optimal times, engaging with comments.

The breakthrough: Multiple Reels crossed 2 million views (some hit 2.5M+), several hit 1M+ views, many crossed 300K+ consistently. One Reel about exam stress hit 2M+ overnight. People from other colleges started remaking our content.

What I learned: Virality isn't luck—it's understanding audience psychology. Timing matters more than production quality. Trends have a 24-48 hour sweet spot. You don't need professional equipment—just a good idea and fast execution.`,
    thumbnails: [
      { id: 1, reelUrl: 'https://www.instagram.com/reel/example1/', image: '/placeholder1.jpg' },
      { id: 2, reelUrl: 'https://www.instagram.com/reel/example2/', image: '/placeholder2.jpg' },
      { id: 3, reelUrl: 'https://www.instagram.com/reel/example3/', image: '/placeholder3.jpg' }
    ],
    stats: '2M+ views • Multiple viral reels',
    color: 'from-pink-600 to-rose-600'
  },
  {
    id: 'goextramile',
    name: 'Go Extra Mile',
    platform: 'Instagram',
    profileUrl: 'https://www.instagram.com/reel/DPP2KfwiKFy/?igsh=MWhmeHV1YzNlcXA0dg==',
    shortDesc: 'App-based startup promotional content. Created 7-8 high-quality videos. Promoted from Digital Marketer to Sales & Marketing Manager.',
    fullDesc: `Joined as a Digital Marketer to create promotional content for their app. Got promoted to Sales & Marketing Manager after a few months based on content quality and initiative.

Created multiple promotional videos explaining app features, user testimonial-style content, app demo Reels and engagement-focused content to drive downloads.

The challenge: Made 7-8 high-quality videos. Most never got posted. Only 2 Reels ever went live on their official page. Payment delays followed. Classic early-stage startup chaos.

What I learned the hard way: Get everything in writing. Not every startup knows what to do with good content. Company culture matters—if they don't value your work enough to post it, they probably won't value paying you either. I learned more from this mess than from some "successful" projects.`,
    thumbnails: [
      { id: 1, reelUrl: 'https://www.instagram.com/reel/DPP2KfwiKFy/?igsh=MWhmeHV1YzNlcXA0dg==', image: '/placeholder1.jpg' },
      { id: 2, reelUrl: 'https://www.instagram.com/reel/DPDwyZjDcJW/?igsh=MWtjNHIxdXA5ZXBsZQ==', image: '/placeholder2.jpg' },
      { id: 3, reelUrl: 'https://www.instagram.com/reel/example3/', image: '/placeholder3.jpg' }
    ],
    stats: 'Promoted to Manager • 7-8 videos created',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'infloo',
    name: 'Inflooo',
    platform: 'Agency Work',
    profileUrl: '#',
    shortDesc: 'First real agency experience. Cold-DMed CEO and got the internship. Created content for local brands, learned professional workflows.',
    fullDesc: `The CEO came to speak at our college about digital marketing. Everyone listened, clapped, and left. I cold-DMed him on Instagram that night asking for an internship. He replied in 2 days and said yes.

Worked on video content creation for 2-3 local brand clients (cafes, small businesses), promotional content for college events. Went to client locations for shoots, set up lighting, directed shots, edited videos in agency style.

This is where I learned how agencies actually work. Sat in on client calls, saw how they pitched packages, understood pricing models for local businesses (₹5K-15K per month), watched how they handled client revisions.

What I learned: Professional video production workflows, how to work with client briefs, agency-style editing, the business side of content—pricing, pitching, packages. Learning to create "good enough" content quickly vs spending days on "perfect" content. In agencies, speed matters.`,
    thumbnails: [],
    stats: 'Cold DM success • Agency workflows learned',
    color: 'from-indigo-600 to-purple-600'
  },
  {
    id: 'rateitrightit',
    name: 'RateItRightIt',
    platform: 'Instagram',
    profileUrl: 'https://www.instagram.com/rateitrightit?igsh=MXM4ejJndWdoajNocA==',
    shortDesc: 'Led a 4-person digital marketing wing. Created client videos. Learned about unit economics and team management the hard way.',
    fullDesc: `Got connected through startup WhatsApp groups. Agency owner wanted to expand into digital marketing, asked me to start and lead a new wing under his company.

Formed a 4-person team, created video content for local business clients, handled end-to-end production. Created 3 videos for one client at ₹1,100 per video, split 4 ways = ~₹250-300 per person after travel costs.

The reality: After traveling, shooting for 2-3 hours, coordinating with client, and editing—we were each making ₹250. For that amount of work, it wasn't sustainable. When you're making ₹250 for several hours of work, motivation drops fast.

Had an honest conversation with the agency owner. The pricing model didn't work, couldn't deliver quality content when everyone was demotivated. Mutually decided to shut down the wing rather than deliver mediocre work.

What I learned: Pricing matters—underpricing kills motivation and quality. As a lead, you're responsible for your team's experience, not just output. Sometimes the best decision is to stop rather than push through a broken model. This taught me more about business operations and team management than any successful project.`,
    thumbnails: [],
    stats: 'Led 4-person team • Business operations learned',
    color: 'from-yellow-600 to-orange-600'
  },
  {
    id: 'openmindd',
    name: 'OpenMindd',
    platform: 'Startup Collaboration',
    profileUrl: '#',
    shortDesc: 'Royalty-based startup collaboration. Created product launch video. On hold until product is market-ready.',
    fullDesc: `Got connected through my SidStartsUp page. Founders reached out after seeing my content and asked if I'd be interested in joining as a digital marketer on a royalty basis (equity/rev share discussion).

Created one product launch video, posted it on my own startup page to test engagement. Planned to create a full content series once product launched.

Why it paused: The product wasn't ready. It was still in development, and they needed more time to build before going to market. Since there was no product to promote yet, content creation didn't make sense.

The good part: They were upfront about the situation. No false promises, no ghosting—just honest communication that they needed to focus on building first, marketing later.

What I learned: Not every opportunity pans out, and that's okay. Early-stage startups pivot and pause all the time. Royalty-based work is high-risk, high-reward. It's better to pause than to create content for something that's not ready. Building relationships matters—even if this didn't work out, I'm still connected with the founders.`,
    thumbnails: [],
    stats: 'Royalty-based • Product in development',
    color: 'from-green-600 to-emerald-600'
  },
  {
    id: 'unboxjsg',
    name: 'Unbox JSG',
    platform: 'YouTube',
    profileUrl: 'https://youtube.com/@unboxjsg3165?si=xjRua27wKiPa2lXj',
    shortDesc: 'My tech YouTube channel from 10th class. Unboxing videos and tech reviews. Where I learned video editing fundamentals.',
    fullDesc: `Started a tech-focused YouTube channel called "Unbox GHG" in 10th Class because I was obsessed with tech gadgets and unboxing videos were huge at the time.

Made unboxing videos for phones, earphones, tried to copy the style of big tech YouTubers (MKBHD, Technical Guruji vibes). Handled recording, editing, and uploading completely on my own.

The reality: No fancy camera (just phone camera), basic editing skills, zero audience initially. Didn't know anything about SEO, thumbnails, or YouTube algorithm. The channel didn't get traction. A few views from friends and family, but no real growth.

Why it stopped: Being in 10th class, I didn't have the consistency or resources to keep going. But this is where I learned video editing.

What I learned: YouTube basics, how to structure videos, video editing fundamentals (cuts, transitions, audio syncing). That tech YouTube is VERY saturated—you need a unique angle. Equipment isn't everything, but it does matter for tech content.

Why I'm including this: Because this "failed" channel taught me skills I still use today. Every creator has a dead YouTube channel somewhere—this is mine.`,
    thumbnails: [],
    stats: 'First YouTube channel • Editing skills learned',
    color: 'from-red-600 to-pink-600'
  },
  {
    id: 'youtube4th',
    name: '4th Class YouTube',
    platform: 'YouTube',
    profileUrl: 'https://youtu.be/hjutIoxTZf8?si=HUs8iq4MagYU-kMc',
    shortDesc: 'My first-ever YouTube channel in 4th class. Made a short film with friends. Where the content creation obsession began.',
    fullDesc: `This is where it all started. Made a YouTube channel with friends when I was in 4th or 5th class. We were kids with zero idea what we were doing—but we had big dreams.

Made one short film-style video. Around 10 minutes long. We planned the "story," shot scenes around school and home, and acted in it ourselves. It was terrible. But it was ours.

The process: Borrowed someone's phone to record, no editing software (maybe Windows Movie Maker if we were lucky), uploaded it and waited for it to blow up (it didn't).

Why it stopped: We were kids. No phone, no camera, no support from parents who thought YouTube was a waste of time. The channel just died.

Why this matters: Because this is proof that I've been obsessed with creating content since I was a kid. Most people talk about "starting a YouTube channel someday." I actually did it in 4th grade. That hunger to create—that's not something you learn. You either have it or you don't.

What I learned: How to collaborate on creative projects, the basics of storytelling, that creating something is better than planning something perfectly, how to deal with failure.

Key takeaway: Every creator has an origin story. This is mine. A cringey short film made by kids who had no idea what they were doing—but did it anyway.`,
    thumbnails: [],
    stats: '4th class origins • Where it all began',
    color: 'from-gray-600 to-slate-600'
  }
];

function ContentCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={`content-card bg-gradient-to-br ${project.color}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-header">
        <div className="project-info">
          <h3 className="project-name">{project.name}</h3>
          <span className="project-platform">{project.platform}</span>
        </div>
        {project.profileUrl !== '#' && (
          <a 
            href={project.profileUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="profile-link"
          >
            Visit Profile →
          </a>
        )}
      </div>

      <p className="short-description">{project.shortDesc}</p>

      <div className="stats-badge">{project.stats}</div>

      {project.thumbnails.length > 0 && (
        <div className="thumbnails-grid">
          {project.thumbnails.map((thumb) => (
            <a
              key={thumb.id}
              href={thumb.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="thumbnail-link"
            >
              <div className="thumbnail-placeholder">
                <span className="play-icon">▶</span>
                <span className="thumbnail-text">View Reel</span>
              </div>
            </a>
          ))}
        </div>
      )}

      <button 
        className="read-more-btn"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? '← Show Less' : 'Read More →'}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="full-description"
          >
            {project.fullDesc.split('\n\n').map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ContentPortfolio() {
  return (
    <div className="content-portfolio">
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Content That People Actually Want to Watch
          </h1>
          <p className="hero-subtitle">
            From viral Instagram Reels (2M+ views) to building startup communities through authentic content. 
            Here's everything I've created, built, and learned.
          </p>
        </motion.div>
      </section>

      <section className="projects-section">
        <div className="projects-container">
          {contentProjects.map((project) => (
            <ContentCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta-content"
        >
          <h2 className="cta-title">Let's Create Something Real</h2>
          <p className="cta-text">
            I'm not looking for a corporate gig. I want to join a startup that needs someone who can create, 
            experiment, and execute without needing their hand held.
          </p>
          <a href="mailto:sidhartha@ekthaa.app" className="cta-button">
            Get in Touch →
          </a>
        </motion.div>
      </section>
    </div>
  );
}

import React from 'react'

export default function App(){
  return (
    <div>
      <Header/>
      <main>
        <Home/>
        <Meet/>
        <Priorities/>
        <Issues/>
        <DistrictPlan/>
        <GetInvolved/>
        <Donate/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

function Header(){
  return (
    <header>
      <div className="container nav">
        <div className="brand">
          <div className="logo">ZS</div>
          <div>
            <div style={{fontWeight:700}}>Zach Schulz</div>
            <div className="brand-sub">For Harford County Council, District C</div>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#meet">Meet Zach</a>
          <a href="#priorities">Priorities</a>
          <a href="#issues">Issues</a>
          <a href="#plan">District Plan</a>
          <a href="#getinvolved">Get Involved</a>
          <a href="#donate">Donate</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="cta" href="#getinvolved">Join the Team</a>
      </div>
    </header>
  )
}

function Home(){
  const highlights = [
    'Bel Air native raising two daughters with his wife, Erica',
    'Problem-solving engineer focused on practical government',
    'Committed to safe streets, strong schools, and thriving neighborhoods'
  ]

  return (
    <section id="home" className="hero">
      <div className="container grid-2">
        <div>
          <div className="eyebrow">Smart leadership. Stronger Harford.</div>
          <h1 className="hero-title">Zach Schulz for Harford County Council — District C</h1>
          <p className="hero-body">
            Harford County is home. As a dad, husband, and engineer, Zach is running to deliver common-sense solutions that keep our
            neighborhoods safe, support local schools, and build an economy where every family can put down roots.
          </p>
          <ul className="hero-list">
            {highlights.map(item => <li key={item}>{item}</li>)}
          </ul>
          <div className="hero-actions">
            <a className="cta" href="#getinvolved">Volunteer with Zach</a>
            <a className="cta-secondary" href="#donate">Chip in</a>
            <a className="text-link" href="#issues">Read the plan →</a>
          </div>
          <div className="district-note"><strong>District C:</strong> Bel Air, Bel Air South, Fountain Green, and nearby neighborhoods.</div>
        </div>
        <aside className="card hero-card">
          <img
            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c4?auto=format&fit=crop&w=800&q=80"
            alt="Zach Schulz talking with neighbors"
          />
          <div className="card-body">
            <h3>Listening to every neighborhood</h3>
            <p>
              From downtown Bel Air to the rural edges of the district, Zach is knocking on doors, hosting house meetings, and learning
              from neighbors about what’s working and what’s not.
            </p>
            <a className="text-link" href="#meet">Read Zach’s story →</a>
          </div>
        </aside>
      </div>
    </section>
  )
}

function Meet(){
  return (
    <section id="meet" className="section">
      <div className="container">
        <SectionHeading
          title="Meet Zach"
          subtitle="Rooted in Harford County, ready to bring common-sense leadership to the County Council."
        />
        <div className="grid-2n bio-grid">
          <div className="card">
            <h3>Family & Community</h3>
            <p>
              Zach grew up in Bel Air and graduated from C. Milton Wright High School before earning an engineering degree from the
              University of Maryland. He and his wife, Erica, are raising their two young daughters in District C and are active in
              school PTA and youth sports.
            </p>
            <p>
              Whether coaching soccer or volunteering at local clean-up days, Zach believes public service starts with being present and
              accessible to your neighbors.
            </p>
          </div>
          <div className="card">
            <h3>Professional Experience</h3>
            <p>
              As a civil engineer focused on transportation and infrastructure projects, Zach has helped counties across Maryland stretch
              every tax dollar, maintain safe roads, and plan for future growth. He knows how to evaluate data and move projects forward.
            </p>
            <p>
              On the council, he’ll bring that same disciplined, evidence-based approach to budgeting and community investment.
            </p>
          </div>
          <div className="card">
            <h3>Service & Leadership</h3>
            <p>
              Zach is a board member for Harford Habitat for Humanity and volunteers with the Bel Air Community Foundation. He listens
              first and builds broad coalitions to get things done.
            </p>
            <p>
              He’s running for County Council to ensure the next generation can afford to stay, work, and raise their families here in
              Harford.
            </p>
          </div>
          <div className="card">
            <h3>Values</h3>
            <p>
              Zach believes in responsible spending, safe neighborhoods, and collaborative leadership. He’ll be transparent, responsive,
              and focused on delivering results for the people of District C.
            </p>
            <p>
              Every decision will be grounded in listening to residents and measuring outcomes — not partisan talking points.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Priorities(){
  const priorities = [
    {
      title: 'Safe, Connected Neighborhoods',
      description: 'Invest in traffic calming, sidewalks, and first responders so families feel safe walking, driving, and biking in Bel Air and surrounding communities.'
    },
    {
      title: 'Strong Schools & Youth Support',
      description: 'Partner with educators to reduce class sizes, expand mental health services, and create after-school programs that keep students engaged and supported.'
    },
    {
      title: 'Responsible Growth',
      description: 'Balance new development with infrastructure upgrades, protect green spaces, and ensure the county keeps pace with needed roads, water, and sewer improvements.'
    }
  ]

  return (
    <section id="priorities" className="section alt">
      <div className="container">
        <SectionHeading
          title="Three Priorities on Day One"
          subtitle="A clear focus on what matters most for Harford families."
        />
        <div className="grid-3 priorities">
          {priorities.map(priority => (
            <div className="card" key={priority.title}>
              <h3>{priority.title}</h3>
              <p>{priority.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Issues(){
  const items = [
    {
      title: 'Infrastructure that Keeps Us Moving',
      body: 'Create a transparent project tracker so residents can see when roads are scheduled for resurfacing, sidewalk repairs, and stormwater upgrades.'
    },
    {
      title: 'Supporting Teachers & Classrooms',
      body: 'Advocate for competitive pay and classroom resources so Harford County can recruit and retain great educators.'
    },
    {
      title: 'Protecting Neighborhood Character',
      body: 'Update zoning to preserve our historic main streets and farmland while encouraging redevelopment in targeted growth areas.'
    },
    {
      title: 'Healthy Communities',
      body: 'Expand partnerships with nonprofits to tackle opioid addiction, improve access to mental health care, and support seniors aging in place.'
    },
    {
      title: 'Open, Transparent Government',
      body: 'Livestream every council meeting, publish agendas earlier, and provide clear summaries of how each vote impacts the community.'
    },
    {
      title: 'Thriving Local Economy',
      body: 'Cut red tape for small businesses, support apprenticeships, and leverage county purchasing power to keep contracts local.'
    }
  ]

  return (
    <section id="issues" className="section">
      <div className="container">
        <SectionHeading
          title="Issues & Solutions"
          subtitle="Zach is offering specifics because families deserve more than slogans."
        />
        <div className="grid-3">
          {items.map(item => (
            <div className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DistrictPlan(){
  const milestones = [
    {
      title: '100-Day Neighborhood Listening Tour',
      detail: 'Host open office hours in each community, meet with volunteer fire companies, and gather input to shape the first-year agenda.'
    },
    {
      title: 'Transparent Budget Dashboard',
      detail: 'Publish an online tool that tracks capital projects, spending, and timelines so residents can follow along and hold government accountable.'
    },
    {
      title: 'Safer Streets Initiative',
      detail: 'Work with law enforcement and residents to deploy speed studies, lighting upgrades, and crosswalk improvements in crash hotspots.'
    }
  ]

  const stats = [
    {value: '15+', label: 'Years solving infrastructure challenges'},
    {value: '12', label: 'Neighborhood listening sessions held in 2024'},
    {value: '3,500+', label: 'Doors knocked across District C'}
  ]

  return (
    <section id="plan" className="section alt">
      <div className="container plan-grid">
        <div>
          <SectionHeading
            title="A Plan Built with Neighbors"
            subtitle="Real conversations are shaping Zach’s agenda for District C."
          />
          <div className="milestones">
            {milestones.map(item => (
              <div className="milestone" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="card stats">
          <h3>Progress so far</h3>
          <ul>
            {stats.map(stat => (
              <li key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
          <p className="note">Numbers updated monthly. Add your story so Zach can keep listening and learning.</p>
          <a className="cta" href="#getinvolved">Share your perspective</a>
        </aside>
      </div>
    </section>
  )
}

function GetInvolved(){
  const volunteerOptions = [
    'Weekend canvassing team',
    'Phone banking from home',
    'Host a neighborhood meet & greet',
    'Deliver yard signs',
    'Write postcards to voters'
  ]

  const events = [
    {date: 'May 4', name: 'Bel Air Main Street Clean-Up', time: '9:00 – 11:00 a.m.', location: 'Armory Park'},
    {date: 'May 14', name: 'Listening Session: Fountain Green', time: '6:30 – 8:00 p.m.', location: 'Fountain Green Elementary'},
    {date: 'May 25', name: 'Family Fun Night & BBQ', time: '5:30 – 7:30 p.m.', location: 'Shamrock Park Pavilion'}
  ]

  return (
    <section id="getinvolved" className="section">
      <div className="container grid-2 involvement-grid">
        <div className="card">
          <h2>Join Team Zach</h2>
          <p className="muted">
            Grassroots energy powers this campaign. Tell us how you’d like to help and our volunteer coordinator will be in touch within
            24 hours.
          </p>
          <form action="https://formspree.io/f/xbjnyevq" method="POST" className="form">
            <label>
              Name
              <input name="name" required placeholder="Full name"/>
            </label>
            <label>
              Email
              <input name="email" type="email" required placeholder="Email"/>
            </label>
            <label>
              Phone
              <input name="phone" placeholder="Phone (optional)"/>
            </label>
            <label>
              Volunteer interest
              <select name="interest" defaultValue="">
                <option value="" disabled>Select one</option>
                {volunteerOptions.map(option => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>
              Availability or notes
              <textarea name="message" rows="3" placeholder="Let us know when you’re free"/>
            </label>
            <button className="cta" type="submit">Sign Up</button>
          </form>
        </div>
        <aside className="card">
          <h3>Upcoming Events</h3>
          <p className="muted">Come meet Zach and neighbors across the district.</p>
          <ul className="event-list">
            {events.map(event => (
              <li key={event.name}>
                <span className="event-date">{event.date}</span>
                <div>
                  <strong>{event.name}</strong>
                  <div className="muted">{event.time}</div>
                  <div className="muted">{event.location}</div>
                </div>
              </li>
            ))}
          </ul>
          <a className="text-link" href="mailto:Zachschulzforharford@gmail.com">Host an event →</a>
        </aside>
      </div>
    </section>
  )
}

function Donate(){
  const givingLevels = [25, 50, 100, 250]

  return (
    <section id="donate" className="section alt">
      <div className="container donate-grid">
        <div>
          <SectionHeading
            title="Invest in Harford’s Future"
            subtitle="Every contribution keeps our organizing strong through Election Day."
          />
          <p className="muted">
            Friends of Zach Schulz uses donations to print literature, put volunteers on doorsteps, and share Zach’s vision for Harford
            County. Thank you for fueling this community-driven campaign.
          </p>
          <div className="giving-levels">
            {givingLevels.map(level => (
              <a key={level} className="pill" href="https://secure.actblue.com/" target="_blank" rel="noreferrer">
                ${level}
              </a>
            ))}
            <a className="pill" href="https://secure.actblue.com/" target="_blank" rel="noreferrer">Other</a>
          </div>
        </div>
        <aside className="card donate-card">
          <h3>Ways to give</h3>
          <ul>
            <li><strong>Online:</strong> <a href="https://secure.actblue.com/" target="_blank" rel="noreferrer">ActBlue</a></li>
            <li><strong>Mail:</strong> Friends of Zach Schulz, P.O. Box 1234, Bel Air, MD 21014</li>
            <li><strong>Checks payable to:</strong> Friends of Zach Schulz</li>
          </ul>
          <p className="muted">
            Maryland law requires we report employer and occupation information for contributions over $500. Corporate contributions are
            prohibited.
          </p>
        </aside>
      </div>
    </section>
  )
}

function Contact(){
  const endorsements = [
    {
      name: 'Sarah Thompson',
      role: 'Bel Air Elementary Teacher',
      quote: '“Zach shows up for our schools. He listens to educators and parents, and he has a plan to make sure our classrooms are supported.”'
    },
    {
      name: 'Chief (Ret.) Marcus Allen',
      role: 'Former Volunteer Fire Chief, Bel Air',
      quote: '“We need council members who understand infrastructure and public safety. Zach’s experience will help us modernize our stations and equipment.”'
    },
    {
      name: 'Lydia Martinez',
      role: 'Owner, Main Street Café',
      quote: '“Zach knows what small businesses need: predictable permitting, safe streets, and a voice at the table.”'
    }
  ]

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div className="card">
          <h2>Contact Team Zach</h2>
          <p className="muted">
            Questions, ideas, or invitations to your neighborhood association? Reach out and we’ll respond within one business day.
          </p>
          <form action="mailto:Zachschulzforharford@gmail.com" method="get" className="form">
            <label>
              Name
              <input name="name" required placeholder="Your name"/>
            </label>
            <label>
              Email
              <input name="email" type="email" required placeholder="you@example.com"/>
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="How can we help?"/>
            </label>
            <button className="cta" type="submit">Send message</button>
          </form>
          <div className="contact-details">
            <p><strong>Email:</strong> <a href="mailto:Zachschulzforharford@gmail.com">Zachschulzforharford@gmail.com</a></p>
            <p><strong>Phone:</strong> (410) 555-0123</p>
            <p><strong>Committee:</strong> Friends of Zach Schulz</p>
          </div>
        </div>
        <aside>
          <div className="card">
            <h3>Connect with the campaign</h3>
            <ul className="social-links">
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer">X (Twitter)</a></li>
              <li><a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
            </ul>
            <p className="muted">Follow along for updates, volunteer shifts, and community highlights.</p>
          </div>
          <div className="card endorsements">
            <h3>What neighbors are saying</h3>
            <ul>
              {endorsements.map(endorsement => (
                <li key={endorsement.name}>
                  <p className="quote">{endorsement.quote}</p>
                  <p className="muted">— {endorsement.name}, {endorsement.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}

function SectionHeading({title, subtitle}){
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <p className="muted">{subtitle}</p>
    </div>
  )
}

function Footer(){
  return (
    <footer>
      <div className="container footer">
        <div>Paid for by Friends of Zach Schulz • Treasurer: Erica Schulz</div>
        <div className="footer-links">
          <a href="mailto:Zachschulzforharford@gmail.com">Zachschulzforharford@gmail.com</a>
          <span>© {new Date().getFullYear()} Zach Schulz for Harford County Council</span>
        </div>
      </div>
    </footer>
  )
}

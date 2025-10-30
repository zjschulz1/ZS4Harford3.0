import React from 'react'
export default function App(){
  return (
    <div>
      <Header/>
      <main>
        <Home/>
        <Meet/>
        <Issues/>
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
            <div style={{fontSize:12,color:'var(--muted)'}}>Zach Schulz for Harford</div>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#meet">Meet Zach</a>
          <a href="#issues">Issues</a>
          <a href="#getinvolved">Get Involved</a>
          <a href="#donate">Donate</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="cta" href="#getinvolved">Join</a>
      </div>
    </header>
  )
}
function Home(){
  return (
    <section id="home" className="hero">
      <div className="container grid-2">
        <div>
          <div style={{fontSize:14,color:'var(--muted)',fontWeight:600}}>Smart Leadership. Stronger Harford.</div>
          <h1 style={{margin:'10px 0',fontSize:32,color:'var(--navy)'}}>For Harford County Council, District C</h1>
          <p style={{fontSize:16,color:'#374151'}}>Lifelong Harford resident, husband, and father of two young daughters — running to build safer neighborhoods, stronger schools, and a future where our kids can thrive.</p>
          <div style={{marginTop:16,display:'flex',gap:12,flexWrap:'wrap'}}>
            <a className="cta" href="#getinvolved">Volunteer</a>
            <a href="#donate" style={{padding:'8px 12px',border:'1px solid #e6e9ef',borderRadius:8,fontWeight:700}}>Donate</a>
            <a href="#issues" style={{padding:'8px 12px'}}>See my plan →</a>
          </div>
          <div style={{marginTop:12,color:'var(--muted)',fontSize:14}}><strong>District C:</strong> Bel Air & surrounding communities</div>
        </div>
        <aside className="card">
          <img src="https://picsum.photos/800/400?random=3" alt="Headshot placeholder" style={{width:'100%',height:220,objectFit:'cover',borderRadius:8}}/>
          <h3 style={{marginTop:12}}>Meet Zach</h3>
          <p style={{color:'var(--muted)'}}>Engineer. Dad. Lifelong Harford resident. Practical, listening-first leadership for our families.</p>
          <a href="#meet" style={{fontWeight:700}}>Read my story →</a>
        </aside>
      </div>
    </section>
  )
}
function Meet(){
  return (
    <section id="meet" style={{padding:'30px 0'}}>
      <div className="container">
        <h2 style={{color:'var(--navy)'}}>A New Generation of Leadership for Harford County</h2>
        <p style={{color:'#374151'}}>I live in Bel Air with my wife and our two daughters (ages 4 and 6 months). I’ve lived in Harford County all my life. I’m running to create the best possible environment and life for my kids and the district’s kids. As an engineer, I use problem-based decision making — listening, analyzing, and delivering practical solutions rooted in family values.</p>
        <div className="grid-2n" style={{marginTop:16}}>
          <div className="card">
            <h3>Why I’m Running</h3>
            <p style={{color:'#374151'}}>As a parent, I see the challenges families face — housing, safe streets, quality schools, and local job opportunities. I’ll bring listening-first leadership combined with data-driven solutions.</p>
          </div>
          <div className="card">
            <h3>How I Lead</h3>
            <p style={{color:'#374151'}}>Leadership starts with listening. I’ll host town halls, meet neighbors across District C, and make decisions guided by clear metrics and transparency.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
function Issues(){
  const items = [
    {title:'Stronger Schools & Youth Services', body:'Support classroom resources, after-school programs, and safe routes to school. Partner with local employers for job pathways.'},
    {title:'Smart Infrastructure & Safer Streets', body:'Prioritize road safety, sidewalks, and bike lanes using data to target the highest-impact improvements.'},
    {title:'Support Small Business & Local Jobs', body:'Cut unnecessary red tape, support downtown revitalization, and incentivize local hiring.'},
    {title:'Fiscal Responsibility & Transparency', body:'Bring engineering-style budgeting to county government: prioritize high-return investments and reduce waste.'},
    {title:'Parks, Families & Community Life', body:'Preserve green space, expand family programming, and improve accessibility for all residents.'}
  ]
  return (
    <section id="issues" style={{padding:'30px 0'}}>
      <div className="container">
        <h2 style={{color:'var(--navy)'}}>Issues & Plans</h2>
        <p style={{color:'var(--muted)'}}>Specific, practical steps I will pursue to make District C a better place for families and businesses.</p>
        <div className="grid-2n" style={{marginTop:16}}>
          {items.map(i => (
            <div className="card" key={i.title}>
              <h3 style={{color:'var(--navy)'}}>{i.title}</h3>
              <p style={{color:'#374151'}}>{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
function GetInvolved(){
  return (
    <section id="getinvolved" style={{padding:'30px 0'}}>
      <div className="container grid-2">
        <div className="card">
          <h2>Get Involved</h2>
          <p style={{color:'var(--muted)'}}>Join our grassroots effort: canvass, host a meet & greet, request a sign, or volunteer time. Every neighbor helps.</p>
          <form action="https://formspree.io/f/your-form-id" method="POST" style={{display:'grid',gap:8,marginTop:12}}>
            <input name="name" required placeholder="Full name" style={{padding:8,border:'1px solid #e6e9ef',borderRadius:8}}/>
            <input name="email" type="email" required placeholder="Email" style={{padding:8,border:'1px solid #e6e9ef',borderRadius:8}}/>
            <input name="phone" placeholder="Phone (optional)" style={{padding:8,border:'1px solid #e6e9ef',borderRadius:8}}/>
            <select name="interest" style={{padding:8,border:'1px solid #e6e9ef',borderRadius:8}}>
              <option>Canvassing / Door knocking</option>
              <option>Phone / Text banking</option>
              <option>Yard signs</option>
              <option>Host a meet & greet</option>
            </select>
            <div style={{display:'flex',gap:8,marginTop:4}}>
              <button className="cta" type="submit">Sign Up</button>
              <a href="mailto:Zachschulzforharford@gmail.com" style={{padding:'8px 12px',border:'1px solid #e6e9ef',borderRadius:8}}>Email us</a>
            </div>
          </form>
        </div>
        <aside className="card">
          <h3>Yard Signs & Events</h3>
          <p style={{color:'var(--muted)'}}>Request a yard sign or host an event — we’ll coordinate pickup and delivery across Bel Air and surrounding neighborhoods.</p>
          <a className="cta" href="mailto:Zachschulzforharford@gmail.com">Request a Sign</a>
          <div style={{marginTop:12}}>
            <h4 style={{margin:0}}>Volunteer Roles</h4>
            <ul style={{marginTop:8,marginLeft:18,color:'var(--muted)'}}>
              <li>Canvassers</li>
              <li>Phone bankers</li>
              <li>Event hosts</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}
function Donate(){
  return (
    <section id="donate" style={{padding:'30px 0'}}>
      <div className="container">
        <div className="card">
          <h2>Donate</h2>
          <p style={{color:'var(--muted)'}}>Your contribution powers yard signs, outreach, and community events. Any amount helps our grassroots campaign.</p>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:8}}>
            <a className="cta" href="#" aria-label="ActBlue placeholder">Donate (ActBlue)</a>
            <a href="#" style={{padding:'8px 12px',border:'1px solid #e6e9ef',borderRadius:8}}>PayPal</a>
          </div>
          <p style={{color:'var(--muted)',marginTop:10}}>Mail checks to: Friends of Zach Schulz (Zach Schulz for Harford) — [mailing address]. All contributions subject to Maryland campaign finance rules.</p>
        </div>
      </div>
    </section>
  )
}
function Contact(){
  return (
    <section id="contact" style={{padding:'30px 0'}}>
      <div className="container grid-2">
        <div className="card">
          <h2>Contact</h2>
          <p style={{color:'var(--muted)'}}>Questions, ideas, or event invites — we want to hear from you.</p>
          <form action="mailto:Zachschulzforharford@gmail.com" method="get" style={{display:'grid',gap:8,marginTop:12}}>
            <input name="name" required placeholder="Name" style={{padding:8,border:'1px solid #e6e9ef',borderRadius:8}}/>
            <input name="email" type="email" required placeholder="Email" style={{padding:8,border:'1px solid #e6e9ef',borderRadius:8}}/>
            <textarea name="message" rows="5" placeholder="Message" style={{padding:8,border:'1px solid #e6e9ef',borderRadius:8}}/>
            <button className="cta" type="submit">Send</button>
          </form>
        </div>
        <aside className="card">
          <h3>Campaign Contacts</h3>
          <p><strong>Email:</strong> <a href="mailto:Zachschulzforharford@gmail.com">Zachschulzforharford@gmail.com</a></p>
          <p style={{marginTop:8}}><strong>Committee:</strong> Friends of Zach Schulz (Zach Schulz for Harford)</p>
          <div style={{marginTop:12}}>
            <h4 style={{margin:0}}>Follow</h4>
            <div style={{marginTop:8,display:'flex',gap:8}}>
              <a href="#" style={{padding:6,border:'1px solid #e6e9ef',borderRadius:6}}>Facebook</a>
              <a href="#" style={{padding:6,border:'1px solid #e6e9ef',borderRadius:6}}>Instagram</a>
              <a href="#" style={{padding:6,border:'1px solid #e6e9ef',borderRadius:6}}>X</a>
            </div>
            <p style={{color:'var(--muted)',fontSize:13,marginTop:8}}>(Placeholders — replace with your handles)</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
function Footer(){
  return (
    <footer>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 0',gap:12,flexWrap:'wrap'}}>
        <div style={{color:'var(--muted)'}}>Paid for by Friends of Zach Schulz (Zach Schulz for Harford)</div>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <a href="mailto:Zachschulzforharford@gmail.com">Zachschulzforharford@gmail.com</a>
          <div style={{color:'#9ca3af'}}>© {new Date().getFullYear()} Zach Schulz for Harford</div>
        </div>
      </div>
    </footer>
  )
}

import React from 'react';
import { 
  Code, 
  User, 
  Mail, 
  Phone, 
  ChevronDown, 
  Briefcase, 
  GraduationCap, 
  Database, 
  Layout, 
  Server, 
  ShieldCheck, 
  LineChart, 
  PenTool
} from 'lucide-react';

function App() {
  return (
    <div className="app-container">
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container animate-fade-in">
            <h1 className="gradient-text">Gourav Kumar</h1>
            <p>Full Stack .NET Developer</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
            
            <div style={{ marginTop: '4rem' }}>
              <a href="#about" style={{ color: 'var(--text-secondary)' }}>
                <ChevronDown size={32} className="animate-bounce" />
              </a>
            </div>
          </div>
        </section>

        {/* About & Skills Section */}
        <section id="about" className="section" style={{ backgroundColor: 'var(--surface-color)' }}>
          <div className="container">
            <h2 className="section-title gradient-text">About & Skills</h2>
            <div className="about-content">
              <div className="about-text glass-panel" style={{ padding: '2rem' }}>
                <p>
                  I am a Full Stack .NET Developer with 4+ years of experience in designing and developing enterprise applications using ASP.NET Core, ASP.NET MVC, Web API, SQL Server, and React.
                </p>
                <p>
                  My expertise includes building IT Asset Management (ITAM), Survey Management, Document Management, and Reporting solutions. I am skilled in API development, React-based UI development, Windows Services, JWT Authentication, SQL performance optimization, and business analytics using Apache Superset.
                </p>
              </div>

              <div className="skills-container">
                <div className="skill-category">
                  <h3><Server size={18} style={{display: 'inline', marginRight: '8px'}}/> Backend</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">ASP.NET Core</span>
                    <span className="skill-tag">ASP.NET MVC</span>
                    <span className="skill-tag">Web API</span>
                    <span className="skill-tag">C#</span>
                    <span className="skill-tag">Entity Framework</span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3><Layout size={18} style={{display: 'inline', marginRight: '8px'}}/> Frontend</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">HTML5 & CSS3</span>
                    <span className="skill-tag">Bootstrap</span>
                    <span className="skill-tag">jQuery</span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3><Database size={18} style={{display: 'inline', marginRight: '8px'}}/> Database & Tools</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">SQL Server</span>
                    <span className="skill-tag">Oracle</span>
                    <span className="skill-tag">MariaDB</span>
                    <span className="skill-tag">Git & SVN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="container">
            <h2 className="section-title gradient-text">Professional Experience</h2>
            
            <div className="timeline">
              <div className="timeline-item animate-fade-in">
                <div className="timeline-date">Oct 2023 – Present</div>
                <h3 className="timeline-title">Software Developer (.NET)</h3>
                <div className="timeline-company">Softel Solution Pvt. Ltd.</div>
                <div className="timeline-desc">
                  <ul>
                    <li>Architected and implemented ITAM modules including Asset Lifecycle, Software Inventory, and Document Library.</li>
                    <li>Developed React-based user interfaces and reusable components for ticket workflows and dashboards.</li>
                    <li>Engineered a Windows Inventory Agent for automated hardware/software discovery.</li>
                    <li>Built secure REST APIs and implemented JWT Authentication and RBAC.</li>
                    <li>Designed KPI dashboards using React and Apache Superset.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="timeline-date">Aug 2021 – Oct 2023</div>
                <h3 className="timeline-title">Software Developer (.NET)</h3>
                <div className="timeline-company">Amity Software System Ltd.</div>
                <div className="timeline-desc">
                  <ul>
                    <li>Supported and enhanced enterprise applications using ASP.NET Web Forms, ASP.NET MVC, C#, and SQL Server.</li>
                    <li>Modernized legacy VB.NET applications by migrating them to ASP.NET-based solutions.</li>
                    <li>Designed and optimized Stored Procedures, Functions, Views, and database components.</li>
                    <li>Developed operational and management reports using Crystal Reports and HTML reporting solutions.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section" style={{ backgroundColor: 'var(--surface-color)' }}>
          <div className="container">
            <h2 className="section-title gradient-text">Key Projects</h2>
            
            <div className="projects-grid">
              <div className="project-card glass-panel">
                <div className="project-icon">
                  <Briefcase size={24} />
                </div>
                <h3 className="project-title">Enterprise IT Asset Management (ITAM)</h3>
                <p className="project-desc">
                  Developed a comprehensive ITAM platform covering Asset Lifecycle Management, Software Inventory, Ticket Management, Incident Management, SLA Tracking, Document Library, RBAC, and Dashboard Reporting.
                </p>
              </div>

              <div className="project-card glass-panel">
                <div className="project-icon">
                  <Server size={24} />
                </div>
                <h3 className="project-title">Endpoint Inventory & Monitoring Agent</h3>
                <p className="project-desc">
                  Engineered a Windows-based inventory agent to collect hardware/software information and synchronize inventory data with centralized APIs.
                </p>
              </div>

              <div className="project-card glass-panel">
                <div className="project-icon">
                  <LineChart size={24} />
                </div>
                <h3 className="project-title">Survey Management System</h3>
                <p className="project-desc">
                  Developed survey creation, response collection, analytics, reporting modules, and Apache Superset dashboards.
                </p>
              </div>

              <div className="project-card glass-panel">
                <div className="project-icon">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="project-title">Document Management System</h3>
                <p className="project-desc">
                  Developed secure document repository, bulk upload, audit tracking, access control, and reporting capabilities for GAIL India Ltd.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section">
          <div className="container">
            <h2 className="section-title gradient-text">Education</h2>
            <div className="education-grid">
              <div className="edu-card glass-panel">
                <GraduationCap size={32} style={{ color: 'var(--accent-color)', margin: '0 auto 1rem' }} />
                <h3 className="edu-degree">MCA (Master of Computer Applications)</h3>
                <div className="edu-school">IFTM University, Moradabad</div>
                <span className="edu-year">2018 | 72%</span>
              </div>

              <div className="edu-card glass-panel">
                <GraduationCap size={32} style={{ color: 'var(--accent-color)', margin: '0 auto 1rem' }} />
                <h3 className="edu-degree">BCA (Bachelor of Computer Applications)</h3>
                <div className="edu-school">IFTM University, Moradabad</div>
                <span className="edu-year">2015 | 70%</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact Section */}
      <footer id="contact" className="footer" style={{ backgroundColor: 'var(--surface-color)' }}>
        <div className="container">
          <h2 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Let's Connect</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Currently open for new opportunities. Reach out to me!
          </p>
          
          <div className="footer-links">
            <a href="mailto:gouravkumar01432@gmail.com" className="footer-link" aria-label="Email">
              <Mail size={28} />
            </a>
            <a href="tel:+918439978886" className="footer-link" aria-label="Phone">
              <Phone size={28} />
            </a>
            <a href="#" className="footer-link" aria-label="LinkedIn">
              <User size={28} />
            </a>
            <a href="#" className="footer-link" aria-label="GitHub">
              <Code size={28} />
            </a>
          </div>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            &copy; {new Date().getFullYear()} Gourav Kumar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

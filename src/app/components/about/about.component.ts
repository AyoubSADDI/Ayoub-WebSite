import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-label">About Me</span>
          <h2>Crafting Digital Excellence</h2>
          <p>Computer engineer specializing in Full Stack Java /Angular /React development</p>
        </div>

        <div class="about-grid">
          <!-- Left Card -->
          <div class="about-card" data-aos="fade-right">
            <div class="about-avatar">
              <img src="assets/images/about1.png" alt="Ayoub SADDI">
              <div class="avatar-badge"><i class="fas fa-code"></i></div>
            </div>
            <div class="about-info">
              <h3>Ayoub SADDI</h3>
              <p class="about-role">Full-Stack Developer (Java/Angular/React)</p>
              <div class="info-list">
                <div class="info-row"><i class="fas fa-map-marker-alt"></i><span>Tunis, Tunisia</span></div>
                <div class="info-row"><i class="fas fa-phone"></i><a href="tel:+21629835164">(+216) 50 266 100</a></div>
                <div class="info-row"><i class="fas fa-envelope"></i><span>Ayoubsaddi01&#64;gmail.com</span></div>
                <div class="info-row"><i class="fab fa-github"></i><a href="https://github.com/AyoubSADDI" target="_blank">github.com/AyoubSADDI</a></div>
                <div class="info-row"><i class="fab fa-linkedin-in"></i><a href="https://linkedin.com/in/ayoub-saddi" target="_blank">linkedin: AyoubSADDI</a></div>
                <div class="info-row"><i class="fas fa-graduation-cap"></i><span>Software Engineer</span></div>
              </div>
              <a href="#contact" class="btn-primary download-btn" (click)="scrollTo()">
                <i class="fas fa-paper-plane"></i>
                Contact Me
              </a>
            </div>
          </div>

          <!-- Right: Summary -->
          <div class="about-details" data-aos="fade-left">
            <div class="about-summary">
               
              <h3>Professional Summary</h3>
              <p>
                Computer Science Engineer specializing in <strong>Full Stack Java/Angular/React </strong> 
                web development.
               Currently a developer at <strong>Pass Consulting Group</strong>, I possess solid expertise in web application design and development.
              </p>
              <p>
                Passionate about IT and software development, I am eager to leverage my technical skills and meticulous approach to high-value projects. I am known for my teamwork, flexibility, and methodical approach.
              </p>
              <p>
                Expertise includes  <strong>Keycloak, Java, Kafka, React, Angular, Jaspersoft reporting</strong>, with interactive KPIs and CI/CD pipelines.
              </p>
            </div>

            <div class="highlights">
              <div class="highlight-item" *ngFor="let item of highlights">
                <div class="highlight-icon"><i [class]="item.icon"></i></div>
                <div>
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.desc }}</p>
                </div>
              </div>
            </div>

            <!-- Languages -->
            <div class="languages-row">
              <h4>Languages</h4>
              <div class="lang-badges">
                <span class="lang-badge" *ngFor="let l of languages">
                  <span class="lang-flag">{{ l.flag }}</span>
                  <span>{{ l.name }}</span>
                  <span class="lang-level">{{ l.level }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="skills-section">
          <h3 class="skills-title" data-aos="fade-up">Technical Skills</h3>
          <div class="skills-grid">
            <div class="skill-group"
                 *ngFor="let group of skillGroups; let i = index"
                 data-aos="fade-up"
                 [attr.data-aos-delay]="i * 100">
              <div class="skill-group-header">
                <div class="skill-group-icon" [style.background]="group.color + '22'">
                  <i [class]="group.icon" [style.color]="group.color"></i>
                </div>
                <h4>{{ group.category }}</h4>
              </div>
              <!-- Zid l-ID houni bech n-tab3ouh -->
<div class="skills-container" #skillsSection>
  
  <div class="skill-list">
    <div class="skill-item" *ngFor="let skill of group.skills">
      <div class="skill-info">
        <span>{{ skill.name }}</span>
        <span class="skill-percent">{{ skill.level }}%</span>
      </div>
      
      <div class="skill-bar">
        <!-- L-animation ma t-triggeri ken ki nouslou b-scrolling -->
        <div class="skill-bar-fill" 
             [style.width.%]="isSkillsVisible ? skill.level : 0">
        </div>
      </div>
    </div>
  </div>

</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
.skill-bar {
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden; 
}

.skill-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #7c3aed, #a78bfa);
  width: 0;
  border-radius: 10px;
  transition: width 2s cubic-bezier(0.22, 1, 0.36, 1); 
}
    .about-section { background:var(--bg-secondary); }
    .about-grid { display:grid; grid-template-columns:340px 1fr; gap:48px; margin-bottom:80px; align-items:start; }
    @media(max-width:900px){ .about-grid { grid-template-columns:1fr; gap:32px; } }
    .about-card { background:var(--bg-card); border:1px solid var(--border); border-radius:20px; overflow:hidden; box-shadow:0 4px 24px var(--shadow); position:sticky; top:100px; }
    @media(max-width:900px){ .about-card { position:static; } }
    .about-avatar { position:relative; height:220px; overflow:hidden; }
    .about-avatar img { width:100%; height:100%; object-fit:cover; object-position:top; }
    .avatar-badge { position:absolute; bottom:16px; right:16px; width:44px; height:44px; background:var(--accent); border-radius:12px; display:flex; align-items:center; justify-content:center; color:white; font-size:1rem; box-shadow:0 4px 16px rgba(26,86,219,0.4); }
    .about-info { padding:24px; }
    .about-info h3 { font-size:1.3rem; margin-bottom:4px; }
    .about-role { color:var(--accent); font-size:0.9rem; font-weight:500; margin-bottom:20px; }
    .info-list { display:flex; flex-direction:column; gap:10px; margin-bottom:24px; }
    .info-row { display:flex; align-items:center; gap:10px; font-size:0.88rem; color:var(--text-secondary); }
    .info-row i { width:16px; color:var(--accent); font-size:0.8rem; }
    .info-row a { color:var(--text-secondary); text-decoration:none; transition:color 0.2s; }
    .info-row a:hover { color:var(--accent); }
    .download-btn { width:100%; justify-content:center; font-size:0.9rem; padding:12px; }
    .about-details { display:flex; flex-direction:column; gap:28px; }
    .about-summary h3 { font-size:1.4rem; margin-bottom:16px; }
    .about-summary p { margin-bottom:14px; font-size:1rem; line-height:1.75; }
    .about-summary strong { color:var(--text-primary); font-weight:600; }
    .highlights { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
    @media(max-width:600px){ .highlights { grid-template-columns:1fr; } }
    .highlight-item { display:flex; gap:14px; align-items:flex-start; background:var(--bg-card); border:1px solid var(--border); border-radius:14px; padding:16px; transition:all 0.2s ease; }
    .highlight-item:hover { border-color:var(--accent); box-shadow:0 4px 20px var(--shadow); }
    .highlight-icon { width:40px; height:40px; min-width:40px; background:var(--accent-light); border-radius:10px; display:flex; align-items:center; justify-content:center; color:var(--accent); font-size:0.9rem; }
    .highlight-item h4 { font-size:0.9rem; margin-bottom:4px; font-family:'DM Sans',sans-serif; font-weight:600; }
    .highlight-item p { font-size:0.82rem; color:var(--text-muted); margin:0; }
    .languages-row h4 { font-size:0.9rem; margin-bottom:12px; font-family:'DM Sans',sans-serif; font-weight:700; }
    .lang-badges { display:flex; gap:10px; flex-wrap:wrap; }
    .lang-badge { display:inline-flex; align-items:center; gap:6px; background:var(--bg-card); border:1px solid var(--border); border-radius:10px; padding:8px 14px; font-size:0.85rem; }
    .lang-flag { font-size:1.1rem; }
    .lang-level { color:var(--accent); font-weight:600; font-size:0.78rem; }
    .skills-section .skills-title { font-size:1.6rem; text-align:center; margin-bottom:40px; }
    .skills-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:24px; }
    .skill-group { background:var(--bg-card); border:1px solid var(--border); border-radius:16px; padding:24px; transition:all 0.3s ease; }
    .skill-group:hover { box-shadow:0 8px 32px var(--shadow-md); transform:translateY(-4px); }
    .skill-group-header { display:flex; align-items:center; gap:12px; margin-bottom:20px; }
    .skill-group-header h4 { font-size:1rem; font-family:'DM Sans',sans-serif; font-weight:700; }
    .skill-group-icon { width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:1rem; }
    .skill-list { display:flex; flex-direction:column; gap:14px; }
    .skill-info { display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.85rem; font-weight:500; color:var(--text-secondary); }
    .skill-percent { color:var(--accent); font-weight:600; }
    .skill-bar { height:6px; background:var(--border); border-radius:3px; overflow:hidden; }
    .skill-bar-fill { height:100%; background:linear-gradient(90deg,var(--accent),#7c3aed); border-radius:3px; animation:fillBar 1.5s ease-out forwards; }
    @keyframes fillBar { from { width:0 !important; } }
  `]
})
export class AboutComponent {
  highlights = [
    { icon:'fas fa-shield-alt',  title:'Security Expert',        desc:'OAuth2, Keycloak, JWT authentication' },
    { icon:'fas fa-cubes',       title:'Microservices',          desc:'Spring Cloud + API Gateway + Load Balancer' },
    { icon:'fas fa-chart-bar',   title:'Jaspersoft Reports',     desc:'KPI drill-down & BI reporting' },
    { icon:'fas fa-infinity',    title:'CI/CD DevOps',           desc:'Jenkins, SonarQube, Nexus, Grafana' }
  ];

  languages = [
    { flag:'🇸🇦', name:'Arabic',   level:'Native' },
    { flag:'🇬🇧', name:'English',  level:'B2' },
    { flag:'🇫🇷', name:'French',   level:'B2' }
  ];

  skillGroups = [
    {
      category:'Frontend', icon:'fas fa-desktop', color:'#e74c3c',
      skills:[
        { name:'Angular', level:95 },
        { name:'TypeScript', level:90 },
        { name:'PrimeNG / Bootstrap', level:88 },
        { name:'HTML / CSS / SCSS / JS', level:87 },
        { name:'React', level:67 },
        { name:'Redux', level:73 }
      ]
    },
    {
      category:'Backend', icon:'fas fa-server', color:'#27ae60',
      skills:[
        { name:'Java', level:95 },
        { name:'Spring Boot', level:93 },
        { name:'Hibernate / JPA', level:87 },
        { name:'REST APIs / Swagger', level:92 },
        { name:'SOAP', level:67 },
        {name:'Spring Cloud', level:92 }
      ]
    },
    {
      category:'Database & Cloud', icon:'fas fa-database', color:'#3498db',
      skills:[
        { name:'MySQL', level:90 },
        { name:'AWS (EC2, S3, RDS)', level:78 },
        { name:'UML Modeling', level:85 },
        { name:'PostGreSQL', level:71 },
        { name:'MongoDB', level:75 },
        { name:'SQLLite', level:62 }
      ]
    },
    {
      category:'DevOps & Tools', icon:'fas fa-tools', color:'#9b59b6',
      skills:[
        { name:'Docker / Kubernetes', level:82 },
        { name:'Prometheus / Grafana', level:78 },
        { name:'Git / GitHub / Jira', level:93 },
        { name:'SonarQube', level:72 },
        { name:'Jenkins', level:77 },
        { name:'Nexus', level:80  }
      ]
    },
    {
      category: 'Architecture', 
      icon: 'fas fa-sitemap', 
      color: '#9b59b6',
      skills: [
      { name: 'Microservices', level: 92 },
      { name: 'Hexagonal Architecture', level: 85 },
      { name: 'Monolithic Architecture', level: 90 },
      { name: 'Event-Driven Design (Kafka)', level: 88 },
      { name: 'Cloud-Native Architecture', level: 93 },
      { name: 'Domain Driven Design (DDD)', level: 80 }
]
    },
    {
      category: 'Testing & Quality', 
icon: 'fas fa-vial', 
color: '#27ae60', // Loun akhdher (Success Green)
skills: [
  { name: 'Unit Testing (JUnit/Mockito)', level: 94 },
  { name: 'Integration Testing', level: 90 },
  { name: 'End-to-End Testing (Cypress)', level: 82 },
  { name: 'Test Driven Development (TDD)', level: 85 },
  { name: 'Behavior Driven Development (BDD)', level: 78 },
  { name: 'Performance Testing (JMeter)', level: 75 }
]
    }
  ];

  scrollTo() {
    document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' });
  }

@ViewChild('skillsSection') skillsSection!: ElementRef;
  isSkillsVisible = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isSkillsVisible = true;
          observer.unobserve(entry.target); // Behi bech t-animi marra barka
        }
      });
    }, { threshold: 0.2 }); // Y-triggeri ki 20% mel section tban

    observer.observe(this.skillsSection.nativeElement);
  }
}

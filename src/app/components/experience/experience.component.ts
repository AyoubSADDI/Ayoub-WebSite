import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="experience-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-label">Career</span>
          <h2>Work Experience</h2>
          <p>My professional journey building enterprise-grade software solutions</p>
        </div>

        <div class="timeline">
          <div class="timeline-line"></div>
          <div class="timeline-item"
               *ngFor="let exp of experiences; let i=index; let odd=odd"
               [class.odd]="odd"
               [attr.data-aos]="odd ? 'fade-left' : 'fade-right'"
               [attr.data-aos-delay]="i * 120">
            <div class="timeline-dot" [style.background]="exp.color">
              <i [class]="exp.icon"></i>
            </div>
            <div class="exp-card">
              <div class="exp-header">
                <div class="exp-meta">
                  <span class="exp-period"><i class="fas fa-calendar-alt"></i> {{ exp.period }}</span>
                  <span class="exp-location"><i class="fas fa-map-marker-alt"></i> {{ exp.location }}</span>
                </div>
                <span class="current-badge" *ngIf="exp.current">
                  <span class="pulse-dot"></span> Current
                </span>
              </div>
              <h3 class="exp-title">{{ exp.title }}</h3>
              <h4 class="exp-company"><i class="fas fa-building"></i> {{ exp.company }}</h4>
              <p>{{ exp.titleExp }}</p>
              <ul class="exp-bullets">
                <li *ngFor="let b of exp.bullets"><i class="fas fa-chevron-right"></i>{{ b }}</li>
              </ul>
              <div class="exp-skills">
                <span class="tech-tag" *ngFor="let s of exp.skills">{{ s }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Education & Certifications -->
        <div class="education-section" data-aos="fade-up">
          <h3 class="edu-title">Education & Certifications</h3>
          <div class="edu-grid">
        <div class="edu-card" *ngFor="let edu of education; let i=index"
     data-aos="fade-up" [attr.data-aos-delay]="i*80">
  <div class="edu-icon" [style.background]="edu.color + '22'">
    <i [class]="edu.icon" [style.color]="edu.color"></i>
  </div>
  <div class="edu-info">
    <h4>{{ edu.degree }}</h4>
    <p>{{ edu.institution }}</p>
    <span>{{ edu.year }}</span>
    
    <div class="edu-detail-container" *ngIf="edu.detail">
      <!-- N9ossou l-text ken readMore is false -->
      <small class="edu-detail">
        {{ edu.readMore ? edu.detail : (edu.detail | slice:0:100) + '...' }}
      </small>
      
      <!-- Button Read More / Less -->
      <button class="read-more-btn" (click)="toggleReadMore(edu)">
        {{ edu.readMore ? 'Read Less' : 'Read More' }}
        <i [class]="edu.readMore ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
      </button>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
  .edu-detail-container {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.edu-detail {
  display: block;
  transition: all 0.3s ease;
  line-height: 1.5;
  color: #64748b; /* Slate color pro */
}

.read-more-btn {
  background: none;
  border: none;
  color: #7c3aed; /* Violet mta3ek */
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 0;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: gap 0.2s ease;

  &:hover {
    color: #6d28d9;
    gap: 8px; /* Animation sghira ki t-hoveri */
    text-decoration: underline;
  }

  i {
    font-size: 0.7rem;
  }
}
    .experience-section { background:var(--bg-secondary); }
    .timeline { position:relative; max-width:900px; margin:0 auto 80px; }
    .timeline-line { position:absolute; left:50%; top:0; bottom:0; width:2px; background:linear-gradient(180deg,var(--accent),transparent); transform:translateX(-50%); }
    @media(max-width:768px){ .timeline-line { left:20px; } }
    .timeline-item { display:flex; justify-content:flex-start; padding:0 0 48px 60px; position:relative; }
    @media(min-width:769px){
      .timeline-item { width:50%; }
      .timeline-item.odd { margin-left:50%; padding:0 60px 48px 60px; }
      .timeline-item:not(.odd) { padding:0 60px 48px 0; justify-content:flex-end; }
    }
    @media(max-width:768px){ .timeline-item { padding-left:56px; width:100%; } }
    .timeline-dot { position:absolute; width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:0.9rem; box-shadow:0 4px 16px rgba(0,0,0,0.2); z-index:2; border:3px solid var(--bg-secondary); }
    @media(min-width:769px){
      .timeline-dot { left:calc(100% - 22px); top:4px; }
      .odd .timeline-dot { left:-22px; }
    }
    @media(max-width:768px){ .timeline-dot { left:0; top:4px; } }
    .exp-card { background:var(--bg-card); border:1px solid var(--border); border-radius:16px; padding:24px; max-width:400px; width:100%; transition:all 0.3s ease; box-shadow:0 2px 12px var(--shadow); }
    .exp-card:hover { box-shadow:0 12px 40px var(--shadow-md); border-color:var(--accent); transform:translateY(-4px); }
    @media(max-width:768px){ .exp-card { max-width:100%; } }
    .exp-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px; gap:8px; flex-wrap:wrap; }
    .exp-meta { display:flex; flex-direction:column; gap:4px; }
    .exp-meta span { display:flex; align-items:center; gap:6px; font-size:0.78rem; color:var(--text-muted); }
    .exp-meta i { font-size:0.7rem; }
    .current-badge { display:flex; align-items:center; gap:6px; background:rgba(34,197,94,0.1); color:#16a34a; font-size:0.75rem; font-weight:600; padding:4px 10px; border-radius:100px; border:1px solid rgba(34,197,94,0.2); }
    .pulse-dot { width:6px; height:6px; background:#22c55e; border-radius:50%; animation:pulse 2s ease-in-out infinite; }
    @keyframes pulse { 0%,100% { box-shadow:0 0 0 3px rgba(34,197,94,0.2); } 50% { box-shadow:0 0 0 6px rgba(34,197,94,0.05); } }
    .exp-title { font-size:1.05rem; margin-bottom:4px; }
    .exp-company { font-size:0.88rem; color:var(--accent); font-weight:600; font-family:'DM Sans',sans-serif; margin-bottom:14px; display:flex; align-items:center; gap:6px; }
    .exp-bullets { list-style:none; margin-bottom:16px; display:flex; flex-direction:column; gap:6px; }
    .exp-bullets li { display:flex; align-items:flex-start; gap:8px; font-size:0.84rem; color:var(--text-secondary); line-height:1.5; }
    .exp-bullets li i { color:var(--accent); font-size:0.68rem; margin-top:4px; flex-shrink:0; }
    .exp-skills { display:flex; flex-wrap:wrap; gap:6px; }
    .education-section .edu-title { font-size:1.5rem; text-align:center; margin-bottom:32px; }
    .edu-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:20px; }
    .edu-card { background:var(--bg-card); border:1px solid var(--border); border-radius:14px; padding:20px; display:flex; gap:16px; align-items:flex-start; transition:all 0.2s ease; }
    .edu-card:hover { box-shadow:0 8px 24px var(--shadow); transform:translateY(-2px); }
    .edu-icon { width:44px; height:44px; min-width:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:1.1rem; }
    .edu-info h4 { font-size:0.92rem; margin-bottom:4px; font-family:'DM Sans',sans-serif; font-weight:700; }
    .edu-info p { font-size:0.82rem; color:var(--text-muted); margin-bottom:4px; }
    .edu-info span { font-size:0.8rem; color:var(--accent); font-weight:600; }
    .edu-info small { display:block; font-size:0.78rem; color:var(--text-muted); margin-top:2px; }
  `]
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Pass Consulting Group',
      location: 'Tunis, Tunisia',
      period: 'September 2024 — Today',
      current: true,
      icon: 'fas fa-rocket',
      color: '#1a56db',
      titleExp:'Development of a secure ERP web application for clients in Germany, named ZEUS:',
      bullets: [
        'Design of an authentication module with password reset and token refresh mechanisms',
        'Application de gestion de prêts hypothécaires (Spring Boot + Angular) pour banques espagnolesDevelopment of complex SQL queries and management of database interactions via Hibernate and JPA',
        'Integration of JasperReports to generate over 500 reports/month with extensive reporting capabilities',
        '• Successful and secure migration of a critical application from Java 8 to Java 17',
        'Implementation of unit tests with JUnit 5, ensuring code coverage exceeding 70%',
        'Optimization of 40% of the UI interfaces through the application of responsive design principles (media queries)',
        'Reduction of API response time by 30% through Hibernate query tuning and caching with Redis'
      ],
      skills: ['Angular','Spring Boot','MySQL','UML','Jira','Kafka','Keycloak','Micro-Service','JWT','Redis','Scrum','Liquibase','SonarQube']
    },
    {
      title: 'Full-Stack Developer',
      company: 'Algebra System',
      location: 'Tunis, Tunisia',
      period: 'January 2023 – August 2024',
      current: false,
      icon: 'fas fa-rocket',
      color: '#1a56db',
      titleExp:'Development of an OPTIMOS mortgage banking application for ABANCA bank in Spain:',
      bullets: [
        'Definition of complex filtering criteria (JPA Specifications) and implementation of task scheduling with Quartz',
        'Performance optimization via Spring EntityGraph and Auditing, including redesign of pagination (JPA Paginator)',
        'Implementation of real-time monitoring (Grafana, Prometheus) for application health analysis',
        'Development of the dashboard with PrimeNG v16 and integration of a dynamic translation module via NGX Translate',
        'Design of a global exception handling mechanism to anticipate business errors',
        'API documentation via Swagger and automation of Object/Relational (DTO/Entity) mapping with MapStruct',
        'Automation of CI/CD pipelines and containerization of the application through the creation of optimized Dockerfiles'
      ],
      skills: ['Angular 9','Spring Core','MySQL','Scrum','JPA','Maven','Swagger','Junit 5','Nexus','Log4j','RestAPI','Grafana', 'Prometheus']
    },
    {
      title: 'Final year project internship',
      company: 'TSUNAMI IT',
      location: 'Quebec, Canada',
      period: 'January 2022 – September 2022',
      current: false,
      icon: 'fas fa-graduation-cap',
      color: '#7c3aed',
      titleExp:'Design and deployment of the CLOUDCOOKER web application for catering companies:',
      bullets: [
        'UML architecture design and development of a data archiving system throughout the entire data lifecycle',
        'Integration of notifications with WebSockets and dynamic event management for an interactive user experience'
      ],
      skills: ['ReactJs','Swagger','Laravel','Github','MySQL','Jira','WebSockets','RestAPI','Redux','Bootstrap5']
    }
  ];

  education = [
    {
      degree: 'Computer Engineering Degree Program',
      institution: 'ESPRIT — Private Higher School of Engineering and Technology',
      year: 'September 2019 — November 2022',
      detail: 'Specialized in Software Engineering with a strong focus on Java/Spring Boot ecosystems, Frontend frameworks (Angular/React), and Microservices architecture. Gained hands-on experience in DevOps practices, cloud integration, and Agile methodologies through multiple academic projects',
      icon: 'fas fa-university',
      color: '#1a56db',
      readMore:false
    },
    {
      degree: 'Applied Bachelor\'s Degree in Computer Technology',
      institution: 'ISET — Higher Institute of Technological Studies',
      year: 'September 2016 — July 2019',
      detail: 'Focused on software development fundamentals, web technologies, and database management. Gained solid practical experience in object-oriented programming (OOP), algorithm design, and building dynamic web applications through various hands-on academic projects',
      icon: 'fas fa-network-wired',
      color: '#7c3aed',
      readMore:false
    },
    {
      degree: 'Baccalaureate in Computer Science',
      institution: 'LBL — Borj Louzir High School',
      year: 'September 2015 — Juin 2016',
      detail: 'Obtained with a specialization in Computer Science, marking the beginning of my journey into software development and algorithmic thinking. Developed a strong foundation in mathematics, logic, and early programming principles',
      icon: 'fas fa-code',
      color: '#059669',
      readMore:false
    },
    {
      degree: 'OCA — Oracle Certified Associate',
      institution: 'Oracle',
      year: 'Certification',
      detail: 'International certification validating professional-level knowledge of Java SE. Demonstrates a deep understanding of Java syntax, object-oriented programming (OOP) principles, exception handling, and memory management, ensuring the development of robust and efficient enterprise-grade applications',
      icon: 'fab fa-java',
      color: '#dc2626',
      readMore:false
    }
  ];
  toggleReadMore(edu: any) {
  edu.readMore = !edu.readMore;
}
}

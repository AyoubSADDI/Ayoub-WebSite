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
                <small *ngIf="edu.detail">{{ edu.detail }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
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
      title: 'Développeur Full-Stack',
      company: 'Algebra Systems',
      location: 'Ariana, Tunisie',
      period: 'Août 2023 – Aujourd\'hui',
      current: true,
      icon: 'fas fa-rocket',
      color: '#1a56db',
      bullets: [
        'Automatiser la génération UML → Java via VTL et Visual Paradigm',
        'Application de gestion de prêts hypothécaires (Spring Boot + Angular) pour banques espagnoles',
        'Dashboard de monitoring via PrimeNG pour surveiller les données applicatives',
        'Sécurité & scalabilité : OAuth2, Keycloak, JWT, Docker, Kubernetes',
        'Rapports Jaspersoft avancés avec KPIs interactifs (drill-down) pour BI'
      ],
      skills: ['Angular','Spring Boot','MySQL','UML','Jira','AWS','Wildfly','Keycloak','Docker']
    },
    {
      title: 'Projet de Fin d\'Études (PFE)',
      company: 'ETC',
      location: 'Kairouan, Tunisie',
      period: 'Mai 2021 – Juillet 2021',
      current: false,
      icon: 'fas fa-graduation-cap',
      color: '#7c3aed',
      bullets: [
        'Conception et développement d\'une application web Full Stack',
        'Plateforme de location de voitures avec catalogue véhicules détaillé',
        'Boutique en ligne pour la vente de pièces de rechange automobiles',
        'Back-end Spring Boot, front-end Angular, déployé sur AWS'
      ],
      skills: ['Angular','Spring Boot','MySQL','UML','Docker','AWS','Swagger']
    }
  ];

  education = [
    {
      degree: 'Cycle d\'Ingénieur en Informatique',
      institution: 'Tek-up — École privée d\'Ingénierie et de Technologie',
      year: 'Sept. 2023 – Juil. 2025',
      detail: '',
      icon: 'fas fa-university',
      color: '#1a56db'
    },
    {
      degree: 'Master M1 — Réseaux & Applications Distribuées',
      institution: 'ISIG Kairouan',
      year: 'Sept. 2022 – Juil. 2023',
      detail: 'Master en réseaux et applications distribuées',
      icon: 'fas fa-network-wired',
      color: '#7c3aed'
    },
    {
      degree: 'Licence en Génie Logiciel',
      institution: 'ISIG Kairouan',
      year: 'Sept. 2019 – Juin 2022',
      detail: 'Diplôme en génie logiciel',
      icon: 'fas fa-code',
      color: '#059669'
    },
    {
      degree: 'AWS Developer Associate',
      institution: 'Amazon Web Services',
      year: 'Certification',
      detail: '',
      icon: 'fab fa-aws',
      color: '#d97706'
    },
    {
      degree: 'AWS Solution Architect Associate',
      institution: 'Amazon Web Services',
      year: 'Certification',
      detail: '',
      icon: 'fab fa-aws',
      color: '#ea580c'
    },
    {
      degree: 'OCA — Oracle Certified Associate',
      institution: 'Oracle',
      year: 'Certification',
      detail: 'Java SE Programmer',
      icon: 'fab fa-java',
      color: '#dc2626'
    }
  ];
}

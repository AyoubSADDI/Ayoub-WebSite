import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  accentColor: string;
  technologies: string[];
  features: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects-section">
      <div class="container">

        <!-- Header -->
        <div class="section-header" data-aos="fade-up">
          <span class="section-label">Portfolio</span>
          <h2>Featured Projects</h2>
          <p>Enterprise-grade applications built with Java, Spring Boot &amp; Angular</p>
        </div>

        <!-- Filter Tabs -->
        <div class="filter-tabs" data-aos="fade-up" data-aos-delay="80">
          <button
            *ngFor="let tab of filterTabs"
            class="filter-tab"
            [class.active]="activeFilter === tab"
            (click)="setFilter(tab)">
            {{ tab }}
          </button>
        </div>

        <!-- Grid -->
        <div class="projects-grid">
          <article
            class="project-card"
            *ngFor="let p of filteredProjects; let i = index"
            data-aos="fade-up"
            [attr.data-aos-delay]="i * 80">

            <!-- Screenshot -->
            <div class="project-screenshot">
              <img [src]="p.image" [alt]="p.title" class="screenshot-img" loading="lazy">
              <div class="screenshot-shine"></div>
              <span class="cat-badge">{{ p.category }}</span>
            </div>

            <!-- Body -->
            <div class="project-body">
              <h3 class="project-title">{{ p.title }}</h3>
              <p class="project-desc">{{ p.description }}</p>

              <!-- Features -->
              <ul class="feature-list">
                <li *ngFor="let f of p.features">
                  <i class="fas fa-check-circle"></i>{{ f }}
                </li>
              </ul>

              <!-- Tech tags -->
              <div class="tech-row">
                <span class="tech-tag" *ngFor="let t of p.technologies">{{ t }}</span>
              </div>
            </div>

            <!-- Accent border bottom -->
            <div class="card-accent" [style.background]="p.accentColor"></div>
          </article>
        </div>

      </div>
    </section>
  `,
  styles: [`
    /* ─── Section ─────────────────────────────────────────── */
    .projects-section {
      background: var(--bg-primary);
    }

    /* ─── Filter tabs ──────────────────────────────────────── */
    .filter-tabs {
      display: flex;
      gap: 8px;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 52px;
    }

    .filter-tab {
      padding: 9px 22px;
      border-radius: 100px;
      border: 1.5px solid var(--border);
      background: var(--bg-card);
      color: var(--text-secondary);
      font-size: 0.875rem;
      font-weight: 500;
      font-family: 'DM Sans', sans-serif;
      cursor: pointer;
      transition: all 0.22s ease;

      &:hover {
        border-color: var(--accent);
        color: var(--accent);
      }

      &.active {
        background: var(--accent);
        color: white;
        border-color: var(--accent);
        box-shadow: 0 4px 16px rgba(26, 86, 219, 0.28);
      }
    }

    /* ─── Grid ─────────────────────────────────────────────── */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;

      @media (max-width: 1100px) { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 680px)  { grid-template-columns: 1fr; }
    }

    /* ─── Card ─────────────────────────────────────────────── */
    .project-card {
      position: relative;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 18px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                  box-shadow 0.32s ease,
                  border-color 0.22s ease;

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 24px 56px var(--shadow-lg);
        border-color: transparent;

        .screenshot-img {
          transform: scale(1.03);
        }

        .screenshot-shine {
          opacity: 1;
        }
      }
    }

    /* Bottom accent line */
    .card-accent {
      height: 3px;
      width: 100%;
      flex-shrink: 0;
    }

    /* ─── Screenshot ───────────────────────────────────────── */
    .project-screenshot {
      position: relative;
      width: 100%;
      height: 210px;
      overflow: hidden;
      background: #0d0d0d;
      flex-shrink: 0;
    }

    .screenshot-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top left;
      display: block;
      transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    /* Subtle top-light reflection on hover */
    .screenshot-shine {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        160deg,
        rgba(255, 255, 255, 0.07) 0%,
        transparent 60%
      );
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }

    /* Category badge */
    .cat-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      background: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      color: white;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 4px 11px;
      border-radius: 100px;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }

    /* ─── Body ─────────────────────────────────────────────── */
    .project-body {
      padding: 22px 22px 18px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex: 1;
    }

    .project-title {
      font-size: 1.05rem;
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      color: var(--text-primary);
      line-height: 1.25;
      transition: color 0.2s ease;

      .project-card:hover & {
        color: var(--accent);
      }
    }

    .project-desc {
      font-size: 0.865rem;
      color: var(--text-muted);
      line-height: 1.65;
      margin: 0;
    }

    /* Feature list */
    .feature-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin: 0;
      padding: 0;

      li {
        display: flex;
        align-items: flex-start;
        gap: 7px;
        font-size: 0.825rem;
        color: var(--text-secondary);
        line-height: 1.45;
      }

      i {
        color: #22c55e;
        font-size: 0.7rem;
        margin-top: 3px;
        flex-shrink: 0;
      }
    }

    /* Tech tags */
    .tech-row {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 4px;
    }

    .tech-tag {
      display: inline-block;
      background: var(--tag-bg);
      color: var(--tag-text);
      font-size: 0.73rem;
      font-weight: 600;
      padding: 3px 9px;
      border-radius: 6px;
      font-family: 'DM Sans', sans-serif;
    }
  `]
})
export class ProjectsComponent {
  filterTabs = ['All', 'Fintech', 'Automotive', 'DevOps', 'E-Commerce'];
  activeFilter = 'All';

  projects: Project[] = [
    {
      id: 1,
      title: 'Mortgage Loan Management',
      category: 'Fintech',
      description: 'Enterprise application for Spanish banks managing mortgage loans — loan workflows, KPI drill-down reports and Jaspersoft BI dashboards.',
      image: 'assets/images/projects/mortgage.png',
      accentColor: '#1a56db',
      technologies: ['Spring Boot', 'Angular', 'MySQL', 'Keycloak', 'OAuth2', 'Jaspersoft', 'Wildfly'],
      features: [
        'Loan application workflow',
        'KPI drill-down BI reports',
        'OAuth2 / Keycloak security',
        'Docker / Kubernetes deployment'
      ]
    },
    {
      id: 2,
      title: 'Monitoring Dashboard',
      category: 'Fintech',
      description: 'Real-time application monitoring dashboard built with PrimeNG — tracking CPU, memory, active users, response times and live logs.',
      image: 'assets/images/projects/monitoring.png',
      accentColor: '#7c3aed',
      technologies: ['Angular', 'PrimeNG', 'Spring Boot', 'MySQL', 'WebSocket', 'Docker'],
      features: [
        'Real-time WebSocket metrics',
        'PrimeNG charts & data grids',
        'Live activity feed & alerts',
        'API request log viewer'
      ]
    },
    {
      id: 3,
      title: 'UML → Java Code Generator',
      category: 'DevOps',
      description: 'Automated code generation tool that converts UML diagrams into Java classes using VTL templates and Visual Paradigm plugin.',
      image: 'assets/images/projects/uml-generator.png',
      accentColor: '#0891b2',
      technologies: ['Java', 'VTL', 'Visual Paradigm', 'Spring Boot', 'UML', 'Hibernate'],
      features: [
        'UML → Java automation via VTL',
        'Visual Paradigm plugin integration',
        'ORM mapping with Hibernate',
        'Custom ORM filter criteria'
      ]
    },
    {
      id: 4,
      title: 'Car Rental & Spare Parts Shop',
      category: 'Automotive',
      description: 'Full-stack web platform for car rentals with detailed vehicle catalog, online spare parts shop and booking management — PFE project.',
      image: 'assets/images/projects/car-rental.png',
      accentColor: '#059669',
      technologies: ['Spring Boot', 'Angular', 'MySQL', 'Docker', 'AWS', 'Swagger'],
      features: [
        'Car catalog with availability filters',
        'Online spare parts e-shop',
        'Booking & reservation management',
        'Swagger API documentation'
      ]
    },
    {
      id: 5,
      title: 'CI/CD DevOps Pipeline',
      category: 'DevOps',
      description: 'Complete CI/CD pipeline for a Spring Boot project — automated build, test, code quality analysis, artifact publishing and deployment.',
      image: 'assets/images/projects/cicd.png',
      accentColor: '#d97706',
      technologies: ['Jenkins', 'Docker', 'JUnit', 'Nexus', 'SonarQube', 'Grafana', 'Log4j'],
      features: [
        'Auto-triggered on GitHub commit',
        'SonarQube code quality gate',
        'Nexus artifact repository',
        'Grafana deployment monitoring'
      ]
    },
    {
      id: 6,
      title: 'E-Commerce Platform',
      category: 'E-Commerce',
      description: 'Full-featured e-commerce solution with product catalog, shopping cart, multi-language support, admin panel and payment integration.',
      image: 'assets/images/projects/ecommerce.png',
      accentColor: '#e11d48',
      technologies: ['Spring Boot', 'Angular', 'MySQL', 'Stripe', 'Docker', 'AWS'],
      features: [
        'Product catalog with categories',
        'Shopping cart & checkout',
        'Multi-language (FR / EN)',
        'Admin dashboard & analytics'
      ]
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'All') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(tab: string) {
    this.activeFilter = tab;
  }
}

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
  showMore:boolean;
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
          <p>Enterprise-grade applications built with Java, Spring Boot, React &amp; Angular</p>
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
              <p class="project-desc">
                  <!-- Slice men 0 l-100 7arf ken showMore false, sinon undefined ya3ni l-text l-kol -->
                  {{ p.showMore ? p.description : (p.description | slice:0:200) }}
                  
                  <span *ngIf="p.description.length > 200">
                    {{ p.showMore ? '' : '...' }}
                    
                    <button 
                      (click)="toggleDescription(p)" 
                      [style.color]="p.accentColor"
                      class="read-more-btn">
                      {{ p.showMore ? 'Show Less' : 'Read More' }}
                    </button>
                  </span>
                </p>
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
.read-more-btn {
  /* Style l-Asasi */
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase; /* Behi barcha lel-branding */
  letter-spacing: 0.5px;
  padding: 4px 8px;
  margin-left: 5px;
  position: relative;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 5px;

  /* Te7t l-bouton zid khat sghir (Underline animée) */
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 8px;
    background-color: currentColor; /* Yekhou l-accentColor mta3ek */
    transition: width 0.3s ease;
  }

  /* Hover Effect */
  &:hover {
    letter-spacing: 1.2px; /* Yet-7al chwaya */
    opacity: 0.9;
    
    &::after {
      width: calc(100% - 16px);
    }
  }

  /* Active/Focus state */
  &:active {
    transform: translateY(1px);
  }
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
  filterTabs = ['All', 'Cloud & DevOps','Enterprise Software & Tools', 'Tourism & Culture','E-commerce & Web Platforms'];
  activeFilter = 'All';

  toggleDescription(project: Project) {
  project.showMore = !project.showMore;
}
  projects: Project[] = [
    {
      id: 1,
      title: 'Monitoring Dashboard',
      category: 'Cloud & DevOps',
      description: 'The system leverages high-performance data visualization to provide deep insights into infrastructure health and application performance metrics. It features an advanced alerting engine that notifies administrators of critical threshold breaches through a sleek, responsive interface. By integrating complex event processing, the dashboard ensures seamless management of distributed microservices with millisecond-level precision.',
      image: 'assets/images/projects/monitoring.png',
      accentColor: '#7c3aed',
      technologies: ['Angular', 'PrimeNG', 'Spring Boot', 'MySQL', 'WebSocket', 'Docker'],
      features: [
        'Real-time WebSocket metrics',
        'PrimeNG charts & data grids',
        'Live activity feed & alerts',
        'API request log viewer',
        'Customizable performance threshold alerts',
        'Historical trend analysis & data persistence'
      ],
      showMore: false
    },
    {
      id: 2,
      title: 'UML → Java Code Generator',
      category: 'Enterprise Software & Tools',
      description: 'Automated code generation tool that converts UML diagrams into Java classes using VTL templates and Visual Paradigm plugin. This tool streamlines the development lifecycle by mapping complex architectural designs directly into clean, maintainable Java codebases. It features a custom-built engine that parses UML metadata and applies sophisticated Velocity Template Language logic to handle inheritance, associations, and boilerplate reduction. By bridging the gap between high-level modeling and low-level implementation, the generator significantly reduces manual coding errors and ensures architectural consistency across the entire project.',
      image: 'assets/images/projects/uml-generator.png',
      accentColor: '#0891b2',
      technologies: ['Java', 'VTL', 'Visual Paradigm', 'Spring Boot', 'UML', 'Hibernate'],
     features: [
      'UML → Java automation via VTL',
      'Visual Paradigm plugin integration',
      'ORM mapping with Hibernate',
      'Custom ORM filter criteria',
      'Bi-directional metadata synchronization',
      'Automated Spring Boot boilerplate generation'
    ],
      showMore: false
    },
    {
      id: 3,
      title: 'Car Rental & Spare Parts Shop',
      category: 'E-commerce & Web Platforms',
      description: 'The platform provides an end-to-end solution for the automotive industry, integrating a robust e-commerce engine for spare parts with a secure, real-time booking system. It features an advanced filtering mechanism that allows users to find vehicles and components based on specific technical compatibility and availability. Designed for high scalability, the architecture ensures seamless synchronization between the rental inventory and the retail storefront, delivering a unified user experience for both customers and administrators.',
      image: 'assets/images/projects/car-rental.png',
      accentColor: '#059669',
      technologies: ['Spring Boot', 'Angular', 'MySQL', 'Docker', 'Swagger'],
      features: [
      'Car catalog with availability filters',
      'Online spare parts e-shop',
      'Booking & reservation management',
      'Swagger API documentation',
      'Dynamic rental pricing & seasonal discounts engine',
      'Automotive parts compatibility checker'
        ],
      showMore: false
    },
    {
      id: 4,
      title: 'CI/CD DevOps Pipeline',
      category: 'Cloud & DevOps',
      description: 'The pipeline implements a robust DevSecOps approach by integrating automated security scanning and static code analysis to ensure the highest standards of software integrity. It orchestrates a seamless flow from source control to production, leveraging containerization and cloud-native tools to achieve consistent and reproducible deployments. By minimizing manual intervention, this automated workflow significantly accelerates the release cycle while maintaining rigorous stability and performance monitoring throughout the entire lifecycle',
      image: 'assets/images/projects/cicd.png',
      accentColor: '#d97706',
      technologies: ['Jenkins', 'Docker', 'JUnit', 'Nexus', 'SonarQube', 'Grafana', 'Log4j'],
      features: [
        'Auto-triggered on GitHub commit',
        'SonarQube code quality gate',
        'Nexus artifact repository',
        'Grafana deployment monitoring',
        'Automated unit and integration testing',
        'Dockerized container orchestration'
      ],
      showMore: false
    },
    {
      id: 5,
      title: 'E-Commerce Platform',
      category: 'E-commerce & Web Platforms',
      description: 'The platform is engineered with a high-performance architecture that ensures rapid page loads and seamless scalability to handle peak traffic during sales events. It features a sophisticated administrative dashboard that provides real-time analytics on sales performance, inventory turnover, and customer behavior patterns to drive data-informed business decisions. By implementing a secure, multi-layered checkout process with diverse payment gateway integrations, the solution delivers a frictionless and trustworthy shopping journey for a global audience.',
      image: 'assets/images/projects/ecommerce.png',
      accentColor: '#e11d48',
      technologies: ['Spring Boot', 'Angular', 'MySQL', 'Stripe', 'Docker', 'AWS'],
      features: [
        'Product catalog with categories',
        'Shopping cart & checkout',
        'Multi-language (FR / EN)',
        'Admin dashboard & analytics',
        'AI-powered personalized product recommendations',
        'Secure multi-gateway payment integration'  
      ],
      showMore: false
    },
    {
      id: 6,
      title: 'School Management System',
      category: 'Enterprise Software & Tools',
      description: 'School Management System developed to streamline student administration, course management, attendance tracking, and academic scheduling.Designed a responsive and user-friendly platform to improve communication between students, teachers, and administration.Implemented modern web technologies and scalable architecture to ensure performance, security, and efficient data management.'
      ,
      image: 'assets/images/projects/managmentSchool.png',
      accentColor: '#a6e11dff',
      technologies: ['JavaFx', 'Symfony', 'ReactNative', 'MySQL', 'GitHub', 'CSS', 'HTML', 'Bootstrap 5'],
      features: [
         'Student Management',
        'Teacher Management',
        'Course & Class Scheduling',
        'Attendance Tracking',
        'Exam & Grade Management',
        'Parent-Student Communication',
        'Dashboard & Analytics'
      ],
      showMore: false
    },
    {
      id: 7,
      title: 'Enterprise Vehicle Tracking System',
      category: 'Enterprise Software & Tools',
      description: 'Vehicle Management System developed to optimize fleet operations, vehicle tracking, maintenance scheduling, and driver management.Designed a responsive and efficient platform to improve transportation workflow, resource allocation, and operational monitoring.Implemented modern web technologies and scalable architecture to ensure security, performance, and centralized fleet management.',
      image: 'assets/images/projects/vahiculeSystem.png',
      accentColor: '#f6ff00ff',
      technologies: ['J2EE', 'JSP', 'MongoDB', 'GitHub', 'CSS', 'HTML'],
      features: [
        'Fleet Management',
        'Vehicle Tracking',
        'Driver Management',
        'Maintenance Scheduling',
        'Fuel Consumption Monitoring',
        'Trip & Route Management',
        'Analytics & Reporting'
      ],
      showMore: false
    },
     {
      id: 8,
      title: 'Franchise Management',
      category: 'Enterprise Software & Tools',
      description: 'Development of a franchise management application that streamlines franchise operations, including user management, sales tracking, and performance monitoring through a modern and user-friendly interface.Designed to improve operational efficiency and support business growth across multiple franchise locations.Built with a scalable architecture to support seamless multi-site expansion and high-volume data processing across international regions',
      image: 'assets/images/projects/franchise.png',
      accentColor: '#e11db0ff',
      technologies: ['Laravel', 'React', 'MySQL', 'GitHub', 'JavaScript', 'HTML', 'Material UI', 'JQuery', 'Micro-Service', 'AWS'],
     features: [
      'User Authentication & Authorization',
      'Franchise Management',
      'Sales & Revenue Tracking',
      'Dashboard & Analytics',
      'Responsive User Interface',
      'Role-Based Access Control',
      'Real-Time Notifications'
    ],
      showMore: false
    },
      {
      id: 9,
      title: 'HawisBia',
      category: 'Tourism & Culture',
      description: 'HawisBia is an interactive digital platform designed to showcase Tunisia s rich heritage by allowing users to explore each governorate’s unique identity. The site features a detailed guide to regional gastronomy, traditional craftsmanship, and iconic monuments through a highly visual and user-friendly interface. It serves as a comprehensive digital archive that promotes local tourism and preserves Tunisian culture for future generations. This project highlights the diversity of every region, from historical sites to authentic culinary experiences, in a clear and professional presentation.',
      image: 'assets/images/projects/hawisBia.jpg',
      accentColor: '#1de1e1ff',
      technologies: ['ReactJS', 'MongoDB', 'SpringBoot', 'SpringCloud', 'SpringData', 'ResAPI', 'Material UI','APIGetway'],
     features: [
      'Interactive Regional Map',
      'Gastronomy & Restaurant Finder',
      'Cultural Heritage Archive',
      'Local Events Calendar',
      'User Experience Stories',
      'Multi-Language Discovery',
      'Real-Time Notifications'
    ],
      showMore: false
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

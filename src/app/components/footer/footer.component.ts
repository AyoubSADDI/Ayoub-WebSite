import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-wave">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="var(--bg-card)"/>
        </svg>
      </div>
      <div class="footer-inner">
        <div class="container">
          <div class="footer-grid">
            <!-- Brand -->
            <div class="footer-brand">
              <div class="footer-logo">
                <span class="logo-text">HS</span><span class="logo-dot"></span>
              </div>
              <p>Full-Stack Developer (Java / Angular) · Currently at Algebra Systems, Ariana, Tunisia.</p>
              <div class="footer-socials">
                <a href="https://github.com/hamzasaad" target="_blank" rel="noopener" title="GitHub — hamzasaad">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/saadounahamza" target="_blank" rel="noopener" title="LinkedIn — saadounahamza">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="mailto:saadouna.hamzaaa@gmail.com" title="Email">
                  <i class="fas fa-envelope"></i>
                </a>
                <a href="tel:+21629835164" title="Phone">
                  <i class="fas fa-phone"></i>
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li *ngFor="let link of quickLinks">
                  <a [href]="link.href" (click)="scrollTo(link.href)">
                    <i class="fas fa-chevron-right"></i>{{ link.label }}
                  </a>
                </li>
              </ul>
            </div>

            <!-- Tech Stack -->
            <div class="footer-links">
              <h4>Tech Stack</h4>
              <ul>
                <li *ngFor="let tech of techStack">
                  <span><i [class]="tech.icon" [style.color]="tech.color"></i> {{ tech.name }}</span>
                </li>
              </ul>
            </div>

            <!-- Contact Info -->
            <div class="footer-contact">
              <h4>Contact</h4>
              <div class="contact-items">
                <div class="ci"><i class="fas fa-envelope"></i><a href="mailto:saadouna.hamzaaa@gmail.com">saadouna.hamzaaa&#64;gmail.com</a></div>
                <div class="ci"><i class="fas fa-phone"></i><a href="tel:+21629835164">(+216) 29 835 164</a></div>
                <div class="ci"><i class="fas fa-map-marker-alt"></i><span>Ariana, Tunisie</span></div>
                <div class="ci"><i class="fab fa-github"></i><a href="https://github.com/hamzasaad" target="_blank">github.com/hamzasaad</a></div>
                <div class="ci"><i class="fab fa-linkedin-in"></i><a href="https://linkedin.com/in/saadounahamza" target="_blank">saadounahamza</a></div>
              </div>
              <div class="footer-badge">
                <span class="badge-dot"></span>
                Open to opportunities
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <p class="copyright">&copy; {{ currentYear }} <strong>Hamza Saadouna</strong>. All rights reserved.</p>
            <p class="built-with">Built with <i class="fab fa-angular" style="color:#dd0031"></i> Angular 17 & <i class="fab fa-java" style="color:#f89820"></i> Spring Boot</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer { position:relative; background:var(--bg-primary); }
    .footer-wave { width:100%; line-height:0; overflow:hidden; }
    .footer-wave svg { width:100%; height:60px; display:block; }
    .footer-inner { background:var(--bg-card); border-top:1px solid var(--border); padding:60px 0 0; }
    .footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1.5fr; gap:40px; margin-bottom:48px; }
    @media(max-width:1024px){ .footer-grid { grid-template-columns:1fr 1fr; gap:32px; } }
    @media(max-width:580px){ .footer-grid { grid-template-columns:1fr; } }
    .footer-brand p { font-size:0.88rem; color:var(--text-muted); line-height:1.7; margin-bottom:20px; max-width:280px; }
    .footer-logo { display:flex; align-items:center; gap:4px; margin-bottom:16px; }
    .logo-text { font-family:'Syne',sans-serif; font-weight:800; font-size:1.6rem; color:var(--text-primary); }
    .logo-dot { width:6px; height:6px; background:var(--accent); border-radius:50%; margin-top:-14px; }
    .footer-socials { display:flex; gap:10px; }
    .footer-socials a { width:38px; height:38px; border-radius:10px; border:1px solid var(--border); display:flex; align-items:center; justify-content:center; color:var(--text-muted); font-size:0.9rem; text-decoration:none; transition:all 0.2s ease; }
    .footer-socials a:hover { color:var(--accent); border-color:var(--accent); background:var(--accent-light); transform:translateY(-2px); }
    .footer-links h4,.footer-contact h4 { font-size:0.78rem; font-family:'DM Sans',sans-serif; font-weight:700; margin-bottom:20px; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.08em; }
    .footer-links ul { list-style:none; display:flex; flex-direction:column; gap:10px; }
    .footer-links li a, .footer-links li span { display:flex; align-items:center; gap:8px; font-size:0.88rem; color:var(--text-muted); text-decoration:none; transition:all 0.2s ease; }
    .footer-links li i { font-size:0.7rem; width:14px; }
    .footer-links li a:hover { color:var(--accent); transform:translateX(3px); }
    .contact-items { display:flex; flex-direction:column; gap:10px; margin-bottom:16px; }
    .ci { display:flex; align-items:center; gap:10px; font-size:0.84rem; }
    .ci i { width:16px; color:var(--accent); font-size:0.8rem; flex-shrink:0; }
    .ci a,.ci span { color:var(--text-muted); text-decoration:none; transition:color 0.2s; word-break:break-all; }
    .ci a:hover { color:var(--accent); }
    .footer-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(34,197,94,0.08); border:1px solid rgba(34,197,94,0.2); color:#16a34a; font-size:0.8rem; font-weight:600; padding:6px 12px; border-radius:100px; }
    .badge-dot { width:6px; height:6px; background:#22c55e; border-radius:50%; animation:pulse 2s ease-in-out infinite; }
    @keyframes pulse { 0%,100%{box-shadow:0 0 0 3px rgba(34,197,94,0.2);} 50%{box-shadow:0 0 0 6px rgba(34,197,94,0.05);} }
    .footer-bottom { border-top:1px solid var(--border); padding:20px 0; display:flex; justify-content:space-between; align-items:center; gap:16px; flex-wrap:wrap; }
    .footer-bottom p { font-size:0.85rem; color:var(--text-muted); margin:0; }
    .footer-bottom strong { color:var(--text-primary); }
    .built-with { display:flex; align-items:center; gap:6px; }
    .built-with i { font-size:1rem; }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  quickLinks = [
    { label:'Home',       href:'#home'       },
    { label:'About Me',   href:'#about'      },
    { label:'Projects',   href:'#projects'   },
    { label:'Experience', href:'#experience' },
    { label:'Contact',    href:'#contact'    }
  ];
  techStack = [
    { name:'Java & Spring Boot',   icon:'fab fa-java',    color:'#f89820' },
    { name:'Angular 17+',          icon:'fab fa-angular', color:'#dd0031' },
    { name:'Docker / Kubernetes',  icon:'fab fa-docker',  color:'#2496ed' },
    { name:'AWS (EC2, S3, RDS)',    icon:'fab fa-aws',     color:'#d97706' },
    { name:'MySQL / PostgreSQL',   icon:'fas fa-database',color:'#336791' }
  ];
  scrollTo(href: string) {
    document.getElementById(href.replace('#',''))?.scrollIntoView({ behavior:'smooth' });
  }
}

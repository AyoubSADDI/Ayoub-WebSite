import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="hero-bg">
        <div class="hero-blob blob-1"></div>
        <div class="hero-blob blob-2"></div>
        <div class="grid-pattern"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-text" [@heroText]>
            <div class="hero-badge">
              <span class="badge-dot"></span>
              Disponible · Open to opportunities
            </div>
            <h1 class="hero-name">
              Hi, I'm <span class="name-accent">Hamza</span><br>
              <span class="hero-title">Saadouna</span>
            </h1>
            <div class="hero-role">
              <span class="role-line"></span>
              <p>Full-Stack Developer (Java / Angular)</p>
            </div>
            <p class="hero-description">
              Computer Engineer specialized in <strong>Spring Boot</strong>, <strong>Angular</strong>,
              and scalable enterprise applications. Currently building fintech &amp; real-estate solutions
              at <strong>Algebra Systems</strong> — Ariana, Tunisia.
            </p>
            <div class="hero-stats">
              <div class="stat-item" *ngFor="let stat of stats">
                <span class="stat-number">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
            <div class="hero-actions">
              <a href="#projects" class="btn-primary" (click)="scrollTo('#projects')">
                <i class="fas fa-rocket"></i>
                View Projects
              </a>
              <a href="#contact" class="btn-outline" (click)="scrollTo('#contact')">
                <i class="fas fa-envelope"></i>
                Contact Me
              </a>
            </div>
            <div class="hero-socials">
              <a href="https://github.com/hamzasaad" target="_blank" rel="noopener" class="social-link" title="GitHub">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/saadounahamza" target="_blank" rel="noopener" class="social-link" title="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:saadouna.hamzaaa@gmail.com" class="social-link" title="Email">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="tel:+21629835164" class="social-link" title="Phone">
                <i class="fas fa-phone"></i>
              </a>
            </div>
          </div>
          <div class="hero-image-wrapper" [@heroImage]>
            <div class="image-container">
              <div class="image-ring ring-1"></div>
              <div class="image-ring ring-2"></div>
              <div class="profile-image-wrap">
                <img src="assets/images/profile.png" alt="Hamza Saadouna" class="profile-img">
              </div>
              <div class="float-badge badge-java">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" width="22">
                <span>Java</span>
              </div>
              <div class="float-badge badge-angular">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" width="22">
                <span>Angular</span>
              </div>
              <div class="float-badge badge-spring">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" width="22">
                <span>Spring Boot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-mouse"><div class="scroll-wheel"></div></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  `,
  animations: [
    trigger('heroText', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('900ms 200ms cubic-bezier(0.25,0.46,0.45,0.94)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('heroImage', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(40px) scale(0.95)' }),
        animate('900ms 400ms cubic-bezier(0.25,0.46,0.45,0.94)', style({ opacity: 1, transform: 'translateX(0) scale(1)' }))
      ])
    ])
  ],
  styles: [`
    .hero { min-height:100vh; display:flex; flex-direction:column; justify-content:center; background:var(--gradient-hero); position:relative; overflow:hidden; padding-top:100px; }
    .hero-bg { position:absolute; inset:0; pointer-events:none; overflow:hidden; }
    .hero-blob { position:absolute; border-radius:50%; filter:blur(80px); opacity:0.15; }
    .blob-1 { width:500px; height:500px; background:radial-gradient(circle,#1a56db,#4d7cfe); top:-100px; right:-100px; animation:float 8s ease-in-out infinite; }
    .blob-2 { width:300px; height:300px; background:radial-gradient(circle,#7c3aed,#1a56db); bottom:0; left:10%; animation:float 10s ease-in-out infinite reverse; }
    .grid-pattern { position:absolute; inset:0; background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px); background-size:60px 60px; opacity:0.4; }
    .container { max-width:1200px; margin:0 auto; padding:0 24px; position:relative; z-index:1; }
    .hero-content { display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:80px; min-height:calc(100vh - 200px); padding:60px 0; }
    @media(max-width:900px){ .hero-content { grid-template-columns:1fr; gap:48px; text-align:center; padding:40px 0; } }
    .hero-badge { display:inline-flex; align-items:center; gap:8px; background:var(--bg-card); border:1px solid var(--border); border-radius:100px; padding:8px 16px; font-size:0.85rem; color:var(--text-secondary); font-weight:500; margin-bottom:24px; box-shadow:0 2px 12px var(--shadow); }
    .badge-dot { width:8px; height:8px; border-radius:50%; background:#22c55e; animation:pulse-ring 2s ease-in-out infinite; }
    .hero-name { font-size:clamp(2.8rem,6vw,4.5rem); line-height:1.05; margin-bottom:16px; letter-spacing:-0.03em; }
    .name-accent { color:var(--accent); }
    .hero-title { display:block; background:linear-gradient(135deg,var(--text-primary) 30%,var(--accent)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
    .hero-role { display:flex; align-items:center; gap:12px; margin-bottom:20px; }
    @media(max-width:900px){ .hero-role { justify-content:center; } }
    .role-line { width:32px; height:2px; background:var(--accent); border-radius:2px; }
    .hero-role p { font-size:1.1rem; font-weight:600; color:var(--accent); font-family:'DM Sans',sans-serif; }
    .hero-description { font-size:1.05rem; line-height:1.75; color:var(--text-secondary); max-width:500px; margin-bottom:32px; }
    .hero-description strong { color:var(--text-primary); font-weight:600; }
    @media(max-width:900px){ .hero-description { margin:0 auto 32px; } }
    .hero-stats { display:flex; gap:32px; margin-bottom:36px; }
    @media(max-width:900px){ .hero-stats { justify-content:center; } }
    .stat-item { display:flex; flex-direction:column; gap:2px; }
    .stat-number { font-family:'Syne',sans-serif; font-size:1.8rem; font-weight:800; color:var(--text-primary); line-height:1; }
    .stat-label { font-size:0.8rem; color:var(--text-muted); font-weight:500; }
    .hero-actions { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:32px; }
    @media(max-width:900px){ .hero-actions { justify-content:center; } }
    .hero-socials { display:flex; gap:10px; }
    @media(max-width:900px){ .hero-socials { justify-content:center; } }
    .social-link { width:40px; height:40px; border-radius:10px; border:1px solid var(--border); background:var(--bg-card); display:flex; align-items:center; justify-content:center; color:var(--text-secondary); font-size:0.9rem; transition:all 0.2s ease; text-decoration:none; }
    .social-link:hover { color:var(--accent); border-color:var(--accent); background:var(--accent-light); transform:translateY(-2px); }
    .hero-image-wrapper { display:flex; justify-content:center; align-items:center; position:relative; }
    @media(max-width:900px){ .hero-image-wrapper { order:-1; } }
    .image-container { position:relative; width:380px; height:380px; }
    @media(max-width:480px){ .image-container { width:280px; height:280px; } }
    .image-ring { position:absolute; border-radius:50%; border:2px solid var(--accent); }
    .ring-1 { inset:-16px; border-style:dashed; opacity:0.2; animation:spin 12s linear infinite; }
    .ring-2 { inset:-36px; opacity:0.1; animation:spin 20s linear infinite reverse; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .profile-image-wrap { width:100%; height:100%; border-radius:50%; overflow:hidden; border:4px solid var(--bg-card); box-shadow:0 0 0 2px var(--accent),0 20px 60px var(--shadow-lg); position:relative; z-index:2; }
    .profile-img { width:100%; height:100%; object-fit:cover; object-position:top; }
    .float-badge { position:absolute; background:var(--bg-card); border:1px solid var(--border); border-radius:12px; padding:8px 14px; display:flex; align-items:center; gap:8px; font-size:0.82rem; font-weight:600; color:var(--text-primary); box-shadow:0 8px 24px var(--shadow-md); z-index:3; white-space:nowrap; }
    .badge-java { top:10%; left:-40px; animation:float 5s ease-in-out infinite; }
    .badge-angular { top:5%; right:-40px; animation:float 6s ease-in-out infinite 1s; }
    .badge-spring { bottom:10%; left:-40px; animation:float 7s ease-in-out infinite 0.5s; }
    .scroll-indicator { position:absolute; bottom:36px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:8px; opacity:0.5; z-index:1; }
    @media(max-width:768px){ .scroll-indicator { display:none; } }
    .scroll-indicator span { font-size:0.75rem; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); }
    .scroll-mouse { width:22px; height:36px; border:2px solid var(--text-muted); border-radius:11px; display:flex; justify-content:center; padding-top:6px; }
    .scroll-wheel { width:3px; height:8px; background:var(--text-muted); border-radius:2px; animation:scroll-wheel 1.8s ease-in-out infinite; }
    @keyframes scroll-wheel { 0% { transform:translateY(0); opacity:1; } 100% { transform:translateY(12px); opacity:0; } }
    @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }
    @keyframes pulse-ring { 0%,100% { box-shadow:0 0 0 3px rgba(34,197,94,0.2); } 50% { box-shadow:0 0 0 6px rgba(34,197,94,0.1); } }
  `]
})
export class HeroComponent {
  stats = [
    { value: '2+', label: 'Years Exp.' },
    { value: '10+', label: 'Projects' },
    { value: '15+', label: 'Technologies' }
  ];
  scrollTo(href: string) {
    document.getElementById(href.replace('#',''))?.scrollIntoView({ behavior:'smooth' });
  }
}

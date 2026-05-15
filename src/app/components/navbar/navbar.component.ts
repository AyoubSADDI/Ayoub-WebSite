import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled" [class.nav-open]="menuOpen">
      <div class="nav-container">
        <!-- Logo -->
        <a class="nav-logo" href="#home">
          <span class="logo-text">AS</span>
          <span class="logo-dot"></span>
        </a>

        <!-- Desktop Nav Links -->
        <ul class="nav-links">
          <li *ngFor="let item of navItems">
            <a [href]="item.href" 
               class="nav-link"
               [class.active]="activeSection === item.id"
               (click)="scrollTo(item.href)">
              {{ item.label }}
            </a>
          </li>
        </ul>

        <!-- Actions -->
        <div class="nav-actions">
          <!-- Theme Toggle -->
          <button class="theme-toggle" (click)="toggleTheme()" [title]="isDark ? 'Light mode' : 'Dark mode'">
            <i class="fas" [class.fa-sun]="isDark" [class.fa-moon]="!isDark"></i>
          </button>

          <!-- CTA Button -->
          <a href="#contact" class="btn-primary nav-cta" (click)="scrollTo('#contact')">
            <i class="fas fa-paper-plane"></i>
            Hire Me
          </a>

          <!-- Mobile Menu Toggle -->
          <button class="hamburger" (click)="toggleMenu()" [class.active]="menuOpen" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu" [class.open]="menuOpen">
        <ul>
          <li *ngFor="let item of navItems">
            <a [href]="item.href" (click)="scrollTo(item.href); menuOpen = false">
              <i [class]="item.icon"></i>
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 20px 0;
      transition: all 0.3s ease;
      background: transparent;

      &.scrolled {
        background: var(--nav-bg);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        padding: 14px 0;
        border-bottom: 1px solid var(--border);
        box-shadow: 0 2px 20px var(--shadow);
      }
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .nav-logo {
      display: flex;
      align-items: center;
      gap: 4px;
      text-decoration: none;
      flex-shrink: 0;

      .logo-text {
        font-family: 'Syne', sans-serif;
        font-weight: 800;
        font-size: 1.4rem;
        color: var(--text-primary);
        letter-spacing: -0.02em;
      }

      .logo-dot {
        width: 6px;
        height: 6px;
        background: var(--accent);
        border-radius: 50%;
        margin-top: -12px;
      }
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 4px;
      list-style: none;
      margin-left: auto;
      
      @media (max-width: 768px) {
        display: none;
      }
    }

    .nav-link {
      display: block;
      padding: 8px 14px;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-secondary);
      border-radius: 8px;
      transition: all 0.2s ease;
      text-decoration: none;

      &:hover, &.active {
        color: var(--accent);
        background: var(--accent-light);
      }
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-left: 16px;
    }

    .theme-toggle {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      border: 1px solid var(--border);
      background: var(--bg-card);
      color: var(--text-secondary);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      transition: all 0.2s ease;

      &:hover {
        color: var(--accent);
        border-color: var(--accent);
        background: var(--accent-light);
      }
    }

    .nav-cta {
      font-size: 0.85rem;
      padding: 10px 20px;
      border-radius: 8px;

      @media (max-width: 576px) {
        display: none;
      }
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;

      @media (max-width: 768px) {
        display: flex;
      }

      span {
        display: block;
        width: 22px;
        height: 2px;
        background: var(--text-primary);
        border-radius: 2px;
        transition: all 0.3s ease;
      }

      &.active {
        span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        span:nth-child(2) { opacity: 0; }
        span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
      }
    }

    .mobile-menu {
      display: none;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease;
      background: var(--bg-secondary);
      border-top: 1px solid var(--border);

      @media (max-width: 768px) {
        display: block;
      }

      &.open {
        max-height: 400px;
      }

      ul {
        list-style: none;
        padding: 16px 24px 24px;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      a {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 16px;
        border-radius: 10px;
        font-size: 1rem;
        font-weight: 500;
        color: var(--text-secondary);
        transition: all 0.2s ease;
        text-decoration: none;

        i { width: 20px; color: var(--accent); }

        &:hover {
          background: var(--accent-light);
          color: var(--accent);
        }
      }
    }
  `]
})
export class NavbarComponent implements OnInit {
  @Output() themeChange = new EventEmitter<boolean>();

  isScrolled = false;
  menuOpen = false;
  isDark = false;
  activeSection = 'home';

  navItems = [
    { id: 'home', label: 'Home', href: '#home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', href: '#about', icon: 'fas fa-user' },
    { id: 'projects', label: 'Projects', href: '#projects', icon: 'fas fa-code' },
    { id: 'experience', label: 'Experience', href: '#experience', icon: 'fas fa-briefcase' },
    { id: 'contact', label: 'Contact', href: '#contact', icon: 'fas fa-envelope' }
  ];

  ngOnInit() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') this.isDark = false;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sections = this.navItems.map(i => i.id);
    for (const id of sections.reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) {
        this.activeSection = id;
        break;
      }
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.themeChange.emit(this.isDark);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(href: string) {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

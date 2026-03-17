import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <!-- Loading Overlay -->
    <div class="loading-overlay" [class.hidden]="!isLoading">
      <div class="loader"></div>
    </div>

    <!-- Scroll to Top Button -->
    <button 
      class="scroll-top-btn" 
      [class.visible]="showScrollTop"
      (click)="scrollToTop()"
      aria-label="Scroll to top">
      <i class="fas fa-arrow-up"></i>
    </button>

    <!-- Main App -->
    <app-navbar (themeChange)="onThemeChange($event)"></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-projects></app-projects>
      <app-experience></app-experience>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .scroll-top-btn {
      position: fixed;
      bottom: 32px;
      right: 32px;
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: var(--accent);
      color: white;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      z-index: 999;
      opacity: 0;
      transform: translateY(16px);
      transition: all 0.3s ease;
      box-shadow: 0 4px 16px rgba(26, 86, 219, 0.35);

      &.visible {
        opacity: 1;
        transform: translateY(0);
      }

      &:hover {
        background: var(--accent-hover);
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(26, 86, 219, 0.4);
      }
    }
  `]
})
export class AppComponent implements OnInit {
  isLoading = true;
  showScrollTop = false;
  isDark = false;

  ngOnInit() {
    // Check saved theme
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.isDark = true;
    }

    // Remove loading after brief delay
    setTimeout(() => {
      this.isLoading = false;
    }, 800);
  }

  @HostListener('window:scroll')
  onScroll() {
    this.showScrollTop = window.scrollY > 400;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onThemeChange(isDark: boolean) {
    this.isDark = isDark;
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-label">Get In Touch</span>
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? I'd love to hear about it.</p>
        </div>
        <div class="contact-grid">
          <!-- Info -->
          <div class="contact-info" data-aos="fade-right">
            <h3>Contact Information</h3>
            <p>Fill out the form and I'll get back to you within 24 hours. Or reach me directly through any channel below.</p>
            <div class="contact-cards">
              <div class="contact-card" *ngFor="let card of contactCards">
                <div class="card-icon" [style.background]="card.color + '22'">
                  <i [class]="card.icon" [style.color]="card.color"></i>
                </div>
                <div class="card-info">
                  <span class="card-label">{{ card.label }}</span>
                  <a [href]="card.link" class="card-value" [attr.target]="card.ext ? '_blank' : null">{{ card.value }}</a>
                </div>
              </div>
            </div>
            <div class="availability-badge">
              <div class="avail-dot"></div>
              <div>
                <p class="avail-title">Currently Available</p>
                <p class="avail-sub">Open to full-time & freelance opportunities</p>
              </div>
            </div>
            <div class="response-info">
              <i class="fas fa-clock"></i>
              <span>Typically responds within <strong>24 hours</strong></span>
            </div>
          </div>

          <!-- Form -->
          <div class="contact-form-wrap" data-aos="fade-left">
            <div class="success-message" *ngIf="submitted && !error">
              <div class="success-icon"><i class="fas fa-check-circle"></i></div>
              <h4>Message Sent!</h4>
              <p>Thank you, Ayoub will get back to you shortly.</p>
              <button class="btn-outline" (click)="resetForm()">Send Another</button>
            </div>
            <div class="error-message" *ngIf="error">
              <i class="fas fa-exclamation-triangle"></i>
              <p>Could not send — email client opened as fallback.</p>
              <button class="btn-sm btn-demo" style="margin-top:8px" (click)="error=false;submitted=false">Try Again</button>
            </div>
            <form class="contact-form" *ngIf="!submitted || error" (ngSubmit)="onSubmit()" #f="ngForm">
              <div class="form-row">
                <div class="form-group">
                  <label>Full Name *</label>
                  <div class="input-wrap">
                    <i class="fas fa-user"></i>
                    <input type="text" name="name" [(ngModel)]="form.name" placeholder="Your name" required #n="ngModel">
                  </div>
                  <span class="field-error" *ngIf="n.invalid && n.touched">Required</span>
                </div>
                <div class="form-group">
                  <label>Email *</label>
                  <div class="input-wrap">
                    <i class="fas fa-envelope"></i>
                    <input type="email" name="email" [(ngModel)]="form.email" placeholder="you@example.com" required email #e="ngModel">
                  </div>
                  <span class="field-error" *ngIf="e.invalid && e.touched">Valid email required</span>
                </div>
              </div>
              <div class="form-group">
                <label>Subject *</label>
                <div class="input-wrap">
                  <i class="fas fa-tag"></i>
                  <input type="text" name="subject" [(ngModel)]="form.subject" placeholder="Project inquiry..." required #s="ngModel">
                </div>
                <span class="field-error" *ngIf="s.invalid && s.touched">Required</span>
              </div>
              <div class="form-group">
                <label>Message *</label>
                <div class="input-wrap textarea-wrap">
                  <i class="fas fa-comment-alt"></i>
                  <textarea name="message" [(ngModel)]="form.message" rows="5" placeholder="Tell me about your project..." required #m="ngModel"></textarea>
                </div>
                <span class="field-error" *ngIf="m.invalid && m.touched">Required</span>
              </div>
              <button type="submit" class="btn-primary submit-btn" [disabled]="isLoading || f.invalid">
                <span *ngIf="!isLoading"><i class="fas fa-paper-plane"></i> Send Message</span>
                <span *ngIf="isLoading" class="loading-state"><span class="btn-spinner"></span> Sending...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section { background:var(--bg-primary); }
    .contact-grid { display:grid; grid-template-columns:380px 1fr; gap:48px; align-items:start; }
    @media(max-width:900px){ .contact-grid { grid-template-columns:1fr; gap:40px; } }
    .contact-info h3 { font-size:1.3rem; margin-bottom:12px; }
    .contact-info > p { font-size:0.95rem; color:var(--text-muted); line-height:1.7; margin-bottom:28px; }
    .contact-cards { display:flex; flex-direction:column; gap:12px; margin-bottom:24px; }
    .contact-card { display:flex; align-items:center; gap:14px; background:var(--bg-card); border:1px solid var(--border); border-radius:12px; padding:14px 16px; transition:all 0.2s ease; }
    .contact-card:hover { border-color:var(--accent); box-shadow:0 4px 16px var(--shadow); transform:translateX(4px); }
    .card-icon { width:42px; height:42px; min-width:42px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:1rem; }
    .card-label { display:block; font-size:0.75rem; color:var(--text-muted); font-weight:500; margin-bottom:2px; }
    .card-value { font-size:0.88rem; color:var(--text-primary); font-weight:600; text-decoration:none; transition:color 0.2s; word-break:break-all; }
    .card-value:hover { color:var(--accent); }
    .availability-badge { display:flex; align-items:flex-start; gap:12px; background:rgba(34,197,94,0.06); border:1px solid rgba(34,197,94,0.2); border-radius:12px; padding:14px 16px; margin-bottom:14px; }
    .avail-dot { width:10px; height:10px; min-width:10px; background:#22c55e; border-radius:50%; margin-top:4px; animation:pulse-avail 2s ease-in-out infinite; }
    .avail-title { font-size:0.9rem; font-weight:700; color:#16a34a; margin-bottom:2px; }
    .avail-sub { font-size:0.82rem; color:var(--text-muted); margin:0; }
    @keyframes pulse-avail { 0%,100%{box-shadow:0 0 0 3px rgba(34,197,94,0.2);}50%{box-shadow:0 0 0 6px rgba(34,197,94,0.05);} }
    .response-info { display:flex; align-items:center; gap:8px; font-size:0.85rem; color:var(--text-muted); }
    .response-info i { color:var(--accent); }
    .response-info strong { color:var(--text-primary); }
    .contact-form-wrap { background:var(--bg-card); border:1px solid var(--border); border-radius:20px; padding:36px; box-shadow:0 4px 24px var(--shadow); }
    @media(max-width:480px){ .contact-form-wrap { padding:24px; } }
    .contact-form { display:flex; flex-direction:column; gap:20px; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
    @media(max-width:600px){ .form-row { grid-template-columns:1fr; } }
    .form-group { display:flex; flex-direction:column; gap:6px; }
    .form-group label { font-size:0.85rem; font-weight:600; color:var(--text-primary); }
    .input-wrap { position:relative; }
    .input-wrap i { position:absolute; left:14px; top:50%; transform:translateY(-50%); color:var(--text-muted); font-size:0.85rem; pointer-events:none; }
    .input-wrap input, .input-wrap textarea { width:100%; padding:12px 14px 12px 40px; border:1.5px solid var(--border); border-radius:10px; background:var(--bg-primary); color:var(--text-primary); font-family:'DM Sans',sans-serif; font-size:0.9rem; transition:all 0.2s ease; outline:none; }
    .input-wrap input::placeholder, .input-wrap textarea::placeholder { color:var(--text-muted); }
    .input-wrap input:focus, .input-wrap textarea:focus { border-color:var(--accent); background:var(--bg-card); box-shadow:0 0 0 3px rgba(26,86,219,0.1); }
    .input-wrap textarea { resize:vertical; min-height:130px; }
    .textarea-wrap i { top:16px; transform:none; }
    .field-error { font-size:0.78rem; color:#dc2626; }
    .submit-btn { width:100%; justify-content:center; padding:14px; font-size:1rem; }
    .submit-btn:disabled { opacity:0.6; cursor:not-allowed; transform:none !important; }
    .loading-state { display:flex; align-items:center; gap:10px; }
    .btn-spinner { width:18px; height:18px; border:2px solid rgba(255,255,255,0.3); border-top-color:white; border-radius:50%; animation:spin 0.7s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .success-message { text-align:center; padding:40px 20px; display:flex; flex-direction:column; align-items:center; gap:16px; }
    .success-icon { font-size:3.5rem; color:#22c55e; }
    .success-message h4 { font-size:1.3rem; }
    .success-message p { color:var(--text-muted); }
    .error-message { text-align:center; padding:20px; background:rgba(220,38,38,0.06); border:1px solid rgba(220,38,38,0.2); border-radius:12px; margin-bottom:20px; }
    .error-message i { font-size:1.8rem; color:#dc2626; margin-bottom:8px; display:block; }
    .error-message p { color:var(--text-secondary); font-size:0.9rem; margin:0; }
    .btn-outline { display:inline-flex; align-items:center; gap:8px; background:transparent; color:var(--accent); padding:12px 24px; border-radius:10px; font-family:'DM Sans',sans-serif; font-weight:500; font-size:0.95rem; border:2px solid var(--accent); cursor:pointer; transition:all 0.25s ease; text-decoration:none; }
    .btn-outline:hover { background:var(--accent-light); }
    .btn-sm { padding:8px 16px; font-size:0.85rem; border-radius:8px; display:inline-flex; align-items:center; gap:6px; font-family:'DM Sans',sans-serif; font-weight:500; cursor:pointer; transition:all 0.2s ease; border:none; }
    .btn-demo { background:var(--accent); color:white; }
  `]
})
export class ContactComponent {
  form = { name:'', email:'', subject:'', message:'' };
  isLoading = false;
  submitted = false;
  error = false;
  private readonly API_URL = 'http://localhost:8080/api/contact';

  contactCards = [
    { label:'Email',    value:'Ayoubsaddi01@gmail.com',  icon:'fas fa-envelope',       color:'#1a56db', link:'mailto:Ayoubsaddi01@gmail.com', ext:false },
    { label:'Phone',    value:'(+216) 50 266 100',            icon:'fas fa-phone',          color:'#059669', link:'tel:+21629835164',                   ext:false },
    { label:'GitHub',   value:'github.com/AyoubSADDI',         icon:'fab fa-github',         color:'#0d0d0d', link:'https://github.com/AyoubSADDI',        ext:true  },
    { label:'LinkedIn', value:'ayoub-saddi',                 icon:'fab fa-linkedin-in',    color:'#0077b5', link:'https://linkedin.com/in/ayoub-saddi',ext:true  },
    { label:'Location', value:'Ariana, Tunisie',               icon:'fas fa-map-marker-alt', color:'#dc2626', link:'https://maps.google.com/?q=Ariana+Tunisia', ext:true }
  ];

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) return;

    this.isLoading = true;

    // Houni l-khedma l-pro
    const templateParams = {
      from_name: this.form.name,
      reply_to: this.form.email,
      subject: this.form.subject,
      message: this.form.message
    };

    // Lezem ta3mel compte f-emailjs.com bech t-jib hadhom:
    emailjs.send(
      'service_vfch0a4',   // Service Gmail/Outlook
      'template_4t9qrwp',  // Modèle ta3 l-mail
       templateParams,
      'DWiZRjbX9YRvRmNVt'    // Key mel-account mta3ek
    )
    .then(() => {
      this.submitted = true;
      this.isLoading = false;
      this.form = { name: '', email: '', subject: '', message: '' }; // Reset l-form
    })
    .catch((err) => {
      console.error('Erreur:', err);
      this.isLoading = false;
      alert("Fama moshkla saret, jarreb marra okhra!");
    });
  }


  // Hathi lezem tkoun mwjouda bech l-rouge yetna77a!
  fallbackMailto() {
    const s = encodeURIComponent('Portfolio Contact: ' + this.form.subject);
    const b = encodeURIComponent(
      `Name: ${this.form.name}\n` +
      `Email: ${this.form.email}\n` +
      `Subject: ${this.form.subject}\n\n` +
      `Message:\n${this.form.message}`
    );
    console.log(s);
    console.log(b);
    // Tefte7 l-application ta3 l-email (Gmail/Outlook)
    window.open(`mailto:ayoubsaddi01@gmail.com?subject=${s}&body=${b}`, '_blank');
  }

  resetForm() {
    this.form = { name:'', email:'', subject:'', message:'' };
    this.submitted = false;
    this.error = false;
  }
}

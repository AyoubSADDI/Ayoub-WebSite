# 🚀 Ayoub Saddi — Portfolio

A professional Angular 17+ portfolio with Spring Boot contact backend.

---

## 📁 Project Structure

```
ayoub-portfolio/
├── src/                          # Angular Frontend
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/           # Sticky navbar + dark mode toggle
│   │   │   ├── hero/             # Hero section with profile image
│   │   │   ├── about/            # About + skills with progress bars
│   │   │   ├── projects/         # Projects grid with filter tabs
│   │   │   ├── experience/       # Timeline + education
│   │   │   ├── contact/          # Contact form → Spring Boot API
│   │   │   └── footer/           # Footer with social links
│   │   └── app.component.ts      # Root component
│   ├── assets/images/            # Profile photo
│   └── styles/main.scss          # Global styles + CSS variables
├── angular.json
├── package.json
└── tsconfig.json
```

---

## ⚡ Quick Start — Angular Frontend

### Prerequisites
- Node.js 18+
- npm 9+
- Angular CLI 17

### Install & Run

```bash
# Install Angular CLI globally
npm install -g @angular/cli@17

# Install dependencies
npm install

# Start dev server
ng serve

# Open browser
http://localhost:4200
```

### Build for Production
```bash
ng build --configuration production
# Output in: dist/ayoub-portfolio/
```

---

## 📧 Spring Boot Backend — Email Service

### Prerequisites
- Java 17+
- Maven 3.8+

### Setup Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**
3. Go to **App Passwords** → Generate for "Mail"
4. Copy the 16-character password

### Configure `application.properties`

```properties
spring.mail.username=YOUR_GMAIL@gmail.com
spring.mail.password=YOUR_16_CHAR_APP_PASSWORD
```

### Run the Backend

```bash
cd backend
mvn spring-boot:run
```

Backend runs on: `http://localhost:8080`

### API Endpoint

```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Response (success):**
```json
{ "status": "success", "message": "Your message has been sent successfully!" }
```

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎨 Dark / Light Mode | CSS variables + localStorage persistence |
| 📱 Fully Responsive | Desktop, tablet, mobile |
| 🎭 Animations | Angular Animations + AOS scroll animations |
| 📧 Contact Form | Sends email via Spring Boot + JavaMailSender |
| 🔍 SEO | Meta tags, OG tags, semantic HTML |
| ⚡ Performance | Lazy loading, OnPush ready, optimized build |
| 🔒 Security | Input validation on both frontend & backend |
| 🎯 Smooth Scrolling | Native CSS + JavaScript scroll behavior |

---

## 🎨 Tech Stack

### Frontend
- Angular 17 (Standalone Components)
- TypeScript
- SCSS
- Angular Animations
- AOS (Animate On Scroll)
- Font Awesome 6
- Google Fonts (Syne + DM Sans)

### Backend
- Spring Boot 3.2
- JavaMailSender
- Jakarta Validation
- Gmail SMTP

---

## 🌐 Deployment

### Frontend (Netlify / Vercel)
```bash
ng build --configuration production
# Deploy the dist/ayoub-portfolio/ folder
```

### Backend (Railway / Render / VPS)
```bash
cd backend
mvn clean package
java -jar target/portfolio-backend-1.0.0.jar
```

Update `contact.component.ts` API_URL to your deployed backend URL.

---

## 📞 Contact

**Ayoub SADDI**
- 📧 ayoubsaddi01@gmail.com
- 🐙 github.com/AyoubSADDI
- 💼 linkedin.com/in/ayoub-saddi

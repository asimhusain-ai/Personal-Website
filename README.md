🚀 Personal Portfolio Website
A modern personal portfolio website built from scratch to showcase my skills, projects, and passion for creating clean, responsive, and user-friendly digital experiences.

Deployed on Azure Static Web Apps with a custom domain and automated GitHub Actions workflow.


🌐 Live Website
👉 www.asimhusain.dev


✨ Features
- Modern UI – clean and intuitive design
- Smooth Animations – engaging UX with subtle transitions
- Blog Section – integrated popups for reading blog posts
- Contact Form – fully functional via EmailJS
- Responsive – works seamlessly on desktop, tablet, and mobile


🛠️ Tech Stack
- Frontend: HTML5, CSS3, JavaScript
- Services: EmailJS (contact form)
- Hosting & Deployment: Azure Static Web Apps, GitHub Actions


☁️ Hosting & Deployment Journey

1️⃣ Domain Purchase
- Registered domain asimhusain.dev via Name.com

2️⃣ Azure Static Web Apps Setup
- Created a Static Web App in Azure (Free Plan).
- Connected GitHub repository for CI/CD deployment.
- Azure generated a default staging URL:
  https://lively-sky-057d13400.1.azurestaticapps.net

3️⃣ GitHub Actions Integration
- Added a GitHub Actions workflow:
  File: .github/workflows/azure-static-web-apps.yml
- Configured Azure Deployment Token as a GitHub Secret
- Every push to main automatically triggers deployment

4️⃣ Custom Domain Configuration
- Added www.asimhusain.dev in Azure → received CNAME target.
- Configured CNAME in Name.com DNS:
  www → lively-sky-057d13400.1.azurestaticapps.net

5️⃣ Root Domain Redirect
- Azure doesn’t directly support apex/root domain with Name.com.
- Set up 301 Permanent Redirect in Name.com:
  asimhusain.dev → https://www.asimhusain.dev

6️⃣ SSL & Final Setup
- Azure automatically provisioned free SSL certificates.
- Final result:
  👉 https://www.asimhusain.dev (secure + live)


📄 License
This project is open source and available under the MIT License.

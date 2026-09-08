# Tony Chikezie — Portfolio

A personal portfolio site built with Next.js, showcasing my work as a frontend developer. Includes light/dark mode, smooth scroll-reveal animations, and a fully responsive layout.

**Live site:** [nextportfolio-lilac-chi.vercel.app](https://nextportfolio-lilac-chi.vercel.app)

## Features

- ⚡️ Built with Next.js (App Router)
- 🎨 Light / dark mode toggle with persisted theme
- 🧭 Responsive header with mobile sidebar navigation
- ✨ Smooth scroll-triggered section reveal animations (Framer Motion)
- 💬 Floating WhatsApp contact button
- 📄 Downloadable resume (PDF)
- 📱 Fully responsive across devices

## Tech Stack

**Frontend**
- React
- Next.js
- TypeScript
- Tailwind CSS
- SCSS

**Backend / Tooling**
- Node.js
- Express
- Prisma
- Git & GitHub
- Vercel (deployment)

## Sections

- **Hero** — introduction and call to action
- **About** — background and experience
- **Skills** — tech stack overview
- **Projects** — selected work
- **Contact** — get in touch
- **Footer** — site links and social

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Aguero75/next_portfolio.git
cd next_portfolio
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Project Structure

```
app/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Whatsapp.tsx
│   └── RevealSection.tsx
├── page.tsx
public/
└── assets/
```

## Deployment

This project is deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic deployment.

To deploy your own copy:

```bash
npm run build
```

Then follow the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) or connect the repo directly to Vercel.

## Connect

- GitHub: [@Aguero75](https://github.com/Aguero75)
- LinkedIn: [Tony Chikezie](https://www.linkedin.com/in/tony-chikezie-454b4b336/)
- Twitter: [@iamtony75](https://x.com/iamtony75)

## License

This project is open source and available for reference. Feel free to fork it, but please don't reuse the personal content (resume, name, project details) as your own.

# Jagadeesh Kema Portfolio

A modern, responsive portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS** showcasing professional experience as a .NET Developer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations and gradients
- **Responsive Layout**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance and SEO
- **Smooth Navigation**: Smooth scroll navigation between sections
- **Professional Sections**:
  - Hero/Landing Section
  - Technical Skills with categorization
  - Professional Experience with detailed project information
  - Education history
  - Achievements & Awards
  - Contact Information with social links

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx           # Main page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── Skills.tsx         # Technical skills
│   ├── Experience.tsx     # Work experience
│   ├── Education.tsx      # Education section
│   ├── Achievements.tsx   # Awards and achievements
│   └── Contact.tsx        # Contact section
├── data/
│   └── portfolioData.ts   # Portfolio content and configuration
└── styles/
    └── globals.css        # Global styles
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: npm/yarn
- **Deployment**: Netlify, Vercel, or any static host

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd myportfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Update Personal Information

Edit `/src/data/portfolioData.ts` to customize:
- Name, title, and contact information
- Professional summary
- Technical skills
- Work experience details
- Education background
- Achievements and awards
- Social media links

### Styling

The portfolio uses Tailwind CSS. To customize colors and styles:
- Modify color classes in component files
- Update `tailwind.config.ts` for global theme changes
- Adjust spacing and typography in components

## 📦 Build & Deploy

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Deploy to Netlify:
```bash
npm run build
# Then drag and drop the .next folder
```

Or connect your GitHub repo to Netlify for automatic deployments.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile (sm: 640px)
- Tablet (md: 768px)
- Desktop (lg: 1024px)
- Large Desktop (xl: 1280px)

## 🎨 Color Scheme

- **Primary**: Blue/Cyan gradient (#3B82F6 to #06B6D4)
- **Background**: Slate grey (#0F172A)
- **Text**: White and light grey
- **Accents**: Golden yellow and light blue

## 📧 Contact

- **Email**: jagadeeshkema2000@yahoo.com
- **Phone**: +91 6302635414
- **LinkedIn**: [linkedin.com/in/jagadeeshkema](https://www.linkedin.com/in/jagadeeshkema/)
- **GitHub**: [github.com/JagadeeshKemajk](https://github.com/JagadeeshKemajk)

---

Made with ❤️ by **Jagadeesh Kema**

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

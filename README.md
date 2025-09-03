# DEADF5 - The Ultimate Crypto Revolution

A modern, animated cryptocurrency landing page built with Next.js, TypeScript, and Framer Motion.

## Features

- **Modern Design**: Sleek, futuristic interface with gradient effects and animations
- **Fully Responsive**: Optimized for all device sizes
- **Interactive Animations**: Smooth scroll animations and hover effects using Framer Motion
- **TypeScript**: Type-safe development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **SEO Optimized**: Meta tags and structured content

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/deadf5.git
cd deadf5
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
DEADF5-FINAL/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Header navigation
│   ├── HeroSection.tsx  # Hero section
│   ├── RoadmapSection.tsx
│   ├── AboutSection.tsx
│   ├── TokenomicsSection.tsx
│   ├── TeamSection.tsx
│   ├── CommunitySection.tsx
│   └── Footer.tsx
├── public/              # Static assets
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Colors

Edit the color palette in `tailwind.config.js`:
- Primary: #F50000 (Red)
- Secondary: #FF6B6B (Light Red)
- Accent: #00F5FF (Cyan)
- Dark: #0A0A0A (Near Black)

### Content

All text content can be modified directly in the component files.

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Intersection Observer** - Scroll animations

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues or questions, please open an issue on GitHub.
# Lukasz Milwosz - Wedding Photography Portfolio

Website portfolio untuk fotografer pernikahan dengan desain modern dan animasi yang elegan.

## Struktur Proyek

```
├── components/
│   ├── animations/
│   │   ├── AnimatedText.jsx      # Animasi teks letter-by-letter
│   │   └── FadeIn.jsx             # Animasi fade-in dengan scroll
│   ├── layout/
│   │   ├── MenuOverlay.jsx        # Full-screen menu overlay
│   │   ├── Navigation.jsx         # Header navigation
│   │   └── ScrollProgress.jsx     # Progress bar scroll
│   └── sections/
│       ├── ApproachSection.jsx    # Section pendekatan fotografi
│       ├── ContactSection.jsx     # Section kontak & footer
│       ├── HeroSection.jsx        # Hero section dengan animated text
│       ├── IntroSection.jsx       # Section intro/philosophy
│       ├── LoadingScreen.jsx      # Loading screen awal
│       ├── PortfolioSection.jsx   # Gallery portfolio
│       └── TestimonialSection.jsx # Section testimoni
├── pages/
│   ├── _app.jsx                   # Next.js App wrapper
│   ├── _document.jsx              # Next.js Document
│   └── index.jsx                  # Homepage utama
├── styles/
│   └── globals.css                # Global styles & Tailwind
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

## Instalasi

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser di [http://localhost:3000](http://localhost:3000)

## Build untuk Production

```bash
npm run build
npm start
```

## Library yang Digunakan

- **Next.js** - React framework
- **Framer Motion** - Animasi
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Fitur

- ✅ Responsive design (mobile & desktop)
- ✅ Smooth scroll animations
- ✅ Loading screen
- ✅ Full-screen menu overlay
- ✅ Scroll progress indicator
- ✅ Image hover effects
- ✅ Animated text effects
- ✅ SEO friendly

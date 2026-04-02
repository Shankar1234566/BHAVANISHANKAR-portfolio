# ⚡ Bhavani Shankar — Marvel Portfolio

A cinematic Marvel Cinematic Universe–inspired personal portfolio built with **React + Vite + Framer Motion**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

---

## 🏗️ Project Structure

```
bhavani-shankar-portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                  ← Entry point
    ├── App.jsx                   ← Root component
    ├── styles/
    │   └── global.css            ← CSS variables, animations, base styles
    └── components/
        ├── Cursor.jsx            ← 🔨 Thor Mjolnir cursor + lightning sparks
        ├── Cursor.module.css
        ├── JarvisLoader.jsx      ← 🤖 JARVIS boot screen intro
        ├── JarvisLoader.module.css
        ├── ParticleField.jsx     ← ✨ Animated particle canvas
        ├── Navbar.jsx            ← Navigation bar
        ├── Navbar.module.css
        ├── Hero.jsx              ← 🔴 Iron Man HUD hero section
        ├── Hero.module.css
        ├── About.jsx             ← 🧠 About Me section
        ├── About.module.css
        ├── StrangePortal.jsx     ← 🌀 Doctor Strange portal divider
        ├── StrangePortal.module.css
        ├── Skills.jsx            ← 💪 Hulk-theme skill bars
        ├── Skills.module.css
        ├── Projects.jsx          ← 🛠 3D tilt project cards
        ├── Projects.module.css
        ├── Contact.jsx           ← 📞 Futuristic contact form
        ├── Contact.module.css
        ├── Footer.jsx            ← Footer
        └── Footer.module.css
```

---

## 🎨 Marvel Character Themes

| Section | Marvel Theme | Effect |
|---------|-------------|--------|
| Loader | Iron Man / JARVIS | Boot terminal, arc reactor, typing animation |
| Cursor | Thor / Mjolnir | SVG hammer cursor + lightning sparks on click |
| Hero | Iron Man HUD | Rotating HUD rings on canvas, typewriter text |
| About | S.H.I.E.L.D. | Orbital avatar rings, data panels |
| Dividers | Doctor Strange | Rotating portal energy rings |
| Skills | Hulk | Green glow bars, shake on hover |
| Projects | Avengers | 3D tilt cards, holographic shimmer |
| Contact | S.H.I.E.L.D. | Neon borders, glowing form |
| Particles | Cosmic | Multi-color floating particles with mouse repulsion |

---

## ⚙️ Tech Stack

- **React 18** — UI framework
- **Vite 5** — Build tool (blazing fast HMR)
- **Framer Motion 11** — Animations (entrance, layout, presence)
- **react-intersection-observer** — Scroll-triggered reveals
- **Canvas API** — HUD rings, particles, portal effects
- **CSS Modules** — Scoped, collision-free styles
- **Google Fonts** — Orbitron + Rajdhani + Share Tech Mono
- **Font Awesome 6** — Icons

---

## 🎯 Key Features

- ✅ **JARVIS boot loader** — Full-screen terminal intro before site loads
- ✅ **Mjolnir cursor** — SVG Thor's hammer with lightning sparks on click
- ✅ **Iron Man HUD** — Canvas-rendered rotating rings in hero section
- ✅ **Doctor Strange portals** — Between every section
- ✅ **Hulk strength bars** — Shake animation on hover, green glow fills
- ✅ **3D project cards** — Mouse-tracked perspective tilt with holographic shimmer
- ✅ **Particle field** — 120 colored particles with mouse repulsion physics
- ✅ **Smooth scroll spy** — Active nav link tracks current section
- ✅ **Fully responsive** — Mobile-first design
- ✅ **CSS Modules** — Zero style conflicts

---

## 🔧 Customization

### Change your name / content
Edit the data directly in each component:
- `Hero.jsx` — name, role, bio, stats
- `About.jsx` — bio text, attributes
- `Skills.jsx` — skill names and percentages
- `Projects.jsx` — project data array at top of file
- `Contact.jsx` — email, social links
- `Footer.jsx` — social links

### Change colors
Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --red: #E23636;
  --blue: #00BFFF;
  --green: #00FF88;
  --gold: #F5C518;
  --purple: #9D00FF;
}
```

---

## 📦 Build for Production

```bash
npm run build
# Output in /dist folder — ready to deploy
```

Deploy to **Vercel**, **Netlify**, or **GitHub Pages** instantly.

---

*Built with ❤️ by Dasari Bhavani Shankar | Powered by React + Vite*

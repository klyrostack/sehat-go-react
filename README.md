# Sehat Go — React + TypeScript Frontend

Modern React single-page frontend for Sehat Go (clinic discovery and doctor appointment booking platform for Jammu & Kashmir).

Migrated from the verified Vanilla TypeScript architecture (Phase 2) to a component-driven React 19 application with strict TypeScript contracts and Vite tooling.

**Core Platform Repository:** [klyrostack/sehat-go](https://github.com/klyrostack/sehat-go)  
**Live Production Platform:** [sehat-go.vercel.app](https://sehat-go.vercel.app)

---

## Tech Stack

- **Framework:** React 19 (Functional Components, Hooks, Virtual DOM)
- **Language:** TypeScript (Strict Mode, DOM & JSX targets)
- **Build Tool & Dev Server:** Vite 8 (Hot Module Replacement)
- **Styling:** CSS3 Custom Properties & Tokens (ported from Sehat Go design system)
- **Code Quality:** ESLint with TypeScript ESLint parser

---

## Directory Structure

```
sehat-go-react/
└── frontend/
    ├── public/                # Static brand assets and vectors
    ├── src/
    │   ├── assets/            # Component media assets
    │   ├── components/        # Reusable UI components (Navbar, DoctorCard, SlotPicker, etc.)
    │   ├── types.ts           # Centralized domain contracts (Doctor, Booking, UserSession)
    │   ├── App.css            # Global design tokens and layout styling
    │   ├── App.tsx            # Root application layout and route views
    │   └── main.tsx           # Entry point and React DOM root mount
    ├── index.html             # Single-page application root container
    ├── package.json           # Dependencies and project scripts
    ├── tsconfig.json          # Root TypeScript configuration
    ├── tsconfig.app.json      # Client-side React compiler rules
    └── vite.config.ts         # Vite bundler plugins and resolution
```

---

## Local Development

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```

4. **Production Build:**
   ```bash
   npm run build
   ```

---

## Phase 3 Implementation Roadmap

- [x] **Workspace Setup:** Vite 8 + React 19 + TypeScript build pipeline.
- [x] **Design Tokens:** Ported Sehat Go color variables, typography, and card tokens.
- [x] **Domain Contracts:** Mirrored `Doctor`, `Booking`, `UserSession`, and `PatientRecord` interfaces in `src/types.ts`.
- [ ] **Component Library:** Build `<Navbar />`, `<DoctorCard />`, `<SearchHero />`, and `<StatusPill />`.
- [ ] **Dynamic Directory View:** Multi-district filtering, specialty routing, and dual-mode sorting in React.
- [ ] **Booking Engine:** 4-day calendar slider, slot conflict state, and printable confirmation pass.
- [ ] **Dual-Portal Dashboard:** Role-based doctor patient queue and patient appointment timeline.

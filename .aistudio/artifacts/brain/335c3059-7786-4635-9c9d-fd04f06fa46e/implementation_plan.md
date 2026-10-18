# Mechanical Engineering Digital Portfolio

A high-precision, minimalist digital portfolio tailored for mechanical engineering showcasing CAD models, FEA simulations, prototyping case studies, and engineering credentials, designed for seamless hosting on GitHub Pages.

### User Review & Critical Decisions

> [!IMPORTANT]
> The following key decisions have been confirmed and incorporated into the design plan:
> - **Visual Aesthetic**: Minimalist Precision — architectural gridlines, clean generous whitespace, disciplined typography, and high-legibility layout.
> - **Color Scheme**: Integrated Light & Dark mode toggle with crisp technical neutrals (Slate/Zinc palette with blueprint cobalt accents).
> - **Navigation & Page Architecture**: Clean routing between **Home (Bio & Credentials)**, **Project Gallery (Interactive grid with hover overlays)**, and **Dedicated Full-Page Case Studies**.
> - **GitHub Pages Compatibility**: Client-side hash/state routing ensuring 100% zero-config hosting on GitHub Pages without server-side rewrite 404s, plus an in-app static export assistant.

---

### 1. Overview & Core Concept

- **What It Does**: Presents a mechanical engineer's professional identity, resume, contact channels, and technical case studies with an editorial, drafting-table inspired aesthetic.
- **Target Audience**: Engineering hiring managers, technical recruiters, lead mechanical design engineers, and academic/industry collaborators.
- **Key Value**: Replaces generic web templates with an engineering-first portfolio that highlights real mechanical design principles (tolerancing, FEA results, DFM/DFA constraints, BOM metrics, and physical testing).

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Home / Bio View**:
     - Minimalist hero with name, degree, professional title, and engineering summary.
     - Direct contact links: Email, Phone, LinkedIn, and GitHub/CAD repository.
     - Resume PDF view & download modal/link with print-ready preview.
     - Quick-access "Featured Engineering Works" teaser leading smoothly into the gallery.
  2. **Project Gallery View**:
     - Structured multi-column engineering gallery with category filtering (e.g., *CAD & Mechanisms*, *FEA & Structural*, *Thermal & Fluids*, *Rapid Prototyping*).
     - **Hover Interaction**: Hovering over any project thumbnail smoothly reveals a dark tinted scrim overlay with a 1-2 sentence engineering brief, core tools utilized (e.g., SolidWorks, ANSYS, CNC Mill), and a "View Case Study" trigger.
  3. **Dedicated Case Study Pages**:
     - Full-page dedicated deep-dive view with breadcrumb navigation back to gallery.
     - Structured engineering documentation: Problem statement, design specifications & constraints, CAD/FEA breakdown, manufacturing methods (3D printing, CNC, sheet metal), and quantifiable test outcomes.
     - Image gallery with full-resolution zoomable viewer for technical drawings and simulations.
  4. **GitHub Pages Deployment Assistant**:
     - One-click guide and static export utility that packages all assets and instructions for pushing directly to a `gh-pages` branch or repository root.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Minimalist Precision — inspired by technical blueprints and drafting manuals without cheesy mechanical clichés.
  - *Color Palette & Mood*:
    - Light Mode: Neutral crisp white canvas (`#FFFFFF` / `#F8FAFC`), technical hairline border outlines (`#E2E8F0`), deep slate typography (`#0F172A`), and subtle blueprint cobalt accent (`#2563EB`).
    - Dark Mode: Deep graphite canvas (`#090D16` / `#0F172A`), precision border outlines (`#1E293B`), off-white typography (`#F1F5F9`), and electric sapphire accent (`#3B82F6`).
  - *Typography & Hierarchy*:
    - Display / Headings: `Plus Jakarta Sans` with tight tracking (`tracking-tight`).
    - Body: `Inter` / system-ui clean sans-serif for comfortable technical reading.
    - Metadata & Engineering Metrics: Monospace tabular numerals (`font-mono tabular-nums`).
  - *Anti-Slop Discipline*: Zero rounded pill tags on static metadata; no fake code comment prefixes (`// 01`); clean 3-zone Top Bar Contract.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Client-Side Routing for GitHub Pages**:
  - *Chosen Approach*: Hash-based and state-driven multi-page navigation (`/#/`, `/#/gallery`, `/#/project/:id`).
  - *Why*: Standard HTML5 pushState routing triggers 404 errors on GitHub Pages when a user directly navigates to a subpath or reloads the page. Hash-based routing guarantees 100% reliability on static hosts without requiring complex 404 redirection hacks.
- **Decision 2: Interactive High-Fidelity Project Renders**:
  - *Chosen Approach*: Generate high-quality engineering renders (CAD assembly, FEA stress contour plot, robotic mechanism, thermal heatsink) using `generate_image` in a parallel batch.
  - *Why*: Mechanical engineering portfolios demand authentic-looking CAD screenshots and hardware prototypes; generic placeholders ruin recruiter retention.
- **Decision 3: Standalone Single-File / Static Export Helper**:
  - *Chosen Approach*: Include an in-app "Export for GitHub Pages" modal that allows downloading the complete static package or inspecting the deployment steps.
  - *Why*: The user explicitly requested an HTML file / bundle they can host on GitHub Pages.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│                      App Shell                         │
│  - Top Bar (Brand, Navigation Links, Theme Toggle)     │
│  - Global State: Current Route, Theme (Light/Dark)     │
└───────────────────────────┬────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  Home View   │    │ Gallery View │    │ Case Study   │
│  - Bio & Info│    │ - Filters    │    │ - Problem    │
│  - Degree    │    │ - Grid Cards │    │ - Specs & CAD│
│  - Resume CTA│    │ - Hover Brief│    │ - FEA & Test │
│  - Contacts  │    │ - Click-thru │    │ - Back Link  │
└──────────────┘    └──────────────┘    └──────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│             Projects Data Store (Mock & Extensible)    │
│  - 5 realistic engineering projects with specs & media │
└────────────────────────────────────────────────────────┘
```

- **Data Model**:
  - `Project`: `id`, `title`, `tagline`, `category`, `tools`, `coverImage`, `galleryImages`, `summary`, `problemStatement`, `constraints`, `specifications` (key-value metrics), `solution`, `results`.
  - `Profile`: `name`, `headline`, `degree`, `institution`, `email`, `phone`, `linkedin`, `github`, `resumeUrl`, `bioParagraphs`.
- **Theme Engine**: Persistent `localStorage` light/dark theme toggle applied via Tailwind `dark` class on the `<html>` root.

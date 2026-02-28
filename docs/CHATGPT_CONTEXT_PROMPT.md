# ChatGPT Context Prompt – Abhinavi Portfolio

This document is a **long-term context anchor** for future conversations with ChatGPT related to the Abhinavi personal portfolio and professional website.

Use this file whenever you start a **new chat** or return after a long break. Paste the relevant sections into ChatGPT to instantly restore context without relying on old chat history.

---

## 1. Project Overview (What This Project Is)

* **Project Name:** Abhinavi – Personal & Professional Portfolio

* **Owner:** Abhilash Tripathy (Software Engineer)

* **Purpose:**

  * Showcase professional experience across **DevOps, SRE, Cloud, Data Platforms, Networking, and Automation**
  * Express personal philosophy, values, and personality in a **cinematic, modern, premium UI**
  * Not a product website — a **personal engineering identity**

* **Nature of Site:**

  * Frontend-heavy, animation-rich portfolio
  * Content-driven (not CRUD, not backend-heavy)
  * Designed for recruiters, peers, and collaborators

---

## 2. Tech Stack & Architecture (How It Is Built)

### Core Stack

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Routing:** React Router

### Design Principles

* Dark-mode-first
* Glassmorphism + subtle gradients
* Cinematic motion (fade, slide, hover glow, cursor-reactive effects)
* Apple / Vercel / Linear-inspired minimalism

### Folder Structure (Important Context)

```
src/
 ├─ assets/        # logos, icons
 ├─ components/    # Navbar, reusable UI blocks
 ├─ pages/         # Home, About, Education, Experience, Skills, Projects, Contact
 ├─ animations/    # custom animation helpers
 ├─ router/        # AppRouter
 ├─ index.css      # Tailwind base styles
 ├─ main.jsx
```

### Key Behavior

* Entire site is **static frontend**, but feels dynamic due to animations
* No backend or database currently
* Easily extendable later with APIs, CMS, or backend

---

## 3. Content & Design Philosophy (How Pages Should Feel)

### Overall Tone

* **Modern, premium, calm, confident**
* Cinematic & poetic — not loud
* Personal + professional balance

### Home Page

* Animated hero with cursor glow
* "Hi, I’m Abhilash" section with gradient name glow
* Personal philosophy + professional approach quotes
* Soft hover interactions everywhere

### About Page

* Story-driven
* Engineer + human narrative
* Emphasis on systems thinking, calm under pressure

### Education Page

* Timeline-based
* Includes:

  * 10th, 12th, Graduation, MCA
  * Universities & locations
* Certifications:

  * AWS (multiple)
  * Yugabyte
  * OpenTofu

### Experience Page

* Company-based sections (KFintech, Alkira)
* Highlight:

  * DevOps
  * SRE
  * Data Platforms
  * Networking
  * Automation
* Avoid internal IP details
* Focus on **impact, scale, ownership**

### Skills Page

* Categorized, not a raw list
* Domains:

  * Cloud
  * DevOps
  * SRE
  * Data Platforms
  * Databases
  * Programming
  * Networking & Security
  * AI/ML (foundational exposure)

### Projects Page

* Not personal projects
* Instead:

  * **Case studies**
  * **System architectures**
  * **What I’ve built at scale (without sensitive data)**

### Contact Page

* Minimal & elegant
* Only:

  * LinkedIn
  * GitHub
  * Gmail (mailto)
  * Phone number

---

## 4. How To Use This File in the Future

When starting a **new ChatGPT conversation**, paste:

> "This is my project context:"
> (paste this file or the relevant sections)

Then ask:

* "Help me extend my portfolio"
* "Add a new page"
* "Refactor animations"
* "Make this more premium"

This avoids long chat history, improves response quality, and keeps things fast.

---

## 5. Golden Rule

If something feels:

* Overcrowded → simplify
* Flashy → calm it down
* Generic → make it personal

This site should always feel like:

> **A quiet, confident engineer who builds systems that don’t break.**

---

*End of context file.*

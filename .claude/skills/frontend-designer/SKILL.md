# Frontend Designer Skill

## Metadata

```yaml
name: frontend-designer
description: Expert guidance for building modern, responsive, and visually appealing web pages using HTML, CSS, and JavaScript. Use when creating or improving web interfaces, designing layouts, implementing responsive designs, or applying modern styling patterns. Focuses on clean, production-ready vanilla HTML/CSS/JS based on real-world patterns from modern websites like Vercel, shadcn/ui, and contemporary design systems.
```

## Overview

This skill provides practical, production-ready guidance for frontend development using vanilla HTML, CSS, and JavaScript. It emphasizes clean code, responsive design, accessibility, and modern visual aesthetics based on current industry standards.

## Core Design Principles

### 1. Mobile-First Responsive Design
- Start with mobile layouts (320px), scale up to desktop
- Use media queries: `min-width: 640px` (sm), `768px` (md), `1024px` (lg), `1280px` (xl)
- Flexible layouts with CSS Grid and Flexbox
- Responsive images with `max-width: 100%`

### 2. Semantic HTML
Use proper HTML5 elements:
```html
<header> - Site/section header
<nav> - Navigation links
<main> - Primary content
<article> - Self-contained content
<section> - Thematic grouping
<aside> - Sidebar content
<footer> - Site/section footer
```

### 3. Accessibility Standards
- Meaningful `alt` text for images
- Proper heading hierarchy (h1 → h6)
- ARIA labels where needed
- Keyboard navigation (Tab, Enter, Escape)
- Color contrast ratio ≥ 4.5:1 (WCAG AA)

### 4. Performance
- Minify CSS/JS for production
- Lazy load images: `<img loading="lazy">`
- Defer non-critical JavaScript
- Use modern image formats (WebP)

## Modern Layout Patterns

### 1. Hero Section
```html
<section class="hero">
  <div class="container">
    <h1 class="hero-title">Build Amazing Web Experiences</h1>
    <p class="hero-subtitle">Create beautiful, responsive websites with modern HTML, CSS, and JavaScript</p>
    <div class="hero-cta">
      <button class="btn btn-primary">Get Started</button>
      <button class="btn btn-secondary">Learn More</button>
    </div>
  </div>
</section>
```

**CSS:**
```css
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 4rem 1rem;
  text-align: center;
  color: white;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.125rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 1.875rem;
  }
  .hero-cta {
    flex-direction: column;
  }
}
```

### 2. Card Grid Layout
```html
<section class="features">
  <div class="container">
    <h2>Features</h2>
    <div class="card-grid">
      <div class="card">
        <div class="card-icon">🎨</div>
        <h3 class="card-title">Beautiful Design</h3>
        <p class="card-text">Clean, modern aesthetics that users love</p>
      </div>
      <div class="card">
        <div class="card-icon">📱</div>
        <h3 class="card-title">Fully Responsive</h3>
        <p class="card-text">Perfect on any device or screen size</p>
      </div>
      <div class="card">
        <div class="card-icon">⚡</div>
        <h3 class="card-title">Fast Performance</h3>
        <p class="card-text">Optimized for speed and efficiency</p>
      </div>
    </div>
  </div>
</section>
```

**CSS:**
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 200ms, box-shadow 200ms;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #111827;
}

.card-text {
  color: #6b7280;
  line-height: 1.6;
}
```

### 3. Navigation Bar
```html
<nav class="navbar">
  <div class="container">
    <a href="/" class="logo">YourBrand</a>
    <button class="mobile-menu-toggle" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul class="nav-links">
      <li><a href="#features">Features</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact" class="btn btn-primary">Contact</a></li>
    </ul>
  </div>
</nav>
```

**CSS:**
```css
.navbar {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.95);
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #6b7280;
  text-decoration: none;
  transition: color 200ms;
}

.nav-links a:hover {
  color: #111827;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-menu-toggle span {
  width: 24px;
  height: 2px;
  background: #111827;
  transition: 200ms;
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .nav-links.active {
    display: flex;
  }
}
```

**JavaScript:**
```javascript
// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar')) {
    navLinks.classList.remove('active');
  }
});
```

## Color System

### Neutral Palette
```css
:root {
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
}
```

### Brand Colors
```css
:root {
  --primary: #3b82f6;
  --primary-dark: #2563eb;
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
}
```

### Dark Mode
```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --border-color: #e5e7eb;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #111827;
    --bg-secondary: #1f2937;
    --text-primary: #f9fafb;
    --text-secondary: #9ca3af;
    --border-color: #374151;
  }
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
```

## Typography Scale

```css
:root {
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 1.875rem;    /* 30px */
  --text-4xl: 2.25rem;     /* 36px */
  --text-5xl: 3rem;        /* 48px */
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
               'Helvetica Neue', Arial, sans-serif;
  font-size: var(--text-base);
  line-height: 1.5;
}

h1 { font-size: var(--text-4xl); font-weight: 700; }
h2 { font-size: var(--text-3xl); font-weight: 600; }
h3 { font-size: var(--text-2xl); font-weight: 600; }
p { color: var(--text-secondary); }
```

## Spacing System

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
}
```

## Button Styles

```css
.btn {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 200ms ease;
  text-decoration: none;
  text-align: center;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-secondary {
  background: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
}

.btn-secondary:hover {
  background: var(--primary);
  color: white;
}
```

## Form Elements

```html
<form class="form">
  <div class="form-group">
    <label for="email" class="form-label">Email Address</label>
    <input
      type="email"
      id="email"
      class="form-input"
      placeholder="you@example.com"
      required
    />
    <span class="form-hint">We'll never share your email</span>
  </div>

  <div class="form-group">
    <label for="message" class="form-label">Message</label>
    <textarea
      id="message"
      class="form-textarea"
      rows="4"
      placeholder="Your message..."
    ></textarea>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

**CSS:**
```css
.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 200ms;
  background: var(--bg-primary);
  color: var(--text-primary);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-hint {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
}
```

## Common Interactive Components

### Accordion
```html
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header" onclick="toggleAccordion(this)">
      <span>Question 1</span>
      <span class="accordion-icon">▼</span>
    </button>
    <div class="accordion-content">
      <p>Answer content goes here...</p>
    </div>
  </div>
</div>
```

**CSS:**
```css
.accordion-item {
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

.accordion-header {
  width: 100%;
  padding: 1rem;
  background: none;
  border: none;
  text-align: left;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 300ms ease;
  padding: 0 1rem;
}

.accordion-content.active {
  max-height: 500px;
  padding: 0 1rem 1rem;
}

.accordion-icon {
  transition: transform 200ms;
}

.accordion-item.active .accordion-icon {
  transform: rotate(180deg);
}
```

**JavaScript:**
```javascript
function toggleAccordion(button) {
  const item = button.parentElement;
  const content = item.querySelector('.accordion-content');

  item.classList.toggle('active');
  content.classList.toggle('active');
}
```

### Modal/Dialog
```html
<div id="modal" class="modal">
  <div class="modal-overlay" onclick="closeModal()"></div>
  <div class="modal-content">
    <button class="modal-close" onclick="closeModal()">×</button>
    <h2>Modal Title</h2>
    <p>Modal content goes here...</p>
    <div class="modal-actions">
      <button class="btn btn-primary">Confirm</button>
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
    </div>
  </div>
</div>
```

**CSS:**
```css
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
}

.modal.active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal-content {
  position: relative;
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
  animation: slideUp 200ms ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--text-secondary);
}

.modal-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}
```

**JavaScript:**
```javascript
function openModal() {
  document.getElementById('modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
```

## Animations & Transitions

### Fade In on Scroll
```css
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 400ms, transform 400ms;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**JavaScript:**
```javascript
// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all elements with .fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});
```

## Essential Utility Patterns

### Container
```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}
```

### Flexbox Utilities
```css
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-4 { gap: 1rem; }
```

### Grid Utilities
```css
.grid { display: grid; }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.gap-4 { gap: 1rem; }

@media (max-width: 768px) {
  .grid-cols-2, .grid-cols-3 {
    grid-template-columns: 1fr;
  }
}
```

## Best Practices

### 1. CSS Organization
Structure your CSS in this order:
```css
/* 1. CSS Variables */
:root { /* colors, spacing, etc. */ }

/* 2. Reset/Base Styles */
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui; }

/* 3. Layout Components */
.container, .grid, .flex { /* ... */ }

/* 4. UI Components */
.btn, .card, .nav { /* ... */ }

/* 5. Utilities */
.text-center, .hidden, .sr-only { /* ... */ }

/* 6. Media Queries */
@media (min-width: 768px) { /* ... */ }
```

### 2. JavaScript Best Practices
```javascript
// Use modern ES6+ features
const elements = document.querySelectorAll('.item');
const filteredElements = [...elements].filter(el => el.dataset.active);

// Event delegation for dynamic content
document.addEventListener('click', (e) => {
  if (e.target.matches('.btn')) {
    handleClick(e.target);
  }
});

// Debounce expensive operations
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

window.addEventListener('resize', debounce(() => {
  // Handle resize
}, 250));
```

### 3. Performance Tips
- Load CSS in `<head>`
- Load JavaScript before `</body>` or use `defer`
- Compress images (use tools like TinyPNG)
- Use `loading="lazy"` for images below the fold
- Minimize DOM manipulations
- Use CSS transforms for animations (hardware-accelerated)

## Common Patterns & Solutions

### Centering Content
```css
/* Horizontal & Vertical */
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Horizontal Only */
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
```

### Sticky Footer
```css
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

footer {
  margin-top: auto;
}
```

### Image Aspect Ratios
```css
.aspect-ratio-box {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
}

.aspect-ratio-box img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Smooth Scrolling
```css
html {
  scroll-behavior: smooth;
}
```

## Quick Start Template

See `assets/templates/modern-landing-page.html` for a complete, production-ready starter template incorporating these patterns.

## Validation Checklist

Before considering a page complete:
- [ ] Test on mobile (375px), tablet (768px), desktop (1280px)
- [ ] Verify color contrast with browser DevTools
- [ ] Test keyboard navigation (Tab, Enter, Escape)
- [ ] Check all interactive states (hover, focus, active)
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Test in Chrome, Firefox, Safari
- [ ] Verify loading states for async operations
- [ ] Check console for errors
- [ ] Optimize images (compress, correct formats)
- [ ] Test dark mode if implemented

## Anti-Patterns to Avoid

1. **Inline styles** - Use CSS classes instead
2. **!important overuse** - Fix specificity issues properly
3. **Absolute units** - Prefer rem/em over px for typography
4. **Fixed heights** - Use min-height or let content dictate height
5. **Overuse of divs** - Use semantic HTML when possible
6. **Global JavaScript** - Scope to avoid conflicts
7. **Missing alt attributes** - Always include for images
8. **Non-responsive layouts** - Test on all screen sizes
9. **Poor color contrast** - Maintain accessibility standards
10. **Heavy dependencies** - Keep it simple with vanilla JS when possible

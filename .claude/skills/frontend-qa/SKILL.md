# Frontend Accessibility & QA Skill

## Metadata

```yaml
name: frontend-qa
description: Comprehensive accessibility and quality assurance validation for HTML, CSS, and JavaScript frontend code. Use when reviewing, auditing, or validating web pages for accessibility compliance (WCAG 2.1 AA/AAA), responsiveness, semantic markup, keyboard navigation, ARIA implementation, performance, and general code quality. Provides actionable recommendations for fixing accessibility issues, responsive design problems, and code quality concerns. Essential for ensuring production-ready, inclusive, and performant web applications.
```

## Overview

This skill provides systematic validation and quality assurance for frontend code, focusing on:

1. **Accessibility Compliance** (WCAG 2.1 Level AA/AAA)
2. **Responsive Design** (Mobile, Tablet, Desktop)
3. **Semantic HTML** Structure
4. **Keyboard Navigation** & Focus Management
5. **ARIA** Implementation
6. **Performance** & Best Practices
7. **Cross-browser** Compatibility

## Validation Process

When analyzing a page, systematically check these areas in order:

### 1. Document Structure Validation

**Check:**
- ✓ Proper HTML5 DOCTYPE
- ✓ `<html>` has `lang` attribute
- ✓ `<head>` contains `<meta charset="UTF-8">`
- ✓ Viewport meta tag for responsive design
- ✓ `<title>` is meaningful and unique
- ✓ One and only one `<h1>` per page
- ✓ Heading hierarchy is logical (no skipped levels)
- ✓ Proper use of semantic HTML5 elements

**Required Elements:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Descriptive Page Title</title>
</head>
```

**Issues to Flag:**
```
❌ Missing lang attribute on <html>
❌ Missing or empty <title>
❌ Missing viewport meta tag
❌ Multiple <h1> elements
❌ Skipped heading levels (e.g., <h1> → <h3>)
❌ Incorrect use of <div> instead of semantic elements
```

**Recommendations Format:**
```
🔴 CRITICAL: Missing lang attribute
   Fix: Add lang="en" to <html> element
   Location: Line 1
   Code: <html lang="en">

⚠️  WARNING: Multiple <h1> elements found
   Fix: Use only one <h1> per page for main heading
   Locations: Lines 15, 42
   Suggestion: Convert secondary headings to <h2>
```

### 2. Semantic HTML Validation

**Check for Proper Use of:**
```
<header>    - Site/page header
<nav>       - Navigation sections
<main>      - Primary content (one per page)
<article>   - Self-contained content
<section>   - Thematic groupings
<aside>     - Sidebar/tangential content
<footer>    - Site/page footer
<figure>    - Images with captions
<figcaption>- Figure captions
<time>      - Dates and times
```

**Common Issues:**
```
❌ Using <div id="header"> instead of <header>
❌ Using <div id="nav"> instead of <nav>
❌ Multiple <main> elements
❌ No <main> element (content in divs)
❌ Using <b> instead of <strong>
❌ Using <i> instead of <em>
❌ Generic <div> where semantic element fits
```

**Example Report:**
```
⚠️  WARNING: Non-semantic markup
   Current: <div class="navigation">
   Fix: <nav>
   Reason: Improves accessibility and SEO

ℹ️  INFO: Consider semantic alternative
   Current: <div class="sidebar">
   Suggestion: <aside>
   Benefit: Better document structure
```

### 3. Accessibility - Images & Media

**Image Requirements:**
```html
<!-- ✓ Good -->
<img src="logo.png" alt="Company Name Logo">

<!-- ✓ Decorative images -->
<img src="decorative.png" alt="" role="presentation">

<!-- ❌ Bad -->
<img src="important.png">
<img src="chart.png" alt="image">
```

**Validation Checks:**
- ✓ All `<img>` have `alt` attributes
- ✓ Alt text is descriptive (not "image", "photo", etc.)
- ✓ Decorative images have `alt=""` or `role="presentation"`
- ✓ Complex images (charts, diagrams) have detailed descriptions
- ✓ Icons used for actions have text alternatives

**Issues to Flag:**
```
🔴 CRITICAL: Missing alt attribute
   Element: <img src="hero.jpg">
   Fix: <img src="hero.jpg" alt="Team collaborating in office">
   Location: Line 45

❌ ERROR: Generic alt text
   Current: alt="image"
   Fix: Describe what the image shows
   Example: alt="Dashboard showing sales analytics"
```

**SVG Accessibility:**
```html
<!-- ✓ Inline SVG with proper accessibility -->
<svg role="img" aria-labelledby="iconTitle">
  <title id="iconTitle">Settings Icon</title>
  <!-- SVG content -->
</svg>

<!-- ✓ Icon with text alternative -->
<button>
  <svg aria-hidden="true"><!-- icon --></svg>
  <span>Save</span>
</button>
```

### 4. Color Contrast Validation

**WCAG Standards:**
- **Level AA (Minimum):**
  - Normal text: 4.5:1
  - Large text (18pt+ or 14pt+ bold): 3:1
  - UI components & graphics: 3:1

- **Level AAA (Enhanced):**
  - Normal text: 7:1
  - Large text: 4.5:1

**Check These Combinations:**
```css
/* Text on backgrounds */
color vs background-color

/* Interactive elements */
button color vs button background
link color vs page background
input border vs input background

/* State indicators */
focus outline vs background
hover state vs background
```

**Automated Check Method:**
```
For each text element:
1. Extract foreground color (text color)
2. Extract background color (considering overlays/opacity)
3. Calculate contrast ratio: (L1 + 0.05) / (L2 + 0.05)
   where L = relative luminance
4. Compare against WCAG thresholds
```

**Issue Report Format:**
```
🔴 CRITICAL: Insufficient color contrast
   Element: .btn-secondary text
   Current: #9ca3af on #f3f4f6 (2.8:1)
   Required: 4.5:1 (AA) or 7:1 (AAA)
   Fix: Darken text to #4b5563 (contrast: 5.2:1)
   Location: Line 89

⚠️  WARNING: Low contrast on hover
   Element: .nav-link:hover
   Current: #d1d5db on #f9fafb (1.9:1)
   Suggestion: Use #6b7280 (contrast: 4.6:1)
```

**Common Contrast Issues:**
```
❌ Gray text on white background (#9ca3af on #ffffff = 2.8:1)
   Fix: Use #6b7280 or darker (#4b5563 = 5.2:1)

❌ Light blue on white (#60a5fa on #ffffff = 2.5:1)
   Fix: Use #2563eb (contrast: 4.5:1)

❌ Yellow on white (#fbbf24 on #ffffff = 1.8:1)
   Fix: Use #d97706 (contrast: 4.7:1)
```

### 5. Keyboard Navigation & Focus Management

**Requirements:**
- ✓ All interactive elements reachable via Tab
- ✓ Logical tab order (matches visual order)
- ✓ Visible focus indicators
- ✓ No keyboard traps
- ✓ Skip links for navigation
- ✓ Escape key closes modals/dropdowns
- ✓ Arrow keys for custom controls

**Focus Indicator Standard:**
```css
/* ✓ Good - Visible focus */
button:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* ❌ Bad - Removed focus */
button:focus {
  outline: none; /* Never do this without alternative! */
}
```

**Validation Checks:**
```
Test keyboard navigation:
1. Tab through all interactive elements
2. Verify logical order
3. Check focus visibility
4. Test Shift+Tab (reverse)
5. Test Enter/Space on buttons/links
6. Test Escape on modals/dropdowns
7. Test arrow keys on custom controls
```

**Issues to Flag:**
```
🔴 CRITICAL: No visible focus indicator
   Element: button.nav-toggle
   Current: outline: none
   Fix: Add visible focus style
   Code:
   button.nav-toggle:focus {
     outline: 2px solid #3b82f6;
     outline-offset: 2px;
   }

❌ ERROR: Keyboard trap detected
   Location: Modal dialog
   Issue: Cannot escape with keyboard
   Fix: Add Escape key handler:
   document.addEventListener('keydown', (e) => {
     if (e.key === 'Escape') closeModal();
   });

⚠️  WARNING: Illogical tab order
   Issue: Tab order doesn't match visual layout
   Fix: Remove positive tabindex values or restructure DOM
```

**Skip Link Pattern:**
```html
<!-- ✓ Required for accessibility -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary);
  color: white;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
</style>
```

### 6. ARIA Implementation Validation

**When ARIA is Required:**
```html
<!-- Custom controls (not using native elements) -->
<div role="button" tabindex="0">Custom Button</div>

<!-- Dynamic content updates -->
<div role="alert" aria-live="polite">Success!</div>

<!-- Complex widgets -->
<div role="tablist">
  <button role="tab" aria-selected="true">Tab 1</button>
</div>

<!-- Form validation -->
<input aria-invalid="true" aria-describedby="error-msg">
<span id="error-msg">Please enter valid email</span>

<!-- Loading states -->
<button aria-busy="true">Loading...</button>
```

**Common ARIA Patterns:**
```
role="navigation"     - Navigation landmarks
role="main"          - Main content area
role="complementary" - Aside/sidebar
role="search"        - Search forms
role="banner"        - Site header
role="contentinfo"   - Site footer
aria-label          - Accessible name
aria-labelledby     - Reference to label
aria-describedby    - Reference to description
aria-hidden="true"  - Hide from screen readers
aria-live          - Announce dynamic updates
```

**Validation Rules:**
```
1. Use native HTML when possible (button vs role="button")
2. ARIA roles must match element purpose
3. Required ARIA attributes must be present
4. ARIA states must reflect current UI state
5. Interactive ARIA elements need tabindex
6. Don't override native semantics
```

**Issues to Flag:**
```
🔴 CRITICAL: Missing required ARIA attribute
   Element: <div role="button">
   Missing: tabindex="0"
   Fix: <div role="button" tabindex="0">

⚠️  WARNING: Prefer native HTML
   Current: <div role="button" tabindex="0" onclick="...">
   Better: <button onclick="...">
   Reason: Native elements have built-in accessibility

❌ ERROR: Conflicting ARIA
   Element: <button role="link">
   Issue: Don't override native button semantics
   Fix: Use <a> if link behavior needed

ℹ️  INFO: Missing aria-label for icon-only button
   Element: <button><svg>...</svg></button>
   Fix: <button aria-label="Close">
```

**Dynamic Content Updates:**
```html
<!-- ✓ Announce changes to screen readers -->
<div role="status" aria-live="polite" aria-atomic="true">
  <p>Form submitted successfully!</p>
</div>

<!-- ✓ Loading states -->
<button aria-busy="true" aria-label="Submitting form">
  <span class="spinner"></span>
  Submitting...
</button>
```

### 7. Form Accessibility Validation

**Requirements:**
- ✓ All inputs have associated `<label>` elements
- ✓ Labels use `for` attribute matching input `id`
- ✓ Required fields marked with `required` or `aria-required`
- ✓ Error messages linked with `aria-describedby`
- ✓ Fieldsets group related inputs
- ✓ Form validation provides clear feedback

**Proper Form Pattern:**
```html
<!-- ✓ Correct -->
<form>
  <div class="form-group">
    <label for="email">Email Address*</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      aria-required="true"
      aria-describedby="email-error"
    >
    <span id="email-error" class="error" role="alert">
      <!-- Error message appears here -->
    </span>
  </div>

  <fieldset>
    <legend>Contact Preferences</legend>
    <label>
      <input type="checkbox" name="newsletter">
      Email newsletter
    </label>
    <label>
      <input type="checkbox" name="updates">
      Product updates
    </label>
  </fieldset>

  <button type="submit">Submit</button>
</form>
```

**Issues to Flag:**
```
🔴 CRITICAL: Input without label
   Element: <input type="text" id="name">
   Fix: Add <label for="name">Name</label>
   Location: Line 67

🔴 CRITICAL: Label without matching input
   Element: <label for="phone">
   Issue: No input with id="phone"
   Fix: Ensure label 'for' matches input 'id'

❌ ERROR: Required field not indicated
   Element: <input type="email" required>
   Fix: Add visual indicator and aria-required
   Code:
   <label for="email">Email*</label>
   <input type="email" id="email" required aria-required="true">

⚠️  WARNING: Placeholder as only label
   Current: <input placeholder="Enter email">
   Issue: Placeholder disappears on input
   Fix: Add proper <label> element

ℹ️  INFO: Missing fieldset for radio group
   Issue: Related radio buttons not grouped
   Fix: Wrap in <fieldset> with <legend>
```

**Form Validation Feedback:**
```javascript
// ✓ Accessible error handling
function showError(inputId, message) {
  const input = document.getElementById(inputId);
  const errorId = `${inputId}-error`;
  const errorElement = document.getElementById(errorId);

  input.setAttribute('aria-invalid', 'true');
  input.setAttribute('aria-describedby', errorId);

  errorElement.textContent = message;
  errorElement.setAttribute('role', 'alert');
}

// ✓ Clear errors
function clearError(inputId) {
  const input = document.getElementById(inputId);
  input.removeAttribute('aria-invalid');
  document.getElementById(`${inputId}-error`).textContent = '';
}
```

### 8. Responsive Design Validation

**Breakpoints to Test:**
```
Mobile:  320px - 639px
Tablet:  640px - 1023px
Desktop: 1024px+

Common specific widths:
- 375px (Mobile - iPhone)
- 768px (Tablet - iPad portrait)
- 1024px (Tablet - iPad landscape)
- 1280px (Desktop - small)
- 1920px (Desktop - large)
```

**Validation Tests:**

**Mobile (320px - 639px):**
```
✓ Text is readable without zooming
✓ Touch targets are ≥ 44x44px
✓ No horizontal scrolling
✓ Navigation works (hamburger menu)
✓ Forms are usable
✓ Images scale properly
✓ Content reflows logically
```

**Tablet (640px - 1023px):**
```
✓ Multi-column layouts work
✓ Navigation transitions properly
✓ Touch targets remain adequate
✓ Sidebars/asides display correctly
```

**Desktop (1024px+):**
```
✓ Layout uses available space
✓ Max-width prevents over-stretching
✓ Hover states work properly
✓ Multi-column grids display
```

**CSS Validation:**
```css
/* ✓ Responsive images */
img {
  max-width: 100%;
  height: auto;
}

/* ✓ Responsive containers */
.container {
  width: 100%;
  max-width: 1280px;
  padding: 0 1rem;
}

/* ❌ Fixed widths (avoid) */
.sidebar {
  width: 300px; /* Problem on small screens */
}

/* ✓ Better approach */
.sidebar {
  width: 100%;
  max-width: 300px;
}
```

**Issues to Flag:**
```
🔴 CRITICAL: Horizontal scroll on mobile
   Cause: Element width exceeds viewport
   Location: .hero-section
   Current: width: 1200px
   Fix: width: 100%; max-width: 1200px;

❌ ERROR: Text too small on mobile
   Element: .disclaimer
   Current: font-size: 10px
   Fix: font-size: 14px (minimum for readability)

⚠️  WARNING: Touch targets too small
   Element: .close-button
   Current: 20x20px
   Required: 44x44px minimum
   Fix: Increase padding or button size

⚠️  WARNING: No mobile navigation
   Issue: Desktop nav won't work on small screens
   Suggestion: Implement hamburger menu for <768px
```

**Media Query Validation:**
```css
/* ✓ Mobile-first approach (recommended) */
.element {
  /* Mobile styles */
}

@media (min-width: 768px) {
  .element {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  .element {
    /* Desktop styles */
  }
}
```

### 9. Interactive Elements Validation

**Button Requirements:**
```html
<!-- ✓ Proper button -->
<button type="button">Click me</button>

<!-- ✓ Submit button -->
<button type="submit">Submit Form</button>

<!-- ❌ Div as button (avoid) -->
<div onclick="doSomething()">Click</div>

<!-- ✓ If div required, add ARIA -->
<div role="button" tabindex="0" onclick="..." onkeypress="...">
  Click
</div>
```

**Link vs Button:**
```
Use <a> for: Navigation, page changes
Use <button> for: Actions, form submission, toggles

<!-- ✓ Link -->
<a href="/about">About Us</a>

<!-- ✓ Button -->
<button onclick="toggleMenu()">Menu</button>

<!-- ❌ Button styled as link (confusing) -->
<button onclick="location.href='/about'">About</button>

<!-- ❌ Link with onclick (should be button) -->
<a href="#" onclick="toggleMenu()">Menu</a>
```

**Validation Checks:**
```
✓ Buttons have type attribute
✓ Links have href attribute
✓ No empty onclick handlers
✓ Interactive elements have accessible names
✓ Disabled states communicated properly
```

**Issues to Flag:**
```
🔴 CRITICAL: Div used as button without ARIA
   Element: <div onclick="submit()">Submit</div>
   Fix: Use <button> or add role/tabindex/keyboard handler
   Better: <button type="button" onclick="submit()">Submit</button>

❌ ERROR: Link without href
   Element: <a>Click here</a>
   Fix: Add href="#" or use <button>

⚠️  WARNING: Generic link text
   Element: <a href="...">Click here</a>
   Fix: Use descriptive text
   Better: <a href="...">Read full documentation</a>

⚠️  WARNING: Button without type
   Element: <button>Submit</button>
   Fix: <button type="submit"> or type="button"
```

### 10. Modal/Dialog Accessibility

**Accessible Modal Pattern:**
```html
<div id="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
  <div class="modal-overlay"></div>
  <div class="modal-content">
    <h2 id="modalTitle">Confirm Action</h2>
    <p>Are you sure you want to proceed?</p>
    <div class="modal-actions">
      <button id="modalConfirm">Confirm</button>
      <button id="modalCancel">Cancel</button>
    </div>
  </div>
</div>
```

**JavaScript Requirements:**
```javascript
function openModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('active');

  // ✓ Trap focus in modal
  document.body.style.overflow = 'hidden';
  modal.querySelector('button').focus();

  // ✓ Remember last focused element
  modal.dataset.returnFocus = document.activeElement.id;
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';

  // ✓ Return focus
  const returnId = modal.dataset.returnFocus;
  if (returnId) {
    document.getElementById(returnId).focus();
  }
}

// ✓ Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const activeModal = document.querySelector('.modal.active');
    if (activeModal) closeModal();
  }
});
```

**Validation Checks:**
```
✓ Modal has role="dialog"
✓ Modal has aria-modal="true"
✓ Modal has aria-labelledby or aria-label
✓ Focus moves to modal on open
✓ Focus is trapped within modal
✓ Escape key closes modal
✓ Focus returns to trigger on close
✓ Background is inert (not focusable)
```

**Issues:**
```
🔴 CRITICAL: Missing focus management
   Issue: Focus doesn't move to modal
   Fix: modal.querySelector('button').focus() on open

🔴 CRITICAL: No Escape key handler
   Fix: Add keydown listener for Escape

❌ ERROR: Background still focusable
   Fix: Add inert attribute or aria-hidden to background

⚠️  WARNING: Missing aria-labelledby
   Fix: Link to modal heading with aria-labelledby
```

### 11. Performance Validation

**Critical Metrics:**
```
✓ Images optimized (<200KB each)
✓ CSS minified for production
✓ JavaScript minified/bundled
✓ Critical CSS inline
✓ Non-critical resources deferred
✓ Lazy loading for below-fold images
```

**HTML Checks:**
```html
<!-- ✓ Lazy loading -->
<img src="image.jpg" loading="lazy" alt="...">

<!-- ✓ Deferred JavaScript -->
<script src="app.js" defer></script>

<!-- ✓ Preload critical resources -->
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
```

**CSS Performance:**
```css
/* ✓ Use transforms for animations (GPU accelerated) */
.animated {
  transform: translateY(0);
  transition: transform 300ms;
}

.animated:hover {
  transform: translateY(-4px);
}

/* ❌ Avoid animating expensive properties */
.slow {
  transition: height 300ms; /* Triggers layout */
}

/* ✓ Better */
.fast {
  transition: transform 300ms; /* Composited */
}
```

**Issues to Flag:**
```
⚠️  WARNING: Large image file
   File: hero-background.jpg (1.2MB)
   Suggestion: Compress to <200KB using tools like TinyPNG
   Consider: WebP format for better compression

⚠️  WARNING: Render-blocking resources
   Issue: Synchronous script in <head>
   Current: <script src="app.js"></script>
   Fix: <script src="app.js" defer></script>

ℹ️  INFO: Missing lazy loading
   Elements: Images below fold
   Suggestion: Add loading="lazy" attribute

⚠️  WARNING: Animating layout properties
   Element: .dropdown
   Current: transition: height 300ms
   Better: Use transform or max-height
```

### 12. JavaScript Best Practices

**Validation Checks:**
```
✓ No inline event handlers in HTML
✓ Event delegation used for dynamic content
✓ No console.log in production
✓ Error handling implemented
✓ Proper use of const/let (no var)
✓ Async operations handled correctly
```

**Issues to Flag:**
```
❌ ERROR: Inline event handler
   Current: <button onclick="doSomething()">
   Fix: Add event listener in JavaScript
   Code:
   document.querySelector('.btn').addEventListener('click', doSomething);

⚠️  WARNING: Missing error handling
   Code: fetch('/api/data').then(r => r.json())
   Fix: Add .catch() handler
   Better:
   fetch('/api/data')
     .then(r => r.json())
     .catch(err => console.error('Failed:', err));

⚠️  WARNING: Using var
   Current: var count = 0;
   Fix: const count = 0; or let count = 0;

ℹ️  INFO: Console statements found
   Location: Line 45
   Action: Remove console.log before production
```

**Common JavaScript Issues:**
```javascript
// ❌ Global scope pollution
var myVar = 'value';

// ✓ Encapsulate
(function() {
  const myVar = 'value';
})();

// ❌ No delegation (inefficient)
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', handleClick);
});

// ✓ Event delegation
document.addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    handleClick(e);
  }
});
```

### 13. Mobile-Specific Validation

**Touch Target Size:**
```
Minimum: 44x44px (Apple/Google guidelines)
Recommended: 48x48px
```

**Validation:**
```css
/* ✓ Adequate touch target */
.mobile-button {
  min-width: 44px;
  min-height: 44px;
  padding: 12px 24px;
}

/* ❌ Too small */
.tiny-button {
  width: 20px;
  height: 20px;
}
```

**Mobile Navigation Pattern:**
```html
<!-- ✓ Hamburger menu for mobile -->
<nav class="navbar">
  <button class="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <ul class="nav-links">
    <!-- Navigation items -->
  </ul>
</nav>
```

**Issues:**
```
🔴 CRITICAL: Touch targets too small
   Elements: .icon-buttons
   Current: 24x24px
   Fix: Increase to 44x44px minimum
   Code: padding: 10px; /* Makes 44px total */

⚠️  WARNING: No mobile navigation
   Issue: Desktop nav unusable on mobile
   Fix: Implement responsive menu pattern

❌ ERROR: Text requires horizontal scrolling
   Element: .code-block
   Fix: overflow-x: auto; or break text
```

## Validation Report Format

When auditing a page, structure findings as follows:

```markdown
# Accessibility & QA Audit Report

## Executive Summary
- Total Issues: X
- Critical: X | Errors: X | Warnings: X | Info: X
- WCAG Compliance: Level AA Status

## Critical Issues (Must Fix)

### 1. [Issue Title]
**Severity:** 🔴 Critical
**Category:** [Accessibility/Responsiveness/Performance]
**Impact:** [Description of user impact]
**Location:** [Line numbers or selectors]
**Current Code:**
```html/css/js
[Code snippet showing problem]
```
**Fix:**
```html/css/js
[Code snippet showing solution]
```
**WCAG Reference:** [e.g., 1.4.3 Contrast (Minimum)]

## Errors (Should Fix)

[Same format as Critical]

## Warnings (Recommended)

[Same format as Critical]

## Informational (Consider)

[Same format as Critical]

## Passed Checks ✓
- [List of successful validations]

## Accessibility Score
- **Level A:** Pass/Fail
- **Level AA:** Pass/Fail
- **Level AAA:** Pass/Fail

## Responsiveness Score
- **Mobile (320-639px):** Pass/Fail
- **Tablet (640-1023px):** Pass/Fail
- **Desktop (1024px+):** Pass/Fail

## Performance Score
- **Image Optimization:** Pass/Fail
- **CSS Efficiency:** Pass/Fail
- **JavaScript Performance:** Pass/Fail

## Next Steps
1. [Prioritized list of actions]
2. [With estimated effort: Quick/Medium/Complex]
```

## Priority Levels

**🔴 CRITICAL** - Fix immediately
- Missing alt text on informative images
- No keyboard access to functionality
- Insufficient color contrast (below 3:1)
- Missing form labels
- Keyboard traps

**❌ ERROR** - Fix soon
- Incorrect ARIA usage
- Non-semantic markup where semantic exists
- Poor heading structure
- Missing lang attribute

**⚠️ WARNING** - Should address
- Low (but passing) contrast ratios
- Missing hover states
- Non-optimized images
- Generic link text

**ℹ️ INFO** - Nice to have
- Consider semantic alternatives
- Additional ARIA enhancements
- Performance optimizations
- Code organization suggestions

## Quick Reference Checklist

### Pre-Deployment Checklist
```
Document Structure:
□ Valid HTML5 DOCTYPE
□ <html> has lang attribute
□ Unique, descriptive <title>
□ Viewport meta tag present
□ One <h1> per page
□ Logical heading hierarchy

Accessibility:
□ All images have alt attributes
□ Form inputs have labels
□ Color contrast ≥ 4.5:1
□ Keyboard navigation works
□ Focus indicators visible
□ No keyboard traps
□ ARIA used correctly
□ Skip links present

Responsiveness:
□ Mobile (375px) tested
□ Tablet (768px) tested
□ Desktop (1280px) tested
□ No horizontal scroll
□ Touch targets ≥ 44px
□ Text readable without zoom

Performance:
□ Images optimized/compressed
□ CSS minified
□ JavaScript deferred
□ Lazy loading implemented
□ No console errors

Code Quality:
□ Semantic HTML used
□ Valid HTML (W3C)
□ CSS organized logically
□ JavaScript error handling
□ No inline styles/scripts
□ Cross-browser tested
```

## Testing Workflow

When validating a page:

1. **Automated Scan** - Check structure, contrast, ARIA
2. **Manual Keyboard Test** - Navigate with Tab, test interactions
3. **Screen Reader Test** - Use NVDA/JAWS if available
4. **Responsive Test** - Check 320px, 768px, 1280px
5. **Performance Check** - Verify image sizes, script loading
6. **Cross-browser** - Test Chrome, Firefox, Safari if possible
7. **Generate Report** - Document findings with priority levels

## Common Patterns & Solutions

### Making Existing Code Accessible

**Before:**
```html
<div class="button" onclick="submit()">Submit</div>
```

**After:**
```html
<button type="button" onclick="submit()">Submit</button>
```

**Before:**
```html
<span class="link" onclick="navigate()">Learn More</span>
```

**After:**
```html
<a href="/learn-more">Learn More</a>
<!-- OR if must use span: -->
<span role="link" tabindex="0" onclick="navigate()" onkeypress="handleKey(event)">
  Learn More
</span>
```

### Fixing Contrast Issues

**Low Contrast Example:**
```css
/* ❌ Fails AA (2.8:1) */
.text {
  color: #9ca3af;
  background: #ffffff;
}

/* ✓ Passes AA (4.6:1) */
.text {
  color: #6b7280;
  background: #ffffff;
}

/* ✓ Passes AAA (8.6:1) */
.text {
  color: #374151;
  background: #ffffff;
}
```

### Making Modals Accessible

**Complete Pattern:**
```javascript
const modal = {
  element: null,
  lastFocus: null,

  open(modalId) {
    this.element = document.getElementById(modalId);
    this.lastFocus = document.activeElement;

    this.element.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus first focusable element
    const firstFocusable = this.element.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) firstFocusable.focus();

    // Add inert to background
    document.querySelector('main').inert = true;
  },

  close() {
    this.element.classList.remove('active');
    document.body.style.overflow = '';
    document.querySelector('main').inert = false;

    // Return focus
    if (this.lastFocus) this.lastFocus.focus();
  }
};

// Escape key handler
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.element?.classList.contains('active')) {
    modal.close();
  }
});
```

## Validator Output Example

When providing audit results, use this structure:

```markdown
# Accessibility & QA Audit Results

## Summary
- **Total Issues:** 12
- **Critical:** 2 | **Errors:** 4 | **Warnings:** 5 | **Info:** 1
- **WCAG AA Compliance:** ❌ Fail (2 critical issues)
- **Overall Score:** 68/100

---

## 🔴 Critical Issues (2)

### 1. Missing Alt Text on Hero Image
**Impact:** Screen reader users cannot access image content
**Location:** Line 45, `.hero-image`
**Current:**
```html
<img src="hero.jpg" class="hero-image">
```
**Fix:**
```html
<img src="hero.jpg" class="hero-image" alt="Team collaborating on product design">
```
**WCAG:** 1.1.1 Non-text Content (Level A)
**Priority:** Fix immediately

### 2. Insufficient Color Contrast
**Impact:** Text difficult to read for users with visual impairments
**Location:** Line 89, `.btn-secondary`
**Current:** #9ca3af on #f3f4f6 (2.8:1 ratio)
**Required:** 4.5:1 minimum (AA)
**Fix:**
```css
.btn-secondary {
  color: #4b5563; /* New contrast: 5.2:1 */
}
```
**WCAG:** 1.4.3 Contrast (Minimum) (Level AA)
**Priority:** Fix immediately

---

## ❌ Errors (4)

### 1. Form Input Without Label
**Impact:** Screen readers cannot identify input purpose
**Location:** Line 123, email input
**Fix:**
```html
<label for="email">Email Address</label>
<input type="email" id="email" name="email">
```

[Continue for remaining errors...]

---

## ⚠️ Warnings (5)

[Similar format...]

---

## ✓ Passed Checks

- Semantic HTML structure
- Logical heading hierarchy
- Keyboard navigation functional
- Skip link present
- Responsive at all breakpoints
- Valid HTML5
- JavaScript error handling

---

## Recommendations

**Quick Wins (< 30 min):**
1. Add missing alt attributes
2. Fix color contrast issues
3. Add form labels

**Medium Effort (1-2 hours):**
4. Implement focus management in modal
5. Add ARIA attributes to custom controls

**Complex (3+ hours):**
6. Refactor divs to semantic elements
7. Implement comprehensive keyboard navigation

---

## WCAG Compliance Summary

**Level A:** ❌ Fail
- Missing: 1.1.1 (Alt text), 2.1.1 (Keyboard)

**Level AA:** ❌ Fail
- Missing: 1.4.3 (Contrast), 3.3.2 (Labels)

**Level AAA:** Not evaluated (AA must pass first)

---

## Testing Recommendations

1. **Screen Reader:** Test with NVDA (free) or JAWS
2. **Keyboard Only:** Navigate page using only Tab/Enter/Escape
3. **Mobile:** Test on actual device or Chrome DevTools
4. **Automated:** Run axe DevTools or WAVE browser extension
```

## Tools Integration Recommendations

While this skill provides manual validation, recommend these tools for automation:

- **axe DevTools** - Browser extension for accessibility scanning
- **WAVE** - Web accessibility evaluation tool
- **Lighthouse** - Chrome DevTools audit
- **HTML Validator** - W3C Markup Validation Service
- **Contrast Checker** - WebAIM Color Contrast Checker

## Edge Cases & Special Considerations

### Single Page Applications (SPAs)
```javascript
// ✓ Announce route changes
function navigateTo(route) {
  // Update URL and content
  history.pushState({}, '', route);
  loadContent(route);

  // Announce to screen readers
  announcePageChange(route);
}

function announcePageChange(route) {
  const announcement = document.getElementById('route-announcer');
  announcement.textContent = `Navigated to ${route}`;
}
```

```html
<div id="route-announcer" role="status" aria-live="polite" class="sr-only"></div>
```

### Screen Reader Only Content
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Reduced Motion Preference
```css
/* ✓ Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Final Notes

- **Always test with real users** when possible
- **Accessibility is not optional** - it's required and beneficial for all users
- **Automated tools catch ~30-40%** of issues - manual testing essential
- **Fix issues at root cause** - don't just patch symptoms
- **Document exceptions** - if a rule can't be followed, document why
- **Iterate and improve** - accessibility is an ongoing process

This skill should be used:
- Before code review/pull requests
- After major UI changes
- Before production deployment
- Periodically on existing pages
- When user feedback suggests issues

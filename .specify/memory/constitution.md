<!--
Sync Impact Report:
Version: 1.0.0 → 1.0.0 (Initial ratification)
Modified Principles: N/A (Initial creation)
Added Sections: All core principles, governance structure
Removed Sections: None
Templates Requiring Updates:
  ✅ .specify/templates/plan-template.md - Constitution Check section aligns with agent specialization principles
  ✅ .specify/templates/spec-template.md - User stories support frontend-first design principle
  ✅ .specify/templates/tasks-template.md - Task categorization supports agent delegation workflow
Follow-up TODOs: None
-->

# SmartFront Constitution

## Core Principles

### I. Agent Specialization

Each agent has a single, well-defined responsibility:

- **Frontend Lead**: Orchestrates tasks, coordinates between specialized agents, and merges outputs into cohesive deliverables.
- **HTML Agent**: Generates semantic, accessible HTML only. No styling or behavior.
- **CSS Agent**: Provides responsive CSS styling only. No markup or logic.
- **JS Agent**: Handles interactivity and DOM events only. No markup or styling.
- **QA/Accessibility Agent**: Checks performance, responsiveness, and accessibility compliance.

**Rationale**: Single-responsibility agents reduce complexity, enable parallel execution, and ensure each output can be independently validated. Mixing concerns (e.g., HTML with inline styles) creates brittle, untestable artifacts.

### II. Frontend-First Design

All outputs MUST be testable in a browser environment.

- Every deliverable (HTML, CSS, JS) must be renderable and verifiable in a modern browser.
- Static HTML previews are required for visual validation during development.
- No backend-only artifacts without corresponding frontend representation.
- Performance and accessibility are first-class requirements, not afterthoughts.

**Rationale**: Browser-testability ensures outputs are production-ready and user-facing. It prevents over-engineering of unused backend logic and keeps the focus on what users actually experience.

### III. Iterative Refinement

Outputs are improved step-by-step through feedback loops.

- Initial versions prioritize working functionality over perfection.
- Feedback from QA/Accessibility agent drives subsequent iterations.
- Each iteration targets specific, measurable improvements (e.g., reduce CLS, improve ARIA labels).
- Regression prevention: changes must not break previously working features.

**Rationale**: Iterative development allows rapid value delivery while maintaining quality. Perfection-first approaches delay feedback and increase risk of building the wrong thing.

### IV. Semantic HTML Foundation

HTML must be semantic, accessible, and framework-agnostic.

- Use appropriate semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, etc.) instead of generic `<div>` containers.
- ARIA attributes required where native semantics are insufficient.
- HTML must be valid and pass W3C validation.
- No presentation-specific class names (e.g., `.red-button`); use functional names (e.g., `.btn-primary`).

**Rationale**: Semantic HTML improves accessibility, SEO, and maintainability. It provides a solid foundation that works even when CSS/JS fail to load.

### V. Responsive and Performance-Optimized CSS

CSS must support all viewport sizes and prioritize performance.

- Mobile-first responsive design using relative units (`rem`, `em`, `%`, `vw`/`vh`).
- Critical CSS inlined; non-critical CSS lazy-loaded or deferred.
- CSS must not cause layout shifts (CLS < 0.1).
- Minimize specificity conflicts; follow BEM or similar naming convention for maintainability.
- Use CSS custom properties (variables) for theme values.

**Rationale**: Responsive design is non-negotiable in 2025. Performance-optimized CSS directly impacts Core Web Vitals and user experience.

### VI. Progressive Enhancement for JavaScript

JavaScript enhances functionality but is not required for basic usability.

- Core content and navigation must work without JavaScript.
- JS adds interactivity (animations, dynamic updates, form validation) on top of working HTML.
- Minimize JS bundle size; lazy-load non-critical scripts.
- Avoid framework lock-in: prefer vanilla JS or minimal libraries unless complexity justifies framework overhead.

**Rationale**: Progressive enhancement ensures accessibility, resilience, and better performance. Users on slow connections or with JS disabled still get a functional experience.

### VII. Accessibility as a Requirement

Accessibility is mandatory, not optional.

- WCAG 2.1 Level AA compliance required for all deliverables.
- Keyboard navigation must work for all interactive elements.
- Color contrast ratios must meet WCAG standards (4.5:1 for normal text, 3:1 for large text).
- Screen reader testing required before marking tasks complete.
- Focus management and skip links required for navigation.

**Rationale**: Accessibility is a legal requirement in many jurisdictions and ensures inclusivity. Retrofitting accessibility is expensive; building it in from the start is cost-effective.

## Orchestration and Workflow

### Lead Agent Workflow

1. **Task Decomposition**: User request → Lead breaks into agent-specific tasks (HTML structure, CSS styling, JS behavior, QA validation).
2. **Parallel Execution**: Specialized agents execute tasks concurrently where dependencies allow.
3. **Integration**: Lead merges agent outputs into cohesive deliverable.
4. **QA Review**: QA/Accessibility agent validates integrated output.
5. **Iteration**: Feedback loops drive refinements until acceptance criteria met.

**Rationale**: Decomposition enables parallelism; integration ensures coherence; QA prevents regressions.

### Agent Communication Protocol

- Agents communicate via structured output files (e.g., `html-output.html`, `styles.css`, `script.js`).
- Lead agent provides context documents (design specs, user stories) to specialized agents.
- Agents must not make assumptions; if context is missing, request clarification from Lead.

**Rationale**: File-based communication is simple, auditable, and version-controllable. Explicit context prevents misalignment.

## Quality Gates

### HTML Quality Gate

- [ ] Valid HTML5 (W3C validator passes)
- [ ] Semantic elements used appropriately
- [ ] ARIA attributes present where needed
- [ ] No inline styles or scripts
- [ ] Passes accessibility audit (WAVE, axe, or similar)

### CSS Quality Gate

- [ ] Responsive across mobile, tablet, desktop viewports
- [ ] No layout shifts (CLS < 0.1)
- [ ] Critical CSS < 14KB (first render budget)
- [ ] Color contrast ratios meet WCAG AA
- [ ] CSS variables used for theme values

### JS Quality Gate

- [ ] Core functionality works without JS
- [ ] No global scope pollution
- [ ] Event listeners properly attached/removed
- [ ] Bundle size optimized (< 50KB gzipped for initial load)
- [ ] No console errors or warnings

### Integration Quality Gate

- [ ] All specialized outputs integrate without conflicts
- [ ] Browser testing across Chrome, Firefox, Safari
- [ ] Lighthouse score > 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] No regressions from previous iterations

## Constraints

### Technology Stack

- **HTML**: HTML5, semantic elements, ARIA where needed
- **CSS**: Modern CSS (Grid, Flexbox, Custom Properties), no preprocessors unless justified
- **JS**: ES6+, vanilla JS preferred, frameworks only for complex state management
- **Testing**: Browser DevTools, Lighthouse, WAVE/axe for accessibility
- **Version Control**: Git; atomic commits per agent output

### Performance Budgets

- **Time to Interactive (TTI)**: < 3.5s on 3G connection
- **First Contentful Paint (FCP)**: < 1.8s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Total Blocking Time (TBT)**: < 300ms
- **Initial HTML**: < 100KB uncompressed
- **Critical CSS**: < 14KB
- **Initial JS Bundle**: < 50KB gzipped

### Accessibility Requirements

- **WCAG Level**: 2.1 Level AA (minimum)
- **Keyboard Navigation**: Full support required
- **Screen Reader Testing**: Required with NVDA or JAWS
- **Color Contrast**: 4.5:1 (normal text), 3:1 (large text/graphics)
- **Focus Indicators**: Visible on all interactive elements

## Governance

### Constitution Authority

This constitution supersedes all other development practices. When conflicts arise, constitution principles take precedence.

### Amendment Process

1. **Proposal**: Any team member can propose amendments via written rationale.
2. **Review**: Architectural review for impact on existing principles and templates.
3. **Approval**: Requires consensus from project stakeholders.
4. **Migration**: Amendment includes migration plan for affected artifacts.
5. **Documentation**: Update version, ratification date, and propagate to dependent templates.

### Version Semantics

- **MAJOR**: Breaking changes to principles (e.g., removing agent specialization, changing quality gates)
- **MINOR**: New principles or sections added (e.g., new agent type, new quality gate)
- **PATCH**: Clarifications, wording improvements, non-semantic refinements

### Compliance Review

- All PRs must reference this constitution and demonstrate compliance with relevant principles.
- Quality gates must pass before merge.
- Complexity that violates principles (e.g., single agent handling multiple concerns) requires explicit justification and approval.

### Runtime Development Guidance

For day-to-day development instructions and agent-specific workflows, refer to `CLAUDE.md` in the repository root. This constitution defines **what** must be done; runtime guidance defines **how** to do it.

**Version**: 1.0.0 | **Ratified**: 2025-12-30 | **Last Amended**: 2025-12-30

# Component Library Reference

This document contains detailed examples of modern UI components using vanilla HTML, CSS, and JavaScript.

## Table of Contents

1. [Alert/Toast Notifications](#alerttoast-notifications)
2. [Tabs](#tabs)
3. [Dropdown Menu](#dropdown-menu)
4. [Image Gallery](#image-gallery)
5. [Progress Indicators](#progress-indicators)
6. [Tooltips](#tooltips)
7. [Tables](#tables)
8. [Breadcrumbs](#breadcrumbs)

## Alert/Toast Notifications

```html
<div class="toast-container" id="toastContainer"></div>
```

**CSS:**
```css
.toast-container {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.toast {
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  min-width: 300px;
  animation: slideIn 200ms ease-out;
  border-left: 4px solid var(--primary);
}

.toast.success { border-left-color: var(--success); }
.toast.warning { border-left-color: var(--warning); }
.toast.error { border-left-color: var(--error); }

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

**JavaScript:**
```javascript
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 200);
  }, 3000);
}

// Usage: showToast('Successfully saved!', 'success');
```

## Tabs

```html
<div class="tabs">
  <div class="tab-list" role="tablist">
    <button class="tab active" onclick="switchTab(event, 'tab1')" role="tab">Tab 1</button>
    <button class="tab" onclick="switchTab(event, 'tab2')" role="tab">Tab 2</button>
    <button class="tab" onclick="switchTab(event, 'tab3')" role="tab">Tab 3</button>
  </div>

  <div id="tab1" class="tab-panel active" role="tabpanel">
    <p>Content for tab 1</p>
  </div>
  <div id="tab2" class="tab-panel" role="tabpanel">
    <p>Content for tab 2</p>
  </div>
  <div id="tab3" class="tab-panel" role="tabpanel">
    <p>Content for tab 3</p>
  </div>
</div>
```

**CSS:**
```css
.tab-list {
  display: flex;
  border-bottom: 2px solid var(--gray-200);
  gap: 0;
}

.tab {
  background: none;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  font-weight: 500;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: color 200ms, border-color 200ms;
}

.tab:hover {
  color: var(--text-primary);
}

.tab.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

.tab-panel {
  display: none;
  padding: 1.5rem 0;
}

.tab-panel.active {
  display: block;
}
```

**JavaScript:**
```javascript
function switchTab(event, tabId) {
  // Remove active class from all tabs and panels
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  // Add active class to clicked tab and corresponding panel
  event.target.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}
```

## Dropdown Menu

```html
<div class="dropdown">
  <button class="dropdown-trigger" onclick="toggleDropdown(this)">
    Options ▼
  </button>
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">Profile</a>
    <a href="#" class="dropdown-item">Settings</a>
    <div class="dropdown-divider"></div>
    <a href="#" class="dropdown-item">Logout</a>
  </div>
</div>
```

**CSS:**
```css
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  background: white;
  border: 1px solid var(--border-color);
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  z-index: 100;
}

.dropdown-menu.active {
  display: block;
  animation: fadeIn 150ms ease-out;
}

.dropdown-item {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--text-primary);
  text-decoration: none;
  transition: background 150ms;
}

.dropdown-item:hover {
  background: var(--gray-50);
}

.dropdown-divider {
  height: 1px;
  background: var(--border-color);
  margin: 0.5rem 0;
}
```

**JavaScript:**
```javascript
function toggleDropdown(trigger) {
  const menu = trigger.nextElementSibling;
  menu.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.classList.remove('active');
    });
  }
});
```

## Image Gallery

```html
<div class="gallery">
  <div class="gallery-grid">
    <img src="image1.jpg" alt="Description" onclick="openLightbox(this.src)">
    <img src="image2.jpg" alt="Description" onclick="openLightbox(this.src)">
    <img src="image3.jpg" alt="Description" onclick="openLightbox(this.src)">
  </div>
</div>

<div id="lightbox" class="lightbox" onclick="closeLightbox()">
  <span class="lightbox-close">×</span>
  <img id="lightboxImage" src="" alt="">
</div>
```

**CSS:**
```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.gallery-grid img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 200ms;
}

.gallery-grid img:hover {
  transform: scale(1.05);
}

.lightbox {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  align-items: center;
  justify-content: center;
}

.lightbox.active {
  display: flex;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: white;
  font-size: 3rem;
  cursor: pointer;
}
```

**JavaScript:**
```javascript
function openLightbox(src) {
  document.getElementById('lightboxImage').src = src;
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}
```

## Progress Indicators

```html
<!-- Loading Spinner -->
<div class="spinner"></div>

<!-- Progress Bar -->
<div class="progress-bar">
  <div class="progress-fill" style="width: 60%"></div>
</div>
```

**CSS:**
```css
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--gray-200);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--gray-200);
  border-radius: 9999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--primary);
  transition: width 300ms ease;
}
```

## Tooltips

```html
<button class="tooltip-trigger" data-tooltip="Helpful information">
  Hover me
</button>
```

**CSS:**
```css
.tooltip-trigger {
  position: relative;
}

.tooltip-trigger::before {
  content: attr(data-tooltip);
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 0.75rem;
  background: #1f2937;
  color: white;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms;
}

.tooltip-trigger:hover::before {
  opacity: 1;
}

.tooltip-trigger::after {
  content: '';
  position: absolute;
  bottom: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #1f2937;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms;
}

.tooltip-trigger:hover::after {
  opacity: 1;
}
```

## Tables

```html
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td><button class="btn-sm">Edit</button></td>
      </tr>
    </tbody>
  </table>
</div>
```

**CSS:**
```css
.table-container {
  overflow-x: auto;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.table thead {
  background: var(--gray-50);
}

.table th {
  font-weight: 600;
  color: var(--text-primary);
}

.table td {
  color: var(--text-secondary);
}

.table tbody tr:hover {
  background: var(--gray-50);
}

.table tbody tr:last-child td {
  border-bottom: none;
}
```

## Breadcrumbs

```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li aria-current="page">Item Details</li>
  </ol>
</nav>
```

**CSS:**
```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  font-size: 0.875rem;
}

.breadcrumb li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumb li:not(:last-child)::after {
  content: '/';
  color: var(--text-secondary);
}

.breadcrumb a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 200ms;
}

.breadcrumb a:hover {
  color: var(--text-primary);
}

.breadcrumb li[aria-current='page'] {
  color: var(--text-primary);
  font-weight: 500;
}
```

// NexusFin Fintech Landing Page - JavaScript functionality

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const searchInput = document.querySelector('.navbar .search-container input'); // Updated to get navbar search
const featureCards = document.querySelectorAll('.feature-card');
const solutionCards = document.querySelectorAll('.solution-card');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dashboardPreview = document.querySelector('.dashboard-preview');

// Mobile Navigation Toggle
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('mobile-menu-open');

  // Add mobile search to the menu when it opens
  if (navMenu.classList.contains('active')) {
    addMobileSearchToMenu();
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('mobile-menu-open');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const isClickInsideNav = hamburger.contains(event.target) || navMenu.contains(event.target);
  if (!isClickInsideNav && navMenu.classList.contains('active')) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('mobile-menu-open');
  }
});

// Function to add mobile search to the menu
function addMobileSearchToMenu() {
  // Check if mobile search already exists
  if (navMenu.querySelector('.search-container-mobile')) {
    return;
  }

  // Create a wrapper for the mobile search elements
  const mobileSearchWrapper = document.createElement('div');
  mobileSearchWrapper.className = 'mobile-search-wrapper';

  // Create mobile search container
  const mobileSearchContainer = document.createElement('div');
  mobileSearchContainer.className = 'search-container-mobile';
  mobileSearchContainer.innerHTML = `
    <div class="search-icon">
      <i class="fas fa-search"></i>
    </div>
    <input type="text" id="mobileSearchInput" placeholder="Search...">
  `;

  // Create search suggestions
  const searchSuggestions = document.createElement('div');
  searchSuggestions.className = 'search-suggestions-mobile-menu';
  searchSuggestions.innerHTML = `
    <div class="search-suggestions-label">Popular searches:</div>
    <div class="search-suggestions-list">
      <span class="suggestion-mobile">Investment Portfolio</span>
      <span class="suggestion-mobile">Risk Analysis</span>
      <span class="suggestion-mobile">Market Trends</span>
      <span class="suggestion-mobile">Crypto Assets</span>
      <span class="suggestion-mobile">Tax Planning</span>
    </div>
  `;

  // Add the search elements to the wrapper
  mobileSearchWrapper.appendChild(mobileSearchContainer);
  mobileSearchWrapper.appendChild(searchSuggestions);

  // Insert the search wrapper at the beginning of the nav menu
  navMenu.insertBefore(mobileSearchWrapper, navMenu.firstChild);

  // Add event listener to the mobile search input
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  mobileSearchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performMobileSearch();
    }
  });

  // Add event listeners to mobile search suggestions
  const suggestionElements = navMenu.querySelectorAll('.suggestion-mobile');
  suggestionElements.forEach(suggestion => {
    suggestion.addEventListener('click', function() {
      const mobileSearchInput = document.getElementById('mobileSearchInput');
      if (mobileSearchInput) {
        mobileSearchInput.value = this.textContent;
        performMobileSearch();
      }
    });
  });
}

// Mobile search function
function performMobileSearch() {
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  const query = mobileSearchInput.value.trim();
  if (query) {
    alert(`Searching for: ${query}\n\nIn a real implementation, this would show relevant financial tools and insights.`);
  }
}

// Ctrl+K Search functionality
document.addEventListener('keydown', function(e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    if (searchInput) {
      searchInput.focus();
    }
  }
});

// Search functionality for navbar search
if (searchInput) {
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      if (query) {
        alert(`Searching for: ${query}\n\nIn a real implementation, this would show relevant financial tools and insights.`);
      }
    }
  });
}

function performSearch() {
  if (searchInput) {
    const query = searchInput.value.trim();
    if (query) {
      // In a real implementation, this would call an API
      // For now, we'll just show an alert and highlight relevant sections
      alert(`Searching for: ${query}\n\nIn a real implementation, this would show relevant financial tools and insights.`);

      // Add animation to search bar to indicate search
      searchInput.style.borderColor = '#10b981';
      setTimeout(() => {
        searchInput.style.borderColor = '#e2e8f0';
      }, 1000);
    }
  }
}

// Feature card hover animations
featureCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px)';
  });

  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Solution card animations
solutionCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
  });

  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Testimonial card animations
testimonialCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
  });

  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Dashboard preview animations
if (dashboardPreview) {
  setInterval(() => {
    const chartGraph = document.querySelector('.chart-graph');
    if (chartGraph) {
      chartGraph.style.opacity = '0.8';
      setTimeout(() => {
        chartGraph.style.opacity = '1';
      }, 300);
    }
  }, 3000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
    }
  });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.feature-card, .solution-card, .testimonial-card, .stat-item').forEach(el => {
  observer.observe(el);
});

// Button interactions
const allButtons = document.querySelectorAll('.btn');
allButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Form submission handling
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted! In a real implementation, this would process the form data.');
  });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  console.log('NexusFin Fintech Landing Page initialized');

  // Add initial animations
  setTimeout(() => {
    document.querySelectorAll('.feature-card, .solution-card').forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, 500);
});

// Stats counter animation
function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(stat => {
    const target = stat.textContent.replace(/[^\d.]/g, '');
    const isPercentage = stat.textContent.includes('%');
    const isDollar = stat.textContent.includes('$');

    let start = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / (target / increment);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }

      let displayValue = Math.floor(start);
      if (isPercentage) {
        displayValue += '%';
      } else if (isDollar) {
        displayValue = '$' + formatNumber(displayValue);
      }

      stat.textContent = displayValue;
    }, stepTime);
  });
}

// Format large numbers with commas
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Start stats animation when stats section is in view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateStats();
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
  statsObserver.observe(statsSection);
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    // Close mobile menu if open
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// Add focus management for accessibility
document.querySelectorAll('a, button, input, select, textarea').forEach(element => {
  element.addEventListener('focus', function() {
    this.style.outline = '2px solid #2563eb';
    this.style.outlineOffset = '2px';
  });

  element.addEventListener('blur', function() {
    this.style.outline = 'none';
  });
});
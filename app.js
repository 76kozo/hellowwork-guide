// Configuration
const CONFIG = {
  MOBILE_BREAKPOINT: 768,
  BACK_TO_TOP_THRESHOLD: 300,
  HEADER_OFFSET: 20,
  THROTTLE_DELAY: 100,
  OBSERVER_ROOT_MARGIN: '-20% 0px -70% 0px'
};

// Utility functions
const Utils = {
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  },

  isMobile() {
    return window.innerWidth <= CONFIG.MOBILE_BREAKPOINT;
  }
};

// Navigation Manager
class NavigationManager {
  constructor() {
    this.navToggle = document.getElementById('navToggle');
    this.primaryNav = document.getElementById('primaryNav');
    this.navLinks = document.querySelectorAll('.nav-list a');
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggle());
    }
    
    document.addEventListener('click', (event) => this.handleOutsideClick(event));
    window.addEventListener('resize', () => this.handleResize());
    
    this.navLinks.forEach(link => {
      link.addEventListener('click', (event) => this.handleLinkClick(event));
    });

    document.addEventListener('keydown', (event) => this.handleKeydown(event));
  }

  toggle() {
    const isOpen = this.primaryNav.classList.contains('open');
    this.setNavState(!isOpen);
  }

  setNavState(isOpen) {
    if (isOpen) {
      this.primaryNav.classList.add('open');
      this.navToggle.setAttribute('aria-expanded', 'true');
      this.navToggle.setAttribute('aria-label', 'メニューを閉じる');
    } else {
      this.primaryNav.classList.remove('open');
      this.navToggle.setAttribute('aria-expanded', 'false');
      this.navToggle.setAttribute('aria-label', 'メニューを開く');
    }
  }

  close() {
    this.setNavState(false);
  }

  handleOutsideClick(event) {
    if (!Utils.isMobile()) return;
    
    const isClickInsideNav = this.primaryNav.contains(event.target);
    const isClickOnToggle = this.navToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && this.primaryNav.classList.contains('open')) {
      this.close();
    }
  }

  handleResize() {
    if (!Utils.isMobile()) {
      this.close();
    }
  }

  handleLinkClick(event) {
    this.smoothScrollToSection(event);
    
    if (Utils.isMobile() && this.primaryNav.classList.contains('open')) {
      this.close();
    }
  }

  handleKeydown(event) {
    if (event.key === 'Escape' && this.primaryNav.classList.contains('open')) {
      this.close();
      this.navToggle.focus();
    }
  }

  smoothScrollToSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const headerHeight = document.querySelector('.site-header').offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight - CONFIG.HEADER_OFFSET;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  setActiveLink(sectionId) {
    this.navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-list a[href="#${sectionId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
}

// Scroll Manager
class ScrollManager {
  constructor() {
    this.backToTopButton = document.getElementById('backToTop');
    this.navigationManager = null;
    this.init();
  }

  init() {
    this.bindEvents();
    this.handleScroll();
  }

  bindEvents() {
    if (this.backToTopButton) {
      this.backToTopButton.addEventListener('click', () => this.scrollToTop());
    }

    const throttledScrollHandler = Utils.throttle(() => {
      this.handleScroll();
    }, CONFIG.THROTTLE_DELAY);
    
    window.addEventListener('scroll', throttledScrollHandler);
  }

  setNavigationManager(navigationManager) {
    this.navigationManager = navigationManager;
  }

  handleScroll() {
    this.updateBackToTopButton();
  }

  updateBackToTopButton() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > CONFIG.BACK_TO_TOP_THRESHOLD) {
      this.backToTopButton?.classList.add('show');
    } else {
      this.backToTopButton?.classList.remove('show');
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// Intersection Observer Manager
class IntersectionManager {
  constructor(navigationManager) {
    this.navigationManager = navigationManager;
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      this.setupObserver();
    }
  }

  setupObserver() {
    const observerOptions = {
      root: null,
      rootMargin: CONFIG.OBSERVER_ROOT_MARGIN,
      threshold: 0
    };
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          this.navigationManager.setActiveLink(sectionId);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.section').forEach(section => {
      this.observer.observe(section);
    });
  }
}

// FAQ Manager
class FAQManager {
  constructor() {
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    const faqSummaries = document.querySelectorAll('.faq-item summary');
    faqSummaries.forEach(summary => {
      summary.addEventListener('keydown', (event) => this.handleKeyboard(event));
    });
  }

  handleKeyboard(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const details = event.currentTarget.closest('details');
      if (details) {
        details.open = !details.open;
      }
    }
  }
}

// App initialization
class App {
  constructor() {
    this.navigationManager = null;
    this.scrollManager = null;
    this.intersectionManager = null;
    this.faqManager = null;
  }

  init() {
    this.createStyles();
    this.initializeManagers();
  }

  createStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .nav-list a.active {
        background-color: var(--color-primary);
        color: var(--color-btn-primary-text);
      }
      
      .nav-list a.active:hover {
        background-color: var(--color-primary-hover);
        color: var(--color-btn-primary-text);
      }
    `;
    document.head.appendChild(style);
  }

  initializeManagers() {
    this.navigationManager = new NavigationManager();
    this.scrollManager = new ScrollManager();
    this.scrollManager.setNavigationManager(this.navigationManager);
    this.intersectionManager = new IntersectionManager(this.navigationManager);
    this.faqManager = new FAQManager();
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
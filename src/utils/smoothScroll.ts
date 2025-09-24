/**
 * Smooth Scroll Utilities
 * Provides cross-browser smooth scrolling functionality with accessibility support
 */

// Check if user prefers reduced motion
const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Check if browser supports smooth scrolling
const supportsSmoothScroll = (): boolean => {
  return 'scrollBehavior' in document.documentElement.style;
};

/**
 * Smooth scroll to element with offset for fixed header
 * @param element - Target element to scroll to
 * @param offset - Additional offset in pixels (default: 96px for fixed header)
 * @param duration - Animation duration in milliseconds (default: 800ms)
 */
export const scrollToElement = (
  element: HTMLElement | null,
  offset: number = 96,
  duration: number = 800
): void => {
  if (!element) return;

  // Respect user's motion preferences
  if (prefersReducedMotion()) {
    element.scrollIntoView({ block: 'start' });
    return;
  }

  const targetPosition = element.offsetTop - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  // Easing function for smooth animation
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const animation = (currentTime: number): void => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  // Use native smooth scrolling if supported and user doesn't prefer reduced motion
  if (supportsSmoothScroll() && !prefersReducedMotion()) {
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  } else {
    // Fallback to JavaScript animation
    requestAnimationFrame(animation);
  }
};

/**
 * Smooth scroll to element by ID
 * @param id - Element ID to scroll to
 * @param offset - Additional offset in pixels
 * @param duration - Animation duration in milliseconds
 */
export const scrollToId = (
  id: string,
  offset: number = 96,
  duration: number = 800
): void => {
  const element = document.getElementById(id);
  scrollToElement(element, offset, duration);
};

/**
 * Smooth scroll to top of page
 * @param duration - Animation duration in milliseconds
 */
export const scrollToTop = (duration: number = 800): void => {
  // Respect user's motion preferences
  if (prefersReducedMotion()) {
    window.scrollTo(0, 0);
    return;
  }

  const startPosition = window.pageYOffset;
  let startTime: number | null = null;

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const animation = (currentTime: number): void => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition * (1 - ease));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  // Use native smooth scrolling if supported
  if (supportsSmoothScroll() && !prefersReducedMotion()) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    requestAnimationFrame(animation);
  }
};

/**
 * Initialize smooth scroll for all anchor links on the page
 */
export const initializeSmoothScroll = (): void => {
  // Handle all anchor links that point to elements on the same page
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      e.preventDefault();
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        scrollToElement(targetElement);
        
        // Update URL without triggering scroll
        if (history.pushState) {
          history.pushState(null, '', href);
        }
        
        // Set focus to target element for accessibility
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus();
      }
    });
  });
};

/**
 * Scroll spy functionality to highlight active navigation items
 * @param navItems - Array of navigation item selectors
 * @param sections - Array of section selectors to observe
 * @param offset - Offset for determining active section
 */
export const initializeScrollSpy = (
  navItems: string[],
  sections: string[],
  offset: number = 100
): void => {
  const navElements = navItems.map(selector => document.querySelector(selector));
  const sectionElements = sections.map(selector => document.querySelector(selector));

  const updateActiveNav = (): void => {
    const scrollPosition = window.pageYOffset + offset;
    
    let activeIndex = -1;
    
    sectionElements.forEach((section, index) => {
      if (section && section instanceof HTMLElement) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          activeIndex = index;
        }
      }
    });
    
    // Update navigation active states
    navElements.forEach((nav, index) => {
      if (nav && nav instanceof HTMLElement) {
        if (index === activeIndex) {
          nav.classList.add('active');
        } else {
          nav.classList.remove('active');
        }
      }
    });
  };

  // Throttle scroll events for performance
  let ticking = false;
  const handleScroll = (): void => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll);
  updateActiveNav(); // Initial call
};

/**
 * Add scroll offset class to all sections for proper spacing with fixed header
 */
export const addScrollOffsets = (): void => {
  const sections = document.querySelectorAll('section[id], div[id], article[id]');
  sections.forEach(section => {
    section.classList.add('scroll-offset');
  });
};

/**
 * Intersection Observer for fade-in animations on scroll
 */
export const initializeScrollAnimations = (): void => {
  // Respect user's motion preferences
  if (prefersReducedMotion()) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('smooth-scroll-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements that should animate on scroll
  const animateElements = document.querySelectorAll(
    '.card, .testimonial, .service-item, .portfolio-item, .blog-post'
  );
  
  animateElements.forEach(element => {
    observer.observe(element);
  });
};
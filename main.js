/**
 * Graphic Designer Portfolio - Interactive Engine
 * Farhan Ahmed | Lead Graphic Designer & Brand Strategist
 */

// Portfolio Detailed Database
const PROJECTS_DATA = {
  'web_dev_project': {
    title: "Interactive SaaS & Modern Web Application",
    client: "NovaTech Solutions",
    year: "2025",
    category: "Web Development",
    image: "project images/banner 2.jpg",
    overview: "Modern, responsive single-page web application featuring custom CSS design systems, dynamic state management, glassmorphism UI, and lightning-fast performance.",
    deliverables: ["Responsive Web App", "Interactive UI Dashboard", "REST API Integration", "SEO & Speed Optimization"],
    palette: ["#38BDF8", "#FF003C", "#0F172A", "#FFFFFF"],
    tools: ["HTML5 / CSS3", "JavaScript", "React", "Node.js"],
    stats: "99.8% Lighthouse Performance Score"
  },
  'android_app_project': {
    title: "Native Android Mobile Application",
    client: "Pulse Mobile Suite",
    year: "2025",
    category: "Android Apps",
    image: "project images/dark logo.jpg",
    overview: "High-performance native Android application engineered with Kotlin, Android SDK, Material Design 3 guidelines, offline-first sync, and smooth animations.",
    deliverables: ["APK & AAB Bundles", "Native Android UI/UX", "Firebase Backend Integration", "Google Play Store Ready"],
    palette: ["#38BDF8", "#EF4444", "#07090E", "#F8FAFC"],
    tools: ["Android Studio", "Kotlin / Java", "Jetpack Compose", "Material Design"],
    stats: "Over 20,000+ Active Android Installs"
  },
  'dragon_logo': {
    title: "Black & Red Dragon Gaming Emblem",
    client: "Dragon Gaming Company",
    year: "2025",
    category: "Gaming Logos",
    image: "project images/Black and Red Dragon Gaming Company Logo.png",
    overview: "High-impact esports dragon mascot emblem featuring aggressive geometric linework, bold red and black vector contrast, and scalable branding assets.",
    deliverables: ["Vector Mascot Emblem", "Esports Jersey Vector", "Streaming Overlay Package"],
    palette: ["#FF003C", "#EF4444", "#0A0D14", "#FFFFFF"],
    tools: ["Adobe Illustrator", "Photoshop"],
    stats: "Official gaming org mascot design"
  },
  'poster_1': {
    title: "Promotional Poster Graphic Series",
    client: "Creative Events Studio",
    year: "2025",
    category: "Typography & Editorial",
    image: "project images/poster 1.jpg",
    overview: "High-impact event promotional poster featuring bold typography, dynamic visual hierarchy, and vibrant color composition.",
    deliverables: ["A1/A0 Print Poster", "Social Media Key Visuals", "Digital Billboard Graphics"],
    palette: ["#FF003C", "#38BDF8", "#EF4444", "#0A0D14"],
    tools: ["Adobe Photoshop", "Illustrator"],
    stats: "Featured across regional campaign"
  },
  'ed_logo': {
    title: "ED Monogram Emblem",
    client: "ED Brand Enterprise",
    year: "2025",
    category: "Branding & Identity",
    image: "project images/ED LOGO.jpg",
    overview: "Bespoke monogram emblem logo incorporating elegant lettermark geometry and premium visual brand elements.",
    deliverables: ["Monogram Logo Mark", "Vector Asset Kit", "Brand Guidelines PDF"],
    palette: ["#EF4444", "#38BDF8", "#07090E", "#F8FAFC"],
    tools: ["Adobe Illustrator", "Figma"],
    stats: "Full brand identity rollout"
  },
  'logo_png': {
    title: "Modern Vector Brandmark",
    client: "Apex Enterprise",
    year: "2024",
    category: "Branding & Identity",
    image: "project images/LOGO.png",
    overview: "Clean, modern vector logo design engineered for high versatility across digital app icons, print collateral, and merchandise.",
    deliverables: ["Vector Logo Master", "Brand Mark Variants", "Iconography System"],
    palette: ["#38BDF8", "#FF003C", "#1E293B", "#FFFFFF"],
    tools: ["Adobe Illustrator"],
    stats: "Universal brand vector system"
  },
  'banner_2': {
    title: "Promotional Banner Key Visual",
    client: "Vanguard Marketing",
    year: "2025",
    category: "Typography & Editorial",
    image: "project images/banner 2.jpg",
    overview: "Large-format promotional banner graphic featuring strong visual storytelling, balanced typography grid, and engaging call-to-action.",
    deliverables: ["Web Banner Display", "Social Campaign Graphic", "Print Banner Specs"],
    palette: ["#EF4444", "#38BDF8", "#0F172A", "#F8FAFC"],
    tools: ["Adobe Photoshop", "Illustrator"],
    stats: "High click-through campaign graphic"
  },
  'dark_logo': {
    title: "Dark Theme Emblem & Identity",
    client: "Nocturne Studio",
    year: "2024",
    category: "Branding & Identity",
    image: "project images/dark logo.jpg",
    overview: "Dark mode brand identity emblem showcasing metallic highlights, deep contrast backdrop, and luxury typography.",
    deliverables: ["Dark Mode Emblem", "Social Avatar Kit", "Brand Stationery"],
    palette: ["#07090E", "#FF003C", "#38BDF8", "#94A3B8"],
    tools: ["Adobe Illustrator", "Photoshop"],
    stats: "Primary dark mode visual identity"
  },
  's_logo': {
    title: "Stylized Lettermark 'S' Logo",
    client: "Synergy Tech",
    year: "2025",
    category: "Branding & Identity",
    image: "project images/s logo.jpg",
    overview: "Custom geometric lettermark 'S' designed with fluid curves, modern balance, and distinctive brand recognition.",
    deliverables: ["Lettermark Icon", "Favicon & App Icon", "Brand Color Specs"],
    palette: ["#38BDF8", "#EF4444", "#0F172A", "#FFFFFF"],
    tools: ["Adobe Illustrator"],
    stats: "Featured monogram design"
  },
  'logo_bus': {
    title: "Transit & Fleet Brand Application",
    client: "Metro Transport",
    year: "2024",
    category: "Branding & Identity",
    image: "project images/logo bus.jpg",
    overview: "Real-world vehicle fleet mockup showing logo application on commercial transit, bus wraps, and corporate transportation.",
    deliverables: ["Vehicle Wrap Vector", "Fleet Branding Guide", "Mockup Renders"],
    palette: ["#FF003C", "#38BDF8", "#1E293B", "#F8FAFC"],
    tools: ["Adobe Illustrator", "Photoshop"],
    stats: "Deployed across city transit fleet"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initPortfolioFilters();
  initProjectModals();
  initContactForm();
  initCVModal();
});

/* -------------------------------------------------------------------------- */
/* Copy Hex Code Utility
/* -------------------------------------------------------------------------- */
window.copyHex = function(hex) {
  navigator.clipboard.writeText(hex).then(() => {
    showToast(`Color ${hex} copied to clipboard!`);
  }).catch(() => {
    showToast(`Color code: ${hex}`);
  });
};

/* -------------------------------------------------------------------------- */
/* Mobile Menu Toggle & Responsive Navigation
/* -------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Close menu when link clicked
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }
}

/* -------------------------------------------------------------------------- */
/* Navbar Smooth Scrolling & Active Section Tracker
/* -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth scroll links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Active section scroll spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Portfolio Filter Category Tabs
/* -------------------------------------------------------------------------- */
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

/* -------------------------------------------------------------------------- */
/* Project Detail Lightbox Modal
/* -------------------------------------------------------------------------- */
function initProjectModals() {
  const modalBackdrop = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  portfolioCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project-id');
      const data = PROJECTS_DATA[projectId];
      if (!data) return;

      // Populate Modal Fields
      document.getElementById('modalTitle').textContent = data.title;
      document.getElementById('modalClient').textContent = `Client: ${data.client} (${data.year})`;
      document.getElementById('modalCategory').textContent = data.category;
      document.getElementById('modalOverview').textContent = data.overview;
      document.getElementById('modalStats').textContent = data.stats;
      document.getElementById('modalBanner').src = data.image;

      // Render Deliverables List
      const delivContainer = document.getElementById('modalDeliverables');
      delivContainer.innerHTML = data.deliverables.map(item => `<li><i class="fas fa-check-circle" style="color: var(--accent-cyan);"></i> ${item}</li>`).join('');

      // Render Tools Tags
      const toolsContainer = document.getElementById('modalTools');
      toolsContainer.innerHTML = data.tools.map(tool => `<span class="card-tag">${tool}</span>`).join(' ');

      // Render Palette Swatches
      const paletteContainer = document.getElementById('modalPalette');
      paletteContainer.innerHTML = data.palette.map(hex => `
        <div class="swatch-item" onclick="copyHex('${hex}')">
          <div class="swatch-color" style="background: ${hex};"></div>
          <div class="swatch-info">
            <span class="swatch-hex">${hex}</span>
            <i class="far fa-copy" style="font-size: 0.8rem; color: var(--text-muted);"></i>
          </div>
        </div>
      `).join('');

      // Open Modal
      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  modalCloseBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

/* -------------------------------------------------------------------------- */
/* Interactive Contact Form & Budget Calculator
/* -------------------------------------------------------------------------- */
function initContactForm() {
  const serviceChips = document.querySelectorAll('.service-chip');
  const budgetRange = document.getElementById('budgetRange');
  const budgetDisplay = document.getElementById('budgetValue');
  const contactForm = document.getElementById('contactForm');

  // Service Selector Toggle
  serviceChips.forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
    });
  });

  // Budget Range Display
  if (budgetRange && budgetDisplay) {
    budgetRange.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      if (val >= 1000) {
        budgetDisplay.textContent = '$1,000+';
      } else {
        budgetDisplay.textContent = `$${val.toLocaleString()}`;
      }
    });
  }

  // Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('senderName').value;
      
      showToast(`Thank you ${name}! Your inquiry has been sent to Farhan Ahmed.`);
      contactForm.reset();
      serviceChips.forEach(chip => chip.classList.remove('selected'));
      if (budgetDisplay) budgetDisplay.textContent = '$250';
    });
  }
}

/* -------------------------------------------------------------------------- */
/* Interactive CV Modal Popup
/* -------------------------------------------------------------------------- */
function initCVModal() {
  const cvBtn = document.getElementById('openCvModalBtn');
  const cvModal = document.getElementById('cvModal');
  const cvCloseBtn = document.getElementById('cvModalCloseBtn');

  if (cvBtn && cvModal) {
    cvBtn.addEventListener('click', () => {
      cvModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (cvCloseBtn && cvModal) {
    cvCloseBtn.addEventListener('click', () => {
      cvModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) {
        cvModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
}

/* -------------------------------------------------------------------------- */
/* Toast Notification Utility
/* -------------------------------------------------------------------------- */
function showToast(message) {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-sparkles" style="color: var(--accent-cyan);"></i> <span>${message}</span>`;
  
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

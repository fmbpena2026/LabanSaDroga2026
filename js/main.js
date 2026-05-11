// ===========================
// NAVBAR: Sticky + Scroll Effect
// ===========================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ===========================
// SMOOTH SCROLL for nav links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===========================
// SCROLL REVEAL ANIMATIONS
// ===========================
const aosElements = document.querySelectorAll('[data-aos]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

aosElements.forEach(el => observer.observe(el));

// Also animate section children on scroll
const animateSections = () => {
  const cards = document.querySelectorAll(
    '.penalty-card, .prevent-card, .step-item, .family-step, .right-card, .hotline-item'
  );
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 60);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    revealObserver.observe(card);
  });
};

// Run after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', animateSections);
} else {
  animateSections();
}

// ===========================
// ACTIVE NAV LINK HIGHLIGHT
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.style.color = 'var(--pnp-gold)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ===========================
// LOGO FALLBACK HELPER
// ===========================
function createFallbackLogo(label) {
  const div = document.createElement('div');
  div.style.cssText = `
    width:72px;height:72px;border-radius:50%;
    background:linear-gradient(135deg,#003087,#0047ba);
    border:3px solid #c9a227;display:flex;align-items:center;
    justify-content:center;font-family:'Oswald',sans-serif;
    font-size:12px;font-weight:700;color:#c9a227;
    letter-spacing:0.05em;text-align:center;line-height:1.2;
    box-shadow:0 0 16px rgba(201,162,39,0.4);
  `;
  div.textContent = label;
  return div;
}

// Apply to all logo images that fail to load
document.querySelectorAll('.hero-logo, .nav-logo, .footer-logo').forEach(img => {
  img.addEventListener('error', function() {
    const size = img.classList.contains('nav-logo') ? '36px' : 
                 img.classList.contains('footer-logo') ? '56px' : '72px';
    const fontSize = img.classList.contains('nav-logo') ? '9px' :
                     img.classList.contains('footer-logo') ? '10px' : '12px';
    const label = img.alt || 'PNP';
    const div = document.createElement('div');
    div.style.cssText = `
      width:${size};height:${size};border-radius:50%;
      background:linear-gradient(135deg,#003087,#0047ba);
      border:2px solid #c9a227;display:flex;align-items:center;
      justify-content:center;font-family:'Oswald',sans-serif;
      font-size:${fontSize};font-weight:700;color:#c9a227;
      letter-spacing:0.03em;text-align:center;line-height:1.2;
      flex-shrink:0;
    `;
    div.textContent = label;
    img.replaceWith(div);
  });
});

// ===========================
// REPORT BUTTON PLACEHOLDER
// ===========================
document.getElementById('btnPDEA').addEventListener('click', function(e) {
  if (this.getAttribute('href') === '#') {
    e.preventDefault();
    showToast('PDEA link – paste your link in the href of #btnPDEA');
  }
});
document.getElementById('btnAnon').addEventListener('click', function(e) {
  if (this.getAttribute('href') === '#') {
    e.preventDefault();
    showToast('Anonymous Tip link – paste your link in the href of #btnAnon');
  }
});

function showToast(msg) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);
    background:#001a4d;color:#f0c94a;padding:12px 24px;border-radius:8px;
    border:1px solid #c9a227;font-family:'Barlow Condensed',sans-serif;
    font-size:14px;font-weight:600;letter-spacing:0.04em;z-index:9999;
    opacity:0;transition:all 0.3s ease;max-width:90vw;text-align:center;
    box-shadow:0 8px 24px rgba(0,0,0,0.3);
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

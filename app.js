// --- Configuration ---
const CAFE_WHATSAPP_NUMBER = '1234567890'; // Replace with the actual cafe WhatsApp number (with country code, e.g., '15551234567')

document.addEventListener('DOMContentLoaded', () => {
  // --- Render Menu Items ---
  const menuGrid = document.getElementById('menuGrid');
  let activeTab = 'all';
  let searchQuery = '';
  let dietaryFilter = 'all';

  function getBadgeHTML(isVeg, name = '') {
    const lowerName = name.toLowerCase();
    const isEgg = lowerName.includes('egg') || lowerName.includes('omelette');
    
    let badgeClass = 'badge-nonveg';
    let badgeTitle = 'Non-Vegetarian';
    if (isVeg) {
      badgeClass = 'badge-veg';
      badgeTitle = 'Vegetarian';
    } else if (isEgg) {
      badgeClass = 'badge-egg';
      badgeTitle = 'Egg';
    }
    
    return `
      <span class="veg-non-veg-badge ${badgeClass}" title="${badgeTitle}">
        <span class="badge-dot"></span>
      </span>
    `;
  }

  function renderMenu() {
    if (!menuGrid || typeof MENU_PAGES === 'undefined') return;

    let html = '';

    MENU_PAGES.forEach(page => {
      let pageHasVisibleItems = false;
      let columnsHTML = '';

      page.columns.forEach(column => {
        let columnHasVisibleItems = false;
        let sectionsHTML = '';

        column.sections.forEach(section => {
          let sectionHasVisibleItems = false;
          let itemsHTML = '';

          // Check tab filter
          const sectionMatchesTab = activeTab === 'all' || section.category === activeTab;
          if (!sectionMatchesTab) return;

          section.items.forEach(item => {
            // Check search match
            const matchesSearch = item.name.toLowerCase().includes(searchQuery);
            if (!matchesSearch) return;

            // Check dietary filter match
            let isItemVeg = true;
            if (Array.isArray(item.isVeg)) {
              isItemVeg = item.isVeg.every(v => v);
            } else {
              isItemVeg = item.isVeg;
            }
            
            const lowerName = item.name.toLowerCase();
            const isItemEgg = lowerName.includes('egg') || lowerName.includes('omelette');
            
            let matchesDiet = true;
            if (dietaryFilter === 'veg') {
              matchesDiet = Array.isArray(item.isVeg) ? item.isVeg.some(v => v) : item.isVeg;
            } else if (dietaryFilter === 'egg') {
              matchesDiet = isItemEgg;
            } else if (dietaryFilter === 'nonveg') {
              const hasNonVegVariant = Array.isArray(item.isVeg) ? item.isVeg.some(v => !v) : !item.isVeg;
              matchesDiet = hasNonVegVariant && !isItemEgg;
            }

            if (!matchesDiet) return;

            sectionHasVisibleItems = true;
            columnHasVisibleItems = true;
            pageHasVisibleItems = true;

            const isHighlighted = item.isSignature ? 'highlighted' : '';
            
            // Generate prices html
            let pricesHTML = '';
            let showPriceBlock = false;
            if (item.prices) {
              showPriceBlock = true;
              pricesHTML = item.prices.map((p, idx) => {
                if (p === null) {
                  return `<span class="empty-price">-</span>`;
                }
                const isVegItem = Array.isArray(item.isVeg) ? item.isVeg[idx] : item.isVeg;
                return `<span class="${isVegItem ? '' : 'accent-price'}">₹${p}</span>`;
              }).join('');
            } else if (item.price !== undefined && item.price !== null) {
              showPriceBlock = true;
              pricesHTML = `<span class="${item.isVeg ? '' : 'accent-price'}">₹${item.price}</span>`;
            }

            // Generate badge(s)
            const badgeHTML = getBadgeHTML(isItemVeg, item.name);

            itemsHTML += `
              <div class="menu-item-row ${isHighlighted}">
                <span class="menu-item-name">
                  ${badgeHTML}
                  ${item.name}
                </span>
                ${showPriceBlock ? `
                  <span class="menu-item-dots"></span>
                  <div class="menu-item-prices">
                    ${pricesHTML}
                  </div>
                ` : ''}
              </div>
            `;
          });

          if (sectionHasVisibleItems) {
            let headersHTML = '';
            if (section.headers) {
              headersHTML = `
                <div class="menu-column-headers">
                  ${section.headers.map(h => `<span>${h}</span>`).join('')}
                </div>
              `;
            }
            sectionsHTML += `
              <div class="menu-section">
                <div class="menu-section-header">
                  <h3 class="menu-section-title">${section.title}</h3>
                  ${headersHTML}
                </div>
                <div class="menu-items-list">
                  ${itemsHTML}
                </div>
              </div>
            `;
          }
        });

        if (columnHasVisibleItems) {
          columnsHTML += `
            <div class="menu-column">
              ${sectionsHTML}
            </div>
          `;
        }
      });

      if (pageHasVisibleItems) {
        html += `
          <div class="menu-page">
            <div class="menu-page-header">
              <h2 class="menu-page-title">${page.title}</h2>
            </div>
            <div class="menu-columns">
              ${columnsHTML}
            </div>
          </div>
        `;
      }
    });

    menuGrid.innerHTML = html || `<div class="cart-empty-message" style="margin-top: 2rem;"><i data-lucide="search"></i><p>No items match your search.</p></div>`;
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // Render menu items
  renderMenu();

  // Initialize Lucide Icons (handles all icons including newly rendered ones)
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // --- Scroll Effects & Navigation Highlights ---
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    // Header background change
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll active link highlight
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // --- Mobile Navigation Menu Toggle ---
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const navMenu = document.getElementById('navMenu');

  if (menuToggleBtn && navMenu) {
    menuToggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = menuToggleBtn.querySelector('i');
      if (navMenu.classList.contains('open')) {
        icon.setAttribute('data-lucide', 'x');
      } else {
        icon.setAttribute('data-lucide', 'menu');
      }
      lucide.createIcons();
    });

    // Close menu when clicking links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = menuToggleBtn.querySelector('i');
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
      });
    });
  }

  // --- Menu Category Filtering & Live Search ---
  const tabButtons = document.querySelectorAll('.menu-tab-btn');
  const menuSearch = document.getElementById('menuSearch');

  function selectCategory(category) {
    activeTab = category;
    
    // Sync tab buttons
    tabButtons.forEach(b => {
      if (b.getAttribute('data-tab') === category) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    renderMenu();
  }

  // Tab switcher hook
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectCategory(btn.getAttribute('data-tab'));
    });
  });

  // Search input hook
  if (menuSearch) {
    menuSearch.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderMenu();
    });
  }

  // Dietary filter hook
  const dietaryButtons = document.querySelectorAll('.dietary-btn');
  dietaryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      dietaryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      dietaryFilter = btn.getAttribute('data-diet');
      renderMenu();
    });
  });

  // --- Cart Option Removed ---

  // --- Table Booking / Reservation Form ---
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    // Set default date to today
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
      dateInput.value = today;
    }

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('bookingName').value;
      const guests = document.getElementById('bookingGuests').value;
      const area = document.getElementById('bookingArea').value;
      const date = document.getElementById('bookingDate').value;
      const time = document.getElementById('bookingTime').value;
      const notes = document.getElementById('bookingNotes').value;

      const bookingMessage = `*SUBURB CAFE — Table Booking*\n\n` +
        `Hi Suburb Cafe, I'd like to book a table reservation:\n\n` +
        `*Name:* ${name}\n` +
        `*Guests:* ${guests}\n` +
        `*Seating Area:* ${area}\n` +
        `*Date:* ${date}\n` +
        `*Time:* ${time}\n` +
        `*Dietary/Notes:* ${notes || 'None'}\n\n` +
        `Please let me know if this slot is available. Thank you!`;

      const encodedMessage = encodeURIComponent(bookingMessage);
      const whatsappUrl = `https://wa.me/${CAFE_WHATSAPP_NUMBER}?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
    });
  }

  // --- Instagram Lightbox Modal ---
  const instaItems = document.querySelectorAll('.insta-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

  if (lightbox && lightboxImg && lightboxCloseBtn) {
    instaItems.forEach(item => {
      item.addEventListener('click', () => {
        const imgSrc = item.getAttribute('data-src');
        lightboxImg.setAttribute('src', imgSrc);
        lightboxImg.setAttribute('alt', item.querySelector('img').getAttribute('alt'));
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock scrolling
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = ''; // Unlock scrolling
    };

    lightboxCloseBtn.addEventListener('click', closeLightbox);
    
    // Close on click backdrop
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // --- Newsletter Form Submission (Simulation) ---
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input').value;
      alert(`Thank you for subscribing to The Dispatch! We've registered ${email} for coffee releases.`);
      newsletterForm.reset();
    });
  }

  // --- Leaflet Map Setup with Custom Marker & Dark Filter ---
  const mapContainer = document.getElementById('map');
  if (mapContainer && typeof L !== 'undefined') {
    // Coordinates for Suburb Cafe – Opposite 2nd Gate of Al Ameen Hospital, Athani Road, Vijayapura
    const cafeCoords = [16.8302, 75.7100];
    
    const map = L.map('map', {
      center: cafeCoords,
      zoom: 16,
      scrollWheelZoom: false
    });

    // Standard OpenStreetMap tiles (the dark filter is applied in CSS via filter: invert(...) etc.)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Custom Marker Graphic (Warm Gold Color theme)
    const customIcon = L.divIcon({
      className: 'custom-map-marker',
      html: `<div style="background-color: var(--accent); width: 14px; height: 14px; border-radius: 50%; border: 3px solid var(--bg-primary); box-shadow: 0 0 10px var(--accent);"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    const marker = L.marker(cafeCoords, { icon: customIcon }).addTo(map);
    
    // Custom popup
    marker.bindPopup(`
      <div style="padding: 0.25rem;">
        <h4 style="margin: 0 0 0.25rem 0; font-family: var(--font-heading); font-size: 1.05rem; color: var(--accent);">SUBURB Cafe</h4>
        <p style="margin: 0; font-family: var(--font-body); font-size: 0.85rem; color: var(--text-secondary);">Opp. 2nd Gate, Al Ameen Hospital<br>Athani Road, Vijayapura – 586108</p>
      </div>
    `).openPopup();
  }

  // --- Reviews & Feedback System ---
  const INITIAL_REVIEWS = [
    {
      name: "Rohit Kulkarni",
      rating: 5,
      date: "May 2026",
      source: "Google Review",
      comment: "A truly quiet retreat in Vijayapura. The specialty coffee roast score of 88+ is evident in every sip of their light roast pour-over. Cozy minimalist atmosphere and excellent hospitality."
    },
    {
      name: "Megha Patil",
      rating: 5,
      date: "April 2026",
      source: "Google Review",
      comment: "The stoneground Uji matcha is velvety smooth, and the strawberry tres leches is to die for! Suburb Cafe brings a high-end editorial cafe feel that this town was missing. Strongly recommend."
    },
    {
      name: "Arjun S.",
      rating: 4,
      date: "March 2026",
      source: "Google Review",
      comment: "Great quality of food and drinks. The signature crispy chicken lollipops are amazing and the paneer majestic is super flavorful. Friendly staff and peaceful acoustics."
    }
  ];

  let customReviews = JSON.parse(localStorage.getItem('suburb_custom_reviews')) || [];
  
  function getStarsHTML(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.round(rating)) {
        stars += `<i data-lucide="star" style="fill: var(--accent); color: var(--accent);"></i>`;
      } else {
        stars += `<i data-lucide="star" class="empty" style="color: var(--text-muted);"></i>`;
      }
    }
    return stars;
  }

  function renderReviews() {
    const reviewsList = document.getElementById('reviewsList');
    if (!reviewsList) return;

    const allReviews = [...INITIAL_REVIEWS, ...customReviews];
    
    // Show custom reviews (newest first) followed by initial reviews
    const displayReviews = [...customReviews].reverse().concat(INITIAL_REVIEWS);

    reviewsList.innerHTML = displayReviews.map(r => `
      <div class="review-item">
        <div class="review-item-header">
          <div class="review-item-author">
            <h4>${r.name}</h4>
            <div class="review-item-meta">
              <span class="review-item-source">${r.source || 'Verified Guest'}</span>
              <span>•</span>
              <span>${r.date || 'Just now'}</span>
            </div>
          </div>
          <div class="review-item-stars">
            ${getStarsHTML(r.rating)}
          </div>
        </div>
        <div class="review-item-body">
          <p>"${r.comment}"</p>
        </div>
      </div>
    `).join('');

    // Update Average Rating display card
    const totalRating = allReviews.reduce((sum, r) => sum + r.rating, 0);
    const avgRating = (totalRating / allReviews.length).toFixed(1);
    
    const avgRatingEl = document.getElementById('avgRating');
    const avgStarsEl = document.getElementById('avgStars');
    const reviewsCountEl = document.getElementById('reviewsCount');

    if (avgRatingEl) avgRatingEl.textContent = avgRating;
    if (avgStarsEl) avgStarsEl.innerHTML = getStarsHTML(parseFloat(avgRating));
    if (reviewsCountEl) {
      reviewsCountEl.textContent = `Based on ${139 + customReviews.length} Google & guest reviews`;
    }

    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // Hook up feedback form submission
  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('feedbackName').value.trim();
      const checkedRating = document.querySelector('input[name="rating"]:checked');
      if (!checkedRating) return;
      const ratingVal = parseInt(checkedRating.value);
      const comment = document.getElementById('feedbackMessage').value.trim();
      
      const newReview = {
        name: name,
        rating: ratingVal,
        date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        source: "Verified Guest",
        comment: comment
      };

      customReviews.push(newReview);
      localStorage.setItem('suburb_custom_reviews', JSON.stringify(customReviews));
      
      // Reset form and re-render
      feedbackForm.reset();
      
      // Reset selected stars visual state
      const starInputs = feedbackForm.querySelectorAll('input[name="rating"]');
      starInputs.forEach(input => input.checked = false);

      renderReviews();

      alert("Thank you for your feedback! Your review has been added successfully.");
    });
  }

  // Initial reviews render
  renderReviews();

  // --- Intersection Observer for Reveal-on-Scroll Animations ---
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    }, {
      threshold: 0.01,
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters fully
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('revealed'));
  }
});

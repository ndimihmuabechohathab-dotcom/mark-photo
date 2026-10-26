```javascript
"use strict";

/*
====================================================
PHOTOGRAPHY PORTFOLIO JAVASCRIPT
====================================================
*/


// ================================================
// 1. WEBSITE CONFIGURATION
// ================================================

const WHATSAPP_NUMBER = "237681109852";

const FACEBOOK_URL = "https://www.facebook.com/";

// Change the Facebook URL above to the photographer's
// actual Facebook profile or business page.


// ================================================
// 2. DOM ELEMENTS
// ================================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

const portfolioGrid = document.getElementById("portfolio-grid");
const portfolioFilters = document.getElementById("portfolio-filters");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxCounter = document.getElementById("lightbox-counter");

const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");


// ================================================
// 3. WHATSAPP BOOKING
// ================================================

function openWhatsApp(message) {

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
    );

}


// Attach service-specific WhatsApp messages.

document.querySelectorAll(".service-book").forEach((button) => {

    button.addEventListener("click", () => {

        const service = button.dataset.service;

        const message =
            `Hello, I am interested in booking ${service}. ` +
            "Please share your packages, availability, and prices.";

        openWhatsApp(message);

    });

});


// ================================================
// 4. FACEBOOK CONFIGURATION
// ================================================

const facebookLink = document.getElementById("facebook-link");

if (facebookLink) {

    facebookLink.href = FACEBOOK_URL;

}


// ================================================
// 5. MOBILE NAVIGATION
// ================================================

function closeMobileMenu() {

    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

}

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

});


// Close the mobile menu when a navigation link is selected.

navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", closeMobileMenu);

});


// Close the menu when clicking outside the navigation.

document.addEventListener("click", (event) => {

    if (
        navLinks.classList.contains("open") &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        closeMobileMenu();

    }

});


// Close the menu with Escape.

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && navLinks.classList.contains("open")) {

        closeMobileMenu();

    }

});


// ================================================
// 6. PORTFOLIO DATA
// ================================================

let currentFilter = "Home";

let currentGallery = [];

let currentImageIndex = 0;

let lastFocusedElement = null;

let touchStartX = 0;
let touchStartY = 0;


// Curated Home gallery:
// Display up to 20 featured images.
// If fewer than 20 are marked featured, fill the
// remaining places with other unique images.

function getHomeImages() {

    const featuredImages = portfolioImages.filter(
        (image) => image.featured
    );

    const otherImages = portfolioImages.filter(
        (image) => !image.featured
    );

    const combined = [
        ...featuredImages,
        ...otherImages
    ];

    return combined.slice(0, 20);

}


// Return images belonging to the selected gallery.

function getGalleryImages(category) {

    if (category === "Home") {

        return getHomeImages();

    }

    return portfolioImages.filter(
        (image) => image.category === category
    );

}


// ================================================
// 7. BUILD PORTFOLIO GALLERY
// ================================================

function renderPortfolio(category) {

    currentFilter = category;

    currentGallery = getGalleryImages(category);

    portfolioGrid.replaceChildren();

    const fragment = document.createDocumentFragment();

    currentGallery.forEach((image, index) => {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "portfolio-item";

        button.setAttribute(
            "aria-label",
            `Open photograph: ${image.title}`
        );

        const img = document.createElement("img");

        img.src = image.src;

        img.alt = image.alt || image.title;

        img.loading = index < 8 ? "eager" : "lazy";

        img.decoding = "async";

        img.draggable = false;

        // Reduce accidental long-press saving on touch devices.
        img.addEventListener("contextmenu", (event) => {
            event.preventDefault();
        });

        const caption = document.createElement("span");

        caption.className = "portfolio-item-caption";

        caption.textContent = image.title;

        button.append(img, caption);

        button.addEventListener("click", () => {

            openLightbox(index);

        });

        // Handle unavailable external images gracefully.

        img.addEventListener("error", () => {

            button.classList.add("image-unavailable");

            img.alt = `${image.title} — image unavailable`;

            img.removeAttribute("src");

            caption.textContent =
                `${image.title} — replace this image`;

        }, { once: true });

        fragment.appendChild(button);

    });

    portfolioGrid.appendChild(fragment);

    updateFilterButtons();

}


// ================================================
// 8. PORTFOLIO FILTER BUTTONS
// ================================================

function updateFilterButtons() {

    portfolioFilters.querySelectorAll(".filter-btn").forEach(
        (button) => {

            const isActive =
                button.dataset.filter === currentFilter;

            button.classList.toggle("active", isActive);

            button.setAttribute(
                "aria-pressed",
                String(isActive)
            );

        }
    );

}


portfolioFilters.querySelectorAll(".filter-btn").forEach(
    (button) => {

        button.addEventListener("click", () => {

            if (lightbox.classList.contains("open")) {

                closeLightbox();

            }

            renderPortfolio(button.dataset.filter);

        });

    }
);


// ================================================
// 9. OPEN FULL-SCREEN LIGHTBOX
// ================================================

function openLightbox(index) {

    if (!currentGallery.length) {
        return;
    }

    currentImageIndex = index;

    lastFocusedElement = document.activeElement;

    lightbox.inert = false;

    lightbox.setAttribute("aria-hidden", "false");

    lightbox.classList.add("open");

    document.body.classList.add("lightbox-open");

    showLightboxImage();

    lightboxClose.focus();

}


// ================================================
// 10. DISPLAY CURRENT LIGHTBOX IMAGE
// ================================================

function showLightboxImage() {

    const image = currentGallery[currentImageIndex];

    if (!image) {
        return;
    }

    lightboxImage.src = image.src;

    lightboxImage.alt = image.alt || image.title;

    lightboxImage.draggable = false;

    lightboxTitle.textContent = image.title;

    lightboxCounter.textContent =
        `${currentImageIndex + 1} / ${currentGallery.length}`;

    lightboxPrev.disabled = currentGallery.length <= 1;

    lightboxNext.disabled = currentGallery.length <= 1;

}


// ================================================
// 11. PREVIOUS AND NEXT IMAGES
// ================================================

function showPreviousImage() {

    if (!currentGallery.length) {
        return;
    }

    currentImageIndex =
        (
            currentImageIndex -
            1 +
            currentGallery.length
        ) % currentGallery.length;

    showLightboxImage();

}


function showNextImage() {

    if (!currentGallery.length) {
        return;
    }

    currentImageIndex =
        (
            currentImageIndex +
            1
        ) % currentGallery.length;

    showLightboxImage();

}


lightboxPrev.addEventListener("click", showPreviousImage);

lightboxNext.addEventListener("click", showNextImage);


// ================================================
// 12. CLOSE LIGHTBOX
// ================================================

function closeLightbox() {

    if (!lightbox.classList.contains("open")) {
        return;
    }

    lightbox.classList.remove("open");

    lightbox.setAttribute("aria-hidden", "true");

    lightbox.inert = true;

    document.body.classList.remove("lightbox-open");

    lightboxImage.removeAttribute("src");

    if (
        lastFocusedElement &&
        document.contains(lastFocusedElement)
    ) {

        lastFocusedElement.focus();

    }

}


lightboxClose.addEventListener("click", closeLightbox);


// Close when clicking the dark background.

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


// ================================================
// 13. KEYBOARD CONTROLS
// ================================================

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("open")) {
        return;
    }

    if (event.key === "Escape") {

        event.preventDefault();

        closeLightbox();

    }

    if (event.key === "ArrowLeft") {

        event.preventDefault();

        showPreviousImage();

    }

    if (event.key === "ArrowRight") {

        event.preventDefault();

        showNextImage();

    }

});


// ================================================
// 14. BASIC LIGHTBOX FOCUS MANAGEMENT
// ================================================

lightbox.addEventListener("keydown", (event) => {

    if (event.key !== "Tab") {
        return;
    }

    const focusableElements = [
        lightboxClose,
        lightboxPrev,
        lightboxNext
    ].filter((element) => !element.disabled);

    const firstElement = focusableElements[0];

    const lastElement =
        focusableElements[focusableElements.length - 1];

    if (
        event.shiftKey &&
        document.activeElement === firstElement
    ) {

        event.preventDefault();

        lastElement.focus();

    } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
    ) {

        event.preventDefault();

        firstElement.focus();

    }

});


// ================================================
// 15. MOBILE SWIPE NAVIGATION
// ================================================

lightbox.addEventListener("touchstart", (event) => {

    if (!event.changedTouches.length) {
        return;
    }

    touchStartX = event.changedTouches[0].clientX;

    touchStartY = event.changedTouches[0].clientY;

}, { passive: true });


lightbox.addEventListener("touchend", (event) => {

    if (!lightbox.classList.contains("open")) {
        return;
    }

    if (!event.changedTouches.length) {
        return;
    }

    const touchEndX = event.changedTouches[0].clientX;

    const touchEndY = event.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartX;

    const deltaY = touchEndY - touchStartY;

    // Only respond to clear horizontal swipes.

    if (
        Math.abs(deltaX) > 60 &&
        Math.abs(deltaX) > Math.abs(deltaY) * 1.3
    ) {

        if (deltaX < 0) {

            showNextImage();

        } else {

            showPreviousImage();

        }

    }

}, { passive: true });


// ================================================
// 16. DYNAMIC COPYRIGHT YEAR
// ================================================

const currentYear = document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


// ================================================
// 17. INITIALIZE THE WEBSITE
// ================================================

document.addEventListener("DOMContentLoaded", () => {

    renderPortfolio("Home");

});
```

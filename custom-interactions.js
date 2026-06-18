/**
 * ==========================================================================
 * AHC DEVELOMENT - HIGH PERFORMANCE INTERSECTION OBSERVER FOR ENTRANCE EFFECTS
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements prepared for scroll reveal
    const animatedElements = document.querySelectorAll('.ahc-reveal');

    // Threshold config: reveal starts when 12% of element is in viewport
    const options = {
        root: null,
        rootMargin: '0px 0px -5% 0px',
        threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible modifier class
                entry.target.classList.add('ahc-reveal--visible');
                // Cease observation of this element to preserve CPU cycles
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Initial check and trigger loop
    if (animatedElements.length > 0) {
        animatedElements.forEach(element => {
            revealObserver.observe(element);
        });
    }
});

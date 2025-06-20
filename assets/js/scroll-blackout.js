let bioTimeout; // Add this at the top of your script

window.addEventListener('scroll', function() {
    const blackout = document.querySelector('.scroll-blackout');
    const title = document.querySelector('.title');
    const bio = document.querySelector('.bio');
    if (window.scrollY > 80) {
        blackout.style.height = '100vh';
        title.classList.add('scrolled');
        bio.classList.add('scrolled');
        clearTimeout(bioTimeout); // Clear any previous timeout
        bioTimeout = setTimeout(() => {
            bio.classList.add('visible');
        }, 400); // Match your blackout transition
    } else {
        blackout.style.height = '0';
        title.classList.remove('scrolled');
        bio.classList.remove('scrolled');
        bio.classList.remove('visible');
        clearTimeout(bioTimeout); // Prevent delayed .visible
    }
});
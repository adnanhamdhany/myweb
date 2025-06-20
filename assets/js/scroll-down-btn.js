const btn = document.getElementById('scrollDownBtn');

btn.addEventListener('click', function() {
    window.scrollTo({ top: 400, behavior: 'smooth' }); // Adjust 400 to your desired scroll position
    btn.classList.add('hide');
});

window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        btn.classList.remove('hide');
    }
});
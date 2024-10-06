// Código para eventuais interações, como efeitos de scroll
window.addEventListener('scroll', function() {
    const universes = document.querySelectorAll('.universe');
    universes.forEach((universe, index) => {
        const offset = window.pageYOffset;
        universe.style.transform = `translateY(${offset * 0.2 * (index + 1)}px)`;
    });
});

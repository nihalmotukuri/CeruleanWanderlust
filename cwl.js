window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});
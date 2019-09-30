(function() {
    var burger = document.querySelector('#hamburger');
    var menu = document.querySelector('#header-content');
    burger.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
})();

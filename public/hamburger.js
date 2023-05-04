const navbarToggler = document.querySelector('.navbar-toggler');
        const mobileMenu = document.querySelector('#mobile-menu');

        navbarToggler.addEventListener('click',() => {
        console.log('click');
        navbarToggler.classList.toggle('active');
        mobileMenu.classList.toggle('hidden');
    });
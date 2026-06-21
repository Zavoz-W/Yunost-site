document.addEventListener('DOMContentLoaded', function () {

    /* ===== BURGER MENU ===== */

    const burgerBtn = document.getElementById('burgerBtn');
    const navDropdown = document.getElementById('navDropdown');
    const mobileMenu = document.getElementById('mobileMenu');

    if (burgerBtn) {

        burgerBtn.addEventListener('click', function (e) {
            e.stopPropagation();

            if (window.innerWidth <= 393) {

                if (mobileMenu) {
                    const isOpen = mobileMenu.classList.toggle('is-open');
                    burgerBtn.setAttribute('aria-expanded', isOpen);
                }

            } else {

                if (navDropdown) {
                    const isOpen = navDropdown.classList.toggle('is-open');
                    burgerBtn.setAttribute('aria-expanded', isOpen);
                }

            }
        });

        document.addEventListener('click', function (e) {

            if (
                !burgerBtn.contains(e.target) &&
                (!navDropdown || !navDropdown.contains(e.target)) &&
                (!mobileMenu || !mobileMenu.contains(e.target))
            ) {

                if (navDropdown)
                    navDropdown.classList.remove('is-open');

                if (mobileMenu)
                    mobileMenu.classList.remove('is-open');

                burgerBtn.setAttribute('aria-expanded', 'false');
            }

        });

    }

});
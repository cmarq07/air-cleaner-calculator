import '../App.css';

export function Header() {
    return (
        <nav className="navbar mx-3" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </a>

                <a role="button" id="burger" className="navbar-burger" is-active="true" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbar-menu" className="navbar-menu" is-active="true">
                <div className="navbar-end">
                    <a className="navbar-item">
                        Home
                    </a>

                    <a className="navbar-item">
                        Resources
                    </a>

                    <a className="navbar-item">
                        About
                    </a>
                </div>

            </div>
        </nav>
    );

}

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    console.log($navbarBurgers.length);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');



            });
        });
    }


    const burgerIcon = document.querySelector('#burger');
    const navBarMenu = document.querySelector('#navbar-menu');

    burgerIcon.addEventListener('click', () => {
        navBarMenu.classList.toggle('is-active');
    });

});

export default Header;



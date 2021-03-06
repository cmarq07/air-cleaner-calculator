import '../styles/styles.css';
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <nav id="nav-header" className="navbar p-2" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to='/' className="navbar-item" id="logo"></Link>

                <a href="#/" role="button" id="burger" className="navbar-burger" is-active="true" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbar-menu" className="navbar-menu" is-active="true">
                <div className="navbar-end">
                    <Link to='/' className='navbar-item'>Home</Link>

                    <Link to='/calculator'  className="navbar-item">
                        Tool
                    </Link>

                    <Link to='/resources'  className="navbar-item">
                        Resources
                    </Link>

                    <Link to='/about' className="navbar-item">
                        About
                    </Link>

                    <div id="google_translate_element"></div>
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



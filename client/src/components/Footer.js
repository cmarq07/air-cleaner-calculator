import '../styles/styles.css';

import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <Link to="/about">Contact Us</Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;



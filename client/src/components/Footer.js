import '../styles/styles.css';
import iSchool from '../images/iSchool.png'
import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <footer className="footer">
            {/* iSchool Sponsorship Section */}
            <div className='columns is-mobile is-centered p-2 footer-div'>
                <img src={iSchool} alt='The iSchool Logo'/>
            </div>
            <div className="content has-text-centered">
                <p className="contact-us">
                    <Link to="/about" className="contact-us">Contact Us</Link>
                </p>
            </div>
            
        </footer>
    );
}

export default Footer;
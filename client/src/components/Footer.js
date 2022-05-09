import '../styles/styles.css';
<<<<<<< HEAD
import iSchool from '../images/iSchool.png'
export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-div">
                <img src={iSchool} alt='A graphic of the information school logo'/>
=======

import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <Link to="/about">Contact Us</Link>
                </p>
>>>>>>> 12d3f15aa8975b8bd157e173274ee81e7c3d8640
            </div>
        </footer>
    );
}

export default Footer;



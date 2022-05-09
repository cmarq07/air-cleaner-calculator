import '../styles/styles.css';
import iSchool from '../images/iSchool.png'
export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-div">
                <img src={iSchool} alt='A graphic of the information school logo'/>
            </div>
        </footer>
    );
}

export default Footer;



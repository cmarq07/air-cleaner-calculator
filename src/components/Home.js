import '../styles/styles.css';
import { Link } from 'react-router-dom';
import PeopleGraphic from '../images/people_graphic.svg'
import PACGraphic from '../images/Air Cleaner Illustration.png'

export function Home() {
    return (
        <>
        <section className="hero is-medium">
            <div className="hero-body" id="landing">
                <div id="landing-message">
                    <h1 className="title">
                    A clean air tool to help protect <br/> 
                    you, your business, and your <br/> customers.
                    </h1>
                    <p className="subtitle">Learn More</p>
                </div>

                    <img src={PeopleGraphic}/>
            </div>
        </section>

        <section className="hero is-medium has-text-centered">
            <div className="hero-body" id="landing2">
            <h2>Find a Suitable Air Cleaner or <br/> Test Your Existing One</h2>
            <Link to="/calculator">
                <button className="button is-large my-6">Take our Clean Air Test!</button>
            </Link>
            <img src={PACGraphic}/>
            </div>
        </section>
        </>
    );
}

export default Home;



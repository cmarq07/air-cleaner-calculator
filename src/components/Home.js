import '../App.css';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <>
            <section className="hero is-medium">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-3">A clean air tool to help protect you, your business, and your customers.</h1>
                        <div className="box p-6">
                            <div className="buttons are-medium is-centered">
                                <Link to="/formlanding">
                                    <button className="button is-primary">Find or test a portable air cleaner.</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Home;



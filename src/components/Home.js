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
                                <Link to="/calculator">
                                    <button className="button is-info">Find or test a portable air cleaner.</button>
                                </Link>
                            </div>
                        </div>

                        <section className="hero is-info is-small has-text-centered">
                            <div className="hero-body">
                                <p>Before you find or test your air cleaner, learn more about air filtration and best practices!</p>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Home;



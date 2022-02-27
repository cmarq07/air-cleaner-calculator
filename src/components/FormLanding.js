import '../App.css';

export function FormLanding() {
    return (
        <>
            <section class="hero is-medium">
                <div class="hero-body">
                    <div class="container has-text-centered">

                        <h1 class="title is-3">Find or Test an Air Cleaner</h1>
                        <div class="box p-6">
                            <h4 class="subtitle is-4">What would you like to do?</h4>
                            <div class="buttons are-medium is-centered">

                                <button class="button is-primary">Find a portable air cleaner.</button>

                                <button class="button is-primary">Test a portable air cleaner.</button>

                            </div>
                        </div>

                        <a href="#">Take our quiz first!</a>
                    </div>
                </div>
            </section>

        </>
    );
}

export default FormLanding;

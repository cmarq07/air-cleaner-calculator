import React, { Component } from 'react';
import FormTwo from './FormTwo';
import FormFour from './FormFour';
import FormLanding from './FormLanding';
import Recommendations from './Recommendations';
import EfficiencyDashboard from './EfficiencyDashboard';

export default class Calculator extends Component {
    state = {
        step: 1,
        calculatorType: '',
        //room info
        unit: '',
        roomWidth: 0,
        roomLength: 0,
        floorArea: 0,
        ceilingHeight: 0,
        //air cleaner info
        modelName: '',
        cadr: 0,
        numOwned: 0
    }

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
        console.log("handlechange " + e.target.value);
    }


    render() {
        const { step } = this.state;
        const { calculatorType, roomWidth, roomLength, floorArea, ceilingHeight, unit, modelName, cadr, numOwned } = this.state;
        const values = { calculatorType, roomWidth, roomLength, floorArea, ceilingHeight, unit, modelName, cadr, numOwned }

        switch (step) {
            case 1:
                return (
                    <FormLanding
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormTwo
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                if (this.state.calculatorType == "Find") {
                    return (
                        <Recommendations />
                    )

                }
                return (
                    <FormFour
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <EfficiencyDashboard />
                )


            default:
        }
    }
}
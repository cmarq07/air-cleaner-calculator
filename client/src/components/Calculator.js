import React, { Component } from 'react';
import FormOne from './FormOne'
import FormTwo from './FormTwo';
import EstimateDimensions from './EstimateDimensions';
import FormThree from './FormThree';
import FormLanding from './FormLanding';
import FormOverview from './FormOverview';
import Recommendations from './Recommendations';
import EfficiencyDashboard from './EfficiencyDashboard';
import CompletedForm from './CompletedForm';

export default class Calculator extends Component {
    state = {
        step: 1,
        calculatorType: '',
        knowRoom: '',
        //room info
        unit: '',
        roomWidth: 0,
        roomLength: 0,
        floorArea: 0,
        ceilingHeight: 0,
        //air cleaner info
        modelName: '',
        cadr: 0,
        numOwned: 0,
        stepCount: 2
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
        
        let { calculatorType, roomWidth, roomLength, floorArea, ceilingHeight, unit, modelName, cadr, numOwned, stepCount } = this.state;
        
        const values = { calculatorType, roomWidth, roomLength, floorArea, ceilingHeight, unit, modelName, cadr, numOwned, stepCount }

        const airCleaners = this.props.airCleaners

        switch (step) {
            case 1: {
                return (
                    <FormLanding
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            }

            case 2: {
                return (
                    <FormOne
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            }
            
            case 3: {
                if (this.state.knowRoom === "yesKnow"){
                    return (
                        <FormTwo
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    )
                } else {
                    return (
                        <EstimateDimensions
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    )
                }

            }

            case 4: {
                if (this.state.calculatorType === "Find a") {
                    return (
                        <FormOverview
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            airCleaners={airCleaners}
                            values={values}
                        />
                    )
                }

                return (
                    <FormThree
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            }

            case 5: {
                if (this.state.calculatorType === "Find a") {
                    return (
                        <Recommendations
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            airCleaners={airCleaners}
                            values={values}
                        />
                    )
                }

                return (
                    <EfficiencyDashboard
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        airCleaners={airCleaners}
                        values={values}
                    />
                )
            }

            case 6: {
                if (this.state.calculatorType === "Find a") {
                    return (
                        <Recommendations
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            airCleaners={airCleaners}
                            values={values}
                        />
                    )
                } else {
                    return (
                        <CompletedForm
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    )
                }
            }

            default: {

            }
        }
    }
}
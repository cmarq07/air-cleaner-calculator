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
        unit: 'Feet', // default
        roomWidth: 0,
        roomLength: 0,
        floorArea: 0,
        ceilingHeight: 9, // default  
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

    skipStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 2});
    }


    // handle field change
    handleChange = input => e => {
        console.log(input, e.target.value)
        let { roomWidth, roomLength} = this.state
        this.setState({ [input]: e.target.value });

        if (input === "roomWidth") {
            this.setState({'floorArea': e.target.value * roomLength})
        } else if (input === "roomLength") {
            this.setState({'floorArea': e.target.value * roomWidth})
        }

        this.nextStep()
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
                if (this.state.calculatorType === "Find") {
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
                if (this.state.calculatorType === "Find") {
                    return (
                        <Recommendations
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
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
                        skipStep={this.skipStep}
                        handleChange={this.handleChange}
                        airCleaners={airCleaners}
                        values={values}
                    />
                )
            }

            case 6: {
                return (
                    <CompletedForm
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            }

            case 7: {
                return (
                    <Recommendations
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        airCleaners={airCleaners}
                        values={values}
                    />
                )
            }

            default: {

            }
        }
    }
}
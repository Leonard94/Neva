import React, { useState } from 'react'

import { ProgressBar } from '../ProgressBar/ProgressBar'
import { Controls } from '../Controls/Controls'

export const Steps = ({ children, onSubmit }) => {
    const [currentStep, setCurrentStep] = useState(1)

    const cloneChild = (child, index) => {
        if (!React.isValidElement(child)) return child

        return React.cloneElement(child, {
            active: currentStep === index + 1,
        })
    }

    const nextStep = () => {
        if (currentStep !== React.Children.count(children)) {
            setCurrentStep(currentStep + 1)
        }
    }

    const prevStep = () => {
        if (currentStep !== 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    return (
        <>
            <ProgressBar currentStep={currentStep} />
            {React.Children.map(children, cloneChild)}
            <Controls
                prevStep={prevStep}
                nextStep={nextStep}
                onSubmit={onSubmit}
                currentStep={currentStep}
                totalStep={React.Children.count(children)}
            />
        </>
    )
}

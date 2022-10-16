import styles from './styles.module.scss'

import { Btn } from './components/Btn'

export const Controls = (props) => {
    const { prevStep, nextStep, onSubmit, currentStep, totalStep } = props
    
    return (
        <div className={styles.btns}>
            <Btn onClick={prevStep} disabled={currentStep === 1}>
                назад
            </Btn>

            {currentStep === totalStep ? (
                <Btn onClick={onSubmit} fill>
                    купить билеты
                </Btn>
            ) : (
                <Btn onClick={nextStep} fill>
                    {currentStep === totalStep - 1 ? 'посчитать' : 'вперёд'}
                </Btn>
            )}
        </div>
    )
}

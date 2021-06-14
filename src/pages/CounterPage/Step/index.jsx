import React from 'react';
import PropTypes from 'prop-types';
import style from './Step.module.sass';
import ControlledNumInput from '../../../components/ControlledNumInput';
function Step (props) {
  const { step, setStep } = props;
  return (
    <>
      <div>Step: {step}</div>
      <ControlledNumInput
        caption='Настройка шага'
        value={step}
        setValue={setStep}
        min={1}
        max={100}
      />
    </>
  );
}
Step.defaultProps = {
  step: 1,
  setStep: () => {},
};

Step.propType = {
  step: PropTypes.number,
  setStep: PropTypes.func.isRequired,
};

export default Step;

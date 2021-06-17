import React, { PureComponent } from 'react';
import Counter from 'components/Counter';
import style from './CounterPage.module.sass';
import Button from 'components/Button';

class CounterPage extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      step: 1,
      value: 0,
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ step: Number(value) });
  };

  render () {
    return (
      <div className={style.container}>
        <input
          type='range'
          min={0}
          max={100}
          value={this.state.step}
          onChange={this.handleChange}
        />
        <Counter step={this.state.step} />
        <Button
          onClick={() => {
            this.setState({ step: this.state.step });
          }}
        >
          Click me
        </Button>
      </div>
    );
  }
}

// function CounterPage (props) {
//   const [step, setStep] = useState(1);
//   return (
//     <div className={style.container}>
//       <Step step={step} setStep={setStep} />
//       <Counter step={step} />
//     </div>
//   );
// }

export default CounterPage;

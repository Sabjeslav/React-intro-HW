import React, { useCallback, useState, useEffect, useMemo } from 'react';
import Button from '../Button';
import ControlledNumInput from '../ControlledNumInput';

import style from './Counter.module.sass';

function Counter (props) {
  const { step } = props;
  const [counter, setCounter] = useState(0);
  const [isIncrement, setIsIncrement] = useState(true);
  const [isAutoClick, setIsAutoClick] = useState(false);
  const [delay, setDelay] = useState(1000);
  const [clicksPerSecond, setClicksPerSecond] = useState(1);
  const [timer, setTimer] = useState(null);

  const toggleMode = useCallback(() => setIsIncrement(!isIncrement), [
    isIncrement,
  ]);
  const toggleAutoClick = useCallback(() => setIsAutoClick(!isAutoClick), [
    isAutoClick,
  ]);

  const handleCount = useCallback(
    () =>
      isIncrement ? setCounter(counter + step) : setCounter(counter - step),
    [isIncrement, counter, step]
  );

  const handleChangeDelay = useCallback(newValue => {
    setClicksPerSecond(newValue);
    setDelay(1000 / newValue);
  }, []);

  useEffect(() => {
    if (isAutoClick) {
      setTimer(setTimeout(handleCount, delay));
    }
  }, [isIncrement, isAutoClick, delay, step, counter]);

  useEffect(() => {
    clearTimeout(timer);
  }, [isIncrement, delay, step, isAutoClick]);

  const countButtonCaption = useMemo(
    () => (isIncrement ? 'Increment' : 'Decrement'),
    [isIncrement]
  );

  return (
    <>
      <div className={style.container}>
        <div>Counter:{counter}</div>
        <ControlledNumInput
          caption='Количество нажатий в секунду (Press Enter)'
          value={clicksPerSecond}
          setValue={handleChangeDelay}
          min={1}
          max={1000}
        />
        <p>Auto click mode: {isAutoClick ? 'Enabled' : 'Disabled'}</p>
        <div className={style.controls}>
          <Button onClick={toggleMode}>Change mode</Button>
          <Button onClick={handleCount}>{countButtonCaption}</Button>
          <Button onClick={toggleAutoClick}>Auto click</Button>
        </div>
      </div>
    </>
  );
}

/*class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: 0,
      isIncrement: true,
      isAutoClick: false,
      delay: 1000,
      clicksPerSecond: 1,
      timer: null,
    };
  }

  shouldComponentUpdate (nextProps) {
    return this.props.step === nextProps.step;
  }

  toggleMode = () =>
    this.setState({
      isIncrement: !this.state.isIncrement,
    });
  toggleAutoClick = () => {
    const { isAutoClick } = this.state;
    if (!isAutoClick) setTimeout(this.tick, this.state.delay);
    this.setState({
      isAutoClick: !isAutoClick,
    });
  };

  handleCount = () => {
    const { isIncrement, counter } = this.state;
    const { step } = this.props;
    this.setState({
      counter: isIncrement ? counter + step : counter - step,
    });
  };

  tick = () => {
    const { isAutoClick, delay } = this.state;
    if (!isAutoClick) return;
    setTimeout(this.tick, delay);
    this.handleCount();
  };

  handleChangeDelay = newValue => {
    this.setState({
      clicksPerSecond: newValue,
      delay: 1000 / newValue,
    });
  };

  render () {
    const { isIncrement, counter, clicksPerSecond, isAutoClick } = this.state;
    const countButtonCaption = isIncrement ? 'Increment' : 'Decrement';
    return (
      <>
        <div className={style.container}>
          <div>Counter:{counter}</div>
          <ControlledNumInput
            caption='Количество нажатий в секунду (Press Enter)'
            value={clicksPerSecond}
            setValue={this.handleChangeDelay}
            min={1}
            max={1000}
          />
          <p>Auto click mode: {isAutoClick ? 'Enabled' : 'Disabled'}</p>
          <div className={style.controls}>
            <Button onClick={this.toggleMode}>Change mode</Button>
            <Button onClick={this.handleCount}>{countButtonCaption}</Button>
            <Button onClick={this.toggleAutoClick}>Auto click</Button>
          </div>
        </div>
      </>
    );
  }
}*/

export default Counter;

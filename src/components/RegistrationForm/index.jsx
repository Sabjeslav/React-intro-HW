import style from './form.module.sass';
import React, { useReducer } from 'react';
import FormInput from './FormInput';
import constants from '../../constants';
import { reducer } from './reducer';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

function RegForm (props) {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const submitHandler = e => {
    const { registerUser } = props;
    e.preventDefault();
    registerUser({ ...state });
  };

  const handleChange = ({ target: { name, value } }) => dispatch({ name, value });
  
  const { firstName, lastName, email, password } = state;
  return (
    <form className={style.regForm} onSubmit={submitHandler}>
      <h1>Registration form</h1>
      <div className={style.inputWrapper}>
        <FormInput
          name='firstName'
          value={firstName}
          onChange={handleChange}
          validationRegex={constants.REGEX_NAME}
          placeholder='First Name'
        />
        <FormInput
          name='lastName'
          value={lastName}
          onChange={handleChange}
          validationRegex={constants.REGEX_NAME}
          placeholder='Last Name'
        />
        <FormInput
          name='email'
          value={email}
          onChange={handleChange}
          validationRegex={constants.REGEX_EMAIL}
          placeholder='Email'
          type='email'
        />
        <FormInput
          name='password'
          value={password}
          onChange={handleChange}
          validationRegex={constants.REGEX_PASSWORD}
          placeholder='Password'
          type='password'
        />
      </div>
      <input type='submit' className={style.regInput} value='Sign up'></input>
    </form>
  );
}

/*class RegForm extends Component {
  constructor (props) {
    super(props);
    this.state = { ...initialValues };
  }

  submitHandler = e => {
    const { registerUser } = this.props;
    e.preventDefault();
    registerUser({ ...this.state });
    this.setState({ ...initialValues });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
      [`is${name}Valid`]: !value.includes(' '),
    });
  };

  validateName = value =>
    value.length === 0 || constants.REGEX_NAME.test(value);
  validateEmail = value =>
    value.length === 0 || constants.REGEX_EMAIL.test(value);
  validatePassword = value =>
    value.length === 0 || constants.REGEX_PASSWORD.test(value);

  render () {
    const { firstName, lastName, email, password } = this.state;
    return (
      <form className={style.regForm} onSubmit={this.submitHandler}>
        <h1>Registration form</h1>
        <div className={style.inputWrapper}>
          <FormInput
            name='firstName'
            value={firstName}
            onChange={this.handleChange}
            validationRegex={constants.REGEX_NAME}
            placeholder='First Name'
          />
          <FormInput
            name='lastName'
            value={lastName}
            onChange={this.handleChange}
            validationRegex={constants.REGEX_NAME}
            placeholder='Last Name'
          />
          <FormInput
            name='email'
            value={email}
            onChange={this.handleChange}
            validationRegex={constants.REGEX_EMAIL}
            placeholder='Email'
            type='email'
          />
          <FormInput
            name='password'
            value={password}
            onChange={this.handleChange}
            validationRegex={constants.REGEX_PASSWORD}
            placeholder='Password'
            type='password'
          />
        </div>
        <input type='submit' className={style.regInput} value='Sign up'></input>
      </form>
    );
  }
}*/

export default RegForm;

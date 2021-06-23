import style from './form.module.sass';
import React, { useReducer } from 'react';
import FormInput from './FormInput';
import constants from '../../../constants';
import { reducer } from './reducer';
import { SIGN_UP_SCHEMA } from 'utils/validationSchemas';

import { Formik, Form, Field, ErrorMessage } from 'formik';

function SignUpForm (props) {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  return (
    <Formik initialValues={initialValues} validationSchema={SIGN_UP_SCHEMA}>
      {formikProps => {
        return (
          <Form className={style.regForm}>
            <h1>Registration form</h1>
            <Field
              className={style.regInput}
              placeholder='First Name'
              name='firstName'
            />
            <ErrorMessage component="div" name="firstName"/>
            <Field
              className={style.regInput}
              placeholder='Last Name'
              name='lastName'
            />
            <ErrorMessage component="div" name="lastName"/>
            <Field
              className={style.regInput}
              placeholder='Email'
              name='email'
              type='email'
            />
            <ErrorMessage component="div" name="email"/>
            <Field
              className={style.regInput}
              placeholder='Password'
              name='password'
              type='password'
            />
            <ErrorMessage component="div" name="password"/>
            <Field type='submit' value='Sign up' />
          </Form>
        );
      }}
    </Formik>
    // <form className={style.regForm} onSubmit={submitHandler}>
    //   <h1>Registration form</h1>
    //   <div className={style.inputWrapper}>
    //     <FormInput
    //       name='firstName'
    //       value={firstName}
    //       onChange={handleChange}
    //       validationRegex={constants.REGEX_NAME}
    //       placeholder='First Name'
    //     />
    //     <FormInput
    //       name='lastName'
    //       value={lastName}
    //       onChange={handleChange}
    //       validationRegex={constants.REGEX_NAME}
    //       placeholder='Last Name'
    //     />
    //     <FormInput
    //       name='email'
    //       value={email}
    //       onChange={handleChange}
    //       validationRegex={constants.REGEX_EMAIL}
    //       placeholder='Email'
    //       type='email'
    //     />
    //     <FormInput
    //       name='password'
    //       value={password}
    //       onChange={handleChange}
    //       validationRegex={constants.REGEX_PASSWORD}
    //       placeholder='Password'
    //       type='password'
    //     />
    //   </div>
    //   <input type='submit' className={style.regInput} value='Sign up'></input>
    // </form>
  );
}

export default SignUpForm;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGN_IN_SCHEMA } from 'utils/validationSchemas';

function SignInForm () {
  const initialValues = {
    password: '',
    email: '',
  };
  return (
    <Formik initialValues={initialValues} validationSchema={SIGN_IN_SCHEMA}>
      {formikProps => {
        return (
          <Form>
            <Field name='email' />
            <ErrorMessage component="div" name="email"/>
            <Field name='password' type='password' />
            <ErrorMessage component="div" name="password"/>
            <Field type='submit' value='Submit' />
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignInForm;

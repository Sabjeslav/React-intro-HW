import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AddCircle } from '@material-ui/icons';
import style from './AddForm.module.sass';
import { NEW_TASK_SCHEMA } from 'utils/validationSchemas';

function AddForm ({ addTask }) {
  const initialValues = {
    title: '',
  };
  return (
    <div className={style.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={NEW_TASK_SCHEMA}
        onSubmit={(value, actions) => {
          addTask(value.title);
          actions.resetForm();
        }}
      >
        {formikProps => {
          return (
            <Form className={style.formContainer}>
              <Field
                className={style.newTaskInput}
                name='title'
                type='text'
                placeholder='What you want to do?'
              />
              <ErrorMessage component='div' name='title' />
              <button className={style.submitBtn} type='submit'>
                <AddCircle className={style.addIcon} fontSize='large' />
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

AddForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddForm;

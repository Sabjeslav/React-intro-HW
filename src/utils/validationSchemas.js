import * as yup from 'yup';

export const NAME_SCHEMA = yup
  .string()
  .matches(
    /^[A-Z][a-z]{0,64}$/,
    'Имя должно начинаться с большой буквы и не должно содержать любые символы, кроме букв!'
  )
  .required();

export const EMAIL_SCHEMA = yup
  .string()
  .email()
  .required();

export const TITLE_SCHEMA = yup
  .string()
  .matches(/^[ -z]{3,64}$/g, 'String must be longer than 3 symbols!')
  .required();

export const NEW_TASK_SCHEMA = yup.object({
  title: TITLE_SCHEMA
})

export const PASSWORD_SCHEMA = yup
  .string()
  .matches(
    /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$^&*-])/,
    'Password must contain upper and lower latin characters, numbers and symbols (#?!@$^&*-)'
  )
  .matches(/^.{8,}$/, 'Password must contain at least 8 characters')
  .required();

export const SIGN_UP_SCHEMA = yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});

export const SIGN_IN_SCHEMA = yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});

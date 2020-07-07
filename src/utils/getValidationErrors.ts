import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}
export default function getValidateErrors(errors: ValidationError): Errors {
  const validationErrors: Errors = {};

  errors.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}

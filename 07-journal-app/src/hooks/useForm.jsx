import React from 'react';
import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    let val = {};
    let isValid = true;
    formState.validators.map((validation) => {
      isValid = isValid && validation.fn(formState[validation.name]);
      val = {
        ...val,
        [`is${
          validation.name.charAt(0).toUpperCase() + validation.name.slice(1)
        }Valid`]: validation.fn(formState[validation.name]),
        [`error${
          validation.name.charAt(0).toUpperCase() + validation.name.slice(1)
        }Message`]: validation.fn(formState[validation.name])
          ? ''
          : validation.message,
      };
    });
    setFormState({
      ...formState,
      validations: val,
      isValidForm: isValid,
    });
  };
  return {
    ...formState,
    ...formState.validations,
    formState,
    onInputChange,
    onResetForm,
    createValidators,
  };
};

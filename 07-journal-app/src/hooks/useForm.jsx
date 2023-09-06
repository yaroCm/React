import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [validations, setValidations] = useState({});

  const isFormValid = useMemo(() => {
    return Object.keys(validations).length > 0
      ? Object.keys(validations)
          .filter((value) => typeof validations[value] === 'boolean')
          .map((value) => validations[value])
          .reduce((sum, next) => sum && next)
      : false;
  }, [validations]);

  useEffect(() => {
    createValidators();
  }, [formState]);

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
    formState?.validators?.map((validation) => {
      isValid = validation.fn(formState[validation.name]);
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
    setValidations(val);
  };
  return {
    ...validations,
    ...formState,
    onInputChange,
    onResetForm,
    isFormValid,
  };
};

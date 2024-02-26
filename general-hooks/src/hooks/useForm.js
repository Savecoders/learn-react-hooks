import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onChange = ({ target }) => {
    // console.log(target);
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const onReset = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onChange,
    onReset,
  };
};

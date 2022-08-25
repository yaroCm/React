import { useState } from 'react';

export const FormCategory = ({ addCategory }) => {
  const [value, setValue] = useState('');

  const onChangeInputSearch = ({ target }) => {
    setValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length <= 1) return;

    addCategory(value.trim());

    setValue('');
  };
  return (
    <form name='form' onSubmit={onSubmit}>
      <input
        type='search'
        onChange={onChangeInputSearch}
        value={value}
        placeholder='Search gifts'
      />
      <button type='submit'>Add</button>
    </form>
  );
};

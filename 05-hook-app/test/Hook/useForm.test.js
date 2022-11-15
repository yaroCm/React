import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/Hook/useForm';

describe('Test useForm', () => {
  const formInitial = {
    name: 'fernando',
    email: 'fer@mail.com',
  };

  const target = {
    target: {
      name: 'name',
      value: 'Kevs',
    },
  };
  test('should return info by default ', () => {
    const { result } = renderHook(() => useForm(formInitial));
    expect(result.current).toEqual({
      name: formInitial.name,
      email: formInitial.email,
      formState: formInitial,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('should change the name', () => {
    const { result } = renderHook(() => useForm(formInitial));
    const { onInputChange } = result.current;
    act(() => {
      onInputChange(target);
    });
    expect(result.current.name).toBe(target.target.value);
  });
});

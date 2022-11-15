import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/Hook/useCounter';

describe('Test useCounter', () => {
  test('return default values 0', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrementar, incrementar, resetear } = result.current;
    expect(counter).toBe(0);
    expect(decrementar).toEqual(expect.any(Function));
    expect(incrementar).toEqual(expect.any(Function));
    expect(resetear).toEqual(expect.any(Function));
  });

  test('return the value that we send it 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test('should increment the counter 1', () => {
    const { result } = renderHook(() => useCounter());
    const { incrementar } = result.current;
    act(() => {
      incrementar();
    });

    expect(result.current.counter).toBe(1);
  });

  test('should decrease the counter 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrementar } = result.current;
    act(() => {
      decrementar();
    });
    expect(result.current.counter).toBe(100);
  });

  test('should reset the value', () => {
    const { result } = renderHook(() => useCounter(100));
    const { resetear, incrementar } = result.current;
    act(() => {
      incrementar();
      incrementar();
      incrementar();
      incrementar();
      resetear();
    });
    expect(result.current.counter).toBe(100);
  });
});

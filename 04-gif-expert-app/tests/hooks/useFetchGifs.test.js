import { useFetchGifs } from '../../src/Hooks/useFetchGifs';
import { renderHook, waitFor } from '@testing-library/react';

describe('Test describe useFetchGifts', () => {
  test('Inicitial state', () => {
    const { result } = renderHook(() => useFetchGifs('OnePunch'));
    const { gifs, isLoading } = result.current;
    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Return full ', async () => {
    const { result } = renderHook(() => useFetchGifs('OnePunch'));
    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));
    const { gifs, isLoading } = result.current;
    expect(gifs.length).toBe(5);
    expect(isLoading).toBeFalsy();
  });
});

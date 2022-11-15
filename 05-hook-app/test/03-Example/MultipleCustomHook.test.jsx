import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHook } from '../../src/03-Example/MultipleCustomHook';
import { useCounter } from '../../src/Hook/useCounter';
import { useFetch } from '../../src/Hook/useFetch';

jest.mock('../../src/Hook/useFetch');
jest.mock('../../src/Hook/useCounter');

describe('Test <MultipleCustomHook>', () => {
  const mockIncrementar = jest.fn();
  const mockDecrementar = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    incrementar: mockIncrementar,
    decrementar: mockDecrementar,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show default component', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHook />);
    expect(screen.getByText('Loading ...'));
    expect(screen.getByText('Breaking Bad Quotes'));
  });
  test('Should show quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Yarito', quote: 'Ealeeeeeeee' }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHook />);
    expect(screen.getByText('Ealeeeeeeee')).toBeTruthy();
    expect(screen.getByText('Yarito')).toBeTruthy();
  });

  test('should change quote for increment', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Yarito', quote: 'Ealeeeeeeee' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHook />);
    const nextButton = screen.getByRole('button', { name: 'Next ->' });
    fireEvent.click(nextButton);
    expect(mockIncrementar).toHaveBeenCalled();
  });
});

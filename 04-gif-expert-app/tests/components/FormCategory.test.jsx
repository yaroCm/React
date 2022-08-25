import { fireEvent, render, screen } from '@testing-library/react';
import { FormCategory } from '../../src/components/FormCategory';

describe('Test </FormCategory>', () => {
  test('Change value of input', () => {
    render(<FormCategory addCategory={() => {}} />);
    const input = screen.getByRole('searchbox');
    fireEvent.input(input, { target: { value: 'Digimon' } });
    expect(input.value).toBe('Digimon');
  });

  test('Call OnNewCategory', () => {
    const inputValue = 'Digimon';

    const onNewCategory = jest.fn();

    render(<FormCategory addCategory={onNewCategory} />);

    const input = screen.getByRole('searchbox');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('Not Call On New category if input its empty ', () => {
    const onNewCategory = jest.fn();

    render(<FormCategory addCategory={onNewCategory} />);

    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});

import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
describe('Test of <GifExpertApp>', () => {
  test('Show the title Gif Expert App', () => {
    render(<GifExpertApp />);
    expect(screen.getByText('Gif Expert App'));
    expect(screen.getByRole('form')).toBeTruthy();
  });

  test('Show the form', () => {
    render(<GifExpertApp />);
    expect(screen.getByText('Gif Expert App'));
    expect(screen.getByRole('form')).toBeTruthy();
    expect(screen.getByPlaceholderText('Search gifts')).toBeTruthy();
  });

  test('Show digimon as title for default', () => {
    render(<GifExpertApp />);
    expect(screen.getByText('Digimon'));
  });
});

/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas con <GifItem/>', () => {
  const title = 'jordi';
  const url = 'http://localhost/odermygear.com';

  test('match snapsnot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Show URL and Title <img>', () => {
    render(<GifItem title={title} url={url} />);

    //opcion simple
    expect(screen.getByRole('img').src).toBe(url);
    expect(screen.getByRole('img').alt).toBe(title);

    //opcion elegante
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Show the title ', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});

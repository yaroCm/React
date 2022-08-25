import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/Hooks/useFetchGifs';

jest.mock('../../src/Hooks/useFetchGifs');

describe('Pruebas a <GifGrid/>', () => {
  const category = 'Minions';

  test('show loading first', () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando'));
    expect(screen.getByText(category));
  });

  test('show images', () => {
    const gifs = [
      {
        id: 'ABDC',
        title: 'minions1',
        url: 'https://localhost/minions1.jpg',
      },
      {
        id: 'ABDF',
        title: 'minions2',
        url: 'https://localhost/minions2.jpg',
      },
    ];
    useFetchGifs.mockReturnValue({
      gifs: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});

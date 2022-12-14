import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs', () => {
  test('Debe de retornar un array de gifts', () => {
    const gifs = await getGifs('Digimon');
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});

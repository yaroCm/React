import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs', () => {
  test('Debe de retornar un array de gifts', async () => {
    const gifs = await getGifs('Digimon');
    expect(gifs.length).toBeGreaterThan(0);
  });
});

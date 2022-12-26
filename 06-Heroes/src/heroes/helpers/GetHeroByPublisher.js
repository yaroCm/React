import { heroes } from '../data/heroes';

export const GetHeroByPublisher = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} it isn't a valid publisher`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};

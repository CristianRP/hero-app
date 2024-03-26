import { heroes } from '../data/heroes';

type Marvel = 'Marvel Comics';
type DC = 'DC Comics';

export type Publisher = Marvel | DC;

export const getHeroesByPublisher = ( publisher: Publisher ) => {

  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes( publisher )) {
    throw new Error(`${ publisher } is not a valid publisher`);
  }

  return heroes.filter(hero => hero.publisher === publisher);
}

import { Hero, heroes } from '../data/heroes';

export const getHeroesByName = ( name:string  = '' ): Hero[] => {
  name = name.toLowerCase().trim();
  
  if (name.length === 0) return [];

  console.log('firing');
  
  return heroes.filter(hero => hero.superhero.toLowerCase().includes( name ));
}
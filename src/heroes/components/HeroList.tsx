import { useMemo } from 'react';
import { HeroCard } from '.';
import { Publisher, getHeroesByPublisher } from '../helpers'

type HeroListProps = {
  publisher: Publisher;
}

export const HeroList = ({ publisher }: HeroListProps) => {

  const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
      { 
        heroes.map(hero => (
          <HeroCard key={hero.id} {...hero} />
        ))
      }
    </div>
  )
}

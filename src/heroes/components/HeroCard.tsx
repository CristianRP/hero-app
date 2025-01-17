import { Link } from 'react-router-dom';
import { Hero } from '../data/heroes';

type CharactersByHeroType = {
  alter_ego: string;
  characters: string;
}

const CharactersByHero = ({ alter_ego, characters }: CharactersByHeroType) => {
  return (alter_ego === characters)
    ? <></>
    : <p>{ characters }</p>;
}

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}: Hero) => {

  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="w-full px-2 mb-4 animate__animated animate__fadeIn">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="flex flex-row">
          <div className="w-1/3">
            <img src={heroImageUrl} alt={superhero} className="w-full h-auto" />
          </div>
          <div className="w-2/3 p-4">
            <h5 className="text-xl font-semibold mb-2">{superhero}</h5>
            <p className="text-sm text-gray-700 mb-2">{alter_ego}</p>
            
            <CharactersByHero alter_ego={alter_ego} characters={characters} />
            
            <p className="text-xs text-gray-600 mb-2">{first_appearance}</p>
            
            <Link to={`/hero/${id}`} className="text-blue-500 hover:underline">
              More...
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

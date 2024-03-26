import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';
import { useMemo } from 'react';

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById( id! ), [id]);

  if (!hero) {
    return <Navigate to="/" replace={true} />
  }

  const onNavigateBack = () => {
    navigate(-1);
  }

  return (
    <div className='flex flex-wrap mt-5'>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <img src={`/assets/heroes/${ id }.jpg`} alt={ hero.superhero } className='rounded-lg' />
      </div>

      <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 px-4">
        <h3 className='text-2xl font-bold'>{ hero.superhero }</h3>
        <ul className="list-none">
          <li>
            <b>Alter ego:</b>{ hero.alter_ego }
          </li>
          <li>
            <b>Publisher:</b>{ hero.publisher }
          </li>
          <li>
            <b>First Appearance:</b>{ hero.first_appearance }
          </li>
        </ul>

        <h5 className="mt-3 text-lg font-semibold">Characters</h5>
        <p>{ hero.characters }</p>

        <button
          className='bg-blue-400 rounded-md p-2 text-white mt-5'
          onClick={ onNavigateBack }
          >
          Back
        </button>
      </div>
    </div>
  )
}

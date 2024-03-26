import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const HeroPage = () => {

  const { id } = useParams();

  if (!id) {
    return <Navigate to={'/'} />
  }

  const hero = getHeroById( id );

  if (!hero) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <>
      <h1>{ hero.superhero }</h1>
    </>
  )
}

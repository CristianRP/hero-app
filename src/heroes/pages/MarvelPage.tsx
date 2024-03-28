import { HeroList } from '../components'

export const MarvelPage = () => {
  return (
    <>
    <h1 className='text-3xl font-bold mt-5 mb-5'>Marvel Comics</h1>
    <hr className='mb-4'/>
    <HeroList publisher='Marvel Comics' />
  </>
  )
}

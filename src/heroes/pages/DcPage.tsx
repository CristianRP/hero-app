import { HeroList } from '../components'

export const DcPage = () => {
  return (
    <>
      <h1 className='text-3xl font-bold mt-5 mb-5'>DC Comics</h1>
      <hr className='mb-4'/>
      <HeroList publisher='DC Comics' />
    </>
  )
}

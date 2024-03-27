import { FormEvent, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../helpers';

import { HeroCard } from '../components'

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const heroes = useMemo(() => getHeroesByName(q as string), [q]);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    event.preventDefault();

    console.log( { searchText });
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1 className='text-3xl font-bold mt-5'>Search</h1>
      <hr className='mt-5 mb-5' />

      <div className='flex flex-wrap mt-5'>
        <div className="w-full md:w-4/12">
          <h4 className='text-xl font-semibold'>Searching</h4>
          <hr className='my-2' />
          <form className='flex flex-col'>
            <input
              type="text"
              placeholder='Search a hero'
              className='flex-1 rounded-sm'
              name='searchText'
              autoComplete='off'
              value={ searchText }
              onChange={ onInputChange } />
            <button
              type='submit'
              className='w-1/3 mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 focus:ring focus:ring-blue-300'
              onClick={ onSearchSubmit }
              >
              Search
            </button>
          </form>
        </div>
        <div className="w-full md:w-4/6 px-4">
          <h4 className='text-xl font-semibold'>Results</h4>
          <hr className='my-2' />

          {
            q === ''
            ?  
              <div className="bg-blue-100 rounded-md border border-blue-500 text-blue-700 p-4 mb-4" role='alert'>
                Search a hero
              </div>
            : (heroes.length === 0) &&
              <div className="bg-red-100 rounded-md border border-red-500 text-red-700 p-4 mb-4" role='alert'>
                No hero with <b>{ q }</b>
              </div>
          }

          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}

import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '..'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="pl-10 pr-10">
        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DcPage />} />

          <Route path='search' element={<SearchPage />} />
          <Route path='hero/:id' element={<HeroPage />} />

          <Route path='/' element={<Navigate to='marvel' />} />
        </Routes>
      </div>
    </>
  )
}

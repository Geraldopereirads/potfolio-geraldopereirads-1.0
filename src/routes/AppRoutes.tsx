import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage'
import { PageNotFoud } from '../pages/PageNotFound/PageNotFound'
import { AboutPage } from '../pages/aboutPage/aboutPage'
import { PortifolioPage } from '../pages/PortifolioPage/PortifolioPage'
import { FerramentasPage } from '../pages/toolsPage/toolsPage'
import { ContactPage } from '../pages/ContactPage/ContactPage'

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/sobre' element={<AboutPage/>}/>
        <Route path='/portifolio' element={<PortifolioPage/>}/>
        <Route path='/ferramentas' element={<FerramentasPage/>}/>
        <Route path='/contato' element={<ContactPage/>}/>
        <Route path="*" element={<PageNotFoud/>} />
      </Routes>
    </div>

  )
}

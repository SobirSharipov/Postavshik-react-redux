import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router'
import { About, Home, Layout } from './pages/Lazy/Lazy'
import Catalog from './pages/catalog/Catalog'
import Catalog1 from './pages/Abdullo/Catalog1'
import Dostaf from './pages/Dostaf/Dostaf'
import Dostaf2 from './pages/Dostaf2/Dostaf2'
import Contact from './pages/Contact/Contact'
import Contact1 from './pages/Contact1/Contact1'
import Contact2 from './pages/Contact2/Contact2'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Catalog' element={<Catalog/>}/>
        <Route path='/Catalog1' element={<Catalog1/>}/>
        <Route path='/Dostaf' element={<Dostaf/>}/>
        <Route path='/Dostaf2' element={<Dostaf2/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Contact1' element={<Contact1/>}/>
        <Route path='/Contact2' element={<Contact2/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
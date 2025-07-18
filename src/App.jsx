import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import {
	About,
	Catalog,
	Catalog1,
	Contact,
	Contact1,
	Contact2,
	Dostaf,
	Dostaf2,
	Home,
	Info,
	Layout,
} from './pages/Lazy/Lazy'

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/About' element={<About />} />
						<Route path='/Catalog' element={<Catalog />} />
						<Route path='/Catalog1' element={<Catalog1 />} />
						<Route path='/Dostaf' element={<Dostaf />} />
						<Route path='/Dostaf2' element={<Dostaf2 />} />
						<Route path='/Contact' element={<Contact />} />
						<Route path='/Contact1' element={<Contact1 />} />
						<Route path='/Contact2' element={<Contact2 />} />
						<Route path='/info/:id' element={<Info />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App

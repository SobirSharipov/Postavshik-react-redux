import React from 'react'
import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
        <header className='flex p-[20px] border justify-around'>
            <Link to={'/'}> <p>Home</p></Link>
            <Link to={'/About'}> <p>About</p></Link>
            <Link to={'/Catalog'}> <p>Catalog</p></Link>
            <Link to={'/Catalog1'}> <p>Catalog1</p></Link>
            <Link to={'/Dostaf'}> <p>Dostaf</p></Link>
            <Link to={'/Dostaf2'}> <p>Dostaf2</p></Link>
            <Link to={'/Contact'}> <p>Contact</p></Link>
            <Link to={'/Contact1'}> <p>Contact1</p></Link>
            <Link to={'/Contact2'}> <p>Contact2</p></Link>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout
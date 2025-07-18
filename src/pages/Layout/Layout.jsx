import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router'
import img from '../../assets/imagesSobir/img1.png'
import img1 from '../../assets/imagesSobir/img1 (2).png'
import img2 from '../../assets/imagesSobir/img1 (1).png'

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className=''>
        <div className='flex p-[20px] text-[#0A61DE] border-b justify-around'>
          <div>
            <img src={img} alt="" />
          </div>
          <div className='lg:flex hidden gap-[30px]'>
          <Link to={'/'}> <p>Home</p></Link>
          <Link to={'/About'}> <p>About</p></Link>
          <Link to={'/Catalog'}> <p>Catalog</p></Link>
          <Link to={'/Catalog1'}> <p>Catalog1</p></Link>
          <Link to={'/Dostaf'}> <p>Dostaf</p></Link>
          <Link to={'/Dostaf2'}> <p>Dostaf2</p></Link>
          <Link to={'/Contact'}> <p>Contact</p></Link>
          <Link to={'/Contact1'}> <p>Contact1</p></Link>
          <Link to={'/Contact2'}> <p>Contact2</p></Link>
          </div>
          <div className='lg:hidden block'>
          <select onChange={(e) => navigate(e.target.value)}>
            <option value="/">Home</option>
            <option value="/About">About</option>
            <option value="/Catalog">Catalog</option>
            <option value="/Catalog1">Catalog1</option>
            <option value="/Dostaf">Dostaf</option>
            <option value="/Dostaf1">Dostaf1</option>
            <option value="/Contact">Contact</option>
            <option value="/Contact1">Contact1</option>
            <option value="/Contact12">Contact12</option>
          </select>
          </div>
          <div className='lg:flex hidden gap-[10px]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <p className='font-black'>8-800-550-01-09</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </div>
        </div>
        <div className='flex justify-around bg-[#EDEDED] py-[20px]  '>
          <button className='bg-[#0A61DE] hidden lg:block text-2xl text-white font-black p-[10px] w-[15%]'>Каталог</button>
          <div className='lg:w-[60%] w-[90%] mx-auto lg:mx-0 flex'>
            <input type="text" placeholder='Search...' className='p-[10px] w-[100%] border rounded-l-[5px]' />
            <button className='bg-[#0A61DE] text-2xl text-white font-black p-[10px] rounded-r-[5px]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>
          <div className='lg:flex hidden items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#0A61DE]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <select >
              <option value="Иркутск">Иркутск</option>
            </select>
          </div>
        </div>

      </header>
      <main>
        <Outlet />
      </main>
      <footer className='bg-[#1E2126] text-white p-[20px] py-[40px] grid gap-[30px] lg:gap-0 lg:flex justify-around'>
        <div>
          <img src={img1} alt="" className='mb-[20px]' />
          <p className='my-[10px] text-2xl font-bold'>8-800-550-01-09</p>
          <p className='my-[10px]'>postav.irk@mail.ru</p>
          <img src={img2} alt="" />
          <p className='my-[10px]'>© 2023 все права защищены</p>
        </div>
        <div>
          <p className='font-black text-2xl mb-[20px]'>Информация</p>
          <p className='my-[10px] text-[#C7C7C7]'>Оплата</p>
          <p className='my-[10px] text-[#C7C7C7]'>Доставка</p>
          <p className='my-[10px] text-[#C7C7C7]'>Политика обработки персональных данных</p>
          <p className='my-[10px] text-[#C7C7C7]'>Согласие на обработку персональных данных</p>
        </div>
        <div>
          <p className='font-black text-2xl'>Центральный офис и склад</p>
          <div className='flex gap-[20px] my-[15px]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#287FE8]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <p>г. Иркутск ул. Ракитная стр 4 корп 11</p>
          </div>
          <div className='flex gap-[20px] my-[15px]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#287FE8]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <p>8-800-550-01-09</p>
          </div>
          <div className='flex gap-[20px] my-[15px]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#287FE8]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p>Режим работы: Пн-Пт с 9:00 до 18:00, Сб с 9:00 до 14:00</p>
          </div>
          <div className='flex gap-[20px] my-[15px]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#287FE8]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <p>Региональные склады</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
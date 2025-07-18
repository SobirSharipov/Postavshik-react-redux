import React from 'react'
import img1 from '../../assets/imagesSobir/img1 (4).png'
import '../../App.css'

import Card from './component/Card'

//Sobir
const Home = () => {



  return (
    <div>
      <div className='d1 text-white bg-[#1E2126] py-[40px] lg:text-start text-center grid gap-[30px] lg:flex justify-around items-center'>
        <div>
          <p className='font-black text-5xl mb-[40px]'>Новинка в России</p>
          <p>Север - теплоизоляция для сурового климата</p>
          <p className='font-black text-2xl'>от 850 ₽ за 3м2</p>
          <button className='bg-[#287FE8] text-2xl text-white p-[10px] w-[60%] rounded-2xl mt-[30px]'>Подробнее</button>
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
      </div>
      <div>
        <p className='font-black text-5xl m-[30px]'>Теплоизоляция</p>
      </div>
     <Card/>
    </div>
  )
}

export default Home
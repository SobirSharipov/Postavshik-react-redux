import React from 'react'
import img1 from '../../assets/imagesSobir/img1 (4).png'
import '../../App.css'

import Card from './component/Card'
import Card1 from './component/Card1'
import img2 from '../../assets/imagesSobir/img1 (9).png'
import img3 from '../../assets/imagesSobir/img1 (10).png'
import img4 from '../../assets/imagesSobir/img1 (11).png'
import img5 from '../../assets/imagesSobir/img1 (12).png'
import img6 from '../../assets/imagesSobir/img1 (14).png'
import img7 from '../../assets/imagesSobir/img1 (15).png'
import img8 from '../../assets/imagesSobir/img1 (16).png'
import img9 from '../../assets/imagesSobir/img1 (17).png'
import img10 from '../../assets/imagesSobir/img1 (18).png'
import img11 from '../../assets/imagesSobir/img1 (19).png'
import img12 from '../../assets/imagesSobir/img1 (20).png'
import img13 from '../../assets/imagesSobir/img1 (13).png'

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
     <Card/>
     <Card1 p={'Строительные блоки'} im1={img2} im2 ={img3} im3={img4} im4={img5}/>
     <Card1 p={'Листовые материалы'} im1={img6} im2 ={img7} im3={img8} im4={img9}/>
     <Card1 p={'Кровля и водосток'} im1={img10} im2 ={img11} im3={img12} im4={img13}/>
     <div className='text-center my-[30px]'>
      <button className='p-[10px] bg-blue-600 font-black text-2xl lg:w-[30%] text-white mx-auto'>Показать еще</button>
     </div>
    </div>
  )
}

export default Home
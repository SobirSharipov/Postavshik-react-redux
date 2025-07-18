import React from 'react'
import img2 from '../../../assets/imagesSobir/img1 (8).png'

const Card1 = ({p, im1, im2, im3, im4 }) => {
    return (
        <div className='my-[50px]'>
            <div className='flex justify-around my-[40px]'>
                <p className='font-bold text-3xl lg:text-5xl'>{p}</p>
                <button className='p-[10px] hidden lg:block font-black bg-blue-600 text-white lg:w-[15%]'>Смотреть все</button>
            </div>
            <div className='lg:flex grid gap-[30px] lg:gap-0 justify-around my-[50px]'>
                <div className='shadow-2xl w-[90%] mx-auto lg:w-[22%] text-center'>
                    <img src={im1} alt="" className='w-[100%] mb-[30px]'/>
                    <img src={img2} alt="" className='w-[80%] mx-auto my-[10px]'/>
                    <p>Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3</p>
                    <p className='font-black text-4xl text-blue-600'>3 200 ₽/шт.</p>
                    <div className='flex text-5xl justify-center gap-[20px] py-[20px] font-medium '>
                        <button className='p-[10px] '>-</button>
                        <p className='p-[10px] ' >0</p>
                        <button className='p-[10px] '>+</button>
                        <button className='px-[15px] bg-[#1D6BDD] text-white rounded-[5px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                    </div>

                </div>
                <div className='shadow-2xl w-[90%] mx-auto lg:w-[22%] text-center'>
                    <img src={im2} alt="" className='w-[100%] mb-[30px]'/>
                    <img src={img2} alt="" className='w-[80%] mx-auto my-[10px]'/>
                    <p>Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3</p>
                    <p className='font-black text-4xl text-blue-600'>3 200 ₽/шт.</p>
                    <div className='flex text-5xl justify-center gap-[20px] py-[20px] font-medium '>
                        <button className='p-[10px] '>-</button>
                        <p className='p-[10px] ' >0</p>
                        <button className='p-[10px] '>+</button>
                        <button className='px-[15px] bg-[#1D6BDD] text-white rounded-[5px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                    </div>

                </div>
                <div className='shadow-2xl w-[90%] mx-auto lg:w-[22%] text-center'>
                    <img src={im3} alt="" className='w-[100%] mb-[30px]'/>
                    <img src={img2} alt="" className='w-[80%] mx-auto my-[10px]'/>
                    <p>Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3</p>
                    <p className='font-black text-4xl text-blue-600'>3 200 ₽/шт.</p>
                    <div className='flex text-5xl justify-center gap-[20px] py-[20px] font-medium '>
                        <button className='p-[10px] '>-</button>
                        <p className='p-[10px] ' >0</p>
                        <button className='p-[10px] '>+</button>
                        <button className='px-[15px] bg-[#1D6BDD] text-white rounded-[5px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                    </div>

                </div>
                <div className='shadow-2xl w-[90%] mx-auto lg:w-[22%] text-center'>
                    <img src={im4} alt="" className='w-[100%] mb-[30px]'/>
                    <img src={img2} alt="" className='w-[80%] mx-auto my-[10px]'/>
                    <p>Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3</p>
                    <p className='font-black text-4xl text-blue-600'>3 200 ₽/шт.</p>
                    <div className='flex text-5xl justify-center gap-[20px] py-[20px] font-medium '>
                        <button className='p-[10px] '>-</button>
                        <p className='p-[10px] ' >0</p>
                        <button className='p-[10px] '>+</button>
                        <button className='px-[15px] bg-[#1D6BDD] text-white rounded-[5px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
            <hr  className='mx-[30px] my-[40px]'/>
        </div>
    )
}

export default Card1
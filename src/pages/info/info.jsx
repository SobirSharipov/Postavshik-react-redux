import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
//Murod
const Info = () => {
	let data = useSelector(store => store.counter.data)
	let { id } = useParams()
	let user = null

	data.map(el => {
		if (el.id == id) {
			user = el
		}
		return el
	})

	return (
		<div>
			<div className='flex gap-[10px] items-center text-[#707070]'>
				Главная <div className='bg-blue-600 w-[10px] h-[10px]'></div> Каталог{' '}
				<div className='bg-blue-600 w-[10px] h-[10px]'></div>Изоляционные
				материалы <div className='bg-blue-600 w-[10px] h-[10px]'></div>
				Утеплитель ТеплоKnauf Стена плита 50 мм 6 м²
			</div>
			<h1>Утеплитель ТеплоKnauf Стена плита 50 мм 6 м²</h1>
			<div className='flex flex-col lg:flex-row'>
				<img src={user.id} alt='' />
				<div className='flex flex-col gap-[20px]'>
					<p>Цена за штуку</p>
					<h1>1 232 ₽</h1>
					<div className='flex gap-[10px]'>
						<button className='px-[20px] border py-[15px]'>-</button>
						<h1 className='px-[20px] border py-[15px]'>1</h1>
						<button className='px-[20px] border py-[15px]'>+</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Info

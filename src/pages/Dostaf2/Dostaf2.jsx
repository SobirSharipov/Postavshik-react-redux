import React from 'react'

import box from '../../assets/imgMurod/Group (9).png'
///Murod
const Dostaf2 = () => {
	return (
		<div className='px-[5%] flex flex-col gap-[5vh] py-[5vh]'>
			<p className='flex gap-[10px] items-center text-[#707070]'>
				Главная <div className='bg-blue-600 w-[10px] h-[10px]'></div> Доставка
			</p>
			<div className='flex flex-col lg:flex-row items-center gap-y-[5vh] justify-between'>
				<h1 className='text-[#1E2126] text-[40px] lg:text-[50px]'>
					Стоимость услуг
				</h1>
				<div className='flex gap-[20px] items-center'>
					<div className='text-[10px] lg:text-[16px] px-[20px] py-[10px] border border-[#C7C7C7] text-[#C7C7C7]'>
						Правила доставки
					</div>
					<div className='text-[10px] lg:text-[16px] px-[20px] py-[10px] border border-[#1D6BDD] text-[#1D6BDD]'>
						Стоимость услуг
					</div>
				</div>
			</div>
			<section className='flex flex-col lg:flex-row justify-center gap-[15%] items-center gap-y-[5vh]'>
				<div className='w-[90%] lg:w-[45%] flex flex-col gap-[5vh]'>
					<div>
						<h2 className='text-[#1E2126] text-[20px] py-[2vh]'>
							Стоимость доставки по г. Иркутску, в г. Ангарск,в г. Шелехов.
						</h2>
						<div className='flex gap-[20px]'>
							<div className='text-[#707070] text-[7px] lg:text-[15px] flex flex-col gap-[10px]'>
								<p>Доставка в Свердловский район</p>
								<p>Доставка в Октябрьский</p>
								<p>
									Доставка во 2-й Иркутск, Ново-Ленино, Рабочее, предместье
									Марата
								</p>
								<p>Доставка в отдаленные районы города</p>
								<p>
									Доставка до транспортных компаний (в пределах г. Иркутска)
								</p>
								<p>Доставка 5 тонным кран-бортом по городу и пригороду</p>
								<p>Доставка в г. Ангарск</p>
								<p>Доставка в г. Шелехов</p>
								<p>Доставка до с. Хомутово</p>
								<p>Доставка до с. Смоленщина</p>
								<p>Доставка до с. Пивовариха</p>
								<p>Доставка по Мельничному тракту</p>
								<p>Доставка по Байкальскому тракту</p>
							</div>
							<div className='text-[#707070] text-[7px] lg:text-[15px] flex flex-col gap-[10px]'>
								<p>800 ₽</p>
								<p>от 900 ₽</p>
								<p>от 1200 ₽</p>
								<p>от 1500 ₽</p>
								<p>от 900 ₽</p>
								<p>от 3500 ₽</p>
								<p>от 2000 ₽</p>
								<p>1200 ₽</p>
								<p>от 1500 ₽</p>
								<p>от 1000 ₽</p>
								<p>от 1200 ₽</p>
								<p>от 1000 ₽</p>
								<p>от 1000 ₽</p>
							</div>
						</div>
					</div>
				</div>
				<img src={box} alt='' className='w-[90%] lg:w-[40%]'/>
			</section>
		</div>
	)
}

export default Dostaf2

import React from 'react'
import img from '../../assets/imagesSobir/img1 (1).svg'
import img1 from '../../assets/imagesSobir/img1 (2).svg'
import img2 from '../../assets/imagesSobir/img1 (3).svg'

const About = () => {
  return (
    <div className='p-[30px]'>
      <p className='flex gap-[20px]'>Главная <li>Оплата</li></p>
      <p className='font-bold text-6xl my-[30px]'>Оплата</p>
      <div className='lg:flex gap-[30px]'>
        <div className='lg:w-[45%]'>
          <div className='flex gap-[20px] my-[20px]'>
            <img src={img1} alt="" />
            <div>
              <p className='font-black text-2xl'>QR-кодом</p>
              <p>Оплата моментально поступает на счёт продавца и позволяет избежать кассовых разрывов.</p>
            </div>
          </div>
          <div className='flex gap-[20px] my-[20px]'>
            <img src={img2} alt="" />
            <div>
              <p className='font-black text-2xl'>Наличными</p>
              <p>Прямая передача денег продавцу «из рук в руки».</p>
            </div>
          </div>
          <div className='flex gap-[20px] my-[20px]'>
            <img src={img} alt="" />
            <div>
              <p className='font-black text-2xl'>Безналичный расчет </p>
              <p>Перевод осуществляется на основании указанных в реквизитах данных организации.</p>
            </div>
          </div>
        </div>
        <div className='lg:w-[30%]'>
          <p className='my-[20px]'>Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». Благодаря их труду ежегодно сотни питомцев находят свой новый дом.</p>
          <p className='my-[20px]'> Противоположная точка зрения подразумевает, что независимые государства лишь добавляют фракционных разногласий и представлены</p>
        </div>
        <div className='lg:w-[25%]'>
          <p className='font-black text-2xl'>Платежные реквизиты:</p>
          <p>ООО "Поставщик" <br /><br />
            ИНН 7713522570 / КПП 771301001 <br /><br />
            Расчетный счет № 40702810400180000662 <br /><br />
            ОАО «Отп банк» г. Москва <br /><br />
            Кор. Счет № 30101810000000000311 <br /><br />
            БИК 044525311.</p>
        </div>
      </div>
    </div>
  )
}

export default About
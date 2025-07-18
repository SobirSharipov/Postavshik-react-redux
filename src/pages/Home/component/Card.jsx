import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import img2 from '../../../assets/imagesSobir/img1 (8).png'
import { Button, Input, Modal } from 'antd';
import { inc, dec, DeleteUser,AddnewUser } from '../../../reduse/contentSlice'

const Card = () => {
    // let coun = useSelector((store) => store.counter.count)
    let data = useSelector((store) => store.counter.data)
    let dispatch = useDispatch()


    const [isModalOpen, setIsModalOpen] = useState(false);
    let [Addname,setAddname]=useState("")
    let [Addprase,setAddprase]=useState("")
    let [Addstatus,setAddstatus]=useState("true")
    function Add() {
        let newUser={
            name:Addname,
            prase:Addprase,
            status:Addstatus==true,
            id:Date.now()
        }
        AddnewUser(newUser)
        setAddname("")
        setAddprase("")
        setAddstatus("true")
        setIsModalOpen(false)
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div>
                <p className='font-black text-4xl lg:text-5xl m-[30px]'>Теплоизоляция</p>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            </div>
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={Add}
                onCancel={handleCancel}
            >
                <Input value={Addname} onChange={(e)=>setAddname(e.target.value)}></Input>
                <Input value={Addprase} onChange={(e)=>setAddprase(e.target.value)}></Input>
              <select value={Addstatus} onChange={(e)=>setAddstatus(e.target.value)}>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </Modal>
            <div className='lg:flex flex-wrap justify-around my-[50px]'>
                {data.map(el => {
                    return (
                        <div key={el.id} className='lg:w-[22%] w-[80%] mx-auto shadow-2xl text-center my-[30px]'>
                            <img src={el.img} alt="" className='w-[100%] mb-[20px]' />
                            <img src={img2} alt="" className='w-[70%] mx-auto my-[10px]' />
                            <p>{el.name}</p>
                            <p className='font-black text-3xl text-[#1D6BDD]'>{el.prase}</p>
                            <div className='flex text-5xl justify-center gap-[20px] my-[20px] font-medium'>
                                <button className='p-[10px] ' onClick={() => dispatch(dec(el))}>-</button>
                                <p className='p-[10px] ' >{el.count}</p>
                                <button className='p-[10px] ' onClick={() => dispatch(inc(el))}>+</button>
                                <button className='px-[15px] bg-[#1D6BDD] text-white rounded-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <button onClick={() => dispatch(DeleteUser(el.id))}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card
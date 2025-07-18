import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import img1 from "../../assets/Vector.png";
import img2 from "../../assets/Group 140.png";
import img3 from "../../assets/Vector (1).png";
import img4 from "../../assets/Vector (2).png";
import img5 from "../../assets/Group 79.png";

import { addMap, dec, deleteMap, editMap, inc } from "../../reduse/todoCart";

const Contact2 = () => {
  let data = useSelector((store) => store.todoCart.data);
  let dispatch = useDispatch();

  let [addModal, setaddModal] = useState(false);
  let [addName, setaddName] = useState("");
  let [addSena, setaddSena] = useState("");
  let [addImg, setaddImg] = useState("");

  function add() {
    let newUser = {
      id: Date.now().toString(),
      name: addName,
      sena: addSena,
      img: addImg,
      cnt: 1,
    };
    setaddModal(false);

    dispatch(addMap(newUser));
  }

  let [editModal, seteditModal] = useState(false);
  let [editName, seteditName] = useState("");
  let [editSena, seteditSena] = useState("");
  let [editImg, seteditImg] = useState("");
  let [idx, setidx] = useState(null);

  function edit() {
    let newUser = {
      id: idx,
      name: editName,
      sena: editSena,
      img: editImg,
      cnt: 1,
    };
    seteditModal(false);

    dispatch(editMap(newUser));
  }

  function openModal(e) {
    seteditModal(true);
    seteditName(e.name);
    seteditSena(e.sena);
    seteditImg(e.img);
    setidx(e.id);
  }

  return (
    <div className="px-[2%] lg:px-[10%] pb-10">
      <section className="flex items-center gap-2 text-[#707070] py-10">
        <p>Главная</p>
        <div className="w-2 h-2 bg-[#287FE8]"></div>
        <p>Корзина</p>
      </section>

      <section>
        <div className="flex lg:flex-row flex-col items-center justify-between lg:w-3/5 pb-10">
          <p className="text-[#1E2126] text-5xl">Корзина </p>

          <div className="space-x-5 py-5 flex justify-between items-center">
            <button
              onClick={() => setaddModal(true)}
              className="border px-5 rounded"
            >
              Add Product
            </button>

            <button className="border px-5 rounded">Очистить корзину</button>
          </div>
        </div>

        <div>
          {addModal && (
            <div
              style={{ backdropFilter: "blur(6px)" }}
              className="bg-[rgba(0,0,0,0.3)] fixed z-50 flex inset-0 items-center justify-center"
            >
              <div className="w-9/10 lg:w-2/4 p-5 flex flex-col gap-5 rounded-2xl shadow bg-white">
                <p>Add New Address</p>
                <input
                  className="rounded-[5px] border px-2 py-1"
                  type="text"
                  placeholder="Name"
                  value={addName}
                  onChange={(e) => setaddName(e.target.value)}
                />
                <input
                  className="rounded-[5px] border px-2 py-1"
                  type="text"
                  placeholder="Sena"
                  value={addSena}
                  onChange={(e) => setaddSena(e.target.value)}
                />
                <input
                  className="rounded-[5px] border px-2 py-1"
                  type="text"
                  placeholder="Whatsapp"
                  value={addWhatsapp}
                  onChange={(e) => setaddWhatsapp(e.target.value)}
                />
                <input
                  className="rounded-[5px] border px-2 py-1"
                  type="text"
                  placeholder="Img"
                  value={addImg}
                  onChange={(e) => setaddImg(e.target.value)}
                />

                <button
                  className="bg-blue-500 text-white px-2.5 py-1 rounded"
                  onClick={add}
                >
                  Save
                </button>
                <button
                  className="bg-red-500 text-white px-2.5 py-1 rounded"
                  onClick={() => setaddModal(false)}
                >
                  close
                </button>
              </div>
            </div>
          )}

          {editModal && (
            <div
              style={{ backdropFilter: "blur(6px)" }}
              className="bg-[rgba(0,0,0,0.3)] fixed z-50 flex inset-0 items-center justify-center"
            >
              <div className="w-9/10 lg:w-2/4 p-5 flex flex-col gap-5 rounded-2xl shadow bg-white">
                <p>Edit Address</p>

                <input
                  className="rounded-[5px] border px-2 py-1"
                  type="text"
                  placeholder="Name"
                  value={editName}
                  onChange={(e) => seteditName(e.target.value)}
                />
                <input
                  className="rounded-[5px] border px-2 py-1"
                  type="text"
                  placeholder="Sena"
                  value={editSena}
                  onChange={(e) => seteditSena(e.target.value)}
                />

                <input
                  className="rounded-[5px] border px-2 py-1"
                  type="text"
                  placeholder="Img"
                  value={editImg}
                  onChange={(e) => seteditImg(e.target.value)}
                />

                <button
                  className="bg-blue-500 text-white px-2.5 py-1 rounded"
                  onClick={edit}
                >
                  save
                </button>
                <button
                  className="bg-red-500 text-white px-2.5 py-1 rounded"
                  onClick={() => seteditModal(false)}
                >
                  close
                </button>
              </div>
            </div>
          )}
        </div>

        <section className="flex lg:flex-row flex-col items-start justify-between">
          <article className="lg:w-3/5 space-y-5">
            {data.map((e) => (
              <article
                key={e.id}
                className="flex  gap-5  px-[5%] shadow shadow-[#0000001A] p-5 rounded-xl"
              >
                <img className="lg:w-1/10 lg:h-1/10" src={e.img} alt="" />

                <article className="lg:w-9/10 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <p className="text-[14px]">{e.name}</p>

                    <div className="flex items-center gap-5">
                      <button onClick={() => openModal(e)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 text-blue-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </button>

                      <button onClick={() => dispatch(deleteMap(e.id))}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 text-red-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex lg:flex-row flex-col lg:items-center justify-between">
                    <div className="flex items-center gap-5">
                      <p className="text-[#707070] font-extrabold ">
                        {e.sena} ₽/шт.
                      </p>

                      <div className="flex items-center gap-2.5">
                        <button
                          onClick={() => dispatch(dec(e))}
                          className="border border-[#C7C7C7] w-5 h-5 flex justify-center items-center"
                        >
                          -
                        </button>
                        <button className="text-[#707070] border border-[#C7C7C7] w-5 h-5 flex justify-center items-center">
                          {e.cnt}
                        </button>
                        <button
                          onClick={() => dispatch(inc(e))}
                          className="border border-[#C7C7C7] w-5 h-5 flex justify-center items-center"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <p className="text-[#1D6BDD] font-extrabold">
                      Итого: {Number(e.sena) * e.cnt} ₽
                    </p>
                  </div>
                </article>
              </article>
            ))}
          </article>

          <article className="shadow-2xl shadow-[#0000001A] p-10 rounded-2xl lg:w-[35%]">
            <p className="font-bold text-2xl text-center pb-5">
              Оформление заказа
            </p>
            <form className="flex flex-col gap-2.5">
              <input
                className="rounded-[5px] border border-[#C7C7C7] px-2 py-1"
                type="text"
                placeholder="Имя"
              />
              <input
                className="rounded-[5px] border border-[#C7C7C7] px-2 py-1"
                type="text"
                placeholder="Номер телефона"
              />
              <input
                className="rounded-[5px] border border-[#C7C7C7] px-2 py-1"
                type="text"
                placeholder="Почта"
              />
              <select className="text-[#707070] rounded-[5px] border border-[#C7C7C7] px-2 py-1">
                <option value="">Выберите склад</option>
                <option value="">Выберите склад</option>
                <option value="">Выберите склад</option>
              </select>

              <div className="flex justify-between items-center">
                <p className="text-[#707070] text-[15px] font-extrabold">
                  25 товаров
                </p>
                <p className="text-[#1D6BDD] text-[15px] font-extrabold">
                  Итого: 12 690 ₽
                </p>
              </div>

              <button className="text-white bg-[#167FFE] py-1 my-5">
                Оформить заказ
              </button>

              <p className="text-[8px]">
                Нажимая кнопку "оформить заказ", вы автоматически соглашаетесь с
                политикой обработки персональных данных и предоставляете
                согласие на обработку ваших персональных данных
              </p>
            </form>
          </article>
        </section>
      </section>
    </div>
  );
};

export default Contact2;

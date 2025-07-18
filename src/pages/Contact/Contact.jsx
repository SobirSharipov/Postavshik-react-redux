import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import img1 from "../../assets/Vector.png";
import img2 from "../../assets/Group 140.png";
import img3 from "../../assets/Vector (1).png";
import img4 from "../../assets/Vector (2).png";
import img5 from "../../assets/Group 79.png";
import { addMap, deleteMap, editMap } from "../../reduse/toDoList";

const Contact = () => {
  let data = useSelector((store) => store.todolist.data);
  let dispatch = useDispatch();

  let [addModal, setaddModal] = useState(false);
  let [addName, setaddName] = useState("");
  let [addMail, setaddMail] = useState("");
  let [addWhatsapp, setaddWhatsapp] = useState("");
  let [addLoc, setaddLoc] = useState("");
  let [addGraf, setaddGraf] = useState("");
  let [addImg, setaddImg] = useState("");

  function add() {
    let newUser = {
      id: Date.now().toString(),
      name: addName,
      mail: addMail,
      whatsapp: addWhatsapp,
      loc: addLoc,
      graf: addGraf,
      img: addImg,
    };

    addMap(newUser);
  }

  let [editModal, seteditModal] = useState(false);
  let [editName, seteditName] = useState("");
  let [editMail, seteditMail] = useState("");
  let [editWhatsapp, seteditWhatsapp] = useState("");
  let [editLoc, seteditLoc] = useState("");
  let [editGraf, seteditGraf] = useState("");
  let [editImg, seteditImg] = useState("");
  let [idx, setidx] = useState(null);

  function edit() {
    let newUser = {
      id: idx,
      name: editName,
      mail: editMail,
      whatsapp: editWhatsapp,
      loc: editLoc,
      graf: editGraf,
      img: editImg,
    };

    editMap(newUser);
  }

  function openModal(e) {
    seteditModal(true);
    seteditName(e.name);
    seteditMail(e.mail);
    seteditWhatsapp(e.whatsapp);
    seteditLoc(e.loc);
    seteditGraf(e.graf);
    seteditImg(e.img);
    setidx(e.id);
  }

  return (
    <div className="px-[2%] lg:px-[10%] pb-10">
      <section className="flex items-center gap-2 text-[#707070] py-10">
        <p>Главная</p>
        <div className="w-2 h-2 bg-[#287FE8]"></div>
        <p>Контакты</p>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <p className="text-[#1E2126] text-5xl">Контакты </p>
          <button
            onClick={() => setaddModal(true)}
            className="border px-5 rounded"
          >
            Add Map
          </button>
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
                  placeholder="Mail"
                  value={addMail}
                  onChange={(e) => setaddMail(e.target.value)}
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
                  placeholder="Loc"
                  value={addLoc}
                  onChange={(e) => setaddLoc(e.target.value)}
                />
                <input
                  className="rounded-[5px] border px-2 py-1"
                  type="text"
                  placeholder="Graf"
                  value={addGraf}
                  onChange={(e) => setaddGraf(e.target.value)}
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
                  placeholder="Mail"
                  value={editMail}
                  onChange={(e) => seteditMail(e.target.value)}
                />
                <input
                  className="rounded-[5px] border px-2 py-1"
                  type="text"
                  placeholder="Whatsapp"
                  value={editWhatsapp}
                  onChange={(e) => seteditWhatsapp(e.target.value)}
                />
                <input
                  className="rounded-[5px] border px-2 py-1"
                  type="text"
                  placeholder="Loc"
                  value={editLoc}
                  onChange={(e) => seteditLoc(e.target.value)}
                />
                <input
                  className="rounded-[5px] border px-2 py-1"
                  type="text"
                  placeholder="Graf"
                  value={editGraf}
                  onChange={(e) => seteditGraf(e.target.value)}
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

        {data.map((e) => (
          <article
            key={e.id}
            className="flex lg:flex-row flex-col justify-between px-[5%] py-10"
          >
            <div className="lg:w-1/3">
              <p className=" font-bold ">{e.name}</p>
              <div className="text-[14px] text-[#707070] space-y-3 pt-5 ">
                <p className="flex items-center gap-2.5">
                  <img src={img1} alt="" /> {e.phone}
                </p>
                <p className="flex items-center gap-2.5">
                  <img src={img2} alt="" /> {e.mail}
                </p>
                <p className="flex items-center gap-2.5">
                  <img src={img3} alt="" /> {e.whatsapp}
                </p>
                <p className="flex items-center gap-2.5">
                  <img src={img4} alt="" /> {e.loc}
                  11
                </p>
                <p className="flex items-center gap-2.5">
                  <img src={img5} alt="" /> {e.graf}
                </p>
              </div>
            </div>

            <div className="lg:w-[65%] h-[500px] lg:h-[350px]">
              <img
                className="lg:w-full h-[500px] lg:h-[350px] object-cover"
                src={e.img}
                alt=""
              />
              <div className="flex gap-5">
                <button
                  onClick={() => dispatch(deleteMap(e.id))}
                  className="border px-5 rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => openModal(e)}
                  className="border px-5 rounded"
                >
                  Edit
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Contact;

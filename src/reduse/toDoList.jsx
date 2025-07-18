import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assets/Group 173.png";
import img2 from "../assets/Group 174.png";
import img3 from "../assets/Group 173 (1).png";
import img4 from "../assets/Group 173 (2).png";

export let toDoListSlice = createSlice({
  name: "todolist",
  initialState: {
    data: [
      {
        name: "Центральный офис и склад",
        phone: "+7 (3952) 648-139",
        mail: "postav.irk@mail.ru",
        whatsapp: "+7(924) 626-33-40",
        loc: "г. Иркутск ул. Ракитная стр 4 корп 11",
        graf: "Пн-Пт с 9:00 до 18:00, сб с 09:00 до 14:00",
        img: img1,
        id: "1",
      },
      {
        name: "Центральный офис и склад",
        phone: "+7 (3952) 648-139",
        mail: "postav.irk@mail.ru",
        whatsapp: "+7(924) 626-33-40",
        loc: "г. Иркутск ул. Ракитная стр 4 корп 11",
        graf: "Пн-Пт с 9:00 до 18:00, сб с 09:00 до 14:00",
        img: img2,
        id: "2",
      },
      {
        name: "Центральный офис и склад",
        phone: "+7 (3952) 648-139",
        mail: "postav.irk@mail.ru",
        whatsapp: "+7(924) 626-33-40",
        loc: "г. Иркутск ул. Ракитная стр 4 корп 11",
        graf: "Пн-Пт с 9:00 до 18:00, сб с 09:00 до 14:00",
        img: img3,
        id: "3",
      },
      {
        name: "Центральный офис и склад",
        phone: "+7 (3952) 648-139",
        mail: "postav.irk@mail.ru",
        whatsapp: "+7(924) 626-33-40",
        loc: "г. Иркутск ул. Ракитная стр 4 корп 11",
        graf: "Пн-Пт с 9:00 до 18:00, сб с 09:00 до 14:00",
        img: img4,
        id: "4",
      },
    ],
  },

  reducers: {
    deleteMap: (state, action) => {
      state.data = state.data.filter((e) => e.id != action.payload);
    },

    addMap: (state, action) => {
      state.data = [...state.data, action.payload];
    },

    editMap: (state, action) => {
      state.data = state.data.map((e) =>
        e.id == action.payload.id ? action.payload : e
      );
    },
  },
});

export let { deleteMap, addMap, editMap } = toDoListSlice.actions;

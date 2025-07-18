import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

export let toDoCartSlice = createSlice({
  name: "todoCart",
  initialState: {
    data: [
      {
        id: "1",
        img: img1,
        name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        sena: "1 345",
        cnt: 0,
      },
      {
        id: "2",
        img: img2,
        name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        sena: "1 345",
        cnt: 0,
      },
      {
        id: "3",
        img: img3,
        name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        sena: "1 345",
        cnt: 0,
      },
      {
        id: "4",
        img: img1,
        name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        sena: "1 345",
        cnt: 0,
      },
      {
        id: "5",
        img: img2,
        name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
        sena: "1 345",
        cnt: 0,
      },
    ],
  },

  reducers: {
    inc: (state, action) => {
      state.data = state.data.map((e) =>
        e.id == action.payload.id ? { ...e, count: (e.cnt += 1) } : e
      );
    },

    dec: (state, action) => {
      state.data = state.data.map((e) =>
        e.id == action.payload.id ? { ...e, count: (e.cnt -= 1) } : e
      );
    },

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

export let { deleteMap, addMap, editMap } = toDoCartSlice.actions;

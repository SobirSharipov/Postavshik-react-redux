import { createSlice } from "@reduxjs/toolkit";
import img0 from '../assets/imagesSobir/img1 (3).png'
import img1 from '../assets/imagesSobir/img1 (5).png'
import img2 from '../assets/imagesSobir/img1 (6).png'
import img3 from '../assets/imagesSobir/img1 (7).png'

export let counterSlice = createSlice({
    name: "counter",
    initialState: {

        data: [
            {
                name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
                img: img1,
                count: 0,
                prase: "2 491 ₽/шт.",
                status: true,
                id: "1"
            },
            {
                name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
                img: img2,
                count: 0,
                prase: "3 200 ₽/шт.",
                status: true,
                id: "2"
            },
            {
                name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
                img: img3,
                count: 0,
                prase: "1 345 ₽/шт.",
                status: false,
                id: "3"
            },
            {
                name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
                img: img0,
                count: 0,
                prase: "2 600 ₽/шт.",
                status: false,
                id: "4"
            }
        ]
    },
    reducers: {
        inc: (state, action) => {
            state.data = state.data.map(e => e.id == action.payload.id ? { ...e, count: e.count += 1 } : e)
        },
        dec: (state,action) => {
            state.data = state.data.map(el => el.id == action.payload.id ? { ...el, count: el.count -= 1 } : el)
        },
        DeleteUser: (state, action) => {
            state.data = state.data.filter(el => el.id != action.payload)
        },
        AddnewUser: (state, action) => {
            state.data = [...state.data, action.payload]
        }

    }
})

export let { inc, dec, DeleteUser, AddnewUser } = counterSlice.actions
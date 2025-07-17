import { createSlice } from "@reduxjs/toolkit";

export let counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
        data: [
            {
                name: "Sobir",
                age: "21",
                status: true,
                id: "1"
            },
            {
                name: "M Fahim",
                age: "2",
                status: true,
                id: "2"
            },
            {
                name: "Said",
                age: "20",
                status: false,
                id: "3"
            }
        ]
    },
    reducers: {
        inc: (state) => {
            state.count += 1
        },
        dec: (state) => {
            state.count -= 1
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
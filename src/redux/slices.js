import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    isDarkMode: JSON.parse(localStorage.getItem("dark")) || false,

}

const darkMode = createSlice({

    name: "darkMode",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.isDarkMode = !state.isDarkMode
            localStorage.setItem("dark", JSON.stringify(state.isDarkMode));
        },
    },
},)

export const { toggleMode } = darkMode.actions
export default darkMode.reducer
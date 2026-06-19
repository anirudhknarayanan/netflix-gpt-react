import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"
import moviesSlice from "./moviesSlice"
import gptslice from "./gptSlice"

const appStore = configureStore({
    reducer : {
          user : userSlice,
          movies : moviesSlice,
          gpt : gptslice
    }
})

export default appStore
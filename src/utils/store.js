import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"
import moviesSlice from "./moviesSlice"
import gptslice from "./gptSlice"
import configSlice from "./configSlice"

const appStore = configureStore({
    reducer : {
          user : userSlice,
          movies : moviesSlice,
          gpt : gptslice,
          config : configSlice

    }
})

export default appStore
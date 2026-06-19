import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false
    },
    reducers : {
        toggleGtpSearch : (state)=>{
            state.showGptSearch = !state.showGptSearch

        }
    }
    
})

export const {toggleGtpSearch} = gptSlice.actions

export default gptSlice.reducer
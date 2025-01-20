import { createSlice } from "@reduxjs/toolkit";


const menUSlice = createSlice({
    name:'app',
    initialState:{
        ismenuOpen: true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.ismenuOpen = !state.ismenuOpen
        },
        closeMenu:(state)=>{
            state.ismenuOpen= false;
        }   
     }
});

export const {toggleMenu,closeMenu} = menUSlice.actions;
export default menUSlice.reducer;
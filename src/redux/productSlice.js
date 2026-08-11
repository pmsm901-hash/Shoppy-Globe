import { createSlice } from "@reduxjs/toolkit";

const productSlice =createSlice({
    name:"products",
    initialState:{
        items:[],
        search:"",
    },
    reducers:{


        //stored products fetched from API
        setProduts:(state,action)=>{
            state.items=action.payload;
        },

        //store search text
        setSearch:(state,action)=>{
            state.search=action.payload;
        },

        //clear
        clearSearch:(state)=>{
            state.search="";
        }
    }
});
export const {setProduts,setSearch,clearSearch}=productSlice.actions;

export default productSlice.reducer;
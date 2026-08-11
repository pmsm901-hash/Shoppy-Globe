import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        //Add product to Cart
        addItem:(state,action)=>{
            const existingItem=state.items.find(
                (item)=>item.id === action.payload.id
            );
            if(existingItem)
            {
                existingItem.quantity+=1;
            }
            else
            {
                state.items.push({
                    ...action.payload,
                    quantity:1,

                });
            }
        },

        //remove product from cart
        
        removeItem:(state,action)=>{
            state.items=state.items.filter(
            (item)=>item.id !== action.payload
            );
        },

        //Increase Quantity
        
        increaseQuantity:(state,action)=>{
            const item= state.items.find(
                (item)=>item.id === action.payload
            );
            if(item)
            {
                item.quantity+=1;
            }
        },


        //Decrease Quantity
        decreaseQuantity:(state,action)=>{
            const item=state.items.find(
                (item)=>item.id === action.payload
            );
            if(item && item.quantity > 1)
            {
                item.quantity-=1;
            }
        },

        //empty cart
        clearCart:(state)=>{
            state.items=[];
        },
    }
})
export const { addItem,removeItem,increaseQuantity,decreaseQuantity,clearCart}=cartSlice.actions;
export default cartSlice.reducer;
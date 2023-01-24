import { add_to_cart } from "./ActionType";
const initialState = {
    cartItem: []
}
export const CartReducer = (state=initialState, action)=>{
    console.log("Reducer Data: ", state.cartItem)
    switch(action.type){
        case add_to_cart: return{
         ...state,
         cartItem: [...state.cartItem, action.data]

        }
        default: return state
    }
}
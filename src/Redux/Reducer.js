import { add_to_cart } from "./ActionType";
const initialState = {
    cartItem: []
}
export const cartReducer = (state=initialState, action)=>{
    switch(action.type){ 
        case add_to_cart:{
            const tempData= state.cartItem.find((item)=> item.id=== action.data.id)
            if(!tempData){
                return{ 
                    ...state,
                    cartItem: [...state.cartItem, action.data]
                   }
            }  
            else return{
                ...state
            }
        }
          
        default: return state
    }
}
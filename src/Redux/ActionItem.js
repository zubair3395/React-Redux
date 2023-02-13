import { add_to_cart } from "./ActionType";
export const addCart = (data)=>{
    return{
        type: add_to_cart,
        data: data
    }
}
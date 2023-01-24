import { add_to_cart } from "./ActionType";
export const AddCart = (data)=>{
    console.log("Data in Action: ", data)
    return{
        type: add_to_cart,
        data: data
    }
}
import { form3_image } from "../Action";

const form3_imageInitialState={
    image: {},
}
export function Form3_Image(state=form3_imageInitialState, action){
    switch (action.type) {
        case form3_image:
            return{
                ...state,
                image: action.image
            }
        default:
            return state
    }
}
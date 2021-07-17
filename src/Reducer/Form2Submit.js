import { form2_submit } from "../Action";

const form2_submitInitialState={
    color: "#fff",
    bgcolor: "",
    submited: false
}
export function Form2_Submit(state=form2_submitInitialState, action){
    switch (action.type) {
        case form2_submit:
            return{
                ...state,
                color: action.color,
                bgcolor: action.bgcolor,
                submited: action.submited
            }
        default:
            return state
    }
}
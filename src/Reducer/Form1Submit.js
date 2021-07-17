import { form1_submit } from "../Action";

const form1_submitInitialState={
    color: "#fff",
    bgcolor: "",
    submited: false
}
export function Form1_Submit(state=form1_submitInitialState, action){
    switch (action.type) {
        case form1_submit:
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
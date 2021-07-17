export const form1_submit = "form1_submit";
export const form2_submit = "form2_submit";
export const form3_image = "form3_image";

export const Form1_Submit=()=>({
    type: form1_submit,
    color: "",
    bgcolor: "",
    submited: false
})
export const Form2_Submit=()=>({
    type: form2_submit,
    color: "",
    bgcolor: "",
    submited: false
})
export const Form3_Image=()=>({
    type: form3_image,
    image: {},
})
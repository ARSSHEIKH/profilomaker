import { firebaseConfig as firebase } from "../firebaseConfig";

export const SetToLocalStorage = (email) => {
    AddToStorage(email)
}
export const fromVerificationPage = (email) => (e) => {
    e.preventDefault();
    AddToStorage(email)
}
export const AddToStorage = async (email) => {
    const uri = "http://localhost:3000" || "https://profilomaker-5a21c.web.app"
    var actionCodeSettings = {
        url: `http://localhost:3000/VerificationPage`,
        handleCodeInApp: true,
    };
    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        .then(() => {
            window.localStorage.setItem('emailForSignIn', email);
            alert("Mail has been send to your email address! Please complete your verification")
            // window.location.replace("/VerificationPage")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode) 
            console.log(errorMessage)
        });
}
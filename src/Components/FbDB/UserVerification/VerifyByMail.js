import { firebaseConfig } from "../Configs/fbsConfig"
import "firebase/auth";

function sendingVerification() {
    var actionCodeSettings = {
      url: 'http://localhost:3000/Signup' || "https://arsprostore.web.app/Signup",
      handleCodeInApp: true,
    };
    firebaseConfig.auth().sendSignInLinkToEmail(userValues.email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem('emailForSignIn', userValues.email);
        window.localStorage.setItem('passwordSignIn', userValues.password);
        window.localStorage.setItem('verificationSignIn', userValues.verified);
        alert("Email has been send to email address")
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        // ...
      });
  }
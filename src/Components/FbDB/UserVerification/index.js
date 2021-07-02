import { firebaseConfig } from "../Configs/fbsConfig"
import "firebase/auth";

function emailLinkComplete() {
    if (firebaseConfig.auth().isSignInWithEmailLink(window.location.href)) {
      var email = window.localStorage.getItem('emailForSignIn');
      var password = window.localStorage.getItem('passwordSignIn');
      var verified = window.localStorage.getItem('verificationSignIn');
      if (!email) {
        setFormDisabler("none")
        setVfDisabler("visible")
        setRefForm(
          <div style={{ visibility: formDisabler }}>
            <h4>Please Verify Your Email Address to Process</h4>
            <button onClick={sendingVerification}>Verify Email</button>
          </div>
        )
      }
      else {
        firebaseConfig.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            firebaseConfig.database().ref(`storeUsers/user${userCredential.user.uid}`).update(
              { verified: true, id: userCredential.user.uid })
              .then(() => {
                window.location.replace("/login")

                window.localStorage.removeItem("emailForSignIn");
                window.localStorage.removeItem("passwordSignIn");
                window.localStorage.removeItem("verificationSignIn");
              })
              .catch((err) => {
                console.log(err)
                console.log(err)
              })
          })
      }
    }
  }
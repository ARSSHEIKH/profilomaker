import { firebaseConfig } from "../../../firebaseConfig";
import "firebase/auth";

let passError
export const AddingToDB = async(userValues) => {
    console.log(userValues)
    firebaseConfig.auth().createUserWithEmailAndPassword(userValues.email, userValues.password)
        .then((userCredential) => {
            console.log(userCredential)
            // firebaseConfig.database().ref('/storeUsers/user' + (userCredential.user.uid)).update(userValues)
            //     .then((result) => {
            //         setFormDisabler("none")
            //         setVfDisabler("visible")
            //         setRefForm(
            //             <div style={{ visibility: formDisabler }}>
            //                 <h4>Please Verify Your Email Address to Process</h4>
            //                 <button onClick={sendingVerification}>Verify Email</button>
            //             </div>
            //         )
            //         // sendingVerification()

            //     })
            //     .catch((error) => {
            //         var errorCode = error.code;
            //         var errorMessage = error.message;
            //         console.log(errorCode)
            //         setLblError(errorMessage)

            //     });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            passError = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        });
}
const AddUser = async(userValues) => {
    AddingToDB(userValues)
    setTimeout(() => {
        return passError
    }, 3000);
    // firebaseConfig.database().ref('storeUsers').orderByChild('username').equalTo(userValues.username).on("value", function (snapshot) {
    //     if (snapshot.val() === null) {
    //         console.log(snapshot.val())
    //         AddingToDB()
    //     }
    //     else {
    //         setLblError(`Username Exist, Please try another`);
    //         return
    //     }
    //     return
    // })
}


export default AddUser;
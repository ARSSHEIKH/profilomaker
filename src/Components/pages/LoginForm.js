import { useState } from 'react';
import "../css/login.css";
import { firebaseConfig as firebase } from "../../firebaseConfig";
import "firebase/auth";
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    document.title = "Login";
    const errors = {}
    const [credentials, setCredentials] = useState()
    const [credentialError, setCredentialError] = useState()
    const [values, setValues] = useState({
        email: '',
        password: '',
        // showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const UserLogin = (userValues) => (e) => {
        e.preventDefault();
        setCredentials("Loading ...")
        setCredentialError("")
        console.log(userValues.email, userValues.password)
        firebase.auth().signInWithEmailAndPassword(userValues.email, userValues.password)
          .then((userCredential) => {
              console.log(userCredential)
              firebase.database().ref(`profiloUsers/user${userCredential.user.uid}/verified`)
              .on("value",function (getVerified) {
                const getVerification = getVerified.val();
                if (getVerification === true) {
                    setCredentials("Login Successfully");
                    window.location.replace("/ProfileForm1");
                }
                else if(getVerification === false){
                    setCredentialError("Account is not Verified !! Wait ....")
                  window.location.replace("/VerificationPage")
                }

              })
          })
          .catch((error)=>{
            setCredentials("")
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            if(errorMessage === "There is no user record corresponding to this identifier. The user may have been deleted.")
                setCredentialError("Email address or password not correct !")
            else if(errorMessage === "The password is invalid or the user does not have a password.")
                setCredentialError("Email address or password not correct !")
            else 
                setCredentialError(errorMessage)
          })
    }

    const validate = (values) => {
        let checkValidation = false
        if (!values.email) {
            errors.email = '';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid Format';
            checkValidation = false;
        }
    }
    const valuesvalidate= validate(values)
    return (
        <div className="container">
            <div className="login-form" id="login-form">
                <h2>Login to your Account</h2>
                <form id="profileInputForm1" onSubmit={UserLogin(values)}>
                    <div className="form-group col-md-12">
                        <span id="required-mark">{errors.email && errors.email}</span>
                        <input
                            type="email"
                            className=""
                            id="email"
                            placeholder="Email Address"
                            required
                            autocomplete="on"
                            value={values.email}
                            onChange={handleChange('email')}
                        />
                        <span id="email-error" style={{ color: 'red' }}></span>
                    </div>
                    <div className="form-group col-md-12">
                        <input
                            type="password"
                            className="col"
                            id="loginpassword"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange('password')}
                            required
                        />
                        <span id="password-error" className="col" style={{ color: 'red' }}></span>
                    </div>
                    <div className="form-group col-md-12">
                        <input type="submit" className="btn-signup btn-lg" value="Login" />
                        <br/><span id="">{credentials}</span>
                    </div>
                    <br/><span id="required-mark">{credentialError}</span>
                    <div className="form-group"></div>
                    <Link to="/signup" className="CreateNewAccount">Or create new one?</Link>

                </form>
            </div>
        </div>
    )
}
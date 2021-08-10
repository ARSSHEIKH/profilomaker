import { useState } from 'react';
import "../css/login.css";
import { firebaseConfig as firebase } from "../../firebaseConfig";
import "firebase/auth";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import LinearProgressBar from "../ProgressBars/LinearProgressBar"

export const LoginForm = () => {
    document.title = "Login";
    const history = useHistory()
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
        axios.get(`http://localhost:3200/users/${userValues.email}`)
            .then((res) => {
                console.log(res)
                if (res.data.password === userValues.password) {
                    if (res.data.verified === true) {
                        setCredentials("Login Successfully");
                        localStorage.setItem("user_id", res.data._id)
                        history.push(`/ProfileForm1`);
                    }
                    else {
                        setCredentials("");
                        setCredentialError("Please verify your account, Verification Email was send you")
                    }
                }
                else {
                    setCredentials("");
                    setCredentialError("Invalid Email or Password")
                }
            })
            .catch((err) => {
                console.log(err)
                setCredentials("");
                setCredentialError("Email not available")
                // history.push("/VerificationPage")
            })
        // firebase.auth().signInWithEmailAndPassword(userValues.email, userValues.password)
        //     .then((userCredential) => {
        //         firebase.database().ref(`profiloUsers/user${userCredential.user.uid}/verified`)
        //             .on("value", function (getVerified) {
        //                 const getVerification = getVerified.val();
        //                 if (getVerification === true) {
        //                     setCredentials("Login Successfully");
        //                     history.push("/ProfileForm1");
        //                 }
        //                 else if (getVerification === false) {
        //                     setCredentialError("Account is not Verified !! Wait ....")
        //                     history.push("/VerificationPage")
        //                 }

        //             })
        //     })
        //     .catch((error) => {
        //         setCredentials("")
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
        //         console.log(errorCode)
        //         console.log(errorMessage)
        //         if (errorMessage === "There is no user record corresponding to this identifier. The user may have been deleted.")
        //             setCredentialError("Email address or password not correct !")
        //         else if (errorMessage === "The password is invalid or the user does not have a password.")
        //             setCredentialError("Email address or password not correct !")
        //         else
        //             setCredentialError(errorMessage)
        //     })
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
    const valuesvalidate = validate(values)
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
                            className=""
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
                        <br /><span id="">{credentials}</span>
                    </div>
                    <br />
                    <span id="required-mark"
                        style={{fontSize: "12px", fontWeight:"bold"}}
                    >{credentialError}</span><br />
                    <div>
                        <Link to="/signup" className="CreateNewAccount">Or create new one?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
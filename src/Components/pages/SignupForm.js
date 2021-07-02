
import { useState, useEffect } from 'react';
import "../css/login.css";
// import AddUser from "../FbDB/AddToDB/AddUserToDB";
import { firebaseConfig } from "../../firebaseConfig";
import { Link, useHistory } from 'react-router-dom';
import {SetToLocalStorage} from "../SetToLocalStorage"
import "firebase/auth";

export const SignupForm = () => {
    const errors = {}
    const history = useHistory();
    const [credentials, setCredentials] = useState()
    const [passError, setPassError] = useState()
    const [userValues, setUserValues] = useState({
        email: "",
        password: '',
        verified: false,
        confPass: '',
        // showPassword: false,
        // showConfPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setUserValues({ ...userValues, [prop]: event.target.value });
    };

    const validate = (values) => {
        let checkValidation = false
        if (!values.email) {
            errors.email = '*';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
            checkValidation = false;
        }
        else checkValidation = true;
        if (!values.password) {
            errors.password = '*';
        }
        // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.password)) {
        //     errors.password = 'Invalid password address';
        // }
        if (!values.confPass) {
            errors.confPass = '*';
        }
        // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.confPass)) {
        //     errors.confPass = 'Invalid Confirm Password';
        // }
        else if(values.password !== values.confPass){
            errors.confPass = 'Password doesnot match';
            checkValidation = false;
        }
        else checkValidation = true;
        
        return checkValidation;
    };
    const valuesvalidate= validate(userValues)
    const FormSubmit = async(event) => {
        event.preventDefault();
        setCredentials("Loading ...")
        setPassError("")
        if(valuesvalidate === true){
        
            firebaseConfig.auth().createUserWithEmailAndPassword(userValues.email, userValues.password)
            .then((userCredential) => {
                
                firebaseConfig.database().ref('/profiloUsers/user' + (userCredential.user.uid)).update(userValues)
                .then((result) => {
                    console.log(result)
                    
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)
                    setPassError(errorMessage)
                    setCredentials("")
                });
                setTimeout(() => {
                    setCredentials("Register Successfully !")
                    SetToLocalStorage(userValues.email, userValues.password)
                    // history.push("/VerificationPage") 
                    // window.location("http://localhost:3000/VerificationPage")
                    // window.open('http://localhost:3000/VerificationPage', '_blank', 'top=500,left=200,frame=false,nodeIntegration=no')

                }, 5000);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                setPassError(errorMessage)
                setCredentials("")
            });
        }
    }
    return (
        <>
            <div className="container">
                <div className="login-form" id="login-form">
                    <h2>Create New Account</h2>

                    <form id="profileInputForm1" onSubmit={FormSubmit} method="GET">
                        <div className="form-group">
                            <div className="form-group col-md-12"> 
                            <span id="required-mark">{errors.email && errors.email}</span>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className=""
                                    placeholder="Email Address"
                                    value={userValues.email}
                                    onChange={handleChange('email')}
                                    required
                                    autoComplete="on"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-group col-md-12">
                                <span id="required-mark">{errors.password}</span>

                                <input
                                    type="password"
                                    name="password"
                                    className=""
                                    id="siguppassword"
                                    value={userValues.password}
                                    onChange={handleChange('password')}
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-12">
                                <span id="required-mark">{errors.confPass}</span>
                                <input
                                    type="password"
                                    name="confpassword"
                                    className=""
                                    id="sigupConfpassword"
                                    value={userValues.confPass}
                                    onChange={handleChange('confPass')}
                                    placeholder="Confirm Password"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group  col-md-12">
                            <input type="submit" className="btn-signup btn-lg" value="Register" />
                            <label id="error-emptyfields"></label>
                            <br/><span id="">{credentials}</span>
                        </div>
                        <br/><span id="required-mark">{passError}</span>
                        <div className="form-group col-md-12">
                            <Link to="/" className="CreateNewAccount">Login Instead?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


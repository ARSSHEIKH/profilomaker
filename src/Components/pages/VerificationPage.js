import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, Input, Button, FormControl } from '@material-ui/core/';
import { firebaseConfig as firebase } from "../../firebaseConfig"
import { Link, useHistory } from 'react-router-dom';
import {fromVerificationPage} from "../SetToLocalStorage"

let gEmail, gPassword;

const useStyles = makeStyles((theme) => ({
    mainRoot: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 40,
        padding: 40
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function VerificationPage() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: '',
    });
    const history = useHistory()
    document.title = "Account Verification";
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(setValues)
    };

    function emailLinkComplete() {
        if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
            // var email = window.localStorage.getItem('emailForSignIn');
            const urlParams = window.location.href;
            urlParams.indexOf("apiKey")
            const email = urlParams.slice(54, urlParams.indexOf("?apiKey"));

            console.log(email)
            if (!email) {
                return
            }
            else {
                firebase.database().ref('profiloUsers').orderByChild('email').equalTo(email).on("value", function (snapshot) {
                    const getVal = snapshot.val();
                    const getId = Object.keys(getVal)
                    console.log(getVal)
                    firebase.database().ref(`profiloUsers/${getId}`).update({ verified: true, id: getId })
                        .then(() => {
                            history.push("/")
                            // window.localStorage.removeItem("emailForSignIn");
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                })
            }
        }
    }
    emailLinkComplete()
    return (
        <div className="login-form">
            <h4>Please Verify your Account</h4>
            <form className={classes.root}
            onSubmit={fromVerificationPage(values.email)}
            >
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input
                        id="my-input"
                        type="email"
                        aria-describedby="my-helper-text"
                        required
                        onChange={handleChange('email')}
                    />
                </FormControl>
                <br />
                <Link to="/">Login</Link>
                <Button
                    type="Submit"
                    variant="contained"
                    color="primary"
                    // onClick={SetToLocalStorage(values.email)}
                >
                    Send</Button>
            </form>
        </div>
    )
}
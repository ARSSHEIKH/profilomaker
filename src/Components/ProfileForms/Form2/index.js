import { useEffect, useState } from 'react';
import experienceList from "./experienceList"
import degreeLevelList from "./degreeLevel"
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import "./form2.css";
import { ChangingPage } from "../ChangingPage"
import { useSelector, useDispatch } from 'react-redux'
import { form2_submit } from "../../../Action/";
import "./form2.css"
import axios from 'axios';


export const ProfileForm2 = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const data = useSelector((userState) => userState)
    var urlParams = localStorage.getItem("user_id")
    const [values, setValues] = useState({
        degreeLevel: '',
        careerLevel: '',
        experience: '',
        designation: '',
        pfCity: '',
        salary: '',
        fbProfile: '',
        inProfile: '',
        twtProfile: '',
        otherProfile: '',
        user_id: urlParams
    });

    const [tab1Style, setTab1Style] = useState({
        bgColor: "",
        color: "rgb(0, 0, 0)"
    });
    useEffect(() => {
        if (data.Form1_Submit.submited === true)
            setTab1Style({
                ...tab1Style, ["bgColor"]: data.Form1_Submit.bgcolor, ["color"]: data.Form1_Submit.color
            })
        else setTab1Style({ ...tab1Style, ["bgColor"]: "#fff" })
    }, [])

    const useStyles = makeStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
        },
        dvTabs: {
            display: "flex",
            flexDdirection: "row",
            justifyContent: "space-between",
            maxWidth: "400px",
            margin: "1rem",
            marginLeft: "2rem",
            marginBottom: "-2rem"
        },
        tab1: {
            backgroundColor: tab1Style.bgColor,
            border: "3px solid rgb(203, 209, 203)",
            maxWidth: "70px",
            height: "70px",
            borderRadius: "100px",
            fontWeight: "bold",
            fontSize: "30px",
            color: tab1Style.color,
            cursor: "pointer",
        },
        tab2: {
            backgroundColor: "rgb(255, 123, 0)",
            border: "none",
            maxWidth: "70px",
            height: "70px",
            borderRadius: "100px",
            fontWeight: "bold",
            fontSize: "30px",
            color: "rgb(0, 0, 0)",
            cursor: "pointer",
        },
        tab3: {
            backgroundColor: "#fff",
            border: "3px solid rgb(203, 209, 203)",
            maxWidth: "70px",
            height: "70px",
            borderRadius: "100px",
            fontWeight: "bold",
            color: "rgb(0, 0, 0)",
            cursor: "pointer",
        },
        tabsStrings: {
            textAlign: "center",
        },
        lineTabs: {
            width: "10px",
            height: "10px",
            backgroundColor: "rgb(235, 243, 235)",
            marginTop: "30px",
        },
        dvSelectOpt: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginBottom: "2rem",
        },
        inpSelects: {
            // flex: 1,
            maxWidth: "20rem",
            // marginLeft: "1rem"
        },
        inputs: {
            // flex: 1,
            maxWidth: "20rem",
            marginTop: "1.5rem"
        },

    });
    const classes = useStyles();

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(event.target.value)
    }
    const Form2_Submit = (e) => {
        var urlParams = localStorage.getItem("user_id")
        e.preventDefault();
        dispatch({
            type: form2_submit,
            color: "#fff",
            bgcolor: "green",
            submited: true
        })
        axios.post(`http://localhost:3200/add_profile/user/:${urlParams}/form2`, values)
            .then((res) => {
                console.log(res)
                if (res.status === 201)
                    history.push("/ProfileForm3/Submit");
            })
            .catch((err) =>{
                axios.post(`http://localhost:3200/update_profile/user/form2`, values)
                    .then((res) => {
                        console.log(res)
                        if (res.status === 201)
                            history.push("/ProfileForm3/Submit");
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
    }
    return (
        <>
            <div className={classes.root}>
                <div className={`${classes.dvTabs} row col`}>
                    <button className={`${classes.tab1} dvOne-tab`} id="dvOne-tab"
                        onClick={() => { ChangingPage(history, "ProfileForm1") }}
                    >
                        <h3 className={`${classes.tabsStrings} tabs-strings`} id="tabs-strings">1</h3>
                    </button>
                    <div className={`${classes.lineTabs} line-tabs col`}></div>

                    <button className={`${classes.tab2} dvTwo-tab`} id="dvTwo-tab">
                        <h3 className={`${classes.tabsStrings} tabs-strings`} id="tabs-strings">2</h3>
                    </button>
                    <div className={`${classes.lineTabs} line-tabs col`}></div>

                    <button className={`${classes.tab3} dvThree-tab`} id="dvThree-tab"
                        onClick={() => { ChangingPage(history, "ProfileForm3") }}
                    >
                        <h3 className={`${classes.tabsStrings} tabs-strings`} id="tabs-strings">3</h3>
                    </button>
                </div>

                <div className="" id="profileForm-form2">
                    <form onSubmit={Form2_Submit}>
                        {/* <h2>Form 2</h2> */}

                        <div className={classes.dvSelectOpt}>
                            <FormControl required className={`${classes.formControl} ${classes.inpSelects} form-control`}>
                                <InputLabel htmlFor="degreeLevel-native-required">Degree Level</InputLabel>
                                <Select
                                    native
                                    value={values.degreeLevel}
                                    onChange={handleChange('degreeLevel')}
                                    name="degreeLevel"
                                    inputProps={{
                                        id: 'degreeLevel-native-required',
                                    }}
                                >
                                    {degreeLevelList.map((text, key) => {
                                        return <option value={text} key={key}>{text}</option>
                                    })}

                                </Select>
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>

                            <FormControl required className={`${classes.formControl} ${classes.inpSelects} form-control`}>
                                <InputLabel htmlFor="careerLevel-native-required">Career Level</InputLabel>
                                <Select
                                    native
                                    value={values.careerLevel}
                                    onChange={handleChange('careerLevel')}
                                    name="careerLevel"
                                    inputProps={{
                                        id: 'careerLevel-native-required',
                                    }}
                                >
                                    <option value="Entry">Entry</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Experienced / Professional">Experienced / Professional</option>
                                    <option value="Department Head / MS">Department Head / MS</option>
                                    <option value="President / CEO">President / CEO</option>


                                </Select>
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>

                            <FormControl required className={`${classes.formControl} ${classes.inpSelects} form-control`}>
                                <InputLabel htmlFor="experience-native-required">Experience Level</InputLabel>
                                <Select
                                    native
                                    value={values.experience}
                                    name="experience"
                                    inputProps={{
                                        id: 'experience-native-required',
                                    }}
                                    onChange={handleChange('experience')}
                                >
                                    {experienceList.map((text, key) => {
                                        return (
                                            <>
                                                <option value={text}>{text}</option>
                                            </>
                                        )
                                    })}
                                </Select>
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>
                        </div>

                        <div className={classes.dvSelectOpt}>
                            <TextField className={`${classes.inputs} input`}
                                id="Designation"
                                label="Prefered Designation"
                                variant="outlined"
                                required
                                value={values.designation}
                                onChange={handleChange('designation')}
                            />
                            <TextField className={`${classes.inputs} input`}
                                id="pfCity"
                                label="Prefered City"
                                variant="outlined"
                                required
                                value={values.pfCity}
                                onChange={handleChange('pfCity')}
                            />
                            <TextField className={`${classes.inputs} input`}
                                id="salary"
                                label="Expected Salary"
                                variant="outlined"
                                required
                                value={values.salary}
                                onChange={handleChange('salary')}
                            />
                        </div>

                        {/* <!--Social Links--> */}
                        <div className="dvSocialAcc">
                            <h4>Social Accounts</h4>
                            <div className="GrpSocialLinks">
                                <div className="dvProfilesLinks">
                                    <span className="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-facebook social-icon-svg-fb" viewBox="0 0 16 16">
                                            <path
                                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                    </span>
                                    <input
                                        type="url"
                                        className="input_for_pfLinks"
                                        id="SocialLink1"
                                        placeholder="Faceook Profile"
                                        value={values.fbProfile}
                                        onChange={handleChange('fbProfile')}
                                    />
                                </div>

                                <div className="dvProfilesLinks">
                                    <div className="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-twitter social-icon-svg-twt" viewBox="0 0 16 16">
                                            <path
                                                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="url"
                                        className="input_for_pfLinks"
                                        id="SocialLink2"
                                        placeholder="Twitter Profile"
                                        value={values.twtProfile}
                                        onChange={handleChange('twtProfile')}
                                    />
                                </div>

                                <div className="dvProfilesLinks">
                                    <span className="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-linkedin social-icon-svg-in" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg>
                                    </span>
                                    <input
                                        type="url"
                                        className="input_for_pfLinks"
                                        id="SocialLink2"
                                        placeholder="Linkedin Profile"
                                        value={values.inProfile}
                                        onChange={handleChange('inProfile')}
                                    />
                                </div>

                                <div className="dvProfilesLinks">
                                    <span className="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-globe social-icon-svg" viewBox="0 0 16 16">
                                            <path
                                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                                        </svg>
                                    </span>
                                    <input
                                        type="url"
                                        className="input_for_pfLinks"
                                        id="SocialLink4"
                                        placeholder="Other Social Profile ..."
                                        value={values.otherProfile}
                                        onChange={handleChange('otherProfile')}
                                    />
                                </div>

                            </div>
                        </div>

                        {/* <!-- Form 2 Button --> */}
                        <div className="form-group">
                            <input type="submit" className="btn-continue2 btn-lg" value="Continue" />
                            <label for="error-emptyfields" id="error-emptyfields" style={{ color: "red" }}></label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
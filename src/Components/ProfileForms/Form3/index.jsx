import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./form3.css";
import userdp from "../../../images/user-dp.jpg"
import { makeStyles } from '@material-ui/core/styles';

export const ProfileForm3 = () => {
    const [profilePic, setProfilePic] = useState({
        systemUrl: "",
        createdURL: ""
    })
    const [imgUrl, setImgUrl] = useState(userdp)
    const [displayPicture, setDisplayPicture] = useState();
    const [summary, setSummary] = useState()
    const [tab1Style, setTab1Style] = useState({
        bgColor: "",
        classname: "dvOne-tab-form3"
    });
    const [tab2Style, setTab2Style] = useState({
        bgColor: "",
        classname: "dvTwo-tab-form3"
    });

    useEffect(() => {
        if (window.location.href.charAt(window.location.href.indexOf("S")) === "S") {
            setTab1Style({ ...tab1Style, ["classname"]: "" })
            setTab2Style({ ...tab2Style, ["classname"]: "", ["bgColor"]: "green" })
        }
        else {
            setTab2Style({ ...tab2Style, ["bgColor"]: "#fff" })
            setTab2Style({ ...tab2Style, ["classname"]: "dvTwo-tab-form3", ["bgColor"]: "#fff" })
        }
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
            float: "left",
            justifyContent: "space-between",
            maxWidth: "500px",
            margin: "1rem",
            marginBottom: "-2rem"
        },
        tab1: {
            backgroundColor: tab2Style.bgColor,
            border: "3px solid rgb(203, 209, 203)",
            maxWidth: "70px",
            height: "70px",
            borderRadius: "100px",
            fontWeight: "bold",
            fontSize: "30px",
            color: "rgb(0, 0, 0)",
            cursor: "pointer",
            disabled: "true"
        },
        tab2: {
            backgroundColor: tab2Style.bgColor,
            border: "3px solid rgb(203, 209, 203)",
            maxWidth: "70px",
            height: "70px",
            borderRadius: "100px",
            fontWeight: "bold",
            fontSize: "30px",
            color: "rgb(0, 0, 0)",
            cursor: "pointer",
        },
        tab3: {
            backgroundColor: "rgb(255, 123, 0)",
            border: "none",
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
        }
    });
    const classes = useStyles();

    const profilePicHandleChange = (event) => {
        setProfilePic({
            systemUrl: event.target.files[0].path,
            createdURL: URL.createObjectURL(event.target.files[0])
        });
        setImgUrl(profilePic.createdURL)
        console.log(profilePic)
    }
    const summaryHandleChange = (event) => {
        setSummary(event.target.value);
    }
    const Form3_Submit = (e) => {
        e.preventDefault();
        console.log(profilePic, summary)
        // window.location.replace("/MainProfile")
    }
    useEffect(() => {
        setDisplayPicture(
            <img src={imgUrl} alt="" id="userProfileImg" width="100" height="100" />
        )
    }, [profilePic])
    return (
        <>
            {/* <!-- Form 3 --> */}

            <div className={classes.root}>
                <div className={`${classes.dvTabs} row col`}>
                    <button className={`${classes.tab1} ${tab1Style.classname}`} id="dvOne-tab-form3">
                        <h3 className={`${classes.tabsStrings} tabs-strings`} id="tabs-strings">1</h3>
                    </button>
                    <div className={`${classes.lineTabs} line-tabs col`}></div>

                    <button className={`${classes.tab2} ${tab2Style.classname}`} id="dvTwo-tab-form3">
                        <h3 className={`${classes.tabsStrings} tabs-strings`} id="tabs-strings">2</h3>
                    </button>
                    <div className={`${classes.lineTabs} line-tabs col`}></div>

                    <button className={`${classes.tab3} dvThree-tab-form3`} id="dvThree-tab" >
                        <h3 className={`${classes.tabsStrings} tabs-strings`} id="tabs-strings-form3">3</h3>
                    </button>
                </div>

                {/* <Link to="/ProfileForm1">back to home</Link> */}
                {/* <h2>Form 3</h2> */}
                <form class="form-group col-md-6 profileForm-form3" onSubmit={Form3_Submit}>
                    <div class="mb-3">
                        {displayPicture}
                    </div>

                    <div class="mb-3">
                        <label for="formFileSm" class="form-label">Select your own photograph size picture</label>
                        <input
                            class="form-control form-control-sm"
                            id="formFileSm"
                            type="file"
                            accept=".jpg, .png/*"
                            onChange={profilePicHandleChange}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="textareaSummary" class="form-label">
                            Summary </label>
                        <textarea
                            class="form-control"
                            id="textareaSummary"
                            placeholder="Summary ..."
                            value={summary}
                            onChange={summaryHandleChange}
                        ></textarea>
                    </div>
                    <div class="form-group col-md-6">
                        <input type="submit" class="btn-signup btn-lg" value="Submit" />
                    </div>
                </form>
            </div>
        </>
    )
}
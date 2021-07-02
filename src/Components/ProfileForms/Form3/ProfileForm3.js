import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./form3.css";
import userdp from "../../../images/user-dp.jpg"

export const ProfileForm3 = () => {
    const [profilePic, setProfilePic] = useState({
        systemUrl: "",
        createdURL: ""
    })
    const [imgUrl, setImgUrl] = useState(userdp)
    const [displayPicture, setDisplayPicture] = useState();
    const [summary, setSummary] = useState()
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
            <Link to="/ProfileForm1">back to home</Link>
            <div class="profileForm-form3" id="profileForm-form3">
                {/* <h2>Form 3</h2> */}
                <form class="form-group col-md-6" onSubmit={Form3_Submit}>
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
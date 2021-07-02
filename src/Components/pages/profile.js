import loadingGif1 from "../../images/loadingGif1.gif";
import "../css/profile.css";
import { Link } from 'react-router-dom';




export const MainProfile = () => {
    return (
        <div className="container">
        <Link to="/ProfileForm1">back to home</Link>
            <img src={loadingGif1} alt="Loaging ..."/>
        </div>
    )
}
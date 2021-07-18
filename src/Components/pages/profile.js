// import loadingGif1 from "../../images/loadingGif1.gif";
import "../css/profile.css";
import { Link } from 'react-router-dom';

export const MainProfile = () => {
    return (
        <div className="">
            <div className="">
                <Link to="/ProfileForm1">back to home</Link>
            </div>
            {/* <img src={loadingGif1} alt="Loaging ..."/> */}
            <img src="https://upload.wikimedia.org/wikipedia/en/1/1d/Page_Under_Construction.png"
                alt="Page_Under_Construction"
                width="500"
            />
        </div>
    )
}
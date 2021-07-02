import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {LoginForm} from "./pages/LoginForm"
import {SignupForm} from "./pages/SignupForm"
import {MainProfile} from "./pages/profile"
import Tabs from "./ProfileForms/Tabs"
import {ProfileForm1} from "./ProfileForms/Form1/ProfileForm1"
import {ProfileForm2} from "./ProfileForms/Form2/ProfileForm2"
import {ProfileForm3} from "./ProfileForms/Form3/ProfileForm3"
import VerificationPage from "./pages/VerificationPage"

function RouteConfig(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={LoginForm}/>
                <Route path="/signup" component={SignupForm}/>
                {/* <Route path="/profileTabs" component={Tabs}/> */}
                <Route path="/ProfileForm1" component={ProfileForm1}/>
                <Route path="/ProfileForm2" component={ProfileForm2}/>
                <Route path="/ProfileForm3" component={ProfileForm3}/>
                <Route path="/MainProfile" component={MainProfile}/>
                <Route path="/VerificationPage" component={VerificationPage}/>
                <Route path="*" component={()=>{return <Link to="/">back to home</Link>}}/>
            </Switch>
        </Router>
    )
}
export default RouteConfig
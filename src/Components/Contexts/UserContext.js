import { createContext, Component } from "react";
export const UserContext = createContext();

export default class UserContextProvider extends Component {
    constructor({props}) {
        super(props)
        this.state = {
            email: props.email,
            password: props.password,
        }
        console.log(this.state)
    }
    componentDidUpdate(){
        
        console.log(this.state)
    }
    render() {
        return (

            <UserContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
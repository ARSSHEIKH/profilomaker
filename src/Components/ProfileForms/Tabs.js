import { useState } from "react";
import { Link } from "react-router-dom";
import { ProfileForm1 } from "./Form1/ProfileForm1"
import { ProfileForm2 } from "./Form2/ProfileForm2"
import { ProfileForm3 } from "./Form3/ProfileForm3"
import "./tabs.css"
export default function Tabs() {
    const [tab, setTab] = useState(<ProfileForm1 />)
    const [disabled1, setDisabled1] = useState(true)
    const [tab1BgColor, setTab1BgColor] = useState("rgb(255, 123, 0)");
    const [tab1Border, setTab1Border] = useState("")
    // const tab1Style = {
    //     backgroundColor: tab1BgColor,
    //     border: tab1Border
    // }

    const [disabled2, setDisabled2] = useState(false)
    const [tab2BgColor, setTab2BgColor] = useState("#fff");
    const [tab2Border, setTab2Border] = useState("3px solid rgb(203, 209, 203)")
    const tab2Style = {
        backgroundColor: tab2BgColor,
        border: tab2Border
    }

    const [disabled3, setDisabled3] = useState(false)
    const [tab3BgColor, setTab3BgColor] = useState("#fff");
    const [tab3Border, setTab3Border] = useState("3px solid rgb(203, 209, 203)")
    const tab3Style = {
        backgroundColor: tab3BgColor,
        border: tab3Border
    }

    const [btnContinue1, setBtnContinue1] = useState(

        <div className="form-group col-md-6 btn-continue">
            <input type="button"
                className="btn-signup input input-Continue"
                value="Continue"
                onClick={()=>{
                    setTab2BgColor("rgb(255, 123, 0)");
                    setTab2Border("none");
                    setDisabled2(true);
                    setTab(<ProfileForm2 />)

                    setDisabled1(false);
                    setTab1BgColor("#fff");
                    setTab1Border("3px solid rgb(203, 209, 203)");

                    setDisabled3(false);
                    setTab3BgColor("#fff");
                    setTab3Border("3px solid rgb(203, 209, 203)");
                    setBtnContinue1(
                        <div className="form-group col-md-6 btn-continue">
                            <input type="button"
                                className="btn-signup input input-Continue"
                                value="Continue"
                                onClick={()=>{
                                    setTab3BgColor("rgb(255, 123, 0)");
                                    setTab3Border("none");
                                    setDisabled3(true);
                                    setTab(<ProfileForm3 />)
                
                                    setDisabled1(false);
                                    setTab1BgColor("#fff");
                                    setTab1Border("3px solid rgb(203, 209, 203)");
                
                                    setDisabled2(false);
                                    setTab2BgColor("#fff");
                                    setTab2Border("3px solid rgb(203, 209, 203)");
                                    setBtnContinue1()
                                }}
                            />
                            <label for="error-emptyfields" id="error-emptyfields" style={{ color: "red" }}></label>
                        </div>
                    )
                }}
            />
            <label for="error-emptyfields" id="error-emptyfields" style={{ color: "red" }}></label>
        </div>
    )
    const Form1_Submit = () => {
        setTab1BgColor("rgb(255, 123, 0)")
        setTab1Border("none")
        setTab(<ProfileForm1 />)
        setDisabled1(true);

        setDisabled2(false);
        setTab2BgColor("#fff");
        setTab2Border("3px solid rgb(203, 209, 203)");

        setDisabled3(false);
        setTab3BgColor("#fff");
        setTab3Border("3px solid rgb(203, 209, 203)");
    }
    return (
        <>
            <div className="dv-tabs row col ">
                <button className="dvOne-tab" id="dvOne-tab"
                    style={{ backgroundColor: tab1BgColor, border: tab1Border }}
                    disabled={disabled1}
                    onClick={() => Form1_Submit()}
                    onMouseEnter={() => {
                        setTab1BgColor("#fff")
                        setTab1Border("3px solid rgb(203, 209, 203)")
                    }}
                    onMouseLeave={() => {
                        setTab1BgColor("rgb(255, 123, 0)")
                        setTab1Border("none")
                    }}
                >
                    <h3 className="tabs-strings" id="tabs-strings">1</h3>
                </button>
                <div className="line-tabs col"></div>
                <button className="dvTwo-tab" id="dvTwo-tab"
                    style={{
                        backgroundColor: tab2BgColor,
                        border: tab2Border
                    }}
                    disabled={disabled2}
                    onClick={() => {
                        setTab2BgColor("rgb(255, 123, 0)");
                        setTab2Border("none");
                        setDisabled2(true);
                        setTab(<ProfileForm2 />)

                        setDisabled1(false);
                        setTab1BgColor("#fff");
                        setTab1Border("3px solid rgb(203, 209, 203)");

                        setDisabled3(false);
                        setTab3BgColor("#fff");
                        setTab3Border("3px solid rgb(203, 209, 203)");
                        setBtnContinue1(
                            <div className="form-group col-md-6 btn-continue">
                                <input type="button"
                                    className="btn-signup input input-Continue"
                                    value="Continue"
                                    onClick={()=>{
                                        setTab3BgColor("rgb(255, 123, 0)");
                                        setTab3Border("none");
                                        setDisabled3(true);
                                        setTab(<ProfileForm3 />)
                    
                                        setDisabled1(false);
                                        setTab1BgColor("#fff");
                                        setTab1Border("3px solid rgb(203, 209, 203)");
                    
                                        setDisabled2(false);
                                        setTab2BgColor("#fff");
                                        setTab2Border("3px solid rgb(203, 209, 203)");
                                        setBtnContinue1(
                                            setBtnContinue1(
                                                <div className="form-group col-md-6 btn-continue">
                                                    <input type="button"
                                                        className="btn-signup input input-Continue"
                                                        value="Continue"
                                                        onClick={()=>{
                                                            setTab3BgColor("rgb(255, 123, 0)");
                                                            setTab3Border("none");
                                                            setDisabled3(true);
                                                            setTab(<ProfileForm3 />)
                                        
                                                            setDisabled1(false);
                                                            setTab1BgColor("#fff");
                                                            setTab1Border("3px solid rgb(203, 209, 203)");
                                        
                                                            setDisabled2(false);
                                                            setTab2BgColor("#fff");
                                                            setTab2Border("3px solid rgb(203, 209, 203)");
                                                            setBtnContinue1()
                                                        }}
                                                    />
                                                    <label for="error-emptyfields" id="error-emptyfields" style={{ color: "red" }}></label>
                                                </div>
                                            ))
                                    }}
                                />
                                <label for="error-emptyfields" id="error-emptyfields" style={{ color: "red" }}></label>
                            </div>
                        )
                    }}
                    onMouseEnter={() => {
                        setTab2BgColor("rgb(255, 123, 0)")
                        setTab2Border("none")
                    }}
                    onMouseLeave={() => {
                        setTab2BgColor("#fff")
                        setTab2Border("3px solid rgb(203, 209, 203)")

                    }}
                >
                    <h3 className="tabs-strings" id="tabs-strings">2</h3>
                </button>
                <div className="line-tabs col"></div>
                <button className="dvThree-tab" id="dvThree-tab"
                    disabled={disabled3}
                    style={{
                        backgroundColor: tab3BgColor,
                        border: tab3Border
                    }}
                    onClick={() => {
                        setDisabled1(false);
                        setTab1BgColor("#fff");
                        setTab1Border("3px solid rgb(203, 209, 203)");

                        setDisabled2(false);
                        setTab2BgColor("#fff");
                        setTab2Border("3px solid rgb(203, 209, 203)");

                        setTab3BgColor("rgb(255, 123, 0)")
                        setTab3Border("none")
                        setTab(<ProfileForm3 />)
                        setDisabled3(true)
                        setBtnContinue1()
                    }}
                    onMouseEnter={() => {
                        setTab3BgColor("rgb(255, 123, 0)")
                        setTab3Border("none")

                    }}
                    onMouseLeave={() => {
                        setTab3BgColor("#fff")
                        setTab3Border("3px solid rgb(203, 209, 203)")

                    }}
                >
                    <h3 className="tabs-strings" id="tabs-strings">3</h3>
                </button>
            </div>
            {btnContinue1}

        </>
    )
}
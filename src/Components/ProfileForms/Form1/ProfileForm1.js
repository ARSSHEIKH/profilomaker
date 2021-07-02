import { useState } from 'react';
import countriesList from "./countriesList"
// import {ProfileForm2} from "../Form2/ProfileForm2"
import "./form1.css"

export const ProfileForm1 = () => {
    const [values, setValues] = useState({
        fname: '',
        lname: '',
        email: '',
        male: 'male',
        female: 'female',
        dob: '',
        address: '',
        city: '',
        country: '',
        postalcode: '',
        phone1: '',
        phone2: '',
    });

    const [tab1BgColor, setTab1BgColor] = useState("rgb(255, 123, 0)");
    const [tab1Border, setTab1Border] = useState("")

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(event.target.value)
    };
    const Form1_Submit = (f1Values) => (e) => {
        e.preventDefault();
        console.log(f1Values)
        window.location.replace("/ProfileForm2")
    }
    return (
        <>
            <div className="dv-tabs row col ">
                <button className="dvOne-tab" id="dvOne-tab"
                    style={{ backgroundColor: tab1BgColor, border: tab1Border }}
                    // disabled={disabled1}
                    // onClick={() => Form1_Submit()}
                    // onMouseEnter={() => {
                    //     setTab1BgColor("#fff")
                    //     setTab1Border("3px solid rgb(203, 209, 203)")
                    // }}
                    // onMouseLeave={() => {
                    //     setTab1BgColor("rgb(255, 123, 0)")
                    //     setTab1Border("none")
                    // }}
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
           







                <div className="col">

                    <div className="profileForm-form1" id="profileForm-form1">
                        <form id="profileInputForm1"
                            onSubmit={Form1_Submit(values)}
                        >
                            <div className="form-group col-md-6">
                                <h3 id="formHeading">Basic Information</h3>
                                <input
                                    type="text"
                                    className="input"
                                    id="fname"
                                    placeholder="First Name"
                                    required autoComplete="on"
                                    value={values.fname}
                                    onChange={handleChange('fname')}
                                />
                                <span id="required-mark" style={{ color: "red" }}>*</span>
                            </div>
                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    className="input"
                                    id="lname"
                                    placeholder="Last Name"
                                    required autoComplete="on"
                                    value={values.lname}
                                    onChange={handleChange('lname')}
                                />
                                <span id="required-mark" style={{ color: "red" }}>*</span>
                            </div>
                            <div className="form-group">
                                <div className="form-group col-md-6">
                                    <input
                                        type="email"
                                        className="input"
                                        id="email"
                                        placeholder="Email Address"
                                        required
                                        autoComplete="on"
                                        value={values.email}
                                        onChange={handleChange('email')}
                                    />
                                    <span id="required-mark" style={{ color: "red" }}>*</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-group col-md-6">
                                    <b>Gender : &nbsp;</b>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio1"
                                            value={values.male}
                                            onChange={handleChange('male')}
                                        />
                                        <label className="form-check-label" for="inlineRadio1">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio2"
                                            value="female"
                                            value={values.female}
                                            onChange={handleChange('female')}
                                        />
                                        <label className="form-check-label" for="inlineRadio2">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-group col-md-6">
                                    <h6>Date of Birth</h6>
                                    <input
                                        type="date"
                                        className="input"
                                        id="dob"
                                        placeholder="Date of Birth"
                                        required
                                        autoComplete="on"
                                        value={values.dob}
                                        onChange={handleChange('dob')}
                                    />
                                    <span id="required-mark" style={{ color: "red" }}>*</span>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    className="input"
                                    id="address"
                                    placeholder="Address"
                                    required
                                    value={values.address}
                                    onChange={handleChange('address')}
                                />
                                <span id="required-mark" style={{ color: "red" }}>*</span>
                            </div>
                            <div className="form-group">
                                <div className="form-group col-md-6">
                                    <input
                                        type="text"
                                        className="input"
                                        id="city"
                                        placeholder="City"
                                        required
                                        autoComplete="on"
                                        value={values.city}
                                        onChange={handleChange('city')}
                                    />
                                    <span id="required-mark" style={{ color: "red" }}>*</span>
                                </div>
                            </div>

                            <div className=" form-group col-sm-6">
                                <select className="custom-select input" id="optCountries"
                                    onChange={handleChange('country')}
                                >
                                    <option value="0" selected>Select Country</option>
                                    {
                                        countriesList.map((text, key) => {
                                            return <option value={text}>{text}</option>
                                        })
                                    }
                                </select>
                                <span id="required-mark" style={{ color: "red" }}>*</span>
                            </div>
                            <div className="form-group">
                                <div className="form-group col-md-6">
                                    <input
                                        type="text"
                                        className="input"
                                        id="postalcode"
                                        placeholder="Postal Code"
                                        required
                                        value={values.postalcode}
                                        onChange={handleChange('postalcode')}
                                    />
                                    <span id="required-mark" style={{ color: "red" }}>*</span>
                                </div>
                                <div className="form-group col-md-6">
                                    <input
                                        type="tel"
                                        className="input"
                                        id="phone1"
                                        placeholder="Contact 1"
                                        required
                                        value={values.phone1}
                                        onChange={handleChange('phone1')}
                                    />
                                    <span id="required-mark" style={{ color: "red" }}>*</span>
                                </div>
                                <div className="form-group col-md-6">
                                    <input
                                        type="tel"
                                        className="input"
                                        id="phone2"
                                        placeholder="Contact 2"
                                        required
                                        value={values.phone2}
                                        onChange={handleChange('phone2')}
                                    />
                                </div>
                            </div>

                            <div className="form-group col-md-6">
                                <input type="submit" className="btn-signup input" value="Continue" />
                                <label for="error-emptyfields" id="error-emptyfields" style={{ color: "red" }}></label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
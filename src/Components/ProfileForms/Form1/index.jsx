import { useState } from 'react';
import countriesList from "./countriesList"
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import "./form1.css";

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
    tab2: {
        backgroundColor: "#fff",
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
    }
});

export const ProfileForm1 = () => {
    const classes = useStyles();
    const history = useHistory();
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
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(event.target.value)
    };
    const Form1_Submit = (f1Values) => (e) => {
        e.preventDefault();
        console.log(f1Values)
        history.push("/ProfileForm2/Submit");
    }
    return (
        <div className={classes.root}>
            <div className={`${classes.dvTabs} row col`}>
                <button className={`${classes.tab1} dvOne-tab`} id="dvOne-tab">
                    <h3 className={`${classes.tabsStrings} tabs-strings`} id="tabs-strings">1</h3>
                </button>
                <div className={`${classes.lineTabs} line-tabs col`}></div>

                <button className={`${classes.tab2} dvTwo-tab`} id="dvTwo-tab">
                    <h3 className={`${classes.tabsStrings} tabs-strings`} id="tabs-strings">2</h3>
                </button>
                <div className={`${classes.lineTabs} line-tabs col`}></div>

                <button className={`${classes.tab3} dvThree-tab`} id="dvThree-tab" >
                    <h3 className={`${classes.tabsStrings} tabs-strings`} id="tabs-strings">3</h3>
                </button>
            </div>

            <div className="col">
                <div className="profileForm-form1" id="profileForm-form1">
                    <form id="profileInputForm1"
                        onSubmit={Form1_Submit(values)}
                    >
                        <h3 id="formHeading">Basic Information</h3>
                        <div className="form-group col-md-6" >
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
                        <div className="form-group col-md-6">
                            <input type="submit" className="btn-signup input" value="Continue" />
                            <label for="error-emptyfields" id="error-emptyfields" style={{ color: "red" }}></label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
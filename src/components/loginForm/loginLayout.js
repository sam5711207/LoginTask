import React, { useState } from 'react';

import './loginForm.css';
import logoImg from '../../images/logoWine.jpg';

import LoginDetails from './loginDetails';
import LoginButtons from './loginButtons';
import LoginConfirm from './loginConfirm';
import SuccessLogin from './successLogin';

export default function LoginLayout() {

  const [currentLoginStep, setCurrentLoginStep] = useState(0);
  const [userDetails, setUserDetails] = useState({ firstName: "", lastName: "", phone: "", address: "" });


  const getFieldsByCurrentStep = () => {
    if (currentLoginStep === 0) {
      return { field1: "First Name", field2: "Last Name" }
    }
    else {
      return { field1: "Phone", field2: "Address" }
    }
  }

  const getUserDetailsForCurrentStep = () => {
    if (currentLoginStep === 0) {
      return { field1: userDetails.firstName, field2: userDetails.lastName }
    }
    else {
      return { field1: userDetails.phone, field2: userDetails.address }
    }
  }

  const setUserDetailsFromLoginDetails = (details) => {
    const { field1, field2 } = details;
    if (currentLoginStep === 0) {
      setUserDetails(
        {
          ...userDetails,
          firstName: field1 !== undefined ? field1 : userDetails.firstName,
          lastName: field2 !== undefined ? field2 : userDetails.lastName
        });
    }
    else {
      setUserDetails(
        {
          ...userDetails,
          phone: field1 !== undefined ? field1 : userDetails.phone,
          address: field2 !== undefined ? field2 : userDetails.address
        });
    }
  }

  const viewLoginComponent = () => {
    if (currentLoginStep === 0 || currentLoginStep === 1) {
      return <LoginDetails
        formFields={getFieldsByCurrentStep()}
        setUserDetails={setUserDetailsFromLoginDetails}
        userDetails={getUserDetailsForCurrentStep()}
      />
    }
    if (currentLoginStep === 2) {
      return <LoginConfirm />
    }
    if (currentLoginStep === 3) {
      return <SuccessLogin />
    }

  }

  return (
    <>
      <div className="loginBody">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 login-section-wrapper">
              <div className="brand-wrapper">
                <img src={logoImg} alt="logo" className="logo" />
              </div>
              <div className="login-wrapper">
                <h1 className="login-title">Log in</h1>
                <form>
                  {viewLoginComponent()}
                </form>
                <LoginButtons
                  currentLoginStep={currentLoginStep}
                  setCurrentLoginStep={setCurrentLoginStep}
                  userDetails={userDetails} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
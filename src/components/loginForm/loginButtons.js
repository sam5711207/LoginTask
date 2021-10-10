import React from 'react';

import './loginForm.css';

import { useDispatch } from 'react-redux';
import { actions } from '../../redux/actions.js'

export default function LoginButtons(props) {

  const { currentLoginStep, setCurrentLoginStep, userDetails } = props;

  const dispatch = useDispatch();

  const setUserDetailsToStore = () => {
    dispatch(actions.setSaveNewUser(userDetails))
    dispatch(actions.setIsUserRegister(true))
  }

  const isNextBtnDisabled = () => {
    return currentLoginStep === 0 ? (!userDetails.firstName || !userDetails.lastName) :
      (!userDetails.phone || !userDetails.address);
  }

  const moveToNextStep = () => {
    if (currentLoginStep === 2) {
      setUserDetailsToStore();
      setCurrentLoginStep(currentLoginStep + 1);
    }
    else {
      setCurrentLoginStep(currentLoginStep + 1);
    }
  }

  return (
    <>
      {currentLoginStep !== 0 && <button
        name="back"
        className="btn btn-block login-btn"
        type="button"
        onClick={(e) => { setCurrentLoginStep(v => v - 1) }}> {"< back"} </button>}
      <button
        name="next"
        id="login"
        disabled={isNextBtnDisabled()}
        className="btn btn-block login-btn"
        type="button"
        onClick={moveToNextStep}>
        {currentLoginStep === 2 ? "Save" : "Next >"} </button>
    </>
  )
}


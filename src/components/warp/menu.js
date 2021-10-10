import React from 'react';

import './warp.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Menu(props) {

  let history = useHistory();

  const isUserRegister = useSelector(state => state.registerReducer.isUserRegister);

  const historyPushRoute = (route) => {
    if (isUserRegister === false) {
      if (route === "login")
        history.push(`/${route}`)
    }
    else {
      history.push(`/${route}`)
    }
  }

  const renderTooltipSighUp = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Please sigh up first
    </Tooltip>
  );

  const renderTooltipRoute = (props, route) => (
    <Tooltip id="button-tooltip" {...props}>
      Shopping
    </Tooltip>
  );

  return (
    <>
      <div className="side_navBar">
        <button name="login"
          className="menu-btn"
          onClick={() => { historyPushRoute("login") }}>Login</button>
          {}
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={isUserRegister === false ? renderTooltipSighUp : renderTooltipRoute}>
          <div>
            <button name="shopping"
              className={isUserRegister === false ? "menu-btn_disabled" : "menu-btn"}
              onClick={() => { historyPushRoute("shopping") }}>Shopping</button>
            <button name="feedback"
              className={isUserRegister === false ? "menu-btn_disabled" : "menu-btn"}
              onClick={() => { historyPushRoute("feedback") }}>Feedback</button>
          </div>
        </OverlayTrigger>
      </div>
    </>);

}

import React from 'react';

import { useDispatch } from 'react-redux';
import { actions } from '../../redux/actions.js';
import { useHistory } from 'react-router-dom';

export default function Content() {

  const dispatch = useDispatch();
  let history = useHistory();

  const resetStore = () => {
    dispatch(actions.setResetStore())
    history.push("/")
  }

  return (
    <>
      <div className="mt-3">
        <h2>feedback</h2>
        <button
          onClick={() => { resetStore() }}>reset</button>
      </div>
    </>
  )
}
import React from 'react';

import './warp.css';

import NavBar from './navBar';
import Content from './content';

export default function Warp() {

    return (
        <>
            <div className="warp_container-fluid">
                <div className="row">
                    <NavBar />
                </div>
                <div
                    className="wrapper d-flex justify-content-start">
                    <Content />
                </div>
            </div>
        </>
    )
}

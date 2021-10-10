import React from 'react';

import { useHistory } from 'react-router-dom';

export default function SuccessLogin() {

    let history = useHistory();

    const nextToSite = () => {
        setTimeout(() => { history.push("/shopping"); }, 3000);
    }

    return (
        <>
            <h1>You have successfully registered for the site</h1>
            {nextToSite()}
        </>
    );
}


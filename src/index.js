import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

// Redirect after login
window.netlifyIdentity.on('login', user => {
    // Close the modal
    window.netlifyIdentity.close();
    // Et on affiche l'application React
    ReactDOM.render(<App user={user} />, document.getElementById('root')) 
});

// Redirect after logout
window.netlifyIdentity.on('logout', user => {
    document.location.reload()
});


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

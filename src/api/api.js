import axios from 'axios'

axios.interceptors.request.use(
    (config) => {
        let netlifyUserString = localStorage.getItem('gotrue.user')

        if (netlifyUserString) {
            let netlifyUser = JSON.parse(netlifyUserString)
            config.headers['Authorization'] = `Bearer ${ netlifyUser.token.access_token }`
        }

        return config;
    }, 

    (error) => {
        return Promise.reject(error);
    }
)

const url = endpoint => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return 'http://localhost:9000/.netlify/functions/' + endpoint
    } else {
        return document.location.origin + '/.netlify/functions/' + endpoint
    }
}


export {url}

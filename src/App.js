import React from 'react';
import axios from 'axios';
import GridMember from './Components/GridMember'

axios.interceptors.request.use(
  (config) => {
      let netlifyUserString = localStorage.getItem('gotrue.user');
      
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

const App = ({user}) => {
  
  if (user && document.getElementById('homepage')) document.getElementById('homepage').remove()

  return (
    <div>
      <GridMember />
    </div>
  );
}

export default App;

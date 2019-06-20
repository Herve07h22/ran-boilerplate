import { useState, useEffect } from 'react';


function useNetlify() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
        const login = u => {
            setUser(u)
            window.netlifyIdentity.close()
        }

        const logout = u => {
            setUser(null)
            document.location.reload()
        }

        window.netlifyIdentity.on('login', login)
        window.netlifyIdentity.on('logout', logout)

      
    })
    return user
  }

  export { useNetlify }

  
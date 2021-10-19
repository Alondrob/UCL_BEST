
export const createUser = (userData) => {
    return(dispatch) => {
        return fetch('http://127.0.0.1:3000/users', {
             
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({ user: userData})
        } 
     )
     .then(res => res.json())
     .then(response => {
         localStorage.setItem('token', response.token)
         dispatch({type: 'SET_USER', user: response.user})
       
     })
   }
}
import React, { useState } from 'react'

function Login() {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

   function handleClick(){
     e.preventDefault()
   } 

  return (
    <div>
      <h2>Login</h2>

      <input 
         type="text"
         placeholder='Username'
         value={username}
         onChange={(e) => setUsername(e.target.value)} 
        />
        {" "}
      <input 
        type="password"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {" "}
      <button
       onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Login

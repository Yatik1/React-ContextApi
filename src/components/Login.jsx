import React, { useState } from 'react'

function Login() {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  return (
    <div>
      <h2>Login</h2>
      <input 
         type="text"
         placeholder='Username'
         value={username}
         onChange={(e) => setUsername(e.target.value)} />
    </div>
  )
}

export default Login

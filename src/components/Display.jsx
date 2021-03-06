import React,{useContext} from 'react'

import { AuthContext } from "../contexts/AuthContext";
const Display = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

export default Display;
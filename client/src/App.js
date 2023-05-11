import React, { useEffect } from 'react'
import Button from "@mui/material/Button"
import { io } from 'socket.io-client';


const App = () => {

  const socket = io("http://localhost:5000");

  return (
    <div>Hello React

      <Button variant='outlined' >Text</Button>
    </div>
  )
}

export default App
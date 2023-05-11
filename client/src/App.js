import React, { useEffect, useState } from 'react'
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { io } from 'socket.io-client';


const App = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setSocket(io("http://localhost:5000"));

  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("message-from-server", (data) => {
        console.log("Message Received", data);
      })
    }
  }, [socket])


  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("send-message", { message });
    console.log(message);
  }

  return (
    <div>

      <Box
        component="form"
        onSubmit={handleSubmit}

      >
        <TextField id="outlined-basic"
          label="Send your message"
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button variant='outlined' type='submit' >Send</Button>
      </Box>

    </div>
  )
}

export default App
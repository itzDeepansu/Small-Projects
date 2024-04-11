import React, { useMemo, useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";

const App = () => {
  
  const socket = useMemo(() => io("http://localhost:3000"), []);

  const [message, setmessage] = useState("");
  const [user, setUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [roomName ,setRoomName] = useState("")

  useEffect(() => {
    socket.on("connect", () => {
      console.log(`User Connect ${socket.id}`);
    });
    socket.on("receive-message", (data) => {
      setMessages((messages) => [...messages, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    socket.emit("send_message", { user, message });
    setmessage("");
  };

  const handleJoinRoom = (e) => {
    e.preventDefault();
    socket.emit("join_room", roomName);
    setRoomName("")
  };

  return (
    <div>
      <form onSubmit={handleJoinRoom}>
        <input type="text" value={roomName} onChange={(e)=>setRoomName(e.target.value)}/>
        <button type="submit">Join</button>
      </form>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          label="User"
        />
        <input
          type="text"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          label="message"
        />
        <button type="submit">Send</button>
      </form>
      <div>
        {messages.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default App;

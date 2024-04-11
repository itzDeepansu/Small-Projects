import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const port = 3000;

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("hell0 world");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  console.log("id:", socket.id);
  socket.on("send_message",({user,message})=>{
    socket.to(user).emit("receive-message",message)
  })
  socket.on("join_room",(room)=>{
    socket.join(room)
  })
  socket.on("disconnect",()=>{
    console.log("User disconnected",socket.id);
  })
});

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});

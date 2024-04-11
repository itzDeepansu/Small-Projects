<h1>To add realtime communication using socket.io</h1>
<h2>Server Side</h2>
- Make an express server <br>
- import Server from socket.io and createServer from http as elements
- create server using createServer(app) passing app as an argument where app = express()
- then create an io block using new server passing(server) as an argument
- then add boiler plate for connection io.on("connection",(socket)=>{})
- in this block you can add all functionality using different functions like emit , broadcast etc
<h2>Client Side</h2>
- import io from socket.io-client as element (previous-npm i socket.io-client)
- create a socket variable giving it io ( const socket = io("server link")) //use useMemo in it , so that it doesnt change on every render ( ```const socket = useMemo(() => io("http://localhost:3000"), []); ```)
- write all your functionality on that component
import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import  Peer from 'simple-peer'

import InfoTextArea  from './Components/InfoTextArea'
import InputMessage  from './Components/InputMessage'

function App() {
 const [initiator, setIsInitiator] = useState(true)
 const [peer, setPeer] = useState(new Peer({
   initiator,
   trickle: false
 }))
 const [yourId, setYourId] = useState('')
 const [otherId, setOtherId] = useState('')
 const [messagesList, setMessagesList] = useState([])
 const [myStream, setMyStream] = useState('')
 const videoTag = useRef(null)
 useEffect(() =>{
   setPeer(new Peer({
     initiator,
     trickle: false
   }))
 }, [initiator])


 useEffect(() =>{
   setYourId("")
   peer.on('signal', (data)=> setYourId(JSON.stringify(data)))
   peer.on('data', (data)=> {
     const decodedMessage = new TextDecoder("utf-8").decode(data)
     setMessagesList(prev => [...prev, decodedMessage])}
   )
   peer.on("stream", stream => {
    videoTag.current.srcObject=stream;
    videoTag.current.play();
   })
 }, [peer])

 useEffect(()=>{
   navigator.getUserMedia({video: true, audio: true,}, function(stream){
    setPeer(new Peer({
      initiator,
      trickle: false,
      stream
    }))
   }, function(err){
     alert("Webrtc not supported on current browser")
   })
 }, [])

 const handleConnect = () =>{
   const other = JSON.parse(otherId)
   peer.signal(other)

 }
 const handleToggle = () =>{
   setIsInitiator(!initiator)
 }
 const handleSend = (message) => {
   peer.send(message)
 }

 return (
   <div className="App">
     <header className="App-header">
       <p>
         Initiator : {String(initiator)}
         <button onClick={handleToggle }>toglle it</button>
       </p>
       <InfoTextArea label="Your Id: " value={yourId}/>
       <InfoTextArea label="Other Id: " value={otherId} handlechange={({target:{value}})=> setOtherId(value)}/>
       <button onClick={handleConnect}>Connect</button>
       <InputMessage label="Input your message" handleSend={handleSend}/>
       {
         messagesList.map(msg => <h1>{msg}</h1>)
       }
      <video width="750" height="500" ref={videoTag} />
     </header>
   </div>
 );
}

export default App;
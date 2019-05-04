import React, {useState, useEffect} from 'react';
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

 useEffect(() =>{
   console.log("Called when toggle")
   setPeer(new Peer({
     initiator,
     trickle: false
   }))
 }, [initiator])


 useEffect(() =>{
   console.log("Change peer")
   setYourId("")
   peer.on('signal', (data)=> setYourId(JSON.stringify(data)))
   peer.on('data', (data)=> {
     const decodedMessage = new TextDecoder("utf-8").decode(data)
     setMessagesList(prev => [...prev, decodedMessage])}
   )
 }, [peer])

 const handleConnect = () =>{
   console.log("clicked")
   const other = JSON.parse(otherId)
   peer.signal(other)

 }
 const handleToggle = () =>{
   console.log("click")
   setIsInitiator(!initiator)
 }
 const handleSend = (message) => {
   console.log(message)
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
     </header>
   </div>
 );
}

export default App;
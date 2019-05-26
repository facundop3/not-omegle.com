import React, { useState, useEffect, useRef } from "react";

import CreateJoin from "./Components/CreateJoin";
import CreateRoom from "./Components/CreateRoom";
import JoinRoom from "./Components/JoinRoom";
import API from "./API";

function App() {
  const [initiator, setIsInitiator] = useState(true);
  const videoTag = useRef(null);
  const [webcamAccess, setWebcamAccess] = useState(false);
  const [roomId, setRoomId] = useState("test");
  const logRoomConnectionData = connectionData => {
    console.log(connectionData);
  };
  const toggleIsInitiator = isInitiator => {
    setIsInitiator(isInitiator);
  };
  const handlerAcept = isInitiator => {
    setIsInitiator(isInitiator);
    setWebcamAccess(true);
  };
  useEffect(() => {
    API.suscribeToRoomConnectionData(logRoomConnectionData);
    setRoomId(API.getSocketId());
  }, []);

  return (
    <div className="container">
      <header>
        <h1 className="text-center">Simle peer to peer videocall</h1>
      </header>
      <br />
      <CreateJoin
        handlerAcept={handlerAcept}
        initiator={initiator}
        toggleIsInitiator={toggleIsInitiator}
      />
      <br />
      {webcamAccess &&
        (initiator ? (
          <CreateRoom
            initiator={initiator}
            videTag={videoTag}
            createRoom={API.createRoom}
            socketId={roomId}
          />
        ) : (
          <JoinRoom />
        ))}
      <video width="750" height="500" ref={videoTag} />
    </div>
  );
}

export default App;

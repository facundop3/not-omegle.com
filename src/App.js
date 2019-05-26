import React, { useState, useRef } from "react";

import CreateJoin from "./Components/CreateJoin";
import CreateRoom from "./Components/CreateRoom";
import JoinRoom from "./Components/JoinRoom";

function App() {
  const [initiator, setIsInitiator] = useState(true);
  const videoTag = useRef(null);
  const [webcamAccess, setWebcamAccess] = useState(false);

  const toggleIsInitiator = isInitiator => {
    setIsInitiator(isInitiator);
  };
  const handlerAcept = isInitiator => {
    setIsInitiator(isInitiator);
    setWebcamAccess(true);
  };
  return (
    <div className="container">
      <header>
        <h1 className="text-center">Simle peer to peer videocall web:</h1>
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
          <CreateRoom initiator={initiator} videTag={videoTag} />
        ) : (
          <JoinRoom />
        ))}
      <video width="750" height="500" ref={videoTag} />
    </div>
  );
}

export default App;

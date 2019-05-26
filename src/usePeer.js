import { useState, useEffect } from "react";
import Peer from "simple-peer";

function usePeer(initiator) {
  const [yourId, setYourId] = useState("");
  const [messagesList, setMessagesList] = useState([]);
  const [peer, setPeer] = useState(
    new Peer({
      initiator,
      trickle: false
    })
  );
  useEffect(() => {
    navigator.getUserMedia(
      { video: true, audio: true },
      function(stream) {
        setPeer(
          new Peer({
            initiator,
            trickle: false,
            stream
          })
        );
      },
      function(err) {
        console.log("Webrtc not supported on current browser", err);
      }
    );
  }, [initiator]);

  // useEffect(() => {
  //   setYourId("");
  //   peer.on("signal", data => setYourId(JSON.stringify(data)));
  //   peer.on("data", data => {
  //     const decodedMessage = new TextDecoder("utf-8").decode(data);
  //     setMessagesList(prev => [...prev, decodedMessage]);
  //   });
  //   peer.on("stream", stream => {
  //     setVideoSource(stream);
  //   });
  // }, [peer]);

  return {
    yourId,
    messagesList,
    peer
  };
}

export default usePeer;

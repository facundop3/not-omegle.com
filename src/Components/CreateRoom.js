import React, { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import usePeer from "../usePeer";
import socket from "../API";

const CreateRoom = props => {
  const { initiator, videoTag } = props;
  const { yourId, messagesList, peer } = usePeer(initiator);
  const [roomId, setRoomId] = useState("");
  const setVideoSource = stream => {
    videoTag.current.srcObject = stream;
    videoTag.current.play();
  };
  useEffect(() => {
    peer.on("signal", data => {
      console.log(JSON.stringify(data));
    });

    peer.on("data", data => {
      const decodedMessage = new TextDecoder("utf-8").decode(data);
      console.log(prev => [...prev, decodedMessage]);
    });
    peer.on("stream", stream => {
      setVideoSource(stream);
    });
  }, [peer]);

  useEffect(() => {
    console.log(socket);
    socket.on("connect", info => {
      console.log(info);
      setRoomId(info.id);
    });
  }, []);

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <Button variant="outline-secondary">Room ID</Button>
      </InputGroup.Prepend>
      <FormControl aria-describedby="basic-addon1" readOnly value={roomId} />
    </InputGroup>
  );
};

export default CreateRoom;

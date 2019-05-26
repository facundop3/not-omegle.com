import React, { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import usePeer from "../usePeer";

const CreateRoom = props => {
  const { initiator, videoTag, createRoom, socketId } = props;
  const { peer } = usePeer(initiator);
  const setVideoSource = stream => {
    videoTag.current.srcObject = stream;
    videoTag.current.play();
  };

  useEffect(() => {
    peer.on("signal", data => {
      createRoom(data);
    });

    peer.on("data", data => {
      const decodedMessage = new TextDecoder("utf-8").decode(data);
      console.log(prev => [...prev, decodedMessage]);
    });
    peer.on("stream", stream => {
      setVideoSource(stream);
    });
  }, [peer]);

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <Button variant="outline-secondary">Room ID</Button>
      </InputGroup.Prepend>
      <FormControl aria-describedby="basic-addon1" readOnly value={socketId} />
    </InputGroup>
  );
};

export default CreateRoom;

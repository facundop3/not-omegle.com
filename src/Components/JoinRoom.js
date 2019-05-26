import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import usePeer from "../usePeer";
import API from "../API";

const JoinRoom = props => {
  const [inputValue, setInputValue] = useState("");
  const { peer } = usePeer(false);
  const handleChange = ev => {
    setInputValue(ev.target.value);
  };
  const handleSubmit = ev => {
    ev.preventDefault();
    if (inputValue) {
      console.log("Join room");
      console.log(inputValue);
      API.connectToRoom(inputValue);
    } else {
      console.log("No value :S");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="outline-secondary">Room ID</Button>
        </InputGroup.Prepend>
        <FormControl
          aria-describedby="basic-addon1"
          value={inputValue}
          onChange={handleChange}
        />
        <InputGroup.Append>
          <Button variant="outline-primary" onClick={handleSubmit}>
            Join room
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </form>
  );
};

export default JoinRoom;

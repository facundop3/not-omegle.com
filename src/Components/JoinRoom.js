import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

const JoinRoom = props => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <Button variant="outline-secondary">Room ID</Button>
      </InputGroup.Prepend>
      <FormControl aria-describedby="basic-addon1" />
    </InputGroup>
  );
};

export default JoinRoom;

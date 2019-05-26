import React, { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

import SimpleModal from "./SipleModal";

const CentrateContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateJoin = props => {
  const { handlerAcept, initiator, toggleIsInitiator } = props;
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const handleCreateClick = ev => {
    setModalIsVisible(true);
    toggleIsInitiator(true);
  };
  const handleJoinClick = ev => {
    toggleIsInitiator(false);
    setModalIsVisible(true);
  };
  const hideModal = () => {
    setModalIsVisible(false);
  };
  return (
    <div>
      <CentrateContent>
        <Button
          className="btn btn-primary ml-1"
          onClick={handleCreateClick}
          variant="primary"
        >
          Cereate a videochat room
        </Button>
        <Button
          className="btn btn-success ml-1"
          onClick={handleJoinClick}
          variant="primary"
        >
          Join a videochat room
        </Button>
      </CentrateContent>
      <SimpleModal
        handlerAcept={handlerAcept}
        showModal={modalIsVisible}
        isInitiator={initiator}
        toggleIsInitiator={toggleIsInitiator}
        hideModal={hideModal}
      />
    </div>
  );
};

export default CreateJoin;

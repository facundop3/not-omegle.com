import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const SimpleModal = props => {
  const { showModal, isInitiator, hideModal, handlerAcept } = props;
  const aceptModal = () => {
    handlerAcept(isInitiator);
    hideModal();
  };
  return (
    <Modal
      size="sm"
      show={showModal}
      onHide={hideModal}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Dialog show={showModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isInitiator ? "Creating videocall room" : "Joining videocall room"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {isInitiator ? (
            <p>
              In order to create the videocall room we are going to reques
              access to your webcam and mic
            </p>
          ) : (
            <p>
              In order to join the a videocall room we are going to reques
              access to your webcam and mic
            </p>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={aceptModal}>
            Acept
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default SimpleModal;

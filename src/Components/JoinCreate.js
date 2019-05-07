import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
    padding: .5em;

`

const JoinCreate = ({initiator, onClick}) => {

  return (
    <Container>
      <div>
        <h1>{ initiator ? "Create a video call room" : "Join a video call room"}</h1>
        <Button onClick={onClick}>
          Or {!initiator ? "Create a video call room" : "Join a video call room"}
        </Button>
      </div>
    </Container>
  )
}

export default JoinCreate
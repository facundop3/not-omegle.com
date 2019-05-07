import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: inline-flex;
    justify-content: center;
    align-content: center;
    border-radius: 5px;
`
const Button = styled.button`
  border: 1px solid grey;
  border-radius: 5px;
`
const InputMessage = ({label, handleSend}) => {
  const [messageValue, setMessageValue] = useState("")

  const handlechange = ev =>{
    setMessageValue(ev.target.value)
  }
  const handleClickSend = () => {
    handleSend(messageValue)
  }

  return (
    <Container>
      <label>{label}</label>
      <textarea
        value={messageValue}
        onChange={handlechange}
      />
      <Button onClick={handleClickSend}>Send</Button>
    </Container>
  )

}

export default InputMessage
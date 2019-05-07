import React, {useState} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InputText = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  border: 1.5px solid grey;
  border-radius:5px;
  padding: 5.5px;
  outline: none;
`

const iconStyle = {
  position:"absolute", 
  padding: "5.5px",
  right: 0,
}


const Container = styled.div`
    border-radius:5px;
    width: 100%;
    background-color: ${({bgColor})=> bgColor};
    padding:  .5em;
    box-sizing: border-box;
`


const SweetInput = (props) => {
  const { iconColor="#2ca5e0", 
          placeholder="", 
          faIcon="paper-plane", 
          handleSubmit, 
          cleanAfter, 
          bgColor, 
          hotAction,
          handleChange,
          hotValue} = props

  const [inputValue, setInputValue] = useState('')
  const handleInput = ({target:{value}}) => {
    setInputValue(value)
  }
  const handleClick = ev => ev.target.focus()
  const preventDefault = ev =>{
    ev.preventDefault()
    handleSubmit && handleSubmit(inputValue)
    setInputValue(cleanAfter ? '' : inputValue)

  }
  return (
    <Container bgColor={bgColor}>
      <form onSubmit={preventDefault} style={{position:"relative"}}>
      <FontAwesomeIcon
        color={iconColor}
        icon={faIcon} 
        style={iconStyle}
        onClick={handleSubmit}
        />
        {
           hotAction?
            <InputText
              type="text"
              onChange={handleChange}
              value={hotValue}
              placeholder={placeholder}
              onClick={handleClick}
            />
            :
            <InputText
              type="text"
              onChange={handleInput}
              value={inputValue}
              placeholder={placeholder}
              onClick={handleClick}
            />
        }
      </form>
    </Container>
  )
}

export default SweetInput
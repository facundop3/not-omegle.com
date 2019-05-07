import React, {useState} from 'react'
const InputMessage = ({label, handleSend}) => {
  const [messageValue, setMessageValue] = useState("")

  const handlechange = ev =>{
    setMessageValue(ev.target.value)
  }
  const handleClickSend = () => {
    handleSend(messageValue)
  }

  return (
    <div>
      <label>{label}</label>
      <br />
      <textarea
        value={messageValue}
        onChange={handlechange}
      ></textarea>
      <br />
      <button onClick={handleClickSend}>Send</button>
    </div>
  )

}

export default InputMessage
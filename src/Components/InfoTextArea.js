import React from 'react'

const InfoTextArea = ({label, handlechange, value}) => {
  return (
    <div>
      <label>{label}</label>
      <br/>
      <textarea
        value={value}
        onChange={handlechange}
      ></textarea>
    </div>
  )

}

export default InfoTextArea
import React from 'react'

const Input = ({ label, ...res }) => {
  return (
    <div>
        <label>{label}</label>
         <input {...res} />
    </div>
  )
}

export default Input
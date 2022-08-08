import React from 'react'

const Calculation = ({ title, number }) => {
  return (
    <div>
      <div>
        <p>{title}</p>
        <p>/ person</p>
      </div>
      <p>
        ${number}
      </p>
    </div>
  )
}

export default Calculation
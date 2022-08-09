import React from 'react'
import styled from 'styled-components';

const StyledCalculation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  * {
    color: hsl(172, 67%, 45%);
  }

  div h2 {
    color: white;
  }

  div p {
    font-size: 12px;
  }

  p {
    font-size: 24px;
  }
`


const Calculation = ({ title, number }) => {
  return (
    <StyledCalculation>
      <div>
        <h2>{title}</h2>
        <p>/ person</p>
      </div>
      <p>
        ${number}
      </p>
    </StyledCalculation>
  )
}

export default Calculation
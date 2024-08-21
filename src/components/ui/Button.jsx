import React from 'react'
import { styled } from '@linaria/react'

function Button({ handleButton, children }) {
  return (
    <>
      <Wrapper type='button' onClick={handleButton}>
        {children}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.button`
  font-size: 20px;
  padding: 4px 16px 4px;
  &:hover {
    background-color: hsl(0deg 100% 100%);
    cursor: pointer;
  }
`

export default Button

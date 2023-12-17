import React from 'react'
interface buttonProps{
    sign: string,
    onClick: () => void;
};
const Button = ({sign, onClick}:buttonProps) => {
  return (
    <button
      onClick={onClick}>
      {sign}
    </button>
  )
}

export default Button

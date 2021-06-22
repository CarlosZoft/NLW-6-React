import { useState } from 'react';
import '../styles/button.scss'
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {

  return (

    <button className="button" {...props} ></button>

  )
}
export default Button;
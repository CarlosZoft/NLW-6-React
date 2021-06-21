import { useState } from 'react';

function Button() {
  const [counter, setCounter] = useState(0);


  function clicked() {
    setCounter(counter + 1);
  }
  return (

    <button onClick={clicked}>{counter}</button>

  )
}
export default Button;
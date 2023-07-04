import React from 'react'

function FuncionClick() {
    function clickHandler() {
        console.log("Button Clicked");
    }
    return (
        <div>
          <h1>Function Click</h1>
          <button onClick={clickHandler}>Click</button>
        </div>
      )
}

export default FuncionClick

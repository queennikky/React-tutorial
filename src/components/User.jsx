import React from 'react'

const User = () => {
    const handleClick = () => {
        console.log("user clicked");
    };
    const handleClicked2 = (name) => {
        console.log(name + " Clicked");
    };

  return (
    <div>
        <h1>Responding to users Interaction</h1>
        <button onClick={handleClick}>Click Me!</button>
        <button onClick={() => handleClicked2("AYO")}>CLICK AGAIN</button>
    </div>
  );
};

export default User
import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // use state hook
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  const [fontSize, setFontSize] = useState(12);

  let increaseSize = () => setFontSize(fontSize + 2);

  return (
    <div>
      <Header
        loggedIn={loggedIn}
        handleLoggedInClick={toggleLoggedIn}
        handleFontSizeClick={increaseSize}
      />
      <Content loggedIn={loggedIn} fontSize={fontSize} />
    </div>
  );
}

export default App;

// fontSize = setFontSize((fontSize) => fontSize + 2)}

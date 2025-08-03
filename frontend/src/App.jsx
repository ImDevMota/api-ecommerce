import { useState } from "react";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignUp />
      {/* <LogIn /> */}
    </>
  );
}

export default App;

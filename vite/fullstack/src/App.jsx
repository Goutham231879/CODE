import { useState } from "react";
function App() {
    const[count , setCount] = useState(0);
  return <>
    <p>count :{count}</p>

    <button onClick={()=>{setCount(count+1)}}>add</button>
    <button onClick={()=>{setCount(count-1)}}> sub</button>

  </>;
}

export default App;

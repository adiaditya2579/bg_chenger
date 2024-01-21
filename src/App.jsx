import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
    <div className="static flex justify-center">
      <div className="absolute flex flex-wrap bottom-12 bg-white py-1 px-3 rounded-3xl ">
        <button onClick={()=> setColor("red")} className=" rounded-full py-2 px-4 text-white mx-2 my-2 " style={{backgroundColor: "red"}}>Red</button>
        <button onClick={()=> setColor("#fb5607")} className=" rounded-full py-2 px-4 text-white mx-2 my-2 " style={{backgroundColor: "#fb5607"}}>Orange</button>
        <button onClick={()=> setColor('#3a5a40')} className=" rounded-full py-2 px-4 text-white mx-2 my-2" style={{backgroundColor: "#3a5a40"}}>Green</button>
        <button onClick={()=> setColor("black")} className=" rounded-full text-white px-4 py-2 mx-2 my-2" style={{backgroundColor:"black"}}>Black</button>
        <button onClick={()=> setColor(" #f59e0b")} className=" rounded-full text-white px-4 py-2 mx-2 my-2  " style={{backgroundColor:"#f59e0b "}}>Yellow</button>
        <button onClick={()=> setColor(" Blue")} className=" rounded-full text-white px-4 py-2 mx-2 my-2  " style={{backgroundColor:"Blue "}}>Blue</button>
        
      </div>
    </div>
    </div>
  );
}

export default App;

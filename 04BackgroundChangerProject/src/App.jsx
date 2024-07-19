import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200" accordion
      style={{background: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg 
           bg-white px-3 py-2 rounded-3xl ">
            <button onClick={()=>setColor("red")} className="text-white outline-none px-4 py-1 rounded-2xl" style={{ background: "red" }}>Red
            </button>
            <button onClick={()=>setColor("Black")} className="text-white  outline-none px-4 py-1 rounded-2xl" style={{ background: "black" }}>Black
            </button>
            <button onClick={()=>setColor("Green")} className="text-white outline-none px-4 py-1 rounded-2xl" style={{ background: "green" }}>Green
            </button>
            <button onClick={()=>setColor("Yellow")} className="text-black outline-none px-4 py-1 rounded-2xl" style={{ background: "yellow" }}>Yellow
            </button>
            <button onClick={()=>setColor("Blue")} className="text-white outline-none px-4 py-1 rounded-2xl" style={{ background: "blue" }}>Blue
            </button>
            <button onClick={()=>setColor("Aqua")} className="text-black outline-none px-4 py-1 rounded-2xl" style={{ background: "aqua" }}>Aqua
            </button>
            <button onClick={()=>setColor("Magenta")} className="text-white outline-none px-4 py-1 rounded-2xl" style={{ background: "magenta" }}>Pink
            </button>
            <button onClick={()=>setColor("Violet")} className="text-black outline-none px-4 py-1 rounded-2xl" style={{ background: "violet" }}>Violet
            </button>
            <button  onClick={()=>setColor("Orange")} className="text-white outline-none px-4 py-1 rounded-2xl" style={{ background: "orange" }}>Orange
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

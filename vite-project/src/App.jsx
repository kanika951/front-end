import { useState } from 'react'
import Chai from './Chai'

function App() {
  const [color, setColor] = useState("olive");

  return  (
   <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "pink"}}>Pink</button>
        <button onClick={() => setColor("lime")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "lime"}}>Lime</button>
        <button onClick={() => setColor("powderBlue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "powderBlue"}}>Blue</button>
        <button onClick={() => setColor("lavender")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "lavender"}}>Lavender</button>
      </div>
    </div>
   </div>
  )
}

export default App

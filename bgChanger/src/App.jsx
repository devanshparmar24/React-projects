import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='h-screen w-full duration-200' style = {{backgroundColor: color}}>
      <div className='fixed flex flex-wrap right-0 top-1/2 -translate-y-1/2 px-2'>
        <div className='flex flex-col gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick={()=>setColor("gray")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"gray"}}>gray</button>
          <button onClick={()=>setColor("pink")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"pink"}}>pink</button>
          <button onClick={()=>setColor("purple")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"purple"}}>purple</button>
          <button onClick={()=>setColor("lavender")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"lavender"}}>lavender</button>
          <button onClick={()=>setColor("white")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"white"}}>white</button>
          <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:"black"}}>black</button>
          <button onClick={()=>setColor("olive")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"olive"}}>olive</button>
        </div>
      </div>
    </div>
  )
}

export default App

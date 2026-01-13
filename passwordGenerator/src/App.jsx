import react, { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_-+={}[];:'/?.>,<`~"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-0.5 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password}
            className='outline-none w-full py-1 px-3 bg-gray-500'
            placeholder='password' readOnly ref={passwordRef} />
          <button 
          onClick={copyPasswordClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >copy</button>

        </div>
        <div className='flex text-sm gap-x-2' >
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label >Length: {length}</label>
          </div>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }} />
          <label htmlFor="nmberInput">numbers</label>
          <input type="checkbox"  checked={charAllowed} id="charAllowed" onChange={()=>{setCharAllowed((prev)=>!prev)}} />
          <label htmlFor="charAllowed">characters</label>

        </div>
      </div>
    </>
  )
}

export default App

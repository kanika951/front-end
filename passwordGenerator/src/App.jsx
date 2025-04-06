import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  //useCallback hook
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllow) str += "0123456789"
    if(charAllow) str += "!@#$%(){}[]~_=+*&^`"

    for(let i = 1; i<= length; i++)
    {
      let index = Math.floor(Math.random()*str.length)
      pass += str.charAt(index)
    }

    setPassword(pass)

  }, [length, numberAllow, charAllow, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select() //selects entire reference
    passwordRef.current?.setSelectionRange(0, 3) //selects only the range given
    window.navigator.clipboard.writeText(password)
  }, [password])

  //useEffect hook
  useEffect(() => {
      passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' 
                 value={password} 
                 className='outline-none w-full py-1 px-3 bg-white text-gray-500' 
                 placeholder='Password'
                 ref={passwordRef} 
                 readOnly />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={100} value={length} className='cursor-pointer' 
                   onChange={(e) => setLength(e.target.value)}/>
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox' value={numberAllow} className='cursor-pointer' 
                   onChange={() => setNumberAllow((prev) => !prev)}/>
            <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox' value={charAllow} className='cursor-pointer' 
                   onChange={() => setCharAllow((prev) => !prev)}/>
            <label>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

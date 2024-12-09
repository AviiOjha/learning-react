import { useCallback, useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str+= "1234567890"
    if(charAllowed) str+= "!@#$%^&*_`~"

    for (let i = 0; i < length; i++) {
      let char  = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20) //This specifies the range to select, e.g., from 0 to 20 here
    window.navigator.clipboard.writeText(password)

    //showing a toast message when a user copies the password
    toast.success("Password copied!", {
      position: "top-right",
      autoClose: 1000, // 1 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light", // light, dark, or colored
    }) 
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <ToastContainer />
    <div className='w-full max-w-md mx-auto my-6 shadow-md rounded-lg px-4 py-3 bg-gray-800'>
      <h3 className='text-center text-cyan-50 mb-5'>Password Generator</h3>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
          <button 
            onClick = {copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5'>
            Copy
          </button>
      </div>
      <div className='flex text-sm gap-x-2 mb-4 justify-around'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength (e.target.value)}}
          />
          <label 
            className='text-cyan-50 mb-1'>
            Length: {length}
          </label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked = {numAllowed}
            id='numInput'
            className='cursor-pointer'
            onChange={() => setNumAllowed((prev) => !prev)}
          />
          <label 
            className='text-cyan-50 mb-1'>
            Numbers
          </label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            className='cursor-pointer'
            onChange={() => {setCharAllowed(prev => !prev)}}
          />
          <label 
            className='text-cyan-50 mb-1'>
            Characters
          </label>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App

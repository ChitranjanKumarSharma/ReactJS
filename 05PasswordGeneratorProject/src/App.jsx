import { useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import { useEffect,  useRef } from 'react';


function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [characterAllowed, setCharacterAllowed] = useState(false);
  let [password, setPassword] = useState("");
  //ref hook
  let passwordRef= useRef(null);

  const passWordGenerator = useCallback(()=>{ 
    let pass = "";
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+= "0123456789";
    if(characterAllowed ) str+= "!@#$%^&*()_+=[]{}`~";

    for (let index = 1; index <= length; index++) {
      let char = (Math.floor(Math.random()* str.length)) +1;
      // console.log(char);
      pass+= str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{passWordGenerator()}, [length, numberAllowed, characterAllowed, passWordGenerator])



  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy
          </button>
        </div>

        <div className='flex text-sm, gap-x-2'>

          {/* Setting length of password */}
          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min= {6}
              value={length}
              className='cursor-pointer'
              onChange={(e)=> {setLength(e.target.value)}}
            />
            <label length >Length: {length}</label>
          </div>


          {/* Number Check box and label */}
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>


          {/* Character checkbox and its label */}
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={characterAllowed}
            id='characterInput'
            onChange={()=>{
              setCharacterAllowed((prev) =>!prev);
            }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

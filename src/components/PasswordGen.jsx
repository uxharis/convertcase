import { useState, useCallback, useEffect, useRef } from "react"

function PasswordGen() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2>Password Generator</h2>
            <div class="form-group">
              <input type="text" class="form-control" type="text" value={password} placeholder="Password" readOnly ref={passwordRef}></input>
              <button onClick={copyPasswordToClipboard} type="button" class="my-3 btn btn-primary">
                Copy
              </button>
            </div>
            <div class="form-group">
              <input
                type="range"
                min={6}
                max={30}
                value={length}
                className="cursor-pointer form-range"
                onChange={(e) => {
                  setLength(e.target.value)
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                className="form-check-input"
                id="exampleCheck1"
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              />
              <label className="form-check-label" htmlFor="numberInput" htmlFor="exampleCheck1">
                Numbers
              </label>
            </div>

            <div class="form-check">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                className="form-check-input"
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="characterInput" className="form-check-label">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PasswordGen

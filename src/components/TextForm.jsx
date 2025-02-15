import React, { useState } from "react"

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to uppercase", "success")
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase", "success")
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ")
    setText(newText)
    props.showAlert("Converted to capitalize", "success")
  }

  const handleCopy = () => {
    var text = document.getElementById("myBoxx")
    text.select()
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges()
    props.showAlert("Text copied", "success")
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance()
    msg.text = text
    window.speechSynthesis.speak(msg)
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success")
  }

  const [text, setText] = useState("")
  return (
    <div>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div className="my-3">
          <h2>{props.heading}</h2>
          <textarea className="form-control" id="myBoxx" placeholder="Enter Your Text Here...." onChange={handleOnChange} rows="6" value={text} style={{ backgroundColor: props.mode === "dark" ? "#262626" : "white", color: props.mode === "dark" ? "white" : "black" }}></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mb-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary ms-2 mb-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary ms-2 mb-2" onClick={handleCapitalize}>
          Convert To Capitilize
        </button>
        <button disabled={text.length === 0} className="btn btn-primary ms-2 mb-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary ms-2 mb-2" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>

        <button disabled={text.length === 0} type="submit" onClick={speak} className="btn btn-warning ms-2 mb-2">
          Speak
        </button>
      </div>
      <div className="container mt-4" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Your Text Summery</h2>
        <p>
          {
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter((value) => value !== "").length
          }{" "}
          words and {text.length} Characters |{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0
            }).length}{" "}
          Minuts to read{" "}
        </p>
        <p>{text.trim().length} characters</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview..."}</p>
      </div>
    </div>
  )
}

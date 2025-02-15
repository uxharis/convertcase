import { useState } from "react"
import "./App.css"
import About from "./components/About"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import Alert from "./components/Alert"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "gray"
      showAlert("Dark Mode Active", "success")
      document.title = "Text Play - Dark Mode is on"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Active", "success")
      document.title = "Text Play - Light Mode is on"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="React Practice" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container pb-5">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App

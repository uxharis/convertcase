import { useState } from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom" // ⬅ Change to HashRouter
import "./App.css"
import About from "./components/About"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import Alert from "./components/Alert"
import PasswordGen from "./components/PasswordGen"

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
        {" "}
        {/* Now using HashRouter */}
        <Navbar title="Covert Cases" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container pb-5">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/password-gen" element={<PasswordGen mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App

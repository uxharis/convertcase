import React from "react"

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: "#080818",
  //   backgroundColor: "#fff"
  // })

  let myStyleMode = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "gray" : "white"
  }
  let btnSyle = {
    color: props.mode === "dark" ? "black" : "white",
    backgroundColor: props.mode === "dark" ? "white" : "gray"
  }
  // const [btntext, setbtnText] = useState("Enable Dark Mode")

  // const toggleSyle = () => {
  //   if (myStyle.color === "#fff") {
  //     setmyStyle({
  //       color: "#080818",
  //       backgroundColor: "#fff"
  //     })
  //     setbtnText("Enable Dark Mode")
  //   } else {
  //     setmyStyle({
  //       color: "#fff",
  //       backgroundColor: "#080818"
  //     })
  //     setbtnText("Enable Light Mode")
  //   }
  // }

  // const buttonClass = myStyle.color === "#fff" ? "btn btn-light" : "btn btn-dark"

  return (
    <div className="container border-top mt-5" style={myStyleMode}>
      <h2 className="mt-4 mb-3">About Us</h2>
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body rounded" style={myStyleMode}>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn" style={btnSyle}>
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body rounded" style={myStyleMode}>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn" style={btnSyle}>
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={toggleSyle} type="button" class="btn btn-primary">
        {btntext}
      </button> */}
    </div>
  )
}

import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Amah from './Jahid'
import Navbar from './Navbar'
import upinipin from './upinipin'
import Upinipin from "./upinipin";
const peyek = require('./Jahid')
const {Agus, Jahid}=peyek

function App2() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>BISMILLAH BELAJAR BIKIN REACT MUJAHID F {console.log("hai")}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = { date: "aku", color: "yellow" };
  }
  componentDidMount() {
    console.log("componentdidmount");
  }
  componentDidUpdate() {
    console.log("componentdidupdate");
  }
  render() {
    console.log("render");
    return (
      <div style={{ backgroundColor: this.state.color }}>
      <Navbar/>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date}.</h2>
        <input
          onChange={(event) =>
            this.setState({
              date: event.target.value,
            })
          }
        />
        <button
          onClick={(event) =>
            this.setState({
              color: "blue",
            })
          }
        >
          Klik aku bro
        </button>
        <input
          type="color"
          onChange={(event) =>
            this.setState({
              color: event.target.value,
            })
            // console.log(event)
          }
          />
          <Jahid/>
          <Agus/>
          <Amah/>
          <Upinipin/>
      </div>
    );
  }
}

export default App;

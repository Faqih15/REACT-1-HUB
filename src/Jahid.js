import React, { Component } from "react";


export default class Amah extends Component {

  render() {
    return (
      <div>
        amah
      </div>
    )
  }
}


export class Agus extends Component {
  render() {
    return (
      <div>
        agus
      </div>
    )
  }
}

export class Jahid extends Component {
  state = {
    kalkulator: "",
  };

  klik =(p)=>{
    this.setState({kalkulator:p})
  }
  render() {
    return (
      <div>
        <br />
        Kalkulator
        <input defaultValue={this.state.kalkulator} />
        <button></button>
        <button
          onClick={()=>this.klik("-")}
        >
          -
        </button>
        <button
          onClick={()=>this.klik("+")}
        >
          +
        </button>
        <button
          onClick={()=>this.klik("=")}
        >
          =
        </button>
        <button
          onClick={()=>this.klik("x")}
        >
          x
        </button>
        <button
          onClick={()=>this.klik(":")}
        >
          :
        </button>
        <button
          onClick={()=>this.klik("1")}
        >
          1
        </button>
        <button
          onClick={()=>this.klik("2")}
        >
          2
        </button>
        <button
          onClick={()=>this.klik("3")}
        >
          3
        </button>
        <button
          onClick={()=>this.klik("4")}
        >
          4
        </button>
        <button
          onClick={()=>this.klik("5")}
        >
          5
        </button>
        <button
          onClick={()=>this.klik("6")}
        >
          6
        </button>
        <button
          onClick={()=>this.klik("7")}
        >
          7
        </button>
        <button
          onClick={()=>this.klik("8")}
        >
          8
        </button>
        <button
          onClick={()=>this.klik("9")}
        >
          9
        </button>
        <button
          onClick={()=>this.klik("0")}
        >
          0
        </button>

      </div>
    );
  }
}

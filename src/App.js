import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent : 0
    };
    this.add = this.add.bind(this);
  }

  add() {
    this.setState({percent : (this.state.percent + 10) % 110}, ()=> {
      console.log("new percent", this.state.percent);
    });
    console.log("add");
  }

  render() {
    return (
      <div>
        <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
          <div className="progress-bar" style={{
            backgroundColor:"#fe5196",
            width: this.state.percent.toString() + "%",
            height:"100%",
            borderRadius:"10px"
          }}></div>
        </div>
        <button onClick={this.add}>轉換百分比 </button>
      </div>
    );
  }
}

// function App(props) {
//   return(
//     <button onClick={props.handleClick}>{props.children}</button>
//   );
// }

export default App;


import React, { Component } from 'react';
import Button from './components/button';
import Reset from './components/reset';

class App extends Component{
  state={
    count:0
  }

  handleClick = () =>{
    console.log('Click');
    console.log(this.state.count);
    const oldCount = this.state.count;
    this.setState({count: oldCount+1});
  }

  handleReset = () =>{
    console.log("Reset");
    this.setState({count: 0});
  }

  render(){
    return(
      <div>
        <Button onClick={() => this.handleClick()} />
        <p>{this.state.count}</p>
        <Reset onClick={() => this.handleReset()} />
      </div>

    )
  }
}
export default App
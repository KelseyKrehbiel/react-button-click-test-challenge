import React, { Component } from "react";
import Button from "./components/button";
import Reset from "./components/reset";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/home";
import List from "./components/list";
import Show from "./components/show";

class App extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    console.log("Click");
    console.log(this.state.count);
    const oldCount = this.state.count;
    this.setState({ count: oldCount + 1 });
  };

  handleReset(){
    console.log("Reset");
    this.setState({ count: 0 });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">
              Home
            </Link>
            -
            <Link to="/user">
              User
            </Link>
            -
            <Link to="/user/1">
              User 1
            </Link>
          </nav>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={List} />
            <Route path="/user/:id" component={Show} />
          </main>
          <div>
            <Button onClick={this.handleClick} />
  
            <p>{this.state.count}</p>
            <Reset onClick={() => this.handleReset()} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

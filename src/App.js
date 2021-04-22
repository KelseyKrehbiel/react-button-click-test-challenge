import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Tabs from "./components/tabs";

class App extends Component {




  render() {
    return (
      <BrowserRouter>
        <div>
          <Tabs />
          <main>
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/user" component={List} />
            <Route path="/user/:id" component={Show} /> */}
          </main>

        </div>
      </BrowserRouter>
    );
  }
}
export default App;

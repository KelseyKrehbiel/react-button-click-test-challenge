import React, { Component } from "react";
import Home from './home';
import List from './list';
import Show from './show';

export default class Tabs extends Component {
  state = {
    tab: 1
  }
  data = [<Home/>,<List/>,<Show/>]
  changeTab(tabNumber){
    this.setState({tab: tabNumber});
    console.log("Tab ",tabNumber);
  }

  render() {
    return (
      <nav>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <button onClick={() => this.changeTab(1)}>
              Home
            </button>
          </li>
          <li class="nav-item">
            <button onClick={() => this.changeTab(2)}>
              List
            </button>
          </li>
          <li class="nav-item">
            <button onClick={() => this.changeTab(3)}>
              Show
            </button>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="/"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      <p> {this.data[this.state.tab-1]} </p>
      </nav>
    );
  }
}

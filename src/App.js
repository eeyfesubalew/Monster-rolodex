import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.componensts";
import { SearchBox } from "./components/search-box/search-box.components";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users
    `)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monster: users });
      });
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monster, searchField } = this.state;
    const filteredMonster = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          handleOnchange={this.handleChange}
          placeholder="Search monster"
        />
        <CardList monster={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;

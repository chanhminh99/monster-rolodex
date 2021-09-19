import React, {Component} from 'react'

import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) => this.setState({monsters: response}))
  }

  handleSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const {monsters, searchField} = this.state

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className='Application'>
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='search monsters' onSearchChange={this.handleSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App

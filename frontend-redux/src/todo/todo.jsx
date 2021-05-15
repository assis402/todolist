import axios from 'axios'
import React, { Component } from 'react'
import Input from '../components/input'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todo'

export default class Todo extends Component {
  constructor(props){
    super(props)
    this.state = { description: '', list: [], ip: null, noResult: false}

    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChangeDeadLine = this.handleChangeDeadLine.bind(this)
    this.handleSearch = this.handleSearch.bind(this)

    this.refresh()
  }

   async getIp(){
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    const ip = data.ip.replaceAll(".", "")
    return ip
  }

  async refresh (description = '') {
    if(this.state.ip == null){
      const ip = await this.getIp()
      this.setState({...this.state, ip: ip})
    }

    const search = description ? `&description__regex=/${description}/i` : ''
    axios.get(`${URL}?ip=${this.state.ip}&sort=-createdAt${search}`)
      .then(resp => {
        this.setState({...this.state, description, list: resp.data})
        if (resp.data.length === 0 && description){
          this.setState({...this.state, noResult: true})
        }
        else {
          this.setState({...this.state, noResult: false})
        }
      })
  }

  handleSearch() {
    this.refresh(this.state.description)

    if (this.state.list.length === 0){
      this.setState({...this.state, noResult: true})
    }
    else {
      this.setState({...this.state, noResult: false})
    }
  }

  handleAdd() {
    this.setState({...this.state, noResult: false})
    const description = this.state.description.charAt(0).toUpperCase() + this.state.description.slice(1)
    axios.post(URL, {description: description, ip: this.state.ip})
      .then(resp => this.refresh())
  }

  handleChange(e) {

    this.setState({...this.state, description: e.target.value})

  }

  handleChangeDeadLine(id, date) {
    axios.put(`${URL}/${this.state.ip}}`, { deadLine: date })
      .then(resp => this.refresh())

  }

  handleRemove(id) {
    axios.delete(`${URL}/${id}`)
      .then(resp => this.refresh(this.state.description))
  }

  handleMarkAsDone(id, done) {
    axios.put(`${URL}/${id}`, { done: !done })
      .then(resp => this.refresh(this.state.description))
  }

  render() {
    return (
      <div className="container">
        <Input 
          description={this.state.description} 
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}></Input>
        <TodoList 
          list={this.state.list} 
          noResult={this.state.noResult}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleChangeDeadLine={this.handleChangeDeadLine}/>
      </div>
    )
  }
} 
  
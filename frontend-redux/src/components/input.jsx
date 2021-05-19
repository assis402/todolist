import React, {Component} from 'react'
import { connect } from 'react-redux'
import FormButton from './formButton'
import './input.css'
import SearchButton from './searchButton'
import { bindActionCreators } from 'redux'
import { add, changeDescription, search } from '../todo/todoActions'

class Input extends Component {
  constructor(props){
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount(){
    this.props.search()
  }

  keyHandler(e) {
    const { add, search, description, list } = this.props
    if (e.key === 'Enter' && list.length !== 6) {
      e.shiftKey ? search(true) : add(description)
    }
  } 

  render() {
    const { add, search, description, changeDescription, list } = this.props
    const placeHolder = list.length === 6 ? 'Limite de tarefas atingido' : 'Adicione ou pesquise'
    const limit = list.length === 6 ? true : false
    const inputStyle = list.length === 6 ? 'limit' : ''

    return (
      <div className="inputBackground">
        <input type="text" maxlength="60" className={`input ${inputStyle}`} placeholder={placeHolder} 
          onChange={changeDescription} 
          value={description}
          onKeyUp={this.keyHandler} />
        <SearchButton onClick={() => search(true)}/>
        <FormButton onClick={() => add(description)} limit={limit}/>
      </div>
    )
  }
}

 const mapStateToProps = state => ({description: state.todo.description, list: state.todo.list})
 const mapDispathToProps = dispatch => bindActionCreators({add, changeDescription, search} , dispatch)
 export default connect(mapStateToProps, mapDispathToProps)(Input)
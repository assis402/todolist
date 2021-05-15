import React from 'react'
import FormButton from './formButton'
import './input.css'
import SearchButton from './searchButton'

export default (props) => {
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
        
    }
  }

  return (
    <div className="inputBackground">
      <input type="text" maxlength="60" className="input" placeholder="Adicione ou pesquise" 
        onChange={props.handleChange} 
        value={props.description}
        onKeyUp={keyHandler}/>
      <SearchButton onClick={props.handleSearch}/>
      <FormButton onClick={props.handleAdd}/>
    </div>
  )
}
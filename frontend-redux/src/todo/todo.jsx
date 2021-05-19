import React from 'react'
import Input from '../components/input'
import { Link } from 'react-router-dom';
import TodoList from './todoList'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './todo.css'

const todo = () => {
  return (
    <>
      <div className="container">
        <Input/>
        <TodoList/>
      </div>
      <Link to="/">
        <button className="return">
          <FontAwesomeIcon className="returnIcon" icon={faArrowLeft} size="lg" />
        </button>
      </Link>
    </>
  )
}

export default todo
  
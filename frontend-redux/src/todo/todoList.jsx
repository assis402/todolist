import React from 'react'
import Card from '../components/card'
import End from '../components/end'
import './todoList.css'
import EmptyList from '../components/emptyList'
import Loading from '../components/loading'
import { bindActionCreators } from 'redux'
import { markAsDone, changeDeadLine, remove } from './todoActions'

import { connect } from 'react-redux'

const todoList = props => {
    const renderRows = () => {
        const list = props.list || []
        
        if (list.length !== 0 && list[0] !== 0){
            return (
                list.map(todo => (
                    <Card key={todo._id} 
                        id={todo._id} 
                        description={todo.description} 
                        remove={props.remove} 
                        markAsDone={props.markAsDone}
                        changeDeadLine={props.changeDeadLine} 
                        done={todo.done}
                        deadLine={todo.deadLine}/>
                ))
            )
        }

        else if (list.length === 0){
            return <EmptyList noResult={props.noResult}/>
        }

        else {
            return <Loading/>
        }
    }

    return (
        <div className="todoList">
                {renderRows()}
                <End></End>
        </div>
    )
}

const mapStateToProps = state => ({list: state.todo.list, noResult: state.todo.noResult})
const mapDispathToProps = dispatch => 
bindActionCreators({ markAsDone, changeDeadLine, remove }, dispatch)
export default connect(mapStateToProps, mapDispathToProps)(todoList)
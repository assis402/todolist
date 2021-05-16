import React from 'react'
import Card from '../components/card'
import End from '../components/end'
import './todoList.css'
import EmptyList from '../components/emptyList'
import Loading from '../components/loading'

export default (props) => {
    const renderRows = () => {
        const list = props.list || []
        
        if (props.list.length !== 0 && props.list[0] !== 0){
            return (
                list.map(todo => (
                    <Card key={todo._id} 
                        id={todo._id} 
                        description={todo.description} 
                        handleRemove={props.handleRemove} 
                        handleMarkAsDone={props.handleMarkAsDone}
                        handleChangeDeadLine={props.handleChangeDeadLine} 
                        done={todo.done}
                        deadLine={todo.deadLine}/>
                ))
            )
        }

        else if (props.list.length === 0){
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
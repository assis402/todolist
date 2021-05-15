import React from 'react'
import Card from '../components/card'
import End from '../components/end'
import './todoList.css'
import EmptyList from '../components/emptyList'

export default (props) => {
    const renderRows = () => {
        const list = props.list || []
        
        if (props.list.length !== 0){
            return list.map(todo => (
                <Card key={todo._id} 
                    id={todo._id} 
                    description={todo.description} 
                    handleRemove={props.handleRemove} 
                    handleMarkAsDone={props.handleMarkAsDone}
                    handleChangeDeadLine={props.handleChangeDeadLine} 
                    done={todo.done}
                    deadLine={todo.deadLine}/>
            ))
        }

        else {
            return <EmptyList noResult={props.noResult}/>
        }
    }

    return (
        <div className="todoList">
                {renderRows()}
                <End/>
        </div>
    )
}
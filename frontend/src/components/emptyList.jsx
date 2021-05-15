import React from 'react'
import './emptyList.css'

export default props => {

    if (props.noResult === false) {
        return (
            <div className="emptyList">Você ainda não possui nenhuma tarefa.</div>
        )
    } else {
        return (
            <div className="emptyList">Nenhum resultado foi encontrado.</div>
        )
    }
}
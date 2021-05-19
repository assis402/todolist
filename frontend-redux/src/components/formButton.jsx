import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import './formButton.css'

export default props => {
    if (props.limit){
        return (
            <button className="limitButton">
                <FontAwesomeIcon className="icon" icon={faExclamation} size="lg"/>
            </button>
        )
    }
    else{
        return (
            <button className="formButton">
                <FontAwesomeIcon className="icon" icon={faPlus} size="lg" onClick={props.onClick}/>
            </button>
        )
    }
}
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import './formButton.css'

export default props => (
    <button className="formButton">
        <FontAwesomeIcon className="icon" icon={faPlus} size="lg" onClick={props.onClick}/>
    </button>
);
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import './searchButton.css'

export default props => (
    <div className="searchBackground">
        <button className="searchButton">
            <FontAwesomeIcon className="icon" icon={faSearch} size="lg" onClick={props.onClick}/>
        </button>
    </div>
);
import React, { useState } from 'react'
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './card.css'

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import br from 'date-fns/locale/pt-BR';
registerLocale('br', br)

export default (props) => {
    const cardStyle = props.done ? {
        borderColor: "rgb(31 179 171)"
    } : { borderColor: "rgb(152 223 219 / 60%)" }

    const checkIconStyle = props.done ? {
        color: "rgb(31 179 171)"
    } : { color: "#ffffff00" }

    const deadLineStyle = props.done ? 'dateIconDone' : ''

    const descriptionStyle = props.done ? {
        color: "rgb(152 223 219 / 40%)",
        textDecoration: "line-through"
    } : { }

    const fontSizeStyle = props.description.length > 19 ? {
        fontSize: "13px"
    } : {}

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="card" style={cardStyle}>
            <div className="content">
                <div className="description" style={{...descriptionStyle, ...fontSizeStyle}}>{props.description}</div>
                <FontAwesomeIcon className="dateIcon" icon={faCalendarDay} size="sm" />
                <DatePicker locale="br" className={deadLineStyle} dateFormat="dd/MM/yyy" selected={new Date(props.deadLine)} onChange={(e) => props.handleChangeDeadLine(props.id, e.toISOString().slice(0, 10))} />
            </div>
            <button className="buttonDelete" onClick={() => props.handleRemove(props.id)}>
                <FontAwesomeIcon className="deleteIcon" icon={faMinus} size="lg" />
            </button>
            <button className="buttonCheck" onClick={() => props.handleMarkAsDone(props.id, props.done)}>
                
                <FontAwesomeIcon className="checkIcon" icon={faCheck} size="lg" style={checkIconStyle} />
                <FontAwesomeIcon className="unCheckIcon" icon={faCheck} size="lg" style={checkIconStyle} />
            </button>
        </div>
    )
}
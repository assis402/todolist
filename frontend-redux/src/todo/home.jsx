import React, { Component } from 'react'
import './home.css'
import linkedin from '../imgs/linkedin2.svg'
import github from '../imgs/github.svg'
import gmail from '../imgs/gmail.svg'
import { Link } from 'react-router-dom';

export default class Todo extends Component {
    render() {
        return (
          <div className="homeContainer">
            <div className="home">
                <div className="title">
                    <div className="to">
                        TO
                    </div>
                    <div className="doList">
                        <span>DO</span>
                        <span>LIST</span>
                    </div>
                </div>
                <div className="buttons">
                    <div className="triangle"></div>
                    <Link to="/app">
                        <button className="enter">
                            Enter To App
                        </button>
                    </Link>

                    <div className="developed">developed by <span className="assis">Matheus de Assis</span></div>
                    <div className="contacts">
                        <img src={linkedin} alt="" className="linkedin"/>
                        <img src={github} alt="" className="github"/>
                        <img src={gmail} alt="" className="gmail"/>
                    </div>
                </div>
            </div>
          </div>
        )
      }
}
import React, { Component } from 'react'
import './home.css'
import linkedin from '../imgs/linkedin.svg'
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
                        <a href="https://www.linkedin.com/in/assisdematheus/"><img src={linkedin} alt="" className="linkedin"/></a>
                        <a href="https://github.com/assis402"><img src={github} alt="assis402" className="github"/></a>
                        <a href="mailto: assis4002@gmail.com"><img src={gmail} alt="assis4002@gmail.com" className="gmail"/></a>
                    </div>
                </div>
            </div>
          </div>
        )
      }
}
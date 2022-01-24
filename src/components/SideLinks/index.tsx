import React, { Component } from "react";
import "./style.scss";

export default class SideLinks extends Component {
    render() {
        return (
            <div className="btn-group-vertical shadow text-white">
                {/* Github */}
                <a href="https://github.com/a-thread" aria-label="github" rel="noreferrer" target="_blank">
                    <button type="button" className="btn text-center">
                        <i className="fab fa-github"></i>
                    </button>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/a-thread" aria-label="linkedin" rel="noreferrer" target="_blank">
                    <button type="button" className="btn text-center">
                        <i className="fab fa-linkedin-in"></i>
                    </button>
                </a>

                {/* Email */}
                <a href="mailto:aiden.threadgoode@gmail.com" aria-label="email" rel="noreferrer" target="_blank">
                    <button type="button" className="btn text-center">
                        <i className="far fa-paper-plane"></i>
                    </button>
                </a>
            </div>
        )
    }
}

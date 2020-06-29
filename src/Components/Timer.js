import React, { Component } from "react";

export default class Timer extends Component {
    constructor() {
        super();
        this.state = {
            timeSecond: 0,
            isSession: true
        }
    }
    render() {
        return (
            <>
                <div>
                    <div>
                        <h4>
                            {
                                this.state.isSession === true ? "Session" : "Break"
                            }
                        </h4>
                        <br />
                        <span>{this.props.timePerSession}</span>
                        <span>:</span>
                        <span>{
                            this.state.timeSecond === 0 ? "00" :
                                this.state.timeSecond < 10 ? "0" + this.state.timeSecond :
                                    this.state.timeSecond
                        }</span>
                    </div>
                </div>
            </>
        );
    }
}
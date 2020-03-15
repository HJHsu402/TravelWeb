import React, { Component } from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
export default class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cid: 0
        }
    }

    onClickCID = cid => {
        this.setState({ cid })
    }
    render() {
        return (
            <div className="content">
                <Sidebar
                    onClickCID={this.onClickCID}
                    selectCID={this.state.cid}></Sidebar>
                <Main cid={this.state.cid}></Main>
            </div>
        )
    }
}

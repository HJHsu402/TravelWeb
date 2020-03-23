import React, { Component } from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
export default class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            CID: 0
        }
    }

    onClickCID = CID => {
        this.setState({ CID })
    }
    render() {
        return (
            <div className="content">
                <Sidebar
                    onClickCID={this.onClickCID}
                    selectCID={this.state.CID}></Sidebar>
                <Main CID={this.state.CID}></Main>
            </div>
        )
    }
}

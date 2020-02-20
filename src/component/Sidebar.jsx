import React, { Component } from 'react'
import api from '../lib/api'
export default class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }
    async componentDidMount() {
        const apijson=  await api({ data: { method: "get_鄉鎮市區", CID: 0 } })
        if(apijson.ok){
            this.setState({data:apijson.body.ItemSet.ODetail})
        }
        
    }

    render() {
        const { onClickCID ,selectCID} = this.props
        return (
            <div className='sidebar'>
                <ul>
                    {this.state.data.map(
                        d => <SidebarItem onClickCID={onClickCID} key={d.CID} cid={d.CID} data={d} selectCID={selectCID}></SidebarItem>

                    )}
                </ul>
            </div>
        )
    }
}


class SidebarItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            open: true,
            isfetched:false
        }
    }

     onClickhandle = async (e) => {
        e.stopPropagation()
        const { cid, onClickCID } = this.props
        onClickCID(cid)
        if (this.state.isfetched) {
            this.setState({ open: !this.state.open })
        }
        else {
            const apijson=  await api({ data: { method: "get_鄉鎮市區", CID: cid } })
            if(apijson.ok){
                this.setState({data:apijson.body.ItemSet.ODetail,isfetched:true})
            }

        }

    }

    render() {
        const { onClickCID,data,selectCID } = this.props
        return (
            <li >
                <span className={data.CID==selectCID?"select":""} onClick={this.onClickhandle}>{data.CName}</span>
                {
                    this.state.data.length > 0 && this.state.open &&
                    <ul className="sidebaritem fade-in">
                        {
                            this.state.data.map(d => <SidebarItem key={d.CID} cid={d.CID} data={d} onClickCID={onClickCID} selectCID={selectCID}></SidebarItem>)
                        }
                    </ul>
                }
            </li>

        )
    }
}

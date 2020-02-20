import React, { Component } from 'react'
import api from '../lib/api'
export default class ObjectDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {}
        }
    }
    async componentDidMount() {
        const { selectOID } = this.props
        const apijson = await api({ data: { method: "get_景點資訊", OID: selectOID } })
        if (apijson.ok) {
            this.setState({ data: apijson.body.ItemSet.ODetail[0] })
        }
    }
    render() {
        const { selectOID } = this.props
        const { data } = this.state
        return (
            <div className="object_detail">
                {
                    Object.entries(data).map(k => (<div key={k}> <b>{k[0]}</b>{k[1]}</div>))
                }
            </div>
        )
    }
}

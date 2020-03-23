import React, { Component } from "react"
import api from "../lib/api"
export default class ObjectDetail extends Component {
	constructor(props) {
		super(props)

		this.state = {
			data: {}
		}
	}
	async componentDidMount() {
		const { selectOID, selectCID } = this.props

		const apijson = await api({
			cmd: "object",
			data: { OID: selectOID, CID: selectCID }
		})
		if (apijson.ok && apijson.body.data.length > 0) {
			this.setState({ data: apijson.body.data[0] })
		}
	}
	render() {
		const { data } = this.state
		return (
			<div className="object_detail">
				{Object.entries(data).map(k => (
					<div key={k}>
						<b>{k[0]}</b>
						{k[1]}
					</div>
				))}
			</div>
		)
	}
}

import React, { Component } from "react"
import SidebarItem from "./SidebarItem"
import api from "../lib/api"
export default class Sidebar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			data: []
		}
	}
	async componentDidMount() {
		const apijson = await api({ cmd: "subclass", data: { PCID: 0 } })
		if (apijson.ok) {
			this.setState({ data: apijson.body.data })
		}
	}

	render() {
		const { onClickCID, selectCID } = this.props
		return (
			<div className="sidebar">
				<ul>
					{this.state.data.map(d => (
						<SidebarItem
							onClickCID={onClickCID}
							key={d.CID}
							CID={d.CID}
							data={d}
							selectCID={selectCID}
						></SidebarItem>
					))}
				</ul>
			</div>
		)
	}
}

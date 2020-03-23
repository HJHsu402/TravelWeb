import React, { Component } from "react"
import api from "../lib/api"
export default class SidebarItem extends Component {
	constructor(props) {
		super(props)

		this.state = {
			data: [],
			open: true,
			isfetched: false
		}
	}

	onClickhandle = async e => {
		e.stopPropagation()
		const { CID, onClickCID } = this.props
		onClickCID(CID)
		if (this.state.isfetched) {
			this.setState({ open: !this.state.open })
		} else {
			const apijson = await api({ cmd: "subclass", data: { PCID: CID } })
			if (apijson.ok) {
				this.setState({ data: apijson.body.data, isfetched: true })
			}
		}
	}

	render() {
		const { onClickCID, data, selectCID } = this.props
		return (
			<li>
				<span
					className={data.CID == selectCID ? "select" : ""}
					onClick={this.onClickhandle}
				>
					{data.CName}
				</span>
				{this.state.data.length > 0 && this.state.open && (
					<ul className="sidebaritem fade-in">
						{this.state.data.map(d => (
							<SidebarItem
								key={d.CID}
								CID={d.CID}
								data={d}
								onClickCID={onClickCID}
								selectCID={selectCID}
							></SidebarItem>
						))}
					</ul>
				)}
			</li>
		)
	}
}

import React, { Component } from "react"
import api from "../lib/api"
import ObjectDetail from "./ObjectDetail"
import Lightbox from "./Lightbox"
export default class Main extends Component {
	constructor(props) {
		super(props)

		this.state = {
			cid: 0,
			data: [],
			openlightbox: false,
			selectOID: 0
		}
	}

	async componentDidUpdate() {
		const { cid } = this.props
		if (this.state.cid != cid) {
			const apijson = await api({ cmd: "objectlist", data: { CID: cid } })
			if (apijson.ok) {
				this.setState({ data: apijson.body.data, cid: cid })
			}
		}
	}

	onClickhandle = OID => {
		this.setState({
			openlightbox: true,
			selectOID: OID
		})
	}

	oncloslightbox = () => {
		this.setState({
			openlightbox: false,
			selectOID: 0
		})
	}

	render() {
		const { data, openlightbox, selectOID } = this.state
		if (!data.length) return <div className="notfound">尚無資料</div>
		return (
			<div className="main">
				{openlightbox && (
					<Lightbox coverClick={this.oncloslightbox} title="描述">
						<ObjectDetail selectOID={selectOID}></ObjectDetail>
					</Lightbox>
				)}
				<table className="objtable">
					<thead>
						<tr>
							{Object.keys(data[0]).map(k => (
								<th key={k}>{k}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.map(d => (
							<tr
								key={d.OID}
								onClick={() => this.onClickhandle(d.OID)}
							>
								{Object.values(d).map(k => (
									<td key={k}>{k}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		)
	}
}

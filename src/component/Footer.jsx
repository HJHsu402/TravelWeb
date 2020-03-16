import React, { Component } from "react"

export default class Footer extends Component {
	render() {
		const { Cname } = this.props
		return <div className="footer">{Cname}</div>
	}
}

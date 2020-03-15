import React, { Component } from "react"

export default class Header extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 title:'台灣景點介紹'
		}
	}
	
	render() {
		return (
			<div className="header">
				<h3>{this.state.title}</h3>
			</div>
		)
	}
}

import React, { Component } from 'react'

export default class Lightbox extends Component {
    render() {
        const { children, coverClick, title } = this.props
        return (
            <div className="lightbox">
                <div className="lightbox_cover" onClick={coverClick}></div>
                <div className="lightbox_content">
                    <h4>{title}</h4>
                    {children}
                </div>
            </div>
        )
    }
}

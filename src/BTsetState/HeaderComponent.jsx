import React, { Component } from 'react'
import headerStyle from '../assets/header.module.css'
export default class HeaderComponent extends Component {
    render() {
        return (
            <div className={`${headerStyle.header}`}>TRY GLASSES APP ONLINE</div>
        )
    }
}

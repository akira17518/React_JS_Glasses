import React, { Component } from 'react'
import BaiTapSetState from './BTsetState/BaiTapSetState'
import appCSS from './assets/app.module.css'
export default class App extends Component {
    render() {
        return (
            <div>
                <BaiTapSetState></BaiTapSetState>
            </div>
        )
    }
}

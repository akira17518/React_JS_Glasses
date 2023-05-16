import React, { Component } from 'react'
import BaiTapSetState from './BTsetState/BaiTapSetState'
import appCSS from './assets/app.module.css'
export default class App extends Component {
    render() {
        return (
            <div className={`${appCSS.app} h-full`}>
                <BaiTapSetState></BaiTapSetState>
            </div>
        )
    }
}

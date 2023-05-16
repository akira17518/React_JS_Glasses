import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import Content from './Content'
import appCSS from './assets/app.module.css'
export default class extends Component {
  render() {
    return (
      <div className={`${appCSS.app}`} >
        <div>
          <HeaderComponent></HeaderComponent>
        </div>
        <div className='w-50 m-auto fs-1 text-center p-3'>
          <Content></Content>
        </div>
      </div>
    )
  }
}




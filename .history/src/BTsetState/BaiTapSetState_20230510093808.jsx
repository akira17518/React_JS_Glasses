import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import Content from './Content'

export default class extends Component {
  render() {
    return (
      <body>
        <div>
          <HeaderComponent></HeaderComponent>
        </div>
        <div>
          <Content></Content>
        </div>
      </body>
    )
  }
}




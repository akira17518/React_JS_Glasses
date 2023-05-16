import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    return (
      <div className='container'>
        <div className="top-model">
          <div className="row">
            <div className="col-6">
              <div className='card-left card'>
                <img src="./img/model.jpg" alt="" />
                <div className="card-body fs-4 text-start position-absolute bottom-0 end-0 start-0 opacity-1 bg-warning border">
                  <h3>FENDI F8750</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className='card-right card'>
                <img src="" alt="" />
                456
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

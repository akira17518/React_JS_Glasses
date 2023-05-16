import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    return (
      <div className='container'>
        <div className="top-model">
          <div className="row">
            <div className="col-6">
              <div className='card-left card position relative'>
              <img src="./img/v8.png" alt=""  className='position-absolute bottom-50 start-25' width={200}/>
                <img src="./img/model.jpg" alt="" />
                <div className="card-body fs-6 text-start position-absolute bottom-0 end-0 start-0 opacity-50 bg-warning border">
                  <h3 className='text-primary'>FENDI F8750</h3>
                  <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eos?</p>
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

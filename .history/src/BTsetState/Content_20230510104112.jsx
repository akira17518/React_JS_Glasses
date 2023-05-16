import React, { Component } from 'react'
import glassCSS from '../assets/glass.module.css'
export default class Content extends Component {
  glass = [
    {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 2,
      "price": 50,
      "name": "GUCCI G8759H",
      "url": "./glassesImage/v2.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 3,
      "price": 30,
      "name": "DIOR D6700HQ",
      "url": "./glassesImage/v3.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 4,
      "price": 70,
      "name": "DIOR D6005U",
      "url": "./glassesImage/v4.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 5,
      "price": 40,
      "name": "PRADA P8750",
      "url": "./glassesImage/v5.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 6,
      "price": 60,
      "name": "PRADA P9700",
      "url": "./glassesImage/v6.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 7,
      "price": 80,
      "name": "FENDI F8750",
      "url": "./glassesImage/v7.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 8,
      "price": 100,
      "name": "FENDI F8500",
      "url": "./glassesImage/v8.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 9,
      "price": 60,
      "name": "FENDI F4300",
      "url": "./glassesImage/v9.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  ]

  renderModelRight = () => {
    return <div className='card-right card position relative'>
      <img src="./img/v7.png" alt="" className={`${glassCSS.glass}`} width={200} />
      <img src="./img/model.jpg" alt="" />
      <div className="card-body fs-6 text-start position-absolute bottom-0 end-0 start-0 opacity-50 bg-warning border">
        <h3 className='text-primary'>FENDI F8750</h3>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eos?</p>
      </div>
    </div>
  }


  render() {
    return (
      <div className='container'>
        <div className="top-model">
          <div className="row">
            <div className="col-6">
              <div className='card-left card position relative'>
                <img src="./img/v7.png" alt="" className={`${glassCSS.glass}`} width={200} />
                <img src="./img/model.jpg" alt="" />
                <div className="card-body fs-6 text-start position-absolute bottom-0 end-0 start-0 opacity-50 bg-warning border">
                  <h3 className='text-primary'>FENDI F8750</h3>
                  <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eos?</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              {this.renderModelRight()}
            </div>
          </div>
        </div>
        <div className="bot-model">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <img src="./img/v7.png" alt="" width={100}/>
              </div>
              <div className="col-2">
                <img src="./img/v7.png" alt="" />
              </div>
              <div className="col-2">
                <img src="./img/v7.png" alt="" />
              </div>
              <div className="col-2">
                <img src="./img/v7.png" alt="" />
              </div>
              <div className="col-2">
                <img src="./img/v7.png" alt="" />
              </div>
              <div className="col-2">
                <img src="./img/v7.png" alt="" />
              </div>
              <div className="col-2">
                <img src="./img/v7.png" alt="" />
              </div>
              <div className="col-2">
                <img src="./img/v7.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

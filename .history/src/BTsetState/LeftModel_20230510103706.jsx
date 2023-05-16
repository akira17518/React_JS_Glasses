import React, { Component } from 'react'

export default class LeftModel extends Component {
    render() {
        return (
            <div className='card-left card position relative'>
                <img src="./img/v7.png" alt="" className={`${glassCSS.glass}`} width={200} />
                <img src="./img/model.jpg" alt="" />
                <div className="card-body fs-6 text-start position-absolute bottom-0 end-0 start-0 opacity-50 bg-warning border">
                    <h3 className='text-primary'>FENDI F8750</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eos?</p>
                </div>
            </div>
        )
    }
}

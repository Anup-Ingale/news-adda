import React, { Component } from 'react'
import loader from './ajax-loader.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                    <img src={loader} alt='loader'/>
            </div>
        )
    }
}

export default Spinner

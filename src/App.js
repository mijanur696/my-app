import React, { Component } from 'react'
import Guest from './Guest'
import User from './User'

export default class App extends Component {
   
    render() {
        return (
            <div>
               <Guest /> 
               <User />
            </div>
        )
    }
}



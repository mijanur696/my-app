import React, { Component } from 'react'
import './App.css'
import rain from "./rain.png"

export default class App extends Component {



   state={
      cityName:"",
      countryName:"",
      temp:"",
      min_temp:"",
      max_temp:"",
      despo:"",
      city:['Kolkata','Mumbai','Chennai','Bangalore','Hyderabad','Delhi','Lucknow','Ahmedabad','Bhopal','Ranchi','Srinagar','Guwahati','Bhubaneswar','Thiruvananthapuram','Dehradun','Agartala','Imphal','Pondicherry','Gandhinagar','Shimla','Amaravati','Gangtok']
        
      
          
   }
   

  
 
 
 componentDidMount(){
     fetch("https://api.openweathermap.org/data/2.5/weather?q="+ this.state.city[Math.floor(Math.random()*20)] +"&appid=06035caebd81ed391da0b14e0e025a8e&units=metric")
     .then(response => response.json())
     .then(data=> this.setState({cityName:data.name,
        countryName:data.sys.country,
        temp:data.main.temp,
        min_temp:data.main.temp_min,
        max_temp:data.main.temp_max,
        despo:data.weather[0].description,
        
    }))
 }


    render() {
        return (
            <div className="container">
               <h1>{this.state.cityName}{","} {this.state.countryName}</h1>
                < img src={rain} style={{width:"100px"}} alt="small pic"/>
                <h2>{Math.floor(this.state.temp)}</h2>
                <span>{Math.floor(this.state.min_temp)}</span>  <span style={{paddingLeft:"20px"}}>{Math.floor(this.state.max_temp)}</span> 
                <h3>{this.state.despo}</h3>
                {/* <div className="inputField">
                <input type="text" onChange={function handleChange(e){ this.setState({input:e.target.value}) }} placeholder="Enter Your City"/> <button onClick={this.cityName}>Enter </button>
                </div> */}
                <h4>Refresh this page to show the Indian random city weather forecast. </h4>
                </div>
        )
    }
}



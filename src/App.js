import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'
import Box from './Box.js'

const Es6 = (props) => <div> {props.loggedIn ? "You are now logged in" : "Please log in"} </div>


 const Dumb = (props) =>{ 
console.log(props.counter); 



return ( 
  <div> 
  {props.counter}
<form onSubmit = {  props.verify() } >

<input type="text"  value ={props.username} onChange ={props.userChange()} />
<input type="text"  value={props.password}  onChange ={props.passChange()} />
<button onClick = {  props.increment}> submit </button>


</form>
 
</div> 
 );


}


class App extends Component {

constructor(props){
super(props);

this.state = { counter:0, loggedIn:false, username: "", password:""}

//this.verify = this.verify.bind(this); 
}

 verify = (e)=> { 
e.preventDefault(); 
return(this.state.username=="Maz" && this.state.password =="har" ? this.setState({loggedIn: true}) : this.setState({loggedIn:null})); 


}

userChange = (event) => {
  console.log(event.target.value); 
this.setState({username : event.target.value});


}



passChange = (event) => {
  
  this.setState({password : event.target.value});
  }

increment(){ 
  this.setState({ counter :this.state.counter+1 }); 
}

  render() {
    return (
      <div className="App">
        <Navbar loggedIn = {this.state.loggedIn} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World.</h1>
          
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Dumb increment = { () => this.increment()} 
          counter = {this.state.counter} 
          verify = {(e) => this.verify}
          userChange = {(e)=> this.userChange}
          passChange = {(e)=> this.passChange}  /> 

          <Es6 loggedIn = {this.state.loggedIn}/> 
          <Box renderImage = "https://pbs.twimg.com/media/DIJ7ZNXXUAIwH_8.jpg"/>
          <Box renderImage ="https://images.moviepilot.com/image/upload/c_fill,h_470,q_auto:good,w_620/reu6ax1m5d39jtu6lakt.jpg" />
      </div>
    );
  }
}

export default App;

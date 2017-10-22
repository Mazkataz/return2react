import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Es6 = (props) => <div> {props.loggedIn ? "You are now logged in" : "Please log in"} </div>

const Comp = (props) => {

return(
<div> 

Hello sons, this is Comp
<div>
{props.counter %2==0 ? "odd" : "even"}
</div> 

  </div> 

);


}



 const Dumb = (props) =>{ 
console.log(props.counter); 



return ( 
  <div> 
  {props.counter}
<form onSubmit = {  props.verify } >

<input type="text"  placeholder = "user" onChange ={props.userChange} />
<input type="text"  placeholder = "pass" onChange ={props.passChange} />
<button onClick = {  props.increment}> submit </button>


</form>
 
</div> 
 );


}


class App extends Component {

constructor(props){
super(props);

this.state = { counter:0, loggedIn:false}

}

verify(){ 

return(this.props.username=="Maz" && this.props.password =="har" ? this.setState({isLoggedIn: true}) : ""); 


}

userChange(){
this.setState({username : this.username.target.value, password : this.password.target.value});


}

passChange(){

}

increment(){ 
  this.setState({ counter :this.state.counter+1 }); 
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Dumb increment = { () => this.increment()} 
          counter = {this.state.counter} /> 

          <Es6 loggedIn = {this.state.loggedIn}/> 

          <Comp counter = {this.state.counter} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';





class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state={phone:[]};
  }
  
  save() {
    var phone = [...this.state.phone];
    phone.push(this.newText.value);
    this.setState({phone});
  }

  render(){
      return(
          <div className="list">
            <h1> Phonebook</h1>
            <input type="text" ref={(ip) => {this.newText = ip}}/>
            <button onClick={this.save.bind(this)} className="button1">Save
            </button>
            <hr></hr>
            <ul className= 'lists'>
              {this.state.phone.map(function(todo) {
                    return <li>+44 {todo}</li>
               })} 
            </ul>
          </div>
      )
  }
};
export default App
// ReactDOM.render(<Todo/>, document.getElementById('app'));









// import React, {Component} from 'react';
// import './App.css';









// class App extends Component  {
//   constructor(){
//     super()
//     this.state ={
//     phoneNumber: null
//     }
//     }
// handleSubmit= (event)=>{
//   event.preventDefault();
// }
// handleInputChange = (event) =>{
//   event.preventDefault();
//  this.setState ({
//    [event.target.name]:event.target.value
//  })
//   }

// render() {
//   const {phoneNumber} = this.state
//   return(
//  <div>  
//  <form onSubmit= {this.handleSubmit}>
//  <input type = "text" 
//  name= 'phoneNumber'
//  placeholder="Phone Number"  onChange= {this.handleInputChange} /> 
//   <button>Sumbit</button>
//    <hr/>
//    <h2>Phone Number List</h2></form>
//    <p></p>
// </div>
//   )}
// }



// export default App
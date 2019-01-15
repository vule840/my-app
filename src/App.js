import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	
	state = {
        ip_adress: '...'
        

  }

	componentDidMount(){
		this.fetchData()

	}

	fetchData(){
		fetch('https://jsonplaceholder.typicode.com/todos/1')
		  .then(response => response.json())
		  .then(data => console.log(data))
		  .catch(error => console.log('failed',error))

		  	
	}
	

   render() {

   	var {isLoading, contacts} = this.state;
    return (
      <div className="App">
     sdfsdf
      </div>
    );
  }
}

export default App;

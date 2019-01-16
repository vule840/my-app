import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";



import Card from "./components/Card"

import { FaBeer, FaUser, FaCity } from 'react-icons/fa';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false
		};
	}  
	componentDidMount() {
		fetch("https://randomuser.me/api/?results=10")
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					items: json
				});
				console.log(this.state.items);
			});
	}
	render() {
		var { isLoaded, items } = this.state;
		if (!isLoaded) {
			return <div>Loading...</div>;
		}
		return (
			<div className="App">
				<div className="container">
				  	<div className="row">
					{items.results.map(item => (
						<div className="col-4 p-3">
							<div className="card bg-dark text-white">
							 <img className="card-img-top" src={item.picture.large} />
							  <div className="card-body">
							    <h5 className="card-title"><FaUser /> {item.name.first}</h5>
							    <h5 className="card-title"><FaCity /> {item.location.city}</h5>
							    <p className="card-text"> {item.email}</p>
							    <p className="card-text">{item.gender}</p>
							    
							    <a href="#" className="btn btn-primary">Go somewhere</a>
							  </div>
							</div>
						</div>
						
					))}
					</div>
				</div>
				


				{/*<ul>
					{items.results.map(item => (
						<li key="{item.id}">
							Name: {item.phone} | Email: {item.email}
						</li>
					))}
				</ul>


				<Card></Card>*/}


			</div>
		);
	}
}
export default App;

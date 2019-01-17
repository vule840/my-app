import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Card from "./components/Card";
import SimpleMap from "./components/SimpleMap";

//importaš ikone i onda ih koristiš kao komponennte
import {
	FaUser,
	FaCity,
	FaEnvelope,
	FaGenderless,
	FaMapMarker
} from "react-icons/fa";

//https://github.com/google-map-react/google-map-react
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
			center: {
				lat: 59.95,
				lng: 30.33
			},
			zoom: 11
		};
	}
	componentDidMount() {
		fetch("https://randomuser.me/api/?results=10")
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					items: json,
					center: {
						lat: 59.95,
						lng: 30.33
					},
					zoom: 11
				});
				console.log(this.state.items);
			});
	}
	render() {
		var { isLoaded, items, center } = this.state;
		if (!isLoaded) {
			return <div>Loading...</div>;
		}
		return (
			<div className="App">
				<div className="container">
					<div className="row">
						{items.results.map(item => (
							<div className="col p-3 ">
								<div className="card bg-dark text-white">
									<img
										className="card-img-top"
										src={item.picture.large}
									/>
									<div className="card-body">
										<p className="card-title">
											<FaUser /> {item.name.title}.{" "}
											{item.name.first}
											{item.location.coordinates.latitude}
										</p>
										<p className="card-title">
											<FaCity /> {item.location.city}
										</p>
										<p className="card-text smaller">
											<FaEnvelope /> {item.email}
										</p>
										<p className="card-text">
											<FaGenderless /> {item.gender}
										</p>

										<p className="card-text">
											<FaMapMarker />{" "}
											{item.location.state}
										</p>

										{/*<a href="#" className="btn btn-primary">
											Go somewhere
										</a>*/}
									</div>
								</div>
								<SimpleMap />
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

import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};

	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ height: "20vh", width: "100%" }}>
				<GoogleMapReact
					yesIWantToUseGoogleMapApiInternals
					bootstrapURLKeys={{
						key: ""
					}}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				/>
				{/* <AnyReactComponent
					lat={59.955413}
					lng={30.337844}
					text={"Kreyser Avrora"}
				/> */}
			</div>
		);
	}
}

export default SimpleMap;

var React = require("react/addons");
var Leaflet = require('leaflet');
Leaflet.Icon.Default.imagePath = 'http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images';
var divStyle = {
  width:'400px',
  height:'80%'
};

module.exports = React.createClass({
	getInitialState: function(){
		return { map: undefined}
	},
	getDefaultProps: function() {
	    return {
	      center: [0,0],
	      zoom: 2,
	      tileLayer:'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
	    }
	},
	render:function(){
		var map = this.state.map; 
		//get all the children and push the map down as a property  		
   		var children = map ? React.Children.map(this.props.children, function(child){
   			return React.addons.cloneWithProps(child, {container : map});
   		}) : null;
   		//return the map container
		return (
			<div id={this.props.id}>{children}</div>
			)
	},
	componentDidMount:function(){
		//capture the leaflet map
		var leafletMap = Leaflet.map(this.props.id)
		.setView(this.props.center, this.props.zoom);
		
		Leaflet.tileLayer(this.props.tileLayer, {
			maxZoom: this.props.maxZoom,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'examples.map-i875mjb7'
		}).addTo(leafletMap);
	
		//set the state to rerender
		this.setState({map: leafletMap});
	}
});
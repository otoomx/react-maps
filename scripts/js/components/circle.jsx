var React = require("react/addons");
var Leaflet = require('leaflet');

module.exports = React.createClass({

	componentWillMount : function () {
	    this.leafletCircle = Leaflet.circleMarker([51.508, -0.11], 10000, {
    	color: 'red',
    	fillColor: '#f03',
    	fillOpacity: 0.5
		});
  	},
  	componentDidMount: function(){
 		this.props.container.addLayer(this.leafletCircle);
  	},
  	componentWillUnmount: function() {
    	this.props.container.removeLayer(this.leafletCircle);
  	},
	render: function(){

		return (<noscript></noscript>)
	}
});
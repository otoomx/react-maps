var React = require("react/addons");
var Leaflet = require('leaflet');

module.exports = React.createClass({

	getInitialState: function() {

		return { renderContent: false };
	},
	toggleContent: function(){

		var state = !this.state.renderContent;
		console.log(state);
		this.setState({renderContent :state});
	},
	render: function(){

		return (
			this.state.renderContent ? <div><b>Hello world!</b><br/>I am a popup.</div> : <noscript>nothing</noscript>)
	},
	componentWillMount : function () {
	    this.leafletMarker = Leaflet.marker(this.props.latlong, this.props);
	   	this.leafletMarker.on('click', this.toggleContent)
	    this.leafletMarker.total = 4303;
  	},
  	componentDidMount: function(){
  		this.leafletMarker.bindPopup(this.getDOMNode());
 		this.props.container.addLayer(this.leafletMarker);
  	},
  	componentWillUnmount: function() {
    	this.props.container.removeLayer(this.leafletMarker);
  	},
  	componentDidUpdate: function(){
  		this.leafletMarker.bindPopup(this.getDOMNode());
  	}

})
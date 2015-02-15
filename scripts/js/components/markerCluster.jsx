var React = require("react/addons");
var L = require('leaflet');
require('leaflet.markercluster');

module.exports = React.createClass({
	getInitialState: function(){
		return { clusterGroup: undefined }
	},
	render: function(){
		var clusterGroup = this.state.clusterGroup;
   		
   		var children = clusterGroup ? React.Children.map(this.props.children, function(child){
   			return React.addons.cloneWithProps(child, {container : clusterGroup});
   		}) : null;

		return (<div>{children}</div>)
	},
	componentWillMount : function () {
	    var leafletClusterGroup = new L.MarkerClusterGroup({
    		
    		iconCreateFunction: function(cluster) {
    			var count = 0;
    			var markers = cluster.getAllChildMarkers();
    			//count the the qty in each child marker 
    			for(var i=0;i< markers.length;i++){
    				count += markers[i].total;
    			}
    			
    			var size = 40;
        		return new L.DivIcon({className: 'count-icon', html: '<b>' + count + '</b>', iconSize: [size, size] });
    		}
		
		});

		this.setState({clusterGroup: leafletClusterGroup});
  	},
  	componentDidMount: function(){
  		this.props.container.addLayer(this.state.clusterGroup);
  	},
  	componentWillUnmount: function(){
  		this.props.container.removeLayer(this.state.clusterGroup);
  	}
});
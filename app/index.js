const React = require("react");
const ReactDOM = require("react-dom");
require('./app.scss')

const Photolog = React.createClass({
	render: function() {
		return (
			<div>Photolog - edited</div>
		)
	}
})  

ReactDOM.render(<Photolog/>, document.getElementById("container"));
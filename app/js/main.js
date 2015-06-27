/* load styles */
require('../style/style.less')

/* javascripts */
var data = [ { label: "Data Set 1",
	x: [0, 1, 2, 3, 4],
	y: [0, 1, 2, 3, 4] },
	{ label: "Data Set 2",
		x: [0, 1, 2, 3, 4],
		y: [0, 1, 4, 9, 16] } ] ;

var d3Chart = require('./components/margin.js');



var chart = d3Chart().width(800).height(500)
	.margin({
		top:10,
		right:20,
		bottom:30,
		left:30
	});

var svg = d3.select("body").append("svg")
	.datum(data)
	.call(chart);

svg.innerChart.append("g")
	.attr("transform","translate(0,"+chart.innerHeight+")")
	.attr("class","axis x")

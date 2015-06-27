/*
 * Implement margin conventions
 * http://bl.ocks.org/mbostock/3019563
 */


function marginConvention(){
	var svg;
	var defaults = {
		margin:{
			top: 20,
			right: 20,
			bottom: 30,
			left: 30
		},
		width: 960,
		height: 600
	};

	function chart(selection){
		var _this = this;
		selection.each(function(d,i){
			svg = d3.select(this)
				.attr({
					"width": defaults.width,
					"height": defaults.height
				})
				.append("g")
				.attr("transform","translate(" + defaults.margin.left + "," + defaults.margin.top + ")");

			_this.innerChart = svg;
		})

	}

	chart.width = function(value){
		if(!arguments.length) return defaults.width;

		defaults.width = value;
		return chart;
	};

	chart.height = function(value){
		if(!arguments.length) return defaults.height;

		defaults.height = value;
		return chart;
	};

	chart.margin = function(value){
		if(!arguments.length) return defaults.height;

		defaults.margin = value;
		return chart;
	};

	chart.innerWidth = defaults.width - defaults.margin.left - defaults.margin.right;
	chart.innerHeight = defaults.height - defaults.margin.top - defaults.margin.bottom;


	return chart;

};


module.exports = marginConvention;

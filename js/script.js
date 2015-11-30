var whiteBorder =  '1px solid white';
var greyBorder = '1px solid #676767';

$("document").ready(function(){
	$("#house").click(function(){
		d3.select("#house")
		  .style({
		  	'color': 'white',
		  	'border': whiteBorder,
		  	'z-index': '5'
		  })
		d3.select("#apt")
		  .style({
		  	'color': '#676767',
		  	'border': greyBorder,
		  	'z-index': '4',
		  })
		d3.select('#housing-money').text(houseMoney[0]);
	});

	$("#apt").click(function(){
		d3.select("#apt")
		  .style({
		  	'color': 'white',
		  	'border': whiteBorder,
		  	'z-index': '5'
		  })
		d3.select("#house")
		  .style({
		  	'color': '#676767',
		  	'border': greyBorder,
		  	'z-index': '4'
		  })
		d3.select('#housing-money').text(aptMoney[0]);  
	});
});

var houseMoney = [1100, 2300, 950, 2100, 3200, 4100, 5000];
var aptMoney = [1000, 2100, 940, 2000, 3100, 4000, 4900]  
var houseSelect = d3.select('#house').style({'border': whiteBorder})
var aptSelect = d3.select('#apt').style({'border': whiteBorder})


$("document").ready(function(){

  $("#housing-slider").slider({
	value: 0,
	min: 0,
	max: 5,
	step: 1,
	slide: function(evt, elem){
		if(elem.value==0 && houseSelect){
			d3.select('.room').text('STUDIO ONLY');
			d3.select('#housing-money').text(houseMoney[0]);
		}else if(elem.value==1 && houseSelect){
			d3.select('.room').text('STUDIO / 1 BR');
			d3.select('#housing-money').text(houseMoney[1]);
		}else if(elem.value==2 && houseSelect){
			d3.select('.room').text('1 BR');
			d3.select('#housing-money').text(houseMoney[2]);
		}else if(elem.value==3 && houseSelect){
			d3.select('.room').text('2 BR');
			d3.select('#housing-money').text(houseMoney[3]);
		}else if(elem.value==4 && houseSelect){
			d3.select('.room').text('3 BR');
			d3.select('#housing-money').text(houseMoney[4]);
		}else if(elem.value==5 && houseSelect){
			d3.select('.room').text('4 BR');
			d3.select('#housing-money').text(houseMoney[5]);	
		}else if(elem.value==0 && aptSelect){
			d3.select('.room').text('STUDIO ONLY');
			d3.select('#housing-money').text(aptMoney[0]);
		}else if(elem.value==1 && aptSelect){
			d3.select('.room').text('STUDIO / 1 BR');
			d3.select('#housing-money').text(aptMoney[1]);
		}else if(elem.value==2 && aptSelect){
			d3.select('.room').text('1 BR');
			d3.select('#housing-money').text(aptMoney[2]);
		}else if(elem.value==3 && aptSelect){
			d3.select('.room').text('2 BR');
			d3.select('#housing-money').text(aptMoney[3]);
		}else if(elem.value==4 && aptSelect){
			d3.select('.room').text('3 BR');
			d3.select('#housing-money').text(aptMoney[4]);
		}else if(elem.value==5 && aptSelect){
			d3.select('.room').text('4 BR');
			d3.select('#housing-money').text(aptMoney[5]);	
		}else{
			d3.select('#housing-money').text(aptMoney[6]);
		};
	},
	start: function(evt, elem){
		$(".room").addClass("heavytext")
	},
	stop: function(evt, elem){
		$(".room").removeClass("heavytext")
	}
  });

});

var restMoney = [0, 30, 60, 90, 120, 150, 180, 210];
var cookMoney = [0, 5, 10, 15, 20, 25, 30, 35];

$("#rest-slider").slider({
	value: 0,
	min: 0,
	max: 7,
	step: 1,
	slide: function(evt, elem){
		$("#rest-amt").text(elem.value)

		if(elem.value==0){
			$("#cook-slider").slider("value",7);
			d3.select('#cook-amt').text(7);
			d3.select('#rest-money').text(restMoney[0]);
			d3.select('#cook-money').text(cookMoney[7]);
		}else if(elem.value==1){
			$("#cook-slider").slider("value",6);
			d3.select('#cook-amt').text(6);
			d3.select('#rest-money').text(restMoney[1]);
			d3.select('#cook-money').text(cookMoney[6]);
		}else if(elem.value==2){
			$("#cook-slider").slider("value",5);
			d3.select('#cook-amt').text(5);
			d3.select('#rest-money').text(restMoney[2]);
			d3.select('#cook-money').text(cookMoney[5]);
		}else if(elem.value==3){
			$("#cook-slider").slider("value",4);
			d3.select('#cook-amt').text(4);
			d3.select('#rest-money').text(restMoney[3]);
			d3.select('#cook-money').text(cookMoney[4]);
		}else if(elem.value==4){
			$("#cook-slider").slider("value",3);
			d3.select('#cook-amt').text(3);
			d3.select('#rest-money').text(restMoney[4]);
			d3.select('#cook-money').text(cookMoney[3]);
		}else if(elem.value==5){
			$("#cook-slider").slider("value",2);
			d3.select('#cook-amt').text(2);
			d3.select('#rest-money').text(restMoney[5]);
			d3.select('#cook-money').text(cookMoney[2]);
		}else if(elem.value==6){
			$("#cook-slider").slider("value",1);
			d3.select('#cook-amt').text(1);
			d3.select('#rest-money').text(restMoney[6]);
			d3.select('#cook-money').text(cookMoney[1]);
		}else if(elem.value==7){
			$("#cook-slider").slider("value",0);
			d3.select('#cook-amt').text(0);	
			d3.select('#rest-money').text(restMoney[7]);
			d3.select('#cook-money').text(cookMoney[0]);
		};
	},
	start: function(evt, elem){
		$("#rest-amt").addClass("heavytext");
		$("#cook-amt").addClass("heavytext");
	},
	stop: function(evt, elem){
		$("#rest-amt").removeClass("heavytext");
		$("#cook-amt").removeClass("heavytext");
	}
});

$("#cook-slider").slider({
	value: 7,
	min: 0,
	max: 7,
	step: 1,
	slide: function(evt, elem){
		$("#cook-amt").text(elem.value)
		if(elem.value==0){
			$("#rest-slider").slider("value",7);
			d3.select('#rest-amt').text(7);
			d3.select('#cook-money').text(cookMoney[0]);
			d3.select('#rest-money').text(restMoney[7]);
		}else if(elem.value==1){
			$("#rest-slider").slider("value",6);
			d3.select('#rest-amt').text(6);
			d3.select('#cook-money').text(cookMoney[1]);
			d3.select('#rest-money').text(restMoney[6]);
		}else if(elem.value==2){
			$("#rest-slider").slider("value",5);
			d3.select('#rest-amt').text(5);
			d3.select('#cook-money').text(cookMoney[2]);
			d3.select('#rest-money').text(restMoney[5]);
		}else if(elem.value==3){
			$("#rest-slider").slider("value",4);
			d3.select('#rest-amt').text(4);
			d3.select('#cook-money').text(cookMoney[3]);
			d3.select('#rest-money').text(restMoney[4]);
		}else if(elem.value==4){
			$("#rest-slider").slider("value",3);
			d3.select('#rest-amt').text(3);
			d3.select('#cook-money').text(cookMoney[4]);
			d3.select('#rest-money').text(restMoney[3]);
		}else if(elem.value==5){
			$("#rest-slider").slider("value",2);
			d3.select('#rest-amt').text(2);
			d3.select('#cook-money').text(cookMoney[5]);
			d3.select('#rest-money').text(restMoney[2]);
		}else if(elem.value==6){
			$("#rest-slider").slider("value",1);
			d3.select('#rest-amt').text(1);
			d3.select('#cook-money').text(cookMoney[6]);
			d3.select('#rest-money').text(restMoney[1]);
		}else if(elem.value==7){
			$("#rest-slider").slider("value",0);
			d3.select('#rest-amt').text(0);	
			d3.select('#cook-money').text(cookMoney[7]);
			d3.select('#rest-money').text(restMoney[0]);
		};

	},
	start: function(evt, elem){
		$("#cook-amt").addClass("heavytext");
		$("#rest-amt").addClass("heavytext");
	},
	stop: function(evt, elem){
		$("#cook-amt").removeClass("heavytext");
		$("#rest-amt").removeClass("heavytext");
	}
});


$("#night-slider").slider({
	value: 0,
	min: 0,
	max: 7,
	step: 1,
	slide: function(evt, elem){
		$("#night-amt").text(elem.value)
	},
	start: function(evt, elem){
		$("#night-amt").addClass("heavytext")
	},
	stop: function(evt, elem){
		$("#night-amt").removeClass("heavytext")
	}
});

$("#coffee-slider").slider({
	value: 0,
	min: 0,
	max: 5,
	step: 1,
	slide: function(evt, elem){
		$("#coffee-amt").text(elem.value)
	},
	start: function(evt, elem){
		$("#coffee-amt").addClass("heavytext")
	},
	stop: function(evt, elem){
		$("#coffee-amt").removeClass("heavytext")
	}
});

$("document").ready(function(){
	$("#public").click(function(){
		d3.select("#public")
		  .style({
		  	'color': 'white',
		  	'border': whiteBorder,
		  	'z-index': '5'
		})
		d3.select("#taxi")
		  .style({
		  	'color': '#676767',
		  	'border': greyBorder,
		  	'z-index': '4',
		})
		d3.select("#car")
		  .style({
		  	'color': '#676767',
		  	'border': greyBorder,
		  	'z-index': '4',
		})

	});

	$("#taxi").click(function(){
		d3.select("#taxi")
		  .style({
		  	'color': 'white',
		  	'border': whiteBorder,
		  	'z-index': '5'
		})
		d3.select("#public")
		  .style({
		  	'color': '#676767',
		  	'border': greyBorder,
		  	'z-index': '4'
		})
		d3.select("#car")
		  .style({
		  	'color': '#676767',
		  	'border': greyBorder,
		  	'z-index': '4',
		})

	});

	$("#car").click(function(){
		d3.select("#car")
		  .style({
		  	'color': 'white',
		  	'border': whiteBorder,
		  	'z-index': '5'
		  })
		d3.select("#taxi")
		  .style({
		  	'color': '#676767',
		  	'border': greyBorder,
		  	'z-index': '4'
		})
		d3.select("#public")
		  .style({
		  	'color': '#676767',
		  	'border': greyBorder,
		  	'z-index': '4'
		})

	});
});

$("#movie-slider").slider({
	value: 0,
	min: 0,
	max: 5,
	step: 1,
	slide: function(evt, elem){
		$("#movie-amt").text(elem.value)
	},
	start: function(evt, elem){
		$("#movie-amt").addClass("heavytext")
	},
	stop: function(evt, elem){
		$("#movie-amt").removeClass("heavytext")
	}
});

$("#museum-slider").slider({
	value: 0,
	min: 0,
	max: 5,
	step: 1,
	slide: function(evt, elem){
		$("#museum-amt").text(elem.value)
	},
	start: function(evt, elem){
		$("#museum-amt").addClass("heavytext")
	},
	stop: function(evt, elem){
		$("#museum-amt").removeClass("heavytext")
	}
});




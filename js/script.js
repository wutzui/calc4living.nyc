// + NEIGHBORHOOD & HOUSING - box
$("document").ready(function(){

	$('.button-list').on('click', function(e){
	
		$(this).toggleClass('button-list-active');
	});
});


$("document").ready(function(){

	///////////////Harlem

	$("#map-M-Harlem").click(function(){ // Harlem 
		d3.select("#map-M-Harlem")
		  .style({
		  	'background': 'red',  // select button : background red
		  	'z-index': '5',
		  })	
	
		d3.select('#harlem-text')
		  .text("Harlem")
		  .style({
		  	'color': 'black',
		  })
		d3.select('#UpperEastSide-text')
		  .text("")
		  .style({
		  	'color': 'black',
		  })			  
	/////////////////
		d3.select("#map-M-UpperEastSide")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#map-M-UpperWestSide")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#map-M-Midetown")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#map-M-GreenwichVillage")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		  
		d3.select("#map-M-LowerManhattan")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
	});

	///////////////Upper East Side

	$("#map-M-UpperEastSide").click(function(){ // Harlem 
		d3.select("#map-M-UpperEastSide")
		  .style({
		  	'background': 'red',  // select button : background red
		  	'z-index': '5',
		  })		
	
		d3.select('#harlem-text')
		  .text("")
		  .style({
		  	'color': 'black',
		  })

		d3.select('#UpperEastSide-text')
		  .text("Upper Eest Side")
		  .style({
		  	'color': 'black',
		  })

	/////////////////
		d3.select("#map-M-Harlem")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#map-M-UpperWestSide")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#map-M-Midetown")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#map-M-GreenwichVillage")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		  
		d3.select("#map-M-LowerManhattan")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
	});	
});


//UTILITY : + INTERNET - buttons
$("document").ready(function(){

	var internet = [0, 60, 30, 20, 15];

	$("#rent-include").click(function(){ // 網路費包含在房租裡 rent include. 
		d3.select("#rent-include")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })		
		d3.select("#roommate-0")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#roommate-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#roommate-2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#roommate-3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#internet-amt').text(internet[0]);
	});

	$("#roommate-0").click(function(){ // live alone. 
		d3.select("#rent-include")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#roommate-0")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })	
		d3.select("#roommate-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#roommate-2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#roommate-3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#internet-amt').text(internet[1]);
	});

	$("#roommate-1").click(function(){ // 1 roommates
		d3.select("#rent-include")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#roommate-0")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#roommate-1")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })	
		d3.select("#roommate-2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#roommate-3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#internet-amt').text(internet[2]);
	});

	$("#roommate-2").click(function(){ // 2 roommates
		d3.select("#rent-include")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#roommate-0")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#roommate-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#roommate-2")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })	
		d3.select("#roommate-3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#internet-amt').text(internet[3]);
	});

	$("#roommate-3").click(function(){ // 2 roommates
		d3.select("#rent-include")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#roommate-0")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#roommate-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#roommate-2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#roommate-3")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })	
		d3.select('#internet-amt').text(internet[4]);
	});
	
	//  utility: internet-button (click set $amount)
	$(".internet-button").click(function(){

  		switch ( $(".internet-button").index( this ) ) {
  		  case 0 :
    		value = $("#internet-amt").data("amt-internet", 0);
    		break;	
  		  case 1 :
    		value = $("#internet-amt").data("amt-internet", 60);
    		break;
  		  case 2 :
    		value = $("#internet-amt").data("amt-internet", 30);
    		break;
  		  case 3 :
    		value = $("#internet-amt").data("amt-internet", 20);
    		break;    
  		  case 4 :
    		value = $("#internet-amt").data("amt-internet", 15);
    		break;    		
  		}	
	});

	//click change bar color response to charts
	$(".internet-button").mousedown(function() {
		d3.select("#internet-title")
  			.style({
		  	'background': '#8452e5',
		  	'opacity' : '0.8',
		  	})	
  	})
  	.mouseup(function() {
		d3.select("#internet-title")
  			.style({
		  	'background': 'none',
		  	'opacity' : '1',
		  	})	
	});


});

//UTILITY : + ELECTRICITY - buttons
$("document").ready(function(){

	var electric = [0, 95, 47, 32, 24];

	$("#rent-include-e").click(function(){ // 電費瓦斯費包含在房租裡 rent include. 
		d3.select("#rent-include-e")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })		
		d3.select("#roommate-e0")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#roommate-e1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#roommate-e2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#roommate-e3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#electric-amt').text(electric[0]);
	});

	$("#roommate-e0").click(function(){ // live alone. 
		d3.select("#rent-include-e")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#roommate-e0")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })	
		d3.select("#roommate-e1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#roommate-e2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#roommate-e3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#electric-amt').text(electric[1]);
	});

	$("#roommate-e1").click(function(){ // 1 roommates
		d3.select("#rent-include-e")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#roommate-e0")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#roommate-e1")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })	
		d3.select("#roommate-e2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#roommate-e3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#electric-amt').text(electric[2]);
	});

	$("#roommate-e2").click(function(){ // 2 roommates
		d3.select("#rent-include-e")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#roommate-e0")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#roommate-e1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#roommate-e2")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })	
		d3.select("#roommate-e3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#electric-amt').text(electric[3]);
	});

	$("#roommate-e3").click(function(){ // 2 roommates
		d3.select("#rent-include-e")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#roommate-e0")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#roommate-e1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#roommate-e2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#roommate-e3")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })	
		d3.select('#electric-amt').text(electric[4]);
	});
	
	//  utility: electric-button (click set $amount)
	$(".electric-button").click(function(){

  		switch ( $(".electric-button").index( this ) ) {
  		  case 0 :
    		value = $("#electric-amt").data("amt-electric", 0);
    		break;	
  		  case 1 :
    		value = $("#electric-amt").data("amt-electric", 95);
    		break;
  		  case 2 :
    		value = $("#electric-amt").data("amt-electric", 47);
    		break;
  		  case 3 :
    		value = $("#electric-amt").data("amt-electric", 32);
    		break;    
  		  case 4 :
    		value = $("#electric-amt").data("amt-electric", 24);
    		break;    		
  		}		
	});

	//click change bar color response to charts
	$(".electric-button").mousedown(function() {
		d3.select("#electric-title")
  			.style({
		  	'background': '#7549cc',
		  	'opacity' : '0.8',
		  	})	
  	})
  	.mouseup(function() {
		d3.select("#electric-title")
  			.style({
		  	'background': 'none',
		  	'opacity' : '1',
		  	})	
	});
});

//UTILITY : + TV - buttons & slider
$("document").ready(function(){

	var cable = [0, 115, 58, 38, 29];

	$("#tv-cable-x").click(function(){ // 電費瓦斯費包含在房租裡 rent include. 
		d3.select("#tv-cable-x")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5'
		  })		
		d3.select("#tv-cable-r0")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#tv-cable-r1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#tv-cable-r2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#tv-cable-r3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#tv-cable-amt').text(cable[0]);
	});
	
	$("#tv-cable-r0").click(function(){ // live alone 
		d3.select("#tv-cable-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#tv-cable-r0")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })
		d3.select("#tv-cable-r1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#tv-cable-r2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#tv-cable-r3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#tv-cable-amt').text(cable[1]);
	});

	$("#tv-cable-r1").click(function(){ // 1 roommate 
		d3.select("#tv-cable-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#tv-cable-r0")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#tv-cable-r1")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })
		d3.select("#tv-cable-r2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#tv-cable-r3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#tv-cable-amt').text(cable[2]);
	});

	$("#tv-cable-r2").click(function(){ // 2 roommates 
		d3.select("#tv-cable-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#tv-cable-r0")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#tv-cable-r1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#tv-cable-r2")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })		
		 d3.select("#tv-cable-r3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#tv-cable-amt').text(cable[3]);
	});

	$("#tv-cable-r3").click(function(){ // 3 roommates 
		d3.select("#tv-cable-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#tv-cable-r0")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#tv-cable-r1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#tv-cable-r2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		 d3.select("#tv-cable-r3")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })	
		d3.select('#tv-cable-amt').text(cable[4]);
	});
	//  utility: cable-button (click set $amount)
	$(".tv-cable").click(function(){

  		switch ( $(".tv-cable").index( this ) ) {
  		  case 0 :
    		value = $("#tv-cable-amt").data("amt-cable", 0);
    		break;	
  		  case 1 :
    		value = $("#tv-cable-amt").data("amt-cable", 115);
    		break;
  		  case 2 :
    		value = $("#tv-cable-amt").data("amt-cable", 58);
    		break;
  		  case 3 :
    		value = $("#tv-cable-amt").data("amt-cable", 38);
    		break;    
  		  case 4 :
    		value = $("#tv-cable-amt").data("amt-cable", 29);
    		break;    		
  		}
	});

	//click change bar color response to charts
	$(".tv-cable").mousedown(function() {
		d3.select("#tv-title")
  			.style({
		  	'background': '#6640b2',
		  	'opacity' : '0.8',
		  	})	
  	})
  	.mouseup(function() {
		d3.select("#tv-title")
  			.style({
		  	'background': 'none',
		  	'opacity' : '1',
		  	})	
	});


	var netflix = [0, 7.99, 9.99, 11.99];

	$("#tv-netflix-x").click(function(){ // no subscribe. 
		d3.select("#tv-netflix-x")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5'
		  })		
		d3.select("#tv-netflix-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#tv-netflix-2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#tv-netflix-3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#tv-netflix-amt').text(netflix[0]);
	});

	$("#tv-netflix-1").click(function(){ // basic
		d3.select("#tv-netflix-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#tv-netflix-1")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })
		d3.select("#tv-netflix-2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#tv-netflix-3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#tv-netflix-amt').text(netflix[1]);
	});

	$("#tv-netflix-2").click(function(){ // standard
		d3.select("#tv-netflix-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#tv-netflix-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#tv-netflix-2")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })
		d3.select("#tv-netflix-3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#tv-netflix-amt').text(netflix[2]);
	});

	$("#tv-netflix-3").click(function(){ // premium
		d3.select("#tv-netflix-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#tv-netflix-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#tv-netflix-2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#tv-netflix-3")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })
		d3.select('#tv-netflix-amt').text(netflix[3]);
	});

	//  utility: netflix-button (click set $amount)
	$(".tv-netflix").click(function(){

  		switch ( $(".tv-netflix").index( this ) ) {
  		  case 0 :
    		value = $("#tv-netflix-amt").data("amt-netflix", 0);
    		break;	
  		  case 1 :
    		value = $("#tv-netflix-amt").data("amt-netflix", 7.99);
    		break;
  		  case 2 :
    		value = $("#tv-netflix-amt").data("amt-netflix", 9.99);
    		break;
  		  case 3 :
    		value = $("#tv-netflix-amt").data("amt-netflix", 11.99);
    		break;    
  		  case 4 :
    		value = $("#tv-netflix-amt").data("amt-netflix", 29);
    		break;    		
  		}				
	});

	//click change bar color response to charts
	$(".tv-netflix").mousedown(function() {
		d3.select("#tv-title")
  			.style({
		  	'background': '#6640b2',
		  	'opacity' : '0.8',
		  	})	
  	})
  	.mouseup(function() {
		d3.select("#tv-title")
  			.style({
		  	'background': 'none',
		  	'opacity' : '1',
		  	})	
	});

});


//UTILITY : + mobile - buttons
$("document").ready(function(){

	var mobile = [25, 40, 45, 60];

	$("#mobile-1").click(function(){ // not include 網路. 
		d3.select("#mobile-1")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })		
		d3.select("#mobile-2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#mobile-3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#mobile-4")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#mobile-amt').text(mobile[0]);
	});

	$("#mobile-2").click(function(){ // 500mb. 
		d3.select("#mobile-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#mobile-2")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })
		d3.select("#mobile-3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#mobile-4")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#mobile-amt').text(mobile[1]);
	});

	$("#mobile-3").click(function(){ // 1gb. 
		d3.select("#mobile-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#mobile-2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#mobile-3")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })
		d3.select("#mobile-4")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#mobile-amt').text(mobile[2]);
	});

	$("#mobile-4").click(function(){ // 2.5gb. 
		d3.select("#mobile-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#mobile-2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#mobile-3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#mobile-4")
		  .style({
		  	'color': '#676767', // select button : background white
		  	'background': 'white',
		  	'z-index': '5',
		  })
		d3.select('#mobile-amt').text(mobile[3]);
	});

	//  utility: mobile-button (click set $amount)
	$(".mobile-button").click(function(){

  		switch ( $(".mobile-button").index( this ) ) {
  		  case 0 :
    		value = $("#mobile-amt").data("amt-mobile", 25);
    		break;	
  		  case 1 :
    		value = $("#mobile-amt").data("amt-mobile", 40);
    		break;
  		  case 2 :
    		value = $("#mobile-amt").data("amt-mobile", 45);
    		break;
  		  case 3 :
    		value = $("#mobile-amt").data("amt-mobile", 60);
    		break;       		
  		}				
	});

	//click change bar color response to charts
	$(".mobile-button").mousedown(function() {
		d3.select("#mobile-title")
  			.style({
		  	'background': '#583799',
		  	'opacity' : '0.8',
		  	})	
  	})
  	.mouseup(function() {
		d3.select("#mobile-title")
  			.style({
		  	'background': 'none',
		  	'opacity' : '1',
		  	})	
	});


});


















// + EATING : + BREAKFAST - sliders.box x 3(togo/rest/cook)
$("document").ready(function(){

	$("#breakfast-togo-slider").slider({ // BREAKFAST - TOGO slider
		value: 2,
		min: 0,
		max: 7,
		slide: function(evt, ui){
			$(".breakfast-togo-count").html(ui.value);
	
		},
		start: function(evt, ui){
			$(".breakfast-togo-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".breakfast-togo-count").removeClass("heavytext")
		},
	});

	$("#breakfast-rest-slider").slider({ // BREAKFAST - REST slider
		value: 3,
		min: 0,
		max: 7,
		slide: function(evt, ui){ 
			$(".breakfast-rest-count").text(ui.value)

		},
		start: function(evt, ui){
			$(".breakfast-rest-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".breakfast-rest-count").removeClass("heavytext")
		},
	});

	$("#breakfast-cook-slider").slider({ // BREAKFAST - COOK slider
		value: 1,
		min: 0,
		max: 7,
		slide: function(evt, ui){
			$(".breakfast-cook-count").text(ui.value);

		},
		start: function(evt, ui){
			$(".breakfast-cook-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".breakfast-cook-count").removeClass("heavytext")
		},
	});


});

// + EATING : + LUNCH - sliders.box x 3(togo/rest/cook)
$("document").ready(function(){

	$("#lunch-togo-slider").slider({ // LUNCH - TOGO slider
		value: 4,
		min: 0,
		max: 7,
		slide: function(evt, ui){
			$(".lunch-togo-count").text(ui.value);
		},
		start: function(evt, ui){
			$(".lunch-togo-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".lunch-togo-count").removeClass("heavytext")
		},
	});

	$("#lunch-rest-slider").slider({ // LUNCH - REST slider
		value: 0,	
		min: 0,
		max: 7,
		slide: function(evt, ui){
			$(".lunch-rest-count").text(ui.value);
		},
		start: function(evt, ui){
			$(".lunch-rest-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".lunch-rest-count").removeClass("heavytext")
		},
	});

	$("#lunch-cook-slider").slider({ // LUNCH - COOK slider
		value: 3,
		min: 0,
		max: 7,
		slide: function(evt, ui){
			$(".lunch-cook-count").text(ui.value);
		},
		start: function(evt, ui){
			$(".lunch-cook-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".lunch-cook-count").removeClass("heavytext")
		},
	});
});

// + EATING : + DINNER - sliders.box x 3(togo/rest/cook)
$("document").ready(function(){

	$("#dinner-togo-slider").slider({ // DINNER - TOGO slider
		value: 3, 
		min: 0,
		max: 7,
		slide: function(evt, ui){
			$(".dinner-togo-count").text(ui.value);
		},
		start: function(evt, ui){
			$(".dinner-togo-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".dinner-togo-count").removeClass("heavytext")
		},
	});

	$("#dinner-rest-slider").slider({ // DINNER - REST slider
		value: 1, 
		min: 0,
		max: 7,
		slide: function(evt, ui){
			$(".dinner-rest-count").text(ui.value);
		},
		start: function(evt, ui){
			$(".dinner-rest-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".dinner-rest-count").removeClass("heavytext")
		},
	});

	$("#dinner-cook-slider").slider({ // DINNER - COOK slider
		value: 3, 
		min: 0,
		max: 7,
		slide: function(evt, ui){
			$(".dinner-cook-count").text(ui.value);
		},
		start: function(evt, ui){
			$(".dinner-cook-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".dinner-cook-count").removeClass("heavytext")
		},
	});
});

$("document").ready(function(){

	$("#coffee-slider").slider({ //  Eating: coffee - slider
		value: 3, 
		min: 0,
		max: 5,
		slide: function(evt, ui){
			$(".coffee-count").text(ui.value);
		},
		start: function(evt, ui){
			$(".coffee-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".coffee-count").removeClass("heavytext")
		},
	});
});

//  public: sliders + buttons
$("document").ready(function(){

	$("#mta-single-slider").slider({ //  transport: mta-single - slider
		value: 2, 
		min: 0,
		max: 4,
		slide: function(evt, ui){
			$(".mta-single-count").text(ui.value);
			//$("#mta-unlimited-slider").slider("value",0);		
			//$("#mta-unlimited-amt").val(0);
		},
		start: function(evt, ui){
			$(".mta-single-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".mta-single-count").removeClass("heavytext")
		},
	});

	 //  set all buttons style in d3
	d3.selectAll("button")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })

    //  transport: mta-unlimited-button
	var mtaUnlimited = [0, 31, 116.5];

	$("#mta-unlimited-x").click(function(){
		d3.select("#mta-unlimited-x")
		  .style({
		  	'color': '#676767',
		  	'background': 'white',
		  	'z-index': '5'
		  })		
		d3.select("#mta-unlimited-7")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4'
		  })
		d3.select("#mta-unlimited-30")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#mta-unlimited-amt').text(mtaUnlimited[0]);
	});

	$("#mta-unlimited-7").click(function(){
		d3.select("#mta-unlimited-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4'
		  })	
		d3.select("#mta-unlimited-7")
		  .style({
		  	'color': '#676767',
		  	'background': 'white',
		  	'z-index': '5'
		  })
		d3.select("#mta-unlimited-30")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#mta-unlimited-amt').text(mtaUnlimited[1]);	
	});

	$("#mta-unlimited-30").click(function(){
		d3.select("#mta-unlimited-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4'
		  })
		d3.select("#mta-unlimited-30")
		  .style({
		  	'color': '#676767',
		  	'background': 'white',
		  	'z-index': '5'
		  })
		d3.select("#mta-unlimited-7")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#mta-unlimited-amt').text(mtaUnlimited[2]);	
	});

	//  transport: mta-unlimited-button (click set $amount)
	$(".mta-unlimited").click(function(){

  		switch ( $(".mta-unlimited").index( this ) ) {
  		  case 0 :
    		value = $("#mta-unlimited-amt").data("amt-mta", 0);
    		break;	
  		  case 1 :
    		value = $("#mta-unlimited-amt").data("amt-mta", 31);
    		break;
  		  case 2 :
    		value = $("#mta-unlimited-amt").data("amt-mta", 116.5);
    		break;  		
  		}

		$("#mta-single-slider").slider("value",0);		
		$("#mta-single-amt").val(0);  		
	});

	$("#path-single-slider").slider({ //  transport: path-single - slider
		value: 0, 
		min: 0,
		max: 4,
		slide: function(evt, ui){
			//$("#path-unlimited-slider").slider("value",0);
			$(".path-single-count").text(ui.value);
			//$("#path-unlimited-amt").val(0);
		},
		start: function(evt, ui){
			$(".path-single-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".path-single-count").removeClass("heavytext")
		},
	});	

    //  transport: path-unlimited-button
	var pathUnlimited = [0, 8.25, 29, 89];

	$("#path-unlimited-x").click(function(){
		
		d3.select("#path-unlimited-x")
		  .style({
		  	'color': '#676767', //  button click: background white
		  	'background': 'white',
		  	'z-index': '5'
		  })	
		d3.select("#path-unlimited-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4'
		  })		
		d3.select("#path-unlimited-7")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4'
		  })
		d3.select("#path-unlimited-30")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#path-unlimited-amt').text(pathUnlimited[0]);
	});

	$("#path-unlimited-1").click(function(){
		
		d3.select("#path-unlimited-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4'
		  })
		d3.select("#path-unlimited-1")
		  .style({
		  	'color': '#676767', //  button click: background white
		  	'background': 'white',
		  	'z-index': '5'
		  })		
		d3.select("#path-unlimited-7")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4'
		  })
		d3.select("#path-unlimited-30")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#path-unlimited-amt').text(pathUnlimited[1]);
	});

	$("#path-unlimited-7").click(function(){
		
		d3.select("#path-unlimited-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4'
		  })	
		d3.select("#path-unlimited-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4'
		  })		
		d3.select("#path-unlimited-7")
		  .style({
		  	'color': '#676767', //  button click: background white
		  	'background': 'white',
		  	'z-index': '5'
		  })
		d3.select("#path-unlimited-30")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#path-unlimited-amt').text(pathUnlimited[2]);
	});

	$("#path-unlimited-30").click(function(){
		
		d3.select("#path-unlimited-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4'
		  })
		d3.select("#path-unlimited-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4'
		  })				 
		d3.select("#path-unlimited-7")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#path-unlimited-30")
		  .style({
		  	'color': '#676767',	//  button click: background white
		  	'background': 'white', 
		  	'z-index': '5'
		  })		
		d3.select('#path-unlimited-amt').text(pathUnlimited[3]);  
	});

	//  transport: mta-unlimited-button (click set $amount)
	$(".path-unlimited").click(function(){

  		switch ( $(".path-unlimited").index( this ) ) {
  		  case 0 :
    		value = $("#path-unlimited-amt").data("amt", 0);
    		break;	
  		  case 1 :
    		value = $("#path-unlimited-amt").data("amt", 8.25);
    		break;
  		  case 2 :
    		value = $("#path-unlimited-amt").data("amt", 29);
    		break;
  		  case 3 :
    		value = $("#path-unlimited-amt").data("amt", 89);
    		break;    		
  		}

		$("#path-single-slider").slider("value",0);		
		$("#path-single-amt").val(0);  		
	});
});

//  taxi: sliders
$("document").ready(function(){

	$("#taxi-uber-slider").slider({ // LUNCH - TOGO slider
		value: 2,
		min: 0,
		max: 5,
		slide: function(evt, ui){
			$(".taxi-uber-count").text(ui.value);
		},
		start: function(evt, ui){
			$(".taxi-uber-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".taxi-uber-count").removeClass("heavytext")
		},
	});

	$("#taxi-regular-slider").slider({ // LUNCH - REST slider
		value: 0,	
		min: 0,
		max: 5,
		slide: function(evt, ui){
			$(".taxi-ragular-count").text(ui.value);
		},
		start: function(evt, ui){
			$(".taxi-ragular-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".taxi-ragular-count").removeClass("heavytext")
		},
	});
});


// entertain-Theater
$("document").ready(function(){

    //  theater: buttons
	var broadway = [0, 50, 170, 250, 300];

	$("#broadway-x").click(function(){
		
		d3.select("#broadway-x")
		  .style({
		  	'color': '#676767', //  button click: background white
		  	'background': 'white',
		  	'z-index': '5',
		  })	
		d3.select("#broadway-rush")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#broadway-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#broadway-2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#broadway-3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#broadway-amt').text(broadway[0]);
	});

	$("#broadway-rush").click(function(){
		
		d3.select("#broadway-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#broadway-rush")
		  .style({
		  	'color': '#676767', //  button click: background white
		  	'background': 'white',
		  	'z-index': '5',
		  })	
		d3.select("#broadway-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#broadway-2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#broadway-3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#broadway-amt').text(broadway[1]);
	});

	$("#broadway-1").click(function(){
		
		d3.select("#broadway-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#broadway-rush")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#broadway-1")
		  .style({
		  	'color': '#676767', //  button click: background white
		  	'background': 'white',
		  	'z-index': '5',
		  })		
		d3.select("#broadway-2")
			.style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#broadway-3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#broadway-amt').text(broadway[2]);
	});

	$("#broadway-2").click(function(){
		
		d3.select("#broadway-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#broadway-rush")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#broadway-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#broadway-2")
		  .style({
		  	'color': '#676767', //  button click: background white
		  	'background': 'white',
		  	'z-index': '5',
		  })
		d3.select("#broadway-3")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select('#broadway-amt').text(broadway[3]);
	});

	$("#broadway-3").click(function(){
		
		d3.select("#broadway-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#broadway-rush")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#broadway-1")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select("#broadway-2")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })
		d3.select("#broadway-3")
		  .style({
		  	'color': '#676767', //  button click: background white
		  	'background': 'white',
		  	'z-index': '5',
		  })
		d3.select('#broadway-amt').text(broadway[4]);
	});

	//  broadway-button (click set $amount)
	$(".broadway-button").click(function(){

  		switch ( $(".broadway-button").index( this ) ) {
  		  case 0 :
    		value = $("#broadway-amt").data("amt-broadway", 0);
    		break;	
  		  case 1 :
    		value = $("#broadway-amt").data("amt-broadway", 50);
    		break;
  		  case 2 :
    		value = $("#broadway-amt").data("amt-broadway", 170);
    		break;
  		  case 3 :
    		value = $("#broadway-amt").data("amt-broadway", 250);
    		break;    
 		  case 4 :
    		value = $("#broadway-amt").data("amt-broadway", 300);
    		break;    		
  		}
	
	});

});

//  entertain: movie sliders
$("document").ready(function(){

	$("#movie-2d-before-slider").slider({ // 2d before slider
		value: 2,
		min: 0,
		max: 5,
		slide: function(evt, ui){
			$(".movie-2d-before-count").text(ui.value);
		},
		start: function(evt, ui){
			$(".movie-2d-before-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".movie-2d-before-count").removeClass("heavytext")
		},
	});

	$("#movie-2d-after-slider").slider({ // 2d after slider
		value: 0,	
		min: 0,
		max: 5,
		slide: function(evt, ui){
			$(".movie-2d-after-count").text(ui.value);
		},
		start: function(evt, ui){
			$(".movie-2d-after-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".movie-2d-after-count").removeClass("heavytext")
		},
	});

	$("#movie-3d-before-slider").slider({ // 3d before slider
		value: 0,
		min: 0,
		max: 5,
		slide: function(evt, ui){
			$(".movie-3d-before-count").text(ui.value);
		},
		start: function(evt, ui){
			$(".movie-3d-before-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".movie-3d-before-count").removeClass("heavytext")
		},
	});

	$("#movie-3d-after-slider").slider({ // 3d after slider
		value: 0,	
		min: 0,
		max: 5,
		slide: function(evt, ui){
			$(".movie-3d-after-count").text(ui.value);
		},
		start: function(evt, ui){
			$(".movie-3d-after-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".movie-3d-after-count").removeClass("heavytext")
		},
	});
});


//game slider
$("document").ready(function(){

	$("#game-yankee-slider").slider({ // game: yankee slider
		value: 0,	
		min: 0,
		max: 5,
		slide: function(evt, ui){
			//$(".game-yankee-count").text(ui.value);
			if(ui.value == 0){
				$(".game-yankee-count").text("SEAT LEVEL");
			} else if(ui.value == 1){
				$(".game-yankee-count").text("FIELD MVP");
			} else if(ui.value == 2){
				$(".game-yankee-count").text("FIELD LEVEL");
			} else if(ui.value == 3){
				$(".game-yankee-count").text("MAIN LEVEL");
			} else if(ui.value == 4){
				$(".game-yankee-count").text("TERRACE LEVEL");
			} else {
				$(".game-yankee-count").text("GRANDSTAND LEVEL");
			}
		},
		start: function(evt, ui){
			$(".game-yankee-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".game-yankee-count").removeClass("heavytext")
		},
	});
});

//gym buttons
$("document").ready(function(){
	
	var gym = [0, 8.4, 20];

	$("#gym-x").click(function(){
		
		d3.select("#gym-x")
		  .style({
		  	'color': '#676767', //  button click: background white
		  	'background': 'white',
		  	'z-index': '5',
		  })	
		d3.select("#gym-nycparks")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#gym-club")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select('#gym-amt').text(gym[0]);
	});

	$("#gym-nycparks").click(function(){
		
		d3.select("#gym-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#gym-nycparks")
		  .style({
		  	'color': '#676767', //  button click: background white
		  	'background': 'white',
		  	'z-index': '5',
		  })	
		d3.select("#gym-club")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })		
		d3.select('#gym-amt').text(gym[1]);
	});

	$("#gym-club").click(function(){
		
		d3.select("#gym-x")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#gym-nycparks")
		  .style({
		  	'color': 'white',
		  	'background': 'none',
		  	'z-index': '4',
		  })	
		d3.select("#gym-club")
		  .style({
		  	'color': '#676767', //  button click: background white
		  	'background': 'white',
		  	'z-index': '5',
		  })		
		d3.select('#gym-amt').text(gym[2]);
	});

	//  gym-button (click set $amount)
	$(".gym-button").click(function(){

  		switch ( $(".gym-button").index( this ) ) {
  		  case 0 :
    		value = $("#gym-amt").data("amt-gym", 0);
    		break;	
  		  case 1 :
    		value = $("#gym-amt").data("amt-gym", 8.4);
    		break;
  		  case 2 :
    		value = $("#gym-amt").data("amt-gym", 20);
    		break;
  		}
	
	});
});

//nightlife slider
$("document").ready(function(){

	$("#nightlife-slider").slider({ // nightlife slider
		value: 0,	
		min: 0,
		max: 7,
		slide: function(evt, ui){
			$(".nightlife-count").text(ui.value);
		},
		start: function(evt, ui){
			$(".nightlife-count").addClass("heavytext")
		},
		stop: function(evt, ui){
			$(".nightlife-count").removeClass("heavytext")
		},
	});
});

$("document").ready(function(){

	$(".museum-button").click(function(){
		
		d3.select("#museum")
		  .style({
		  	'color': '#676767', //  button click: background white
		  	'background': 'white',
		  	'z-index': '5',
		  })		
	});
});



function utilityAmt(){
	$internetAmt = $("#internet-amt").data("amt-internet");
	$electricAmt = $("#electric-amt").data("amt-electric");
	$cableAmt = $("#tv-cable-amt").data("amt-cable");
	$netflixAmt = $("#tv-netflix-amt").data("amt-netflix");
	$mobileAmt = $("#mobile-amt").data("amt-mobile");
	$tvAmt = $cableAmt + $netflixAmt 
	$utilityAmt = $internetAmt + $electricAmt + $tvAmt + $mobileAmt;

	$("#utility-amt").val($utilityAmt);
}

//EATING Amount
function eatingAmt(){

	$breakfastTogoAmt = $("#breakfast-togo-slider").slider("value")*5;
    $breakfastRestAmt = $("#breakfast-rest-slider").slider("value")*15;
    $breakfastCookAmt = $("#breakfast-cook-slider").slider("value")*3;
    $lunchTogoAmt = $("#lunch-togo-slider").slider("value")*5;
    $lunchRestAmt = $("#lunch-rest-slider").slider("value")*15;
    $lunchCookAmt = $("#lunch-cook-slider").slider("value")*5;
    $dinnerTogoAmt = $("#dinner-togo-slider").slider("value")*5;
    $dinnerRestAmt = $("#dinner-rest-slider").slider("value")*15;
    $dinnerCookAmt = $("#dinner-cook-slider").slider("value")*5;
    $coffeeAmt = $("#coffee-slider").slider("value")*3;

    $breakfastAmt = ($breakfastTogoAmt + $breakfastRestAmt + $breakfastCookAmt)*4;
    $lunchAmt = ($lunchTogoAmt + $lunchRestAmt + $lunchCookAmt)*4;
    $dinnerAmt = ($dinnerTogoAmt + $dinnerRestAmt + $dinnerCookAmt)*4;

    $eatingAmt = $breakfastAmt + $lunchAmt + $dinnerAmt + $coffeeAmt;
                 
    $("#breakfast-togo-amt").val($breakfastTogoAmt);
    $("#breakfast-rest-amt").val($breakfastRestAmt);
    $("#breakfast-cook-amt").val($breakfastCookAmt);
    $("#lunch-togo-amt").val($lunchTogoAmt);
    $("#lunch-rest-amt").val($lunchRestAmt);
    $("#lunch-cook-amt").val($lunchCookAmt);
    $("#dinner-togo-amt").val($dinnerTogoAmt);
    $("#dinner-rest-amt").val($dinnerRestAmt);
    $("#dinner-cook-amt").val($dinnerCookAmt);
    $("#dinner-amt").val($dinnerCookAmt);
	$("#coffee-amt").val($coffeeAmt);
    $("#eating-amt").val($eatingAmt);

};

//Transport Amount
function transportAmt(){

	$mtaSingleAmt = $("#mta-single-slider").slider("value")*2.75;
	$mtaUnlimited = $("#mta-unlimited-amt").data("amt-mta");
	$pathSingleAmt = $("#path-single-slider").slider("value")*2.75;
	$pathUnlimited = $("#path-unlimited-amt").data("amt");

	$taxiUberAmt = $("#taxi-uber-slider").slider("value")*2.6+8;
	$taxiRegularAmt = $("#taxi-regular-slider").slider("value")*2.4+3;
	
	$publicAmt = $mtaSingleAmt*30 + $mtaUnlimited + $pathSingleAmt*30 + $pathUnlimited;
	$taxiAmt = $taxiUberAmt + $taxiRegularAmt;

	$transportAmt = $publicAmt + $taxiAmt;

    $("#mta-single-amt").val($mtaSingleAmt);
    $("#path-single-amt").val($pathSingleAmt);
	$("#taxi-uber-amt").val($taxiUberAmt);
	$("#taxi-regular-amt").val($taxiRegularAmt);
    $("#transport-amt").val($transportAmt);
}

//entertain Amount
function entertainAmt(){

	$theaterAmt = $("#broadway-amt").data("amt-broadway");
	$2dBeforeAmt = $("#movie-2d-before-slider").slider("value")*7;	
	$2dAfterAmt = $("#movie-2d-after-slider").slider("value")*17;	
	$3dBeforeAmt = $("#movie-3d-before-slider").slider("value")*13;	
	$3dAfterAmt = $("#movie-3d-after-slider").slider("value")*21;
	$gameAmt = $("#game-yankee-slider").slider("value")*28;
	$nightlifeAmt = $("#nightlife-slider").slider("value")*82;
	$gymAmt = $("#gym-amt").data("amt-gym");

	$movieAmt = $2dBeforeAmt + $2dAfterAmt + $3dBeforeAmt + $3dAfterAmt;
	$activityAmt = $nightlifeAmt + $gymAmt; 
	$entertainAmt = $theaterAmt + $movieAmt + $gameAmt + $activityAmt;

	$("#movie-2d-before-amt").val($2dBeforeAmt);
	$("#movie-2d-after-amt").val($2dAfterAmt);
	$("#movie-3d-before-amt").val($3dBeforeAmt);
	$("#movie-3d-after-amt").val($3dAfterAmt);
	$("#game-yankee-amt").val($gameAmt);
	$("#nightlife-amt").val($nightlifeAmt);	
	$("#entertain-amt").val($entertainAmt);
};


function chartAll(){

	eatingAmt();
	transportAmt();
	utilityAmt();
	entertainAmt();

	var data1 = [
    	{
        	value: 1000,
        	color:"#F7464A",
        	highlight: "#FF5A5E",
        	label: "HOUSING"
    	},
    	{
        	value: $utilityAmt,
        	color: "#935CFF",
        	highlight: "#AA7FFF",
        	label: "UTILITY"
    	},
    	{
        	value: $eatingAmt,
        	color: "#46BFBD",
        	highlight: "#5AD3D1",
        	label: "EATING"
    	},
    	{
        	value: $transportAmt,
        	color: "#FDB45C",
        	highlight: "#FFC870",
        	label: "TRANSPORT"
    	},
    	{
        	value: $entertainAmt,
        	color: "#FFD700",
        	highlight: "#FDE231",
        	label: "ENTERTAIN"
    	},
    	{
        	value: 300,
        	color: "#437CFF",
        	highlight: "#5E8FFF",
        	label: "PERSONAL"
    	}
    ]

	var ctx = document.getElementById("myChart-all").getContext("2d");
	var myNewChart1 = new Chart(ctx).Doughnut(data1, {
		percentageInnerCutout : 85,
		segmentShowStroke : false,
		showScale: true,
		animation: false,
		showTooltips: false,
	});
};

function chartUtility(){

	utilityAmt();
	eatingAmt();
	transportAmt();


	var data2 = [
    	{
        	value: 1000,
        	color: "#F7464A",
        	highlight: "#FF5A5E",
        	label: "housing"
    	},
    	{
        	value: $internetAmt,
        	color:"#8452e5",
        	highlight: "#FF5A5E",
        	label: "INTERNET"
    	},
    	{
        	value: $electricAmt,
        	color: "#7549cc",
        	highlight: "#5AD3D1",
        	label: "ELECTRICITY"
    	},
    	{
        	value: $tvAmt,
        	color: "#6640b2",
        	highlight: "#FFC870",
        	label: "TV"
    	},
    	{
        	value: $mobileAmt,
        	color: "#583799",
        	highlight: "#FFC870",
        	label: "MOBILE"
    	},
    	    	{
        	value: $breakfastAmt,
        	color:"#3fabaa",
        	highlight: "#FF5A5E",
        	label: "BREAKFAST"
    	},
    	{
        	value: $lunchAmt,
        	color: "#389897",
        	highlight: "#5AD3D1",
        	label: "LUNCH"
    	},
    	{
        	value: $dinnerAmt,
        	color: "#318584",
        	highlight: "#FFC870",
        	label: "DINNER"
    	},
    	{
        	value: $coffeeAmt,
        	color: "#2a7271",
        	highlight: "#FDE231",
        	label: "COFFEE"
    	},
    	{
        	value: $publicAmt,
        	color: "#fda843",
        	highlight: "#FF5A5E",
        	label: "public"
    	},
    	{
        	value: $taxiAmt,
        	color:"#fc9110",
        	highlight: "#FF5A5E",
        	label: "taxi"
    	}
		
	]

	var ctx = document.getElementById("myChart-utility").getContext("2d");
	var myNewChart2 = new Chart(ctx).Doughnut(data2, {
		percentageInnerCutout : 95,
		segmentShowStroke : false,
		animation: false,
		showTooltips: false,

	});
}

function chartEating(){

	eatingAmt();

	var data3 = [
    	{
        	value: $breakfastAmt,
        	color:"#3fabaa",
        	highlight: "#FF5A5E",
        	label: "BREAKFAST"
    	},
    	{
        	value: $lunchAmt,
        	color: "#389897",
        	highlight: "#5AD3D1",
        	label: "LUNCH"
    	},
    	{
        	value: $dinnerAmt,
        	color: "#318584",
        	highlight: "#FFC870",
        	label: "DINNER"
    	},
    	{
        	value: $coffeeAmt,
        	color: "#2a7271",
        	highlight: "#FDE231",
        	label: "COFFEE"
    	}
	]

	var ctx = document.getElementById("myChart-eating").getContext("2d");
	var myNewChart3 = new Chart(ctx).Doughnut(data3, {
		percentageInnerCutout : 95,
		segmentShowStroke : false,
		animation: false,
		showTooltips: false,

	});
}

function chartTransport(){

	transportAmt();

	var data4 = [
    	{
        	value: $publicAmt,
        	color: "#fda843",
        	highlight: "#FF5A5E",
        	label: "public"
    	},
    	{
        	value: $taxiAmt,
        	color:"#fc9110",
        	highlight: "#FF5A5E",
        	label: "taxi"
    	},
	]

	var ctx = document.getElementById("myChart-transport").getContext("2d");
	var myNewChart4 = new Chart(ctx).Doughnut(data4, {
		percentageInnerCutout : 95,
		segmentShowStroke : false,
		animation: false,
		showTooltips: false,

	});
}


function updateTimer(){
	
	eatingAmt();
	transportAmt();
	utilityAmt();
	entertainAmt();

    $total = $utilityAmt + $eatingAmt + $transportAmt + $entertainAmt+1000;
    $("#numbers").val($total);

    chartAll();
    chartEating();
    chartUtility();
    chartTransport();


}

setInterval(updateTimer, 200);






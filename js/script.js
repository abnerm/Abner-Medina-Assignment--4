var imgArray = ["rain_steam_and_speed","regulus","death_on_a_pale_horse","snow_storm","frosty_morning","llanberis","the_fighting_temeraire","fishermen_at_sea"]		

var imgObj = {	
	"images":[
		{
			"name": "Boats at Sea",
			"file": "boats_at_sea",
			"boats_at_sea": "gallery.html#&panel1-1"			
		},
		{
			"name": "Death on a Pale Horse",
			"file": "death_on_a_pale_horse",
			"death_on_a_pale_horse": "gallery.html#&panel1-2"
		},
		{
			"name": "Fishermen At Sea",
			"file": "fishermen_at_sea",
			"fishermen_at_sea": "gallery.html#&panel1-3"
		},
		{
			"name": "Frosty Morning",
			"file": "frosty_morning",
			"frosty_morning": "gallery.html#&panel1-4"
		},
		{
			"name": "Llanberis",
			"file": "llanberis",
			"llanberis": "gallery.html#&panel1-5"
		},
		{
			"name": "Rain Steam And Speed",
			"file": "rain_steam_and_speed",
			"rain_steam_and_speed": "gallery.html#&panel1-6"
		},
		{
			"name": "Regulus",
			"file": "regulus",
			"regulus": "gallery.html#&panel1-7"
		},
		{
			"name": "Slave Ship",
			"file": "slave_ship",
			"slave_ship": "gallery.html#&panel1-8"
		},
		{
			"name": "Snow Storm",
			"file": "snow_storm",
			"snow_storm": "gallery.html#&panel1-9"
		},
		{
			"name": "The Fighting Temeraire",
			"file": "the_fighting_temeraire",
			"the_fighting_temeraire": "gallery.html#&panel1-10"
		},
		{
			"name": "The Shipwreck",
			"file": "the_shipwreck",
			"the_shipwreck": "gallery.html#&panel1-11"
		}
	]		
};
$(document).ready(function(){
	var width = $(window).outerWidth();
	var width35 = width*.35-5;
	
	for(var i = 0 ; i < imgArray.length ; i++){
		var anchor = document.createElement("a");		 
		for(var j = 0; j < imgObj.images.length; j++ ){
			if(imgObj.images[j].file === imgArray[i] ){
				var val = imgArray[i]
				anchor.href = imgObj.images[j][val];
			}
		}	
		var div = document.createElement("DIV");		
		div.style.backgroundImage = "url(" +"img/"+imgArray[i] + ".jpg"+")";		
		div.style.width = width35/2 + "px";
		div.style.height = width35/2 + "px";
		
		anchor.appendChild(div);
		if($('section').hasClass('home')){
			if(i <= 3){				
				document.getElementById("win1").appendChild(anchor);
			}else if(i >= 4){				
				document.getElementById("win2").appendChild(anchor);
			}
		};	
		
	};	
	
	for(var i = 0; i < imgObj.images.length; i++){
		var title = document.createElement("H2");
		title.innerHTML = imgObj.images[i].name;

		var slide = document.createElement("LI");			
		slide.style.backgroundImage = "url("+"img/"+imgObj.images[i].file + ".jpg" + ")";

		slide.appendChild(title);		
		if($('section').hasClass('gallery')){
			document.getElementById("slider").appendChild(slide);
		}
	}	

	var clicked = false;	
	if($('section').hasClass('gallery')){		
		$('#slider').anythingSlider({
			mode: "fade",
			expand: true,
		});	
		$('#slider .panel').height( $(window).width()/2.3 )
		$('#fullscreen').click(function() {			
			if($('header').hasClass("hideHead")){
				$('header').removeClass("hideHead");
				$('section').removeClass("extend");
				$('.panel').removeClass("full");
				$('body').css({"backgroundColor": "#fff"});
				$('#fullscreen').removeClass('iconSwitch');				
			}else{
				$('header').addClass("hideHead");
				$('section').addClass("extend");
				$('.panel').addClass("full");
				$('body').css({"backgroundColor": "#000"});
				$('#fullscreen').addClass('iconSwitch');				
			}
		});				
	};
	$('#win1 div, #win2 div, #slider li').addClass("img");
	var resize = function(width){
		var width = $(window).outerWidth();		
		var width35;
		var width43;	
		if(width < 760 && width > 0){//mobile
			width35 = width;
			width43 = width;
		}else if(width < 1500 && width > 760){//tablet
			width35 = width*.35;
			width43 = width*1;
		}else if(width > 1500){//desktop
			width35 = width*.35;
			width43 = width*.43;
		}
		$('#portrait, #win1, #last, #win2').css({
			"width" : width35,			
			"height" : width35,
		});
		$('#win1 div, #win2 div').css({
			"width" : width35/2,
			"height" : width35/2,		
		});		
		$('#wide').css({			
			"width" : width43,
			"height" : width35,			
		});		
	};
	
	// $(".img").click(function(event){
	// 	console.log(event.target());
	// })
	


	resize();
	$(window).resize(function(){		
		resize();
	});	
	

	
});
Meteor.myFunctions = {
	imageHeight: function(){
		var window_width = $( window ).width();
		if(window_width > 650){
			//console.log('desktop');
			var divide_by = 2;
		}else{
			var divide_by =4;
			//console.log('mobile');
		}
		var img_height = parseInt(window.innerHeight) /parseInt(divide_by);
		$('img').css('max-height', img_height+'px');
	},
	isEven: function(value){
		if (value%2 == 0){
			return true;
		}else{
			return false;
		}
	},
	adiosSpam: function(){
		var txt = $(".email").text().replace(" [ at ] ", "\u0040").replace(" [ dot ] ", "\u002E").split("").reverse().join("");

		$('.email').html("<i class='fa fa-envelope-o'></i> " + txt );
		$('.email').attr('href',"mailto:" + txt );
	},
	pageSections:function() {
		//console.log("..pageAnchors");
		$("#page_menu").html("");
		var result = [];
		var anchors = [];
		var tooltips = [];
		$('.section').each(function( index ) {
			var anchor = $( this ).attr('section');
		  	anchors.push(anchor);

		  	var tooltip = $( this ).attr('tooltip');
		  	tooltips.push(tooltip);
			//$("#page_menu").append("<li class='data-menuanchor' data-menuanchor='"+anchor+"'><a class='page_anchor' href='#"+anchor+"'>"+tooltip+"</a></li>");



			//--add project links
			var projects = "";
			$(this).children('.slide').each(function (index) {
				index = index+1;
				var project = $(this).attr('subproject');
				if(project){
					project = "<li><span class='toSlide' data-index='"+index+"'>"+project+"</span></li>";
					projects = projects+ project;
				}
			});
			//console.log(projects);
			$(this).find(".project_list").html(projects);
		});
		result.anchors= anchors;
		result.tooltips = tooltips;
		return result;
	},
	pageReady: function(page) {

		$(document).ready(function(){
			//--email
			Meteor.myFunctions.adiosSpam();

			//--images
			Meteor.myFunctions.imageHeight();
			$('.imagepop').magnificPopup({
				type:'image',
				titleSrc: "title",
				gallery:{enabled:true},
  				callbacks: {
				  beforeOpen: function() {
				  	$.fn.fullpage.setKeyboardScrolling(false);
	        		$.fn.fullpage.setAllowScrolling(false);
				  },
				  beforeClose: function() {
				  	$.fn.fullpage.setKeyboardScrolling(true);
	        		$.fn.fullpage.setAllowScrolling(true);
				  },
  				}
			});
			//--fullpage
			var sections = Meteor.myFunctions.pageSections();
			var anchors = sections.anchors;
			var tooltips = sections.tooltips;
			Meteor.myFunctions.createFullpage(anchors,tooltips);

			//--fp-nav for mobile
				$(document).on('click', '#fp-nav a', function(){
					Meteor.myFunctions.toggleMobileMenu();
				});

			//--resize
			$( window ).resize(function() {
				Meteor.myFunctions.resizePage(anchors);
			});


			//--add tooltip to anchor span
				$("#fp-nav span").each(function(index){
					$(this).html(tooltips[index]);
				});
			//--tooltip
			//$( ".imagepop" ).tooltip({
				//track: true,
			//});
		});
	},
	createFullpage: function(anchors,tooltips){
		//console.log("..createFullpage");
		$('#fullpage').fullpage({
			anchors: anchors,
			//menu: '#page_menu',
			navigation: true,
			navigationPosition: 'left',
			navigationTooltips:tooltips,
			animateAnchor: true,
			loopHorizontal: false,
			slidesNavigation: true,
			paddingTop:"60px",
			easing: 'easeOutSine',
			afterLoad: function(anchorLink, index){
				Meteor.myFunctions.fullPageExpandArrows(index);
				//--about page
				if(anchorLink == "web"){
					$('.skillbar').each(function(){
						$(this).find('.skillbar-bar').animate({
							width:$(this).attr('data-percent')
						},2500);
					});
					$('.skillbar').fadeTo( "slow" , 1, function() {});
					//var currenthalf = '.half_'+parseInt(index-1);

	        	}
			},
			onLeave: function(index, nextIndex, direction){
				Meteor.myFunctions.fullPageCollapseArrows(index);
			},
		});
	},
	fullPageExpandArrows: function(index){
		var index = index-1;
		//console.log(index);
		var window_width = $( window ).width();
		if(window_width > 650){
			var arrowWidth = "30px";
			var arrowExpand = "50px";
		}else{
			var arrowWidth = "50%";
			var arrowExpand = "40%";
		}

		$(".section:eq("+index+")").find(".fp-controlArrow").animate(
				{ "width" : arrowWidth},
				1000,
				function(){
					$(this).animate(
							{ "width" : arrowExpand},
								500,
								function(){
									$(this).animate({ "width" : arrowWidth}, 500);
							}
						)
				}
		);
	},
	fullPageResizeArrows: function(index){
		var window_width = $( window ).width();
		if(window_width > 650){
			var arrowWidth = "30px";
		}else{
			var arrowWidth = "50%";
		}

		$(".section:eq("+index+")").find(".fp-controlArrow").css("width",arrowWidth);
	},
	fullPageCollapseArrows: function(index){
		var index = index-1;
		var window_width = $( window ).width();
		var arrowWidth = "0px";
		if(window_width > 650){
			var arrowExpand = "50px";
		}else{
			var arrowExpand = "40%";
		}

		$(".section:eq("+index+")").find(".fp-controlArrow").animate(
                { "width" : arrowWidth}
        );
	},
	toggleMobileMenu: function() {
	    $('.menu_wrap').toggleClass("menu_visible");
	    $("#fp-nav").toggleClass("page_menu_visible");
	    $('.section').toggleClass("opaque");
	    $("#main_menu > li").removeClass('hover_bg');
	    $('#fullpage').toggleClass("fullpage_covered");
	    if($('.menu_wrap').attr('class') == "menu_visible"){
	        $.fn.fullpage.setAllowScrolling(false);
	    }else{
	        $.fn.fullpage.setAllowScrolling(true);
	    }
	},
	removeMenuClasses: function(){
		//--mobile menu
			$('.menu_wrap').removeClass("menu_visible");
			$('#fullpage').removeClass("fullpage_covered");
			$("#fp-nav").removeClass("page_menu_visible");
	},
	resizePage: function(anchors){
		//--mobile menu
			Meteor.myFunctions.removeMenuClasses();

		//--image size
			Meteor.myFunctions.imageHeight();

		//--slide arrows
			var sectionAnchor = $("#fp-nav").find(".active").attr("href").replace('#', '');
			var sectionIndex = jQuery.inArray(sectionAnchor,anchors);
			Meteor.myFunctions.fullPageResizeArrows(sectionIndex);
	}
}
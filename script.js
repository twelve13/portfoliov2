$(document).ready(function(){

// var redirect = $(".redirect");

var aboutButton = $(".about-button");
// var projectsButton = $(".projects-button");
// var contactButton = $(".contact-button");

// var aboutOuter = $(".about-outer");
var about = $(".about");
// var aboutClose = $(".about-close");
// var aboutWrapper = $(".about-wrapper");
// var aboutListing = $(".about-listing");
// var aboutViewer = $(".about-viewer");

// var projectsOuter = $(".projects-outer");
// var projects = $(".projects");
// var projectsClose = $(".projects-close");
// var projectsWrapper = $(".projects-wrapper");
// var projectsNav = $(".projects-nav");
// var projectListing = $("project-listing");
// var projectsViewer = $(".projects-viewer");

// var contactLink = $(".contact-link");
// var email = $(".email");
// var resume = $(".resume");
// var linkedin = $(".linkedin");
// var github = $(".github");
// var contactClose = $(".contact-close");

// var blurb = $(".blurb");
// var studii = $(".studii");
// var studiiProject = $(".studii-project");
// var endangered = $(".endangered");
// var endangeredProject = $(".endangered-project");
// var simon = $(".simon");
// var simonProject = $(".simon-project");
// var cache = $(".cache");
// var cacheProject = $(".cache-project");

// var aboutClicked = false;
// var projectsClicked = false;
// var contactClicked = false;

// var $window = $(window);
// var width = $window.width();
// var height = $window.height();

// redirect.hide();
// aboutWrapper.hide();
//aboutClose.hide();
//aboutViewer.hide();
// projectsWrapper.hide();
//endangeredProject.hide();
//simonProject.hide();
//cacheProject.hide();
//projectsViewer.hide();
// contactLink.hide();
// contactClose.hide();


// var aboutExpand = function() {
// 	aboutViewer.show();

// 	$("body").animate({
// 		scrollTop: $(document).height() - $(window).height()
// 	}, 1000)

// 	aboutOuter.animate({
// 		top: "+=60vh",
// 	}, 1000)

// 	if(width > height){
// 		about.animate({
// 			height: "80vh",
// 			width: 0.9*width,
// 			right: -(0.45*width)
// 		}, 1000,)
// 	}else{
// 		about.animate({
// 			height: "70vh",
// 			width: 0.7*width,
// 			right: -(0.35*width)
// 		}, 1000,)
// 	}
	
// 	aboutWrapper.show();
// 	aboutClose.show();
// 	aboutClicked = true;
// 	if(width > height){
// 		aboutListing.css("font-size", 0.016*width)
// 	}else{
// 		aboutListing.css("font-size", 0.025*width)
// 	};
// };


// var aboutShrink = function(){
// 	about.animate({
// 		height: "83px",
// 		width: "54px",
// 		right: "0px"
// 	}, 700)

// 	$("body").animate({
// 		scrollTop: -$(window).height()
// 	}, 1000)

// 	aboutOuter.animate({
// 		top: "-=60vh",
// 	}, 1000)

// 	aboutWrapper.hide();
// 	aboutClose.hide();
// 	aboutViewer.hide(1000)
// 	aboutClicked = false;	
// };


// var projectsExpand = function() {
// 	projectsViewer.show(1000);
	
// 	$("body").animate({
// 		scrollTop: -$(document).height()
// 	}, 1000)

// 	projects.animate({
// 		height: "80vh",
// 		width: "900px",
// 		right: "500px"
// 	}, 1000,)
	
// 	projectsOuter.animate({
// 		top: "-=130vh",
// 	}, 1000)

// 	projectsWrapper.show();
// 	studiiProject.show();
// 	studii.css("color", "white");
// 	projectListing.show();
// 	projectsNav.show();
// 	projectsClicked = true;
// };

// var projectsShrink = function(){

// 	projects.animate({
// 		height: "180px",
// 		width: "32px",
// 		right: "0px",
	
// 	}, 700)

// 	$("body").animate({
// 	scrollTop: $(document).height()
// 	}, 1500)

// 	projectsOuter.animate({
// 		top: "+=130vh",
// 	}, 1000)

// 	projectsWrapper.hide();
// 	projectsViewer.hide(1500)
// 	endangered.css("color", "gray");
// 	simon.css("color", "gray");
// 	cache.css("color", "gray");
// 	endangeredProject.hide();
// 	simonProject.hide();
// 	cacheProject.hide();
// 	projectsClicked = false;	
// };

// var contactExpand = function(){
// 		email.animate({
// 		top: "-=32vh",
// 		}, 1000)
// 		resume.animate({
// 		top: "-=24vh",
// 		}, 1000)
// 		contactClicked = true
// 		linkedin.animate({
// 		top: "-=16vh",
// 		}, 1000)
// 		github.animate({
// 		top: "-=8vh",
// 		}, 1000)
// 		contactLink.show(2000);
// 		contactClose.show(3000);
// 		contactClicked = true;
// };

// var contactShrink = function(){
// 		email.animate({
// 		top: "+=32vh",
// 		}, 1000)
// 		resume.animate({
// 		top: "+=24vh",
// 		}, 1000)
// 		contactClicked = true
// 		linkedin.animate({
// 		top: "+=16vh",
// 		}, 1000)
// 		github.animate({
// 		top: "+=8vh",
// 		}, 1000)
// 		contactLink.hide(2000);
// 		contactClose.hide(2000);
// 		contactClicked = false;
// };

var move = function() {
			var x = 1;

			console.log("tes");
			var id = setInterval(scrolldown, 10);
			function scrolldown() {
				if(x > 2000){
				clearInterval(id);
				} else {
				window.scroll(0, x);
				x = x + 10;
				console.log("hi");
				console.log(x);
				}
			}
		}

aboutButton.click(function(){
	//if (aboutClicked === false){
		about.addClass("jqclick");
		move();
		// setInterval(function(){
	
		// 	window.scroll(0, x);
		// 	x = x + 2;
		// 	console.log("hi");

		// }, y)
		// window.scrollBy(0, 1000);
	//}
});

// aboutClose.click(function(){
// 	aboutShrink();
// });

// projectsButton.click(function() {
// 	if (projectsClicked === false){
// 		projectsExpand();
// 	}
// });

// projectsClose.click(function(){
// 	projectsShrink();
// });

// contactButton.click(function(){
// 	if (contactClicked === false){
// 		contactExpand();
// 	}
// });

// contactClose.click(function(){
// 	if (contactClicked === true){
// 	contactShrink();
// 	}
// });


// studii.on("click", function(){
// 	studii.css("color", "white");
// 	endangered.css("color", "gray");
// 	simon.css("color", "gray");
// 	cache.css("color", "gray");
// 	endangeredProject.hide();
// 	simonProject.hide();
// 	studiiProject.show();
// 	cacheProject.hide();
// });

// endangered.on("click", function(){
// 	endangered.css("color", "white");
// 	studii.css("color", "gray");
// 	simon.css("color", "gray");
// 	cache.css("color", "gray");
// 	studiiProject.hide();
// 	simonProject.hide();
// 	endangeredProject.show();
// 	cacheProject.hide();
// })

// simon.on("click", function(){
// 	simon.css("color", "white");
// 	studii.css("color", "gray");
// 	endangered.css("color", "gray");
// 	cache.css("color", "gray");
// 	studiiProject.hide();
// 	endangeredProject.hide();
// 	simonProject.show();
// 	cacheProject.hide();
// })

// cache.on("click", function(){
// 	cache.css("color", "white");
// 	studii.css("color", "gray");
// 	endangered.css("color", "gray");
// 	simon.css("color", "gray")
// 	studiiProject.hide();
// 	endangeredProject.hide();
// 	simonProject.hide();
// 	cacheProject.show();
// })

})
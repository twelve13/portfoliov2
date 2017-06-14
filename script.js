$(document).ready(function(){


var width = $(window).width();
var height = $(window).height();

var aboutButton = $(".about-button");
var projectsButton = $(".projects-button");
var contactButton = $(".contact-button");

var about = $(".about");
var aboutClose = $(".about-close");
var aboutWrapper = $(".about-wrapper");
var aboutViewer = $(".about-viewer");

// var projectsOuter = $(".projects-outer");
var projects = $(".projects");
var projectsClose = $(".projects-close");
var projectsWrapper = $(".projects-wrapper");
var projectsViewer = $(".projects-viewer");

var contactLink = $(".contact-link");
// var email = $(".email");
// var resume = $(".resume");
// var linkedin = $(".linkedin");
// var github = $(".github");
var contactItem = $(".contact-item");
var contactClose = $(".contact-close");

// var blurb = $(".blurb");
var studii = $(".studii");
var studiiProject = $(".studii-project");
var endangered = $(".endangered");
var endangeredProject = $(".endangered-project");
var simon = $(".simon");
var simonProject = $(".simon-project");
var cache = $(".cache");
var cacheProject = $(".cache-project");


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

const movedown = function() {
	var y = height;
	var id = setInterval(scrolldown, 10);

	function scrolldown() {
		if(y > 2.4*height){
			clearInterval(id);
		} else {
			window.scroll(0, y);
			y = y + 10;
			console.log("this is y", y);
		}
	}
}

const moveup = function() {
	var y = height;
	var id = setInterval(scrollup, 10);
	
	function scrollup() {
		if(y<=height){
			clearInterval(id);
		} else {
			window.scroll(0, y);
			y = y - 10;
			console.log(y);
		}
	}
}

// const moveup2 = function() {
// 	var y = height;
// 	var id = setInterval(scrollup, 10);
	
// 	function scrollup() {
// 		if(y > 2*height){
// 			clearInterval(id);
// 		} else {
// 			window.scroll(0, y);
// 			y = y - 10;
// 			console.log(y);
// 		}
// 	}
// }

const movedown2 = function() {
	var x = height;
	var id = setInterval(scrolldown, 10);

	function scrolldown() {
		if(x<=.5*height){
			clearInterval(id);
		} else {
			window.scroll(0, x);
			x = x + 10;
			console.log(x)
		}
	}
}

aboutButton.click(function(){
	about.removeClass("jqclickclose");
	about.addClass("jqclick");
	aboutWrapper.addClass("showme");
	aboutViewer.addClass("show-about-viewer");
	movedown();	
});

aboutClose.click(function(){
	about.removeClass("jqclick");
	about.addClass("jqclickclose");
	aboutWrapper.removeClass("showme");
	moveup();
});

projectsButton.click(function() {
	studii.addClass("white");
	studiiProject.addClass("showflex");
	projects.removeClass("jqclickclose2")
	projects.addClass("jqclick2");
	projectsWrapper.addClass("showme");
	// projectsViewer.addClass("showme");
	projectsViewer.addClass("showprojects")

	moveup();
});

projectsClose.click(function(){
	endangered.removeClass("white");
	endangeredProject.removeClass("showflex");
	simon.removeClass("white");
	simonProject.removeClass("showflex");
	cache.removeClass("white");
	cacheProject.removeClass("showflex");
	projects.removeClass("jqclick2");
	projects.addClass("jqclickclose2");
	projectsWrapper.removeClass("showme");
	// movedown();
	projectsViewer.removeClass("showprojects")
	// projectsViewer.removeClass("showme");
});



studii.on("click", function(){
	studii.addClass("white");
	endangered.removeClass("white");
	simon.removeClass("white");
	cache.removeClass("white");
	studiiProject.addClass("showflex");
	endangeredProject.removeClass("showflex");
	simonProject.removeClass("showflex");
	cacheProject.removeClass("showflex");
});

endangered.on("click", function(){
	studii.removeClass("white");
	endangered.addClass("white");
	simon.removeClass("white");
	cache.removeClass("white");
	studiiProject.removeClass("showflex");
	endangeredProject.addClass("showflex");
	simonProject.removeClass("showflex");
	cacheProject.removeClass("showflex");
});

simon.on("click", function(){
	studii.removeClass("white");
	endangered.removeClass("white");
	simon.addClass("white");
	cache.removeClass("white");
	studiiProject.removeClass("showflex");
	endangeredProject.removeClass("showflex");
	simonProject.addClass("showflex");
	cacheProject.removeClass("showflex");
});

cache.on("click", function(){
	studii.removeClass("white");
	endangered.removeClass("white");
	simon.removeClass("white");
	cache.addClass("white");
	studiiProject.removeClass("showflex");
	endangeredProject.removeClass("showflex");
	simonProject.removeClass("showflex");
	cacheProject.addClass("showflex");
});


contactButton.click(function(){
	contactItem.removeClass("jqclickclose3");
	contactItem.addClass("jqclick3");
	contactLink.removeClass("hide-link");
	contactLink.addClass("show-link");
	contactClose.addClass("showme");
});

contactClose.click(function(){
	contactItem .addClass("jqclickclose3");
	contactItem.removeClass("jqclick3");
	contactLink.removeClass("show-link");
	contactLink.addClass("hide-link");
	contactClose.removeClass("showme");
});

});
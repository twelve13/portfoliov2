$(document).ready(function(){


var aboutButton = $(".about-button");
var projectsButton = $(".projects-button");
// var contactButton = $(".contact-button");

var about = $(".about");
var aboutClose = $(".about-close");
var aboutWrapper = $(".about-wrapper");
var aboutViewer = $(".about-viewer");

// var projectsOuter = $(".projects-outer");
var projects = $(".projects");
var projectsClose = $(".projects-close");
var projectsWrapper = $(".projects-wrapper");
// var projectsNav = $(".projects-nav");
// var projectListing = $("project-listing");
var projectsViewer = $(".projects-viewer");

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

//endangeredProject.hide();
//simonProject.hide();
//cacheProject.hide();
//projectsViewer.hide();
// contactLink.hide();
// contactClose.hide();


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

var movedown = function() {
	var x = 1;
	var id = setInterval(scrolldown, 10);

	function scrolldown() {
		if(x > 1350){
			clearInterval(id);
		} else {
			window.scroll(0, x);
			x = x + 10;
			console.log(x)
		}
	}
}

var moveup = function() {
	var x = 1351;
	var id = setInterval(scrollup, 10);
	
	function scrollup() {
		if(x<=0){
			clearInterval(id);
		} else {
			window.scroll(0, x);
			x = x - 10;
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
	projects.removeClass("jqclickclose2")
	projects.addClass("jqclick2");
	projectsWrapper.addClass("showme");
	projectsViewer.addClass("show-projects-viewer");
	// projectsViewer.addClass("showme");
	moveup();
});

projectsClose.click(function(){
	projects.removeClass("jqclick2");
	projects.addClass("jqclickclose2");
	projectsWrapper.removeClass("showme");
	movedown();
	projectsViewer.removeClass("showme");
});

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
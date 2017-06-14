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

var projects = $(".projects");
var projectsClose = $(".projects-close");
var projectsWrapper = $(".projects-wrapper");
var projectsViewer = $(".projects-viewer");

var contactLink = $(".contact-link");
var contactItem = $(".contact-item");
var contactClose = $(".contact-close");

var studii = $(".studii");
var studiiProject = $(".studii-project");
var endangered = $(".endangered");
var endangeredProject = $(".endangered-project");
var simon = $(".simon");
var simonProject = $(".simon-project");
var cache = $(".cache");
var cacheProject = $(".cache-project");


const movedown = function() {
	var y = height;
	var id = setInterval(scrolldown, 10);

	function scrolldown() {
		if(y > 2.4*height){
			clearInterval(id);
		} else {
			window.scroll(0, y);
			y = y + 10;
		};
	};
};

const moveup = function() {
	var y = height;
	var id = setInterval(scrollup, 10);
	
	function scrollup() {
		if(y<=height){
			clearInterval(id);
		} else {
			window.scroll(0, y);
			y = y - 10;
		};
	};
};


aboutButton.click(function(){
	about.removeClass("about-shrink");
	about.addClass("about-expand");
	aboutWrapper.addClass("showme");
	aboutViewer.addClass("show-about-viewer");
	movedown();	
});

aboutClose.click(function(){
	about.removeClass("about-expand");
	about.addClass("about-shrink");
	aboutWrapper.removeClass("showme");
	moveup();
});

projectsButton.click(function() {
	studii.addClass("white");
	studiiProject.addClass("showflex");
	projects.removeClass("projects-shrink");
	projects.addClass("projects-expand");
	projectsWrapper.addClass("showme");
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
	projects.removeClass("projects-expand");
	projects.addClass("projects-shrink");
	projectsWrapper.removeClass("showme");
	projectsViewer.removeClass("showprojects")
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
	contactItem.removeClass("contact-shrink");
	contactItem.addClass("contact-expand");
	contactLink.removeClass("hide-link");
	contactLink.addClass("show-link");
	contactClose.addClass("showme");
});

contactClose.click(function(){
	contactItem .addClass("contact-shrink");
	contactItem.removeClass("contact-close");
	contactLink.removeClass("show-link");
	contactLink.addClass("hide-link");
	contactClose.removeClass("showme");
});

});
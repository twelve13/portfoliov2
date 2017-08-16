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

var sampleTracker = $(".sample-tracker");
var sampleTrackerProject = $(".sample-tracker-project");
var studii = $(".studii");
var studiiProject = $(".studii-project");
var endangered = $(".endangered");
var endangeredProject = $(".endangered-project");
var simon = $(".simon");
var simonProject = $(".simon-project");
var cache = $(".cache");
var cacheProject = $(".cache-project");
var dcAttractions = $(".dc-attractions");
var dcAttractionsProject = $(".dc-attractions-project");


const movedown = function() {
	var y = height;
	var id = setInterval(scrolldown, 10);

	function scrolldown() {
		if(y > 4*height){
			clearInterval(id);
		} else {
			window.scroll(0, y);
			y = y + 10;
		};
	};
};

const moveup = function() {
	var y = 0;
	var id = setInterval(scrollup, 10);
	
	function scrollup() {
		if(y<0){
			clearInterval(id);
		} else {
			window.scroll(0, y);
			y = y - 10;
		};
	};
};

const moveupAbout = function() {
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
	setTimeout(function(){
		aboutWrapper.addClass("showme");
	}, 1000);
	aboutViewer.addClass("show-about-viewer");
	movedown();	
});

aboutClose.click(function(){
	about.removeClass("about-expand");
	about.addClass("about-shrink");
	aboutWrapper.removeClass("showme");
	moveupAbout();
});

projectsButton.click(function() {
	sampleTracker.addClass("white");
	sampleTrackerProject.addClass("showflex");
	projects.removeClass("projects-shrink");
	projects.addClass("projects-expand");
	setTimeout(function(){
		projectsWrapper.addClass("showme");
	}, 1000);
	projectsViewer.addClass("showprojects")
	moveup();
});

projectsClose.click(function(){
	studii.removeClass("white");
	studiiProject.removeClass("showflex")
	endangered.removeClass("white");
	endangeredProject.removeClass("showflex");
	simon.removeClass("white");
	simonProject.removeClass("showflex");
	cache.removeClass("white");
	cacheProject.removeClass("showflex");
	dcAttractions.removeClass("white");
	dcAttractionsProject.removeClass("showflex");
	projects.removeClass("projects-expand");
	projects.addClass("projects-shrink");
	projectsWrapper.removeClass("showme");
	projectsViewer.removeClass("showprojects")
});

sampleTracker.on("click", function(){
	sampleTracker.addClass("white");
	studii.removeClass("white");
	endangered.removeClass("white");
	simon.removeClass("white");
	cache.removeClass("white");
	dcAttractions.removeClass("white");
	sampleTrackerProject.addClass("showflex");
	studiiProject.removeClass("showflex");
	endangeredProject.removeClass("showflex");
	simonProject.removeClass("showflex");
	cacheProject.removeClass("showflex");
	dcAttractionsProject.removeClass("showflex");
});

studii.on("click", function(){
	sampleTracker.removeClass("white");
	studii.addClass("white");
	endangered.removeClass("white");
	simon.removeClass("white");
	cache.removeClass("white");
	dcAttractions.removeClass("white");
	sampleTrackerProject.removeClass("showflex");
	studiiProject.addClass("showflex");
	endangeredProject.removeClass("showflex");
	simonProject.removeClass("showflex");
	cacheProject.removeClass("showflex");
	dcAttractionsProject.removeClass("showflex");
});

endangered.on("click", function(){
	sampleTracker.removeClass("white");
	studii.removeClass("white");
	endangered.addClass("white");
	simon.removeClass("white");
	cache.removeClass("white");
	dcAttractions.removeClass("white");
	sampleTrackerProject.removeClass("showflex");
	studiiProject.removeClass("showflex");
	endangeredProject.addClass("showflex");
	simonProject.removeClass("showflex");
	cacheProject.removeClass("showflex");
	dcAttractionsProject.removeClass("showflex");
});

simon.on("click", function(){
	sampleTracker.removeClass("white");
	studii.removeClass("white");
	endangered.removeClass("white");
	simon.addClass("white");
	cache.removeClass("white");
	dcAttractions.removeClass("white");
	sampleTrackerProject.removeClass("showflex");
	studiiProject.removeClass("showflex");
	endangeredProject.removeClass("showflex");
	simonProject.addClass("showflex");
	cacheProject.removeClass("showflex");
	dcAttractionsProject.removeClass("showflex");
});

cache.on("click", function(){
	sampleTracker.removeClass("white");
	studii.removeClass("white");
	endangered.removeClass("white");
	simon.removeClass("white");
	cache.addClass("white");
	dcAttractions.removeClass("white");
	sampleTrackerProject.removeClass("showflex");
	studiiProject.removeClass("showflex");
	endangeredProject.removeClass("showflex");
	simonProject.removeClass("showflex");
	cacheProject.addClass("showflex");
	dcAttractionsProject.removeClass("showflex");
});

dcAttractions.on("click", function(){
	sampleTracker.removeClass("white");
	studii.removeClass("white");
	endangered.removeClass("white");
	simon.removeClass("white");
	cache.removeClass("white");
	dcAttractions.addClass("white");
	sampleTrackerProject.removeClass("showflex");
	studiiProject.removeClass("showflex");
	endangeredProject.removeClass("showflex");
	simonProject.removeClass("showflex");
	cacheProject.removeClass("showflex");
	dcAttractionsProject.addClass("showflex");
});


contactButton.click(function(){
	contactItem.removeClass("contact-shrink");
	contactItem.addClass("contact-expand");
	contactLink.removeClass("hide-link");
	contactLink.addClass("show-link");
});

contactClose.click(function(){
	contactItem .addClass("contact-shrink");
	contactItem.removeClass("contact-close");
	contactLink.removeClass("show-link");
	contactLink.addClass("hide-link");
});

});
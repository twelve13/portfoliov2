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
var projectInfo = $(".project-info");

var contactLink = $(".contact-link");
var contactItem = $(".contact-item");
var contactClose = $(".contact-close");

var sampleTrackerProject = $(".sample-tracker-project");
var studiiProject = $(".studii-project");
var simonProject = $(".simon-project");
var cacheProject = $(".cache-project");
var cssArtProject = $(".css-art-project");

var label = $("label");

const movedown = function() {
	var y = height;
	var id = setInterval(scrolldown, 10);

	//need conditional or it'll scroll down forever
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
	if(document.getElementById("sample-tracker-radio").checked) {
		sampleTrackerProject.addClass("showflex");
	}
	projects.removeClass("projects-shrink");
	projects.addClass("projects-expand");
	setTimeout(function(){
		projectsWrapper.addClass("showme");
	}, 1000);
	projectsViewer.addClass("showprojects")
	moveup();
});

projectsClose.click(function(){
	projects.removeClass("projects-expand");
	projects.addClass("projects-shrink");
	projectsWrapper.removeClass("showme");
	projectsViewer.removeClass("showprojects")
});

label.on("click", function(){
	var selectedProjectRadio = this.getAttribute("for");
	projectInfo.removeClass("showflex");
	sampleTrackerProject.removeClass("showflex");
	switch(selectedProjectRadio) {
		case "sample-tracker-radio":
			sampleTrackerProject.addClass("showflex");
			break;
		case "cache-radio":
			cacheProject.addClass("showflex");
			break;
		case "studii-radio":
			studiiProject.addClass("showflex");
			break;
		case "metro-simon-radio":
			simonProject.addClass("showflex");
			break;
		case "css-art-radio":
			cssArtProject.addClass("showflex");
			break;
		default:
			sampleTrackerProject.addClass("showflex");
			break;
	}
})


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
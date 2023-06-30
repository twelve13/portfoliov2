$(document).ready(function(){

var width = $(window).width();
var height = $(window).height();

var aboutButton = $("#about-button");
var projectsButton = $("#projects-button");
var contactButton = $("#contact-button");

var about = $(".about");
var aboutFrame = $(".about-frame");
var aboutClose = $(".about-close-button");
var aboutWrapper = $(".about-wrapper");

var projects = $(".projects");
var projectsClose = $(".projects-close");
var projectsWrapper = $(".projects-wrapper");
var projectsViewer = $(".projects-viewer");
var projectInfo = $(".project-info");

var contactLink = $(".contact-link");
var contactItem = $(".contact-item");
var contactClose = $(".contact-close");

var taskTrackerProject = $(".task-tracker-project");
var dataVizProject = $(".data-viz-project");
var knittingProject = $(".knitting-project");
var cacheProject = $(".cache-project");
var cssArtProject = $(".css-art-project");

var label = $("label");

var readNext = $("#read-next");
var readPrevious = $("#read-previous");
var panel1 = $("#about-panel1");
var panel2 = $("#about-panel2");

const movedown = function() {
	var y = height;
	var id = setInterval(scrolldown, 10);

	//need conditional or it'll scroll down forever
	function scrolldown() {
		if(y > 3*height){
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
	aboutFrame.removeClass("about-shrink");
	about.addClass("about-expand");
	aboutFrame.addClass("about-expand");
	setTimeout(function(){
		aboutWrapper.addClass("showflex");
	}, 1000);
	movedown();	
});

aboutClose.click(function(){
	about.removeClass("about-expand");
	aboutFrame.removeClass("about-expand");
	about.addClass("about-shrink");
	aboutFrame.addClass("about-shrink");
	aboutWrapper.removeClass("showflex");
	moveupAbout();
});

projectsButton.click(function() {
	if(document.getElementById("task-tracker-radio").checked) {
		taskTrackerProject.addClass("showflex");
	}
	projects.removeClass("projects-shrink");
	projects.addClass("projects-expand");
	setTimeout(function(){
		projectsWrapper.addClass("showflex");
	}, 1000);
	projectsViewer.addClass("showprojects")
	moveup();
});

projectsClose.click(function(){
	projects.removeClass("projects-expand");
	projects.addClass("projects-shrink");
	projectsWrapper.removeClass("showflex");
	projectsViewer.removeClass("showprojects")
});

label.on("click", function(){
	var selectedProjectRadio = this.getAttribute("for");
	projectInfo.removeClass("showflex");
	taskTrackerProject.removeClass("showflex");
	switch(selectedProjectRadio) {
		case "task-tracker-radio":
			taskTrackerProject.addClass("showflex");
			break;
		case "cache-radio":
			cacheProject.addClass("showflex");
			break;
		case "data-viz-radio":
			dataVizProject.addClass("showflex");
			break;
		case "knitting-radio":
			knittingProject.addClass("showflex");
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
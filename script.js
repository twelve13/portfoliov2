$(document).ready(function(){



var width = $(window).width();
var height = $(window).height();

var aboutButton = $("#about-button");
var projectsButton = $("#projects-button");
var contactButton = $("#contact-button");

var about = document.getElementById("about");
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
var knittingProject = $(".knitting-project");
var cacheProject = $(".cache-project");
var cssArtProject = $(".css-art-project");

var label = $("label");

var readNext = $("#read-next");
var readPrevious = $("#read-previous");
var panel1 = $("#about-panel1");
var panel2 = $("#about-panel2");

var aboutPosition = about.getBoundingClientRect();


const showAbout = function() {
	var id = setInterval(scrolldown, 10);
	var scrollTo = 0;
	// var top = 0;
	// var moveHoriz = 0;
	// var aboutWidth = aboutPosition.width;

	// about.style.borderRadius = "50%";

	//need conditional or it'll scroll down forever
	function scrolldown() {
		if(scrollTo > height){
		 	clearInterval(id);
		} else {
			scrollTo+=5;
			// aboutWidth+=4;
			// moveHoriz +=2;
			// top+=3;
			// about.style.top = `${top}px`;
			// about.style.left = `-${moveHoriz}px`;
			// about.style.width = `${aboutWidth}px`;
			// about.style.height = `${aboutWidth}px`;
			window.scroll(0, scrollTo);
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
	// about.removeClass("about-shrink");
	about.classList.add("about-expand");
	aboutViewer.addClass("show");

	showAbout();	
});

aboutClose.click(function(){
	about.removeClass("about-expand");
	about.addClass("about-shrink");
	aboutWrapper.removeClass("showflex");
	moveupAbout();
});

readNext.click(function(){
	panel1.removeClass("show-panel");
	panel1.addClass("hide-panel");
	panel2.removeClass("hide-panel");
	panel2.addClass("show-panel");
});

readPrevious.click(function(){
	panel1.addClass("show-panel");
	panel1.removeClass("hide-panel");
	panel2.addClass("hide-panel")
	panel2.removeClass("show-panel");
});

projectsButton.click(function() {
	if(document.getElementById("sample-tracker-radio").checked) {
		sampleTrackerProject.addClass("showflex");
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
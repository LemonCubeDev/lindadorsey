onEvent("image1", "click", function( ) {
	showElement("button10");
	showElement("button11");
	showElement("image3");
	hideElement("image1");
});
onEvent("image3", "click", function( ) {
	hideElement("button10");
	hideElement("button11");
	hideElement("image3");
	showElement("image1");
});
onEvent("button10", "click", function( ) {
	setScreen("screen1");
});
onEvent("button11", "click", function( ) {
	setScreen("screen2");
});

//NavMenuBar
setStyle("NavMenuBar.Home", "cursor: pointer");
setStyle("NavMenuBar.MyMusic", "cursor: pointer");
setStyle("NavMenuBar.MyStory", "cursor: pointer");
setStyle("NavMenuBar.DebutAlbum", "cursor: pointer");
setStyle("NavMenuBar.Songs", "cursor: pointer");
onEvent("NavMenuBar.Home", "click", function( ) {
	showElement("NavMenuHomeButton.Home");
	showElement("NavMenuMyMusicButton.Home");
	showElement("NavMenuMyStoryButton.Home");
	showElement("NavMenuDebutAlbumButton.Home");
	showElement("NavMenuX.Home");
	hideElement("NavMenuBar.Home");
});
onEvent("NavMenuBar.MyMusic", "click", function( ) {
	showElement("NavMenuHomeButton.MyMusic");
	showElement("NavMenuMyMusicButton.MyMusic");
	showElement("NavMenuMyStoryButton.MyMusic");
	showElement("NavMenuDebutAlbumButton.MyMusic");
	showElement("NavMenuX.MyMusic");
	hideElement("NavMenuBar.MyMusic");
});
onEvent("NavMenuBar.MyStory", "click", function( ) {
	showElement("NavMenuHomeButton.MyStory");
	showElement("NavMenuMyMusicButton.MyStory");
	showElement("NavMenuMyStoryButton.MyStory");
	showElement("NavMenuDebutAlbumButton.MyStory");
	showElement("NavMenuX.MyStory");
	hideElement("NavMenuBar.MyStory");
});
onEvent("NavMenuBar.DebutAlbum", "click", function( ) {
	showElement("NavMenuHomeButton.DebutAlbum");
	showElement("NavMenuMyMusicButton.DebutAlbum");
	showElement("NavMenuMyStoryButton.DebutAlbum");
	showElement("NavMenuDebutAlbumButton.DebutAlbum");
	showElement("NavMenuX.DebutAlbum");
	hideElement("NavMenuBar.DebutAlbum");
});
onEvent("NavMenuBar.Songs", "click", function( ) {
	showElement("NavMenuHomeButton.Songs");
	showElement("NavMenuMyMusicButton.Songs");
	showElement("NavMenuMyStoryButton.Songs");
	showElement("NavMenuDebutAlbumButton.Songs");
	showElement("NavMenuX.Songs");
	hideElement("NavMenuBar.Songs");
});
//NavMenuX
setStyle("NavMenuX.Home", "cursor: pointer");
setStyle("NavMenuX.MyMusic", "cursor: pointer");
setStyle("NavMenuX.MyStory", "cursor: pointer");
setStyle("NavMenuX.DebutAlbum", "cursor: pointer");
setStyle("NavMenuX.Songs", "cursor: pointer");
onEvent("NavMenuX.Home", "click", function( ) {
	hideElement("NavMenuHomeButton.Home");
	hideElement("NavMenuMyMusicButton.Home");
	hideElement("NavMenuMyStoryButton.Home");
	hideElement("NavMenuDebutAlbumButton.Home");
	hideElement("NavMenuX.Home");
	showElement("NavMenuBar.Home");
});
onEvent("NavMenuX.MyMusic", "click", function( ) {
	hideElement("NavMenuHomeButton.MyMusic");
	hideElement("NavMenuMyMusicButton.MyMusic");
	hideElement("NavMenuMyStoryButton.MyMusic");
	hideElement("NavMenuDebutAlbumButton.MyMusic");
	hideElement("NavMenuX.MyMusic");
	showElement("NavMenuBar.MyMusic");
});
onEvent("NavMenuX.MyStory", "click", function( ) {
	hideElement("NavMenuHomeButton.MyStory");
	hideElement("NavMenuMyMusicButton.MyStory");
	hideElement("NavMenuMyStoryButton.MyStory");
	hideElement("NavMenuDebutAlbumButton.MyStory");
	hideElement("NavMenuX.MyStory");
	showElement("NavMenuBar.MyStory");
});
onEvent("NavMenuX.DebutAlbum", "click", function( ) {
	hideElement("NavMenuHomeButton.DebutAlbum");
	hideElement("NavMenuMyMusicButton.DebutAlbum");
	hideElement("NavMenuMyStoryButton.DebutAlbum");
	hideElement("NavMenuDebutAlbumButton.DebutAlbum");
	hideElement("NavMenuX.DebutAlbum");
	showElement("NavMenuBar.DebutAlbum");
});
onEvent("NavMenuX.Songs", "click", function( ) {
	hideElement("NavMenuHomeButton.Songs");
	hideElement("NavMenuMyMusicButton.Songs");
	hideElement("NavMenuMyStoryButton.Songs");
	hideElement("NavMenuDebutAlbumButton.Songs");
	hideElement("NavMenuX.Songs");
	showElement("NavMenuBar.Songs");
});
//NavButtons
onEvent("NavMenuMyMusicButton.Home", "click", function( ) {
	setScreen("MyMusic");
	HideNavButtonsHome();
});
onEvent("NavMenuMyStoryButton.Home", "click", function( ) {
	setScreen("MyStory");
	HideNavButtonsHome();
});
onEvent("NavMenuDebutAlbumButton.Home", "click", function( ) {
	setScreen("DebutAlbum");
	HideNavButtonsHome();
});
function HideNavButtonsHome() {
  hideElement("NavMenuHomeButton.Home");
  hideElement("NavMenuMyMusicButton.Home");
  hideElement("NavMenuMyStoryButton.Home");
  hideElement("NavMenuDebutAlbumButton.Home");
  hideElement("NavMenuX.Home");
  showElement("NavMenuBar.Home");
}
onEvent("NavMenuHomeButton.MyMusic", "click", function( ) {
	setScreen("Home");
	HideNavButtonsMyMusic();
});
onEvent("NavMenuMyStoryButton.MyMusic", "click", function( ) {
	setScreen("MyStory");
	HideNavButtonsMyMusic();
});
onEvent("NavMenuDebutAlbumButton.MyMusic", "click", function( ) {
	setScreen("DebutAlbum");
	HideNavButtonsMyMusic();
});
function HideNavButtonsMyMusic() {
  hideElement("NavMenuHomeButton.MyMusic");
  hideElement("NavMenuMyMusicButton.MyMusic");
  hideElement("NavMenuMyStoryButton.MyMusic");
  hideElement("NavMenuDebutAlbumButton.MyMusic");
  hideElement("NavMenuX.MyMusic");
  showElement("NavMenuBar.MyMusic");
}
onEvent("NavMenuHomeButton.MyStory", "click", function( ) {
	setScreen("Home");
	HideNavButtonsMyStory();
});
onEvent("NavMenuMyMusicButton.MyStory", "click", function( ) {
	setScreen("MyMusic");
	HideNavButtonsMyStory();
});
onEvent("NavMenuDebutAlbumButton.MyStory", "click", function( ) {
	setScreen("DebutAlbum");
	HideNavButtonsMyStory();
});
function HideNavButtonsMyStory() {
  hideElement("NavMenuHomeButton.MyStory");
  hideElement("NavMenuMyMusicButton.MyStory");
  hideElement("NavMenuMyStoryButton.MyStory");
  hideElement("NavMenuDebutAlbumButton.MyStory");
  hideElement("NavMenuX.MyStory");
  showElement("NavMenuBar.MyStory");
}
onEvent("NavMenuHomeButton.DebutAlbum", "click", function( ) {
	setScreen("Home");
	HideNavButtonsDebutAlbum();
});
onEvent("NavMenuMyMusicButton.DebutAlbum", "click", function( ) {
	setScreen("MyMusic");
	HideNavButtonsDebutAlbum();
});
onEvent("NavMenuMyStoryButton.DebutAlbum", "click", function( ) {
	setScreen("MyStory");
	HideNavButtonsDebutAlbum();
});
function HideNavButtonsDebutAlbum() {
  hideElement("NavMenuHomeButton.DebutAlbum");
  hideElement("NavMenuMyMusicButton.DebutAlbum");
  hideElement("NavMenuMyStoryButton.DebutAlbum");
  hideElement("NavMenuDebutAlbumButton.DebutAlbum");
  hideElement("NavMenuX.DebutAlbum");
  showElement("NavMenuBar.DebutAlbum");
}
onEvent("NavMenuHomeButton.Songs", "click", function( ) {
	setScreen("Home");
	HideNavButtonsSongs();
});
onEvent("NavMenuMyMusicButton.Songs", "click", function( ) {
	setScreen("MyMusic");
	HideNavButtonsSongs();
});
onEvent("NavMenuMyStoryButton.Songs", "click", function( ) {
	setScreen("MyStory");
	HideNavButtonsSongs();
});
onEvent("NavMenuDebutAlbumButton.Songs", "click", function( ) {
	setScreen("DebutAlbum");
	HideNavButtonsSongs();
});
function HideNavButtonsSongs() {
  hideElement("NavMenuHomeButton.Songs");
  hideElement("NavMenuMyMusicButton.Songs");
  hideElement("NavMenuMyStoryButton.Songs");
  hideElement("NavMenuDebutAlbumButton.Songs");
  hideElement("NavMenuX.Songs");
  showElement("NavMenuBar.Songs");
}
//Home
setInterval(function() {
  showElement("NowAvailable.Home");
  showElement("NowAvailableCaption.Home");
  showElement("StreamingNowButton.Home");
  hideElement("AlbumRelease.Home");
  hideElement("AlbumReleaseCaption.Home");
  setTimeout(function() {
    showElement("AlbumRelease.Home");
    showElement("AlbumReleaseCaption.Home");
    hideElement("NowAvailable.Home");
    hideElement("NowAvailableCaption.Home");
    hideElement("StreamingNowButton.Home");
  }, 5000);
}, 10000);
onEvent("StreamingNowButton.Home", "click", function( ) {
  setScreen("DebutAlbum");
});
setStyle("StreamingNowButton.Home", "cursor: pointer");
//DebutAlbum
onEvent("SongsButton.DebutAlbum", "click", function( ) {
  setScreen("Songs");
});

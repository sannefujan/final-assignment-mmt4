//$( ".btn-play").each(function(index) {
var player1 = videojs('#video1');
//var player2 = videojs('#video2');
//var player3 = videojs('#video3');
//var player4 = videojs('#video4');
//var player5 = videojs('#video5');
//var player = (player1, player2, player3, player4, player5);
//player.forEach(function(player){
player1.ready(function() {

$('.btn-play').click( function(event){
    event.preventDefault();
 if ( $(this).hasClass('active')){
   $(this).removeClass('active');
   console.log("UIT");
   player.pause();
 } else {
     $(this).addClass('active');
     console.log("AAN");
     player.play();
}
});
});
//});

//$( ".video-js" ).each(function(index) {
var player = videojs('#video1');
player.ready(function(){
$('.btn-right').click( function(event){
    event.preventDefault();
    player.currentTime(-10);

    // should be 10 seconds less than duration
    console.log(player.remainingTime());
 });
});
//});

//$( ".btn-left" ).each(function(index) {
var player = videojs('#video1');
player.ready(function(){
$('.btn-left').click( function(event){
    event.preventDefault();
    player.currentTime(10);
    // should be 10 seconds less than duration
    console.log(player.remainingTime());
});
});
//});  


//modal dialog popup
//$( ".video-js" ).each(function(index) {
//$("#video1").on("ended", function() {     
//alert("De video over de algemene introductie is afgelopen. Bedankt voor het kijken!");
//});
//});
    
//dark theme
$( "#theme img" ).on("click", function() { 
if( $( "body" ).hasClass( "dark" )) { 
$( "body" ).removeClass( "dark" ); 
} else { 
$( "body" ).addClass( "dark" ); 
} 
}); 


var player = videojs('#video1');
player.ready(function(){
var ModalDialog = videojs.getComponent('ModalDialog');
var modal = new ModalDialog(player, {
   temporary: false
});
    
player.addChild(modal);
 
player.on('ended', function() {
modal.open();
modal.addClass('vjs-my-fancy-modal');
alert("video has finished");
$("alert").css({'font-size': "5em", 'color': "white"});
});
player.on('play', function(){
modal.close();
  });
  
});











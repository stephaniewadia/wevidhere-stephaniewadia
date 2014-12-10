/* 
 * @namespace WeVidHere['screen-config']
 * 
 */

  WeVidHere.screens['screen-config']=(function (){

 	var firstTime=true, //have we run before?
 	ui=WeVidHere.ui,
 	dom=ui.dom,
 	panel=document.getElementById('screen-config'); //the visible sub-screen from the HTML

 	function init (){
 		//common initialization function
 		console.log("in init");
 		//grab global submit button for all form fields
 		//which takes us to the game-screen
 		var subb=document.getElementById('config-submit');
 		dom.bind(subb,"click",function(){
 			console.log("clicked on subb, go to game screen");
 			ui.ShowScreen('screen-game');
 			});

 	};

 	function run (){
 		console.log("in run");
 		if(firstTime){
 			init();
 		}
 		//do our stuff
 	};
 
 	return{
 		init:init,
 		run:run
 	};

 })();
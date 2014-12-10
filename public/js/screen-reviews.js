/* 
 * @namespace WeVidHere['screen-reviews']
 * 
 */

  WeVidHere.screens['screen-reviews']=(function (){

 	var firstTime=true, //have we run before?
 	panel=null; //the visible sub-screen

 	function init (){
 		console.log("in init");
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
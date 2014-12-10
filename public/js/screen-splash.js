/* 
 * @namespace WeVidHere['screen-splash']
 * splash screen for the game
 */
 WeVidHere.screens['screen-splash']=(function (){

 	var firstTime=true, //have we run before?
 	panel=document.getElementById('screen-splash'); //the visible sub-screen
 	ui=WeVidHere.ui,
 	dom=ui.dom; //the visible sub-screen

 	function init (){
 		console.log("in init");

 		//bind actions to the splash screen menu items
 		var actions=panel.getElementsByTagName('a');
 		//loop through the hyperlinks, bind opening a screen to a specific link



 		for(var i=0; i < actions.length; i++) {
 			//run dom.bind (wraps addEventListener in WeVidHere.ui.dom)
 			dom.bind(actions[i], "click", function (e) {

 
 				console.log("my clicked element is:" + e.target);

 				var href=e.target.href;
 				console.log("href of current splashscreen hyperlink:" + href);
			
				href=href.split("#")[1];
  				console.log("converted href is now:" + href);
						
				//hide the wrapper website for WeVidHere
 				ui.hideSite();
				//show the config screen, or information screen, depending on the href clicked
 				ui.showScreen(href); 
 	 				
 			}); //end of dom.bind
	
 		} //end of for() loop over all <a> elements



 	}; //end of init() function

 	function run (){
 		console.log("in screen-splash run in screen-splash.js");
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
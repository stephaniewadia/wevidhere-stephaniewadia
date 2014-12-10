/**
* @namespace WeVidHere
*/
window.WeVidHere=(window.WeVidHere||(function(){
	
	var firstTime= true;
	/**
	@enum config
	*/
	var constants={
		TRUE:"true",
		FALSE:"false"
	};

	var screens=[]; //link each visible screen here

	/*
	* @enum features
	* We create it here, but set it outside of
	* WeVidHere in Modernizr tests and polyfill loads
	*/
	var features={
		num:0
	};

	/**
	* @method standAlone
	* determine if we are fullscreen, or running inside
	* safari or android browser on mobile devices. Doing this
	* lets us give users the option to save our app to their desktop
	* @return {Boolean} if we are standalone, return true, else false
	*/
	function standAlone(){
		//TODO: Do the actual test here, returning 'true' for desktop apps
		return true;
	}

	/**
	 * @method ready
	 * create a function similar to that used in jQuery  
	 * that fires after the HTML is parsed, but before 
	 * images and other assets are downloaded
	 * detects when HTML has been downloaded
	 * @link http://dustindiaz.com/smallest-domready-ever
	 * other examples
	 * @link https://jonlabelle.com/snippets/view/javascript/cross-browser-document-ready
	 * @link https://gist.github.com/esfand/10058175
	 * @link https://gist.github.com/dciccale/4087856
	 * @param {Function} fn function to call when DOM is loaded
	 * @returns {Boolean} if dom is ready, return true, else false
	 */
	function ready () {
		console.log("WeVidHere::ready, features:" + features);
		//if not ready, document.readyState='interactive' otherwise 'complete'
		/in/.test(document.readyState)?setTimeout(function(){ready()}, 9):run();
	};

	function init (){
		console.log("in init");
		if(firstTime){
			//load default files
			Modernizr.load({
				load: [
					'js/ui.js',
					'js/screen-splash.js',
					'js/screen-install.js',
					'js/screen-config.js',
					'js/screen-game.js',
					'js/screen-help.js',
					'js/screen-reviews.js',
					'js/screen-exit.js'
				],
				complete: function(){
						Modernizr.load(
							[
								{
									test: window.JSON,
									nope: 'js/lib/json3.min.js', //load polyfill
									complete: function(){
										console.log("JSON loaded");
									} //end of callback of first test
								}, //end of first test
								{
									test: Modernizr.localstorage,
									nope: 'js/lib/localstorage.js', //load polyfill
									complete: function(){
										console.log("HTML5 LocalStorage loaded");
								} //end of callback for second test

								} //end of second test

								] //end of array of tests
						); //end of second Modernizr.load()
						ready(); //run our DOMReady test, then run();
					} //end of complete for first Modernizr load
				}); //end of first Modernizr.load()
			
			firstTime=false; //will not run this function again once its loaded
		} //end of 'firstTime' test
	}; //end of init();

	function run (){
		console.log("WeVidHere:run() starting");
		//load the correct screen, setting classes and properties correctly
		var ui=WeVidHere.ui;
		var dom=ui.dom;
		
		//users should see either a splash screen, or install screen
		if(standAlone()){
			ui.showScreen('screen-splash');
		}
		else{
			ui.showScreen('screen-install'); //TODO: write screen-install, following HTML5 Games
		}

	} //end of run()

	return{ //return makes these public variables
		init:init,
		run:run,
		screens:screens

	};
}))(); // end of WeVidHere

//object created, fire its 'init' function
WeVidHere.init();
// Activity 2
// Visual Frameworks - VFW 1304
// Mobile Development
// Full Sail University


//Wait until the page DOM content has loaded
window.addEventListener("DOMContentLoaded", function(){



	
	//Element Selection Function
	function id(id){
		var thisElement = document.getElementById(id);
		return thisElement;
	}



	//Primary Instrument Values
	var pInstrument = [" -Primary Instrument- ","Guitar", "Bass", "Drums", "Keys", "Vocals", "Other"];

	//Get Relevant Click Events
	var displayDataLink = id('displayDataLink');
	displayDataLink.addEventListener("click", displayData);
	var clearDataLink = id('clearDataLink');
	clearDataLink.addEventListener("click", clearData);
	var storeDataLink = id('submit');
	storeDataLink.addEventListener("click", saveData);
	var storeDataLink
});




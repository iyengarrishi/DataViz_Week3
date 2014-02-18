/**
 * @author
 */
console.log("javascript file loaded");

// loadedJSON goes outside dataLoaded because dataLoaded is only for execution, any other "recipes" must be introduced 
// first to be executed within dataLoaded
function loadedJSON(ANNIE){
//console log the 'count' property of the JSON file ANNIE

// I expect that this console log statement will output the number 409
// because count in my JSON file has the value 409

	
console.log(ANNIE.count)
	
}

//this is my custom data loaded function
function dataLoaded(){
	
console.log("I got to document ready!");

//Use jQuery to create a new div element
var myDiv = $("<div>");
//Use jQuery to add some text to it
//Hey jQuery, take that div I just created called "myDiv" amd add some HTML (in this case just a string)

$(myDiv).html("This is my new div");

// $() is an indicator of jQuery 

// Hey jQuery, grab the div with the id "Container" and put my new div inside it
$("#Container").append(myDiv);

// Use the jQuery get function to load my JSON file, takes 3 parameters
//first parameter is the name of the file
//second parameter is the function to call once the file is loaded
//third parameter is a string of the file type to expect

$.get("UEMP270V_data.json", loadedJSON, "json");

 

// In CSS and jQuery
// # means look for the element with this 'id' attribute 
// . means look for the element(s) with this 'class' attribute
}

//document ready happens when the entire webpage has loaded
//when that has happened, I want to initiate the
//"dataloaded" function/activity that I defined above

$(document).ready(dataLoaded);

console.log("this statement is after document ready");

//document ready isn't going to take effect until the page has loaded
//document ready is asynchronous, which is why it doesn't show up in order with the remaining console logs
//document ready is an event, but it's invisible - we don't see anything happen


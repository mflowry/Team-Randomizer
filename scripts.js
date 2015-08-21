$(document).ready(function(){
console.log('Script works!');
// Use jQuery animations to slide in the teams. 
// Use handlebars.js.

var classArray = [
    "Allan",
    "Ben",
    "Brendan",
    "Brook",
    "Garrett",
    "Jacob",
    "James",
    "Jason S.",
    "Jason N.",
    "Kathryn",
    "Kim",
    "Kamie",
    "Katie",
    "Liz",
    "Madeleine",
    "Martha",
    "Matthew",
    "Shawn",
    "Vas"
];

//generate button - how many teams
var t;

('#twoTeams').on('click', function(){
	//create 2 arrays or set a variable to 2
	t=2;
}
('#threeTeams').on('click', function(){
	t=3; team=team+i
}
('#fourTeams').on('click', function(){
	t=4;
}
('#fiveTeams').on('click', function(){
	t=5;
}
('#sixTeams').on('click', function(){
	t=6;
}
('#sevenTeams').on('click', function(){
	t=7;
}
('#eightTeams').on('click', function(){
	t=8;
}
('#nineTeams').on('click', function(){
	t=9;
}
('#tenTeams').on('click', function(){
	t=10;
}
('#generate').on('click', function(){
	if (t==false) {
		alert("Please select the desired number of teams.")
	} else {
		assignTeams(classArray);
	}

	//shuffle the array and create a new array
	var shuffledClass = //use shuffle function

	//create team arrays
	var team1 = [];
	var team2 = [];
	var team3 = [];
	var team4 = [];
	var team5 = [];
	var team6 = [];
	var team7 = [];
	var team8 = [];
	var team9 = [];
	var team10 = [];

	//assign students to arrays
	function assignTeams(array) {
		for(var i=0; i<classArray.length; i++){
			team[i].push();
		}
	}
}


//alert if number of teams = 0
//display group header and names on each team
//if generate button hit again, end function and start new randomization 

}):


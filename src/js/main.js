
var foodArray = ["Lentil soup","Bean soup","Pasta with rahm","Steak", "Shoes","Salmon","Pizza","Bolognese"];
console.log('hurray')
(function(){
	function getRandomInt(max) {
  		return Math.floor(Math.random() * Math.floor(max));
	}

$('.actionBtn').click(function(){
	var tempArray = JSON.parse(JSON.stringify(foodArray));

	for(var i=0;i<=6;i++){
		var num = getRandomInt(tempArray.length);
		var roll = tempArray.splice(num, 1);
		$("#"+(i+1)).html(roll[0]);
	}
});


})();

$(document).ready(function(){
var streamers = ["ESL_SC2", "OgamingSC2", 
				"cretetion", "freecodecamp", 
				"habathcx", "RobotCaleb", 
				"noobs2ninjas", "riotgamesjp",
				"garenatw","ga619003"];
//get the data and put it pon the cards
for ( let i = 0; i< streamers.length; i++){
	console.log (streamers[i]);
	$.getJSON(
		"https://cors-anywhere.herokuapp.com/https://wind-bow.glitch.me/twitch-api/channels/"+ 
		streamers[i], 
	function(json){
		var newContent= $("<div class=card><div id=names><p><a href="+
			json.url +
			">" +
			json.name +
			"</a></p></div><div id=logos><img src=" +
			json.logo+
			"></div><div class=details><div class=description>" +
			json.status +								
			"</div></div></div>"
		);
	
		console.log (json);
			//Check if Online
	
	$.getJSON(
		"https://wind-bow.glitch.me/twitch-api/streams/"+streamers[i],
		function(data){
			console.log(data);
			if(data.stream==null) {
			newContent.find(".details").append("<p class=offline>Offline</p>");
			}	else{
				newContent
					.find(".details")
					.append("<p><a href=" + json.url + ">Online</a></p>")
					.append("<p class='json-status'>" + json.status + "</p>");
			}
	$(".deck").append(newContent);

		}
	);
	}	
	);
};
 $("#status-button").click(function(){
 	$(".offline").parent().parent().toggle("slow");
 	$(this).text(function(i, v){
 		return v=== "Online" ? "All" : "Online"
 	})
 });
});
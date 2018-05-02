$(document).ready(function() 
{
	$(".nextRace").hide();
	
	$("#roll").click(
		function() 
		{
			//
			var strength = roll();
			var dex = roll();
			var intel = roll();
			var wis = roll();
			var con = roll();
			var cha = roll();
			
			//
			$("#strength").append(strength);
			$("#dex").append(dex);
			$("#int").append(intel);
			$("#wis").append(wis);
			$("#con").append(con);
			$("#cha").append(cha);
			
			//
			sessionStorage.setItem("strength", strength);
			sessionStorage.setItem("dex", dex);
			sessionStorage.setItem("intel", intel);
			sessionStorage.setItem("wis", wis);
			sessionStorage.setItem("con", con);
			sessionStorage.setItem("cha", cha);
			
			//
			$("#roll").hide();
			
			//
			$(".nextRace").show();
		}
	);
}); 

//
function roll()
{
	return (Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + 3);
}
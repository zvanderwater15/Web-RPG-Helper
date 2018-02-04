$(document).ready(function() {
	$(".nextRace").hide();
	$("#roll").click(function() {
		var stre = Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + 3;
		$("#strength").append(stre);
		sessionStorage.setItem("strengths", stre);
		var dext = Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + 3;
		$("#dex").append(dext);
		sessionStorage.setItem("dexts", dext);
		var inte = Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + 3;
		$("#int").append(inte);
		sessionStorage.setItem("ints", inte);
		var wisd = Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + 3;
		$("#wis").append(wisd);
		sessionStorage.setItem("wisds", wisd);
		var cons = Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + 3;
		$("#con").append(cons);
		sessionStorage.setItem("consts", cons);
		var chari = Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + 3;
		$("#cha").append(chari);
		sessionStorage.setItem("chars", chari);
		$("#roll").hide();
		$(".nextRace").show();
	});
}); 

$(document).ready(function() 
{
	//
	$(".nextClass").hide();
	
	//
	var strength = sessionStorage.getItem("strength");
	var dex = sessionStorage.getItem("dex");
	var intel = sessionStorage.getItem("intel");
	var wis = sessionStorage.getItem("wis");
	var con = sessionStorage.getItem("con");
	var cha = sessionStorage.getItem("cha");
	
	//
	if (strength < 8 || dex < 3 || con < 11 || wis < 3 || intel < 3 || cha < 3)
	{
		$('#dwarf').addClass('nope');
	}
	
	if (strength < 3 || dex < 6 || con < 7 || wis < 3 || intel < 8 || cha < 8)
	{
		$('#elf').addClass('nope');
	}
	
	if (strength < 6 || dex < 3 || con < 8 || wis < 3 || intel < 6 || cha < 3)
	{
		$("#gnome").addClass("nope");
	}
	
	if (strength < 3 || dex < 6 || con < 6 || wis < 3 || intel < 4 || cha < 3)
	{
		$("#halfelf").addClass("nope");
	}
	
	if (strength < 7 || dex < 7 || con < 10 || wis < 3 || intel < 6 || cha < 3)
	{
		$("#halfling").addClass("nope");
	}
	
	//
	$('.nope').prop('disabled', true);
	
	//
	$('#dwarf').click(
		function()
		{
			$(".nextClass").show();
			$(".chosen").removeClass("chosen");
			$(this).addClass("chosen");
			var race = "dwarf";
			sessionStorage.setItem("race", race);
		}
	);
	
	//
	$('#elf').click(
		function()
		{
			$(".nextClass").show();
			$(".chosen").removeClass("chosen");
			$(this).addClass("chosen");
			var race = "elf";
			sessionStorage.setItem("race", race);
		}
	);
	
	//
	$('#gnome').click(
		function()
		{
			$(".nextClass").show();
			$(".chosen").removeClass("chosen");
			$(this).addClass("chosen");
			var race = "gnome";
			sessionStorage.setItem("race", race);
		}
	);
	
	//
	$('#halfelf').click(
		function(){
			$(".nextClass").show();
			$(".chosen").removeClass("chosen");
			$(this).addClass("chosen");
			var race = "half-elf";
			sessionStorage.setItem("race", race);
		}
	);
	
	//
	$('#halfling').click(function(){
	    $(".nextClass").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var race = "halfling";
		sessionStorage.setItem("race", race);
	});
	
	$('#human').click(function(){
		$(".nextClass").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var race = "human";
		sessionStorage.setItem("race", race);
	});
	
	$(".nextClass").click(function(){
		if (race == "dwarf"){
			con++;
			cha--;
		}
		else if (race == "elf"){
			dex++;
			con--;
		}
		else if (race == "gnome"){
			intel++;
			wis--;
		}
		else if (race == "halfling"){
			strength--;
			dex++;
		}
		
		sessionStorage.setItem("strength", strength);
		sessionStorage.setItem("dex", dex);
		sessionStorage.setItem("intel", intel);
		sessionStorage.setItem("wis", wis);
		sessionStorage.setItem("con", con);
		sessionStorage.setItem("cha", cha);
	});
	
});


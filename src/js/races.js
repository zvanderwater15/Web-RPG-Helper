function setRace(el, race) {
	$("#nextClass").show();
	$(".chosen").removeClass("chosen");
	$(el).addClass("chosen");
	sessionStorage.setItem("race", race);
}

$(document).ready(function() 
{
	$("#nextClass").hide();
	
	var str = sessionStorage.getItem("str");
	var dex = sessionStorage.getItem("dex");
	var int = sessionStorage.getItem("int");
	var wis = sessionStorage.getItem("wis");
	var con = sessionStorage.getItem("con");
	var cha = sessionStorage.getItem("cha");
	let race = ""

	if (str < 8 || dex < 3 || con < 11 || wis < 3 || int< 3 || cha < 3)
	{
		$('#dwarf').addClass('nope');
	}
	
	if (str < 3 || dex < 6 || con < 7 || wis < 3 || int< 8 || cha < 8)
	{
		$('#elf').addClass('nope');
	}
	
	if (str < 6 || dex < 3 || con < 8 || wis < 3 || int< 6 || cha < 3)
	{
		$("#gnome").addClass("nope");
	}
	
	if (str < 3 || dex < 6 || con < 6 || wis < 3 || int< 4 || cha < 3)
	{
		$("#halfelf").addClass("nope");
	}
	
	if (str < 7 || dex < 7 || con < 10 || wis < 3 || int< 6 || cha < 3)
	{
		$("#halfling").addClass("nope");
	}
	
	//
	$('.nope').prop('disabled', true);
	
	$('#dwarf').click((function() {
		setRace(this, "dwarf")
	}));
	
	$('#gnome').click((function() {
		setRace(this, "gnome")
	}));
	
	$('#elf').click((function() {
		setRace(this, "elf")
	}));
	
	$('#halfelf').click((function() {
		setRace(this, "halfelf")
	}));
	
	$('#halfling').click((function() {
		setRace(this, "halfling")
	}));

	$('#human').click((function() {
		setRace(this, "human")
	}));
	
	$("#nextClass").click(function(){
		if (race == "dwarf"){
			con++;
			cha--;
		}
		else if (race == "elf"){
			dex++;
			con--;
		}
		else if (race == "gnome"){
			int++;
			wis--;
		}
		else if (race == "halfling"){
			str--;
			dex++;
		}
		
		sessionStorage.setItem("str", str);
		sessionStorage.setItem("dex", dex);
		sessionStorage.setItem("int", int);
		sessionStorage.setItem("wis", wis);
		sessionStorage.setItem("con", con);
		sessionStorage.setItem("cha", cha);
	});
	
});


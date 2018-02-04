$(document).ready(function() {
	$(".nextClass").hide();
	var stre = sessionStorage.getItem("strengths");
	var dext = sessionStorage.getItem("dexts");
	var inte = sessionStorage.getItem("ints");
	var wisd = sessionStorage.getItem("wisds");
	var cons = sessionStorage.getItem("consts");
	var chari = sessionStorage.getItem("chars");
	if (stre < 8 || dext < 3 || cons < 11 || wisd < 3 || inte < 3 || chari < 3){
		$('#dwarf').addClass('nope');
	}
	if (stre < 3 || dext < 6 || cons < 7 || wisd < 3 || inte < 8 || chari < 8){
		$('#elf').addClass('nope');
	}
	if (stre < 6 || dext < 3 || cons < 8 || wisd < 3 || inte < 6 || chari < 3){
		$("#gnome").addClass("nope");
	}
	if (stre < 3 || dext < 6 || cons < 6 || wisd < 3 || inte < 4 || chari < 3){
		$("#halfelf").addClass("nope");
	}
	if (stre < 7 || dext < 7 || cons < 10 || wisd < 3 || inte < 6 || chari < 3){
		$("#halfling").addClass("nope");
	}
	$('.nope').prop('disabled', true);
	$('#dwarf').click(function(){
		$(".nextClass").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var race = "dwarf";
		sessionStorage.setItem("crace", race);
	});
	$('#elf').click(function(){
		$(".nextClass").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var race = "elf";
		sessionStorage.setItem("crace", race);
	});
	$('#gnome').click(function(){
		$(".nextClass").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var race = "gnome";
		sessionStorage.setItem("crace", race);
	});
	$('#halfelf').click(function(){
		$(".nextClass").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var race = "half-elf";
		sessionStorage.setItem("crace", race);
	});
	$('#halfling').click(function(){
	    $(".nextClass").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var race = "halfling";
		sessionStorage.setItem("crace", race);
	});
	$('#human').click(function(){
		$(".nextClass").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var race = "human";
		sessionStorage.setItem("crace", race);
	});
	$(".nextClass").click(function(){
		if (race == "dwarf"){
			cons = cons + 1;
			chari = chari-1;
		}
		else if (race == "elf"){
			dext = dext + 1;
			cons = cons - 1;
		}
		else if (race == "gnome"){
			inte = inte + 1;
			wis = wis - 1;
		}
		else if (race == "halfling"){
			stre = stre - 1;
			dext = dext + 1;
		}
		sessionStorage.setItem("strengths", stre);
		sessionStorage.setItem("dexts", dext);
		sessionStorage.setItem("ints", inte);
		sessionStorage.setItem("wisds", wisd);
		sessionStorage.setItem("consts", cons);
		sessionStorage.setItem("chars", chari);
	});
});


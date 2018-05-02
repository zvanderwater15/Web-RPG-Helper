$(document).ready(function() {
	//hide unnecessary proficiencies
	$("#warriors").hide();
	$("#wizards").hide();
	$("#priests").hide();
	$("#rogues").hide();
	var charclass = sessionStorage.getItem('cclass');
	//hide unnecessary buttons
	if ((charclass == "bard") || (charclass == "paladin") || (charclass == "ranger") || (charclass == "thief") || (charclass == "fighter")) {
		$(".spells").hide();
	} else {
		$(".entername").hide();
	}
	//determine how many proficiencies can be chosen
	if ((charclass == "fighter") || (charclass == "paladin") || (charclass == "ranger")) {
		var nwprof = "3";
		$("#warriors").show();
	}
	if (charclass == "mage") {
		var nwprof = "4";
		$("#wizards").show();
	}
	if ((charclass == "cleric") || (charclass == "druid")) {
		var nwprof = "4";
		$("#priests").show();
	}
	if (charclass == "thief" || (charclass == "bard")) {
		var nwprof = "3";
		$("#rogues").show();
	}
	$("#nonweapon").append(nwprof);
	//select no more than what can be chosen
	var nonweaponproficiencies = [];
	$(':input').click(function(event) {
		var count = 0;
		$(':input').each(function() {
			if (this.checked) {
				if (count < nwprof) {
					var nonweapon = " "+ $(this).val();
					nonweaponproficiencies[count] = nonweapon;
					count++;
				} else {
					event.preventDefault();
				}
			}
		});
	});
	$(".spells").click(function() {
		sessionStorage.setItem("nwprof", nonweaponproficiencies);
	});
	$(".entername").click(function() {
		sessionStorage.setItem("nwprof", nonweaponproficiencies);
	});
}); 
$("#next").hide();
$(document).ready(function() {
	var classs = sessionStorage.getItem('class');
	var race = sessionStorage.getItem('race');
	$("#roll").click(function() {
		$("#next").show();
		$("#roll").hide();
		if ((classs == "fighter") || (classs == "paladin") || (classs == "ranger")) {
			var hp = Math.floor((Math.random()) * 8) + 11;
		}
		if ((classs == "cleric") || (classs == "druid")) {
			var hp = Math.floor((Math.random()) * 6) + 11;
		}
		if (classs == "thief" || (classs == "bard") || (classs == "mage")) {
			var hp = Math.floor((Math.random()) * 4) + 11;
		}
		$("#hp").append(hp);
		if ((race == "human")) {
			var age = Math.floor((Math.random()) * 4) + 16;
		}
		if ((race == "dwarf")) {
			var age = Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + 45;
		}
		if ((race == "elf")) {
			var age = Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + 105;
		}
		if ((race == "gnome")) {
			var age = Math.floor((Math.random()) * 12) + Math.floor((Math.random()) * 12) + Math.floor((Math.random()) * 12) + 63;
		}
		if ((race == "half-elf")) {
			var age = Math.floor((Math.random()) * 6) + 16;
		}
		if ((race == "halfling")) {
			var age = Math.floor((Math.random()) * 4) + Math.floor((Math.random()) * 4) + Math.floor((Math.random()) * 4) + 23;
		}
		$("#age").append(age);
		if ((race == "human")) {
			var height = Math.floor((Math.random()) * 10) + Math.floor((Math.random()) * 10) + 62;
		}
		if ((race == "dwarf")) {
			var height = Math.floor((Math.random()) * 10) + 45;
		}
		if ((race == "elf")) {
			var height = Math.floor((Math.random()) * 10) + 56;
		}
		if ((race == "gnome")) {
			var height = Math.floor((Math.random()) * 6) + 39;
		}
		if ((race == "half-elf")) {
			var height = Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + 62;
		}
		if ((race == "halfling")) {
			var height = Math.floor((Math.random()) * 8) + Math.floor((Math.random()) * 8) + 34;
		}
		if ((race == "human")) {
			var weight = Math.floor((Math.random()) * 10) + Math.floor((Math.random()) * 10) + Math.floor((Math.random()) * 10) + Math.floor((Math.random()) * 10) + Math.floor((Math.random()) * 10) + Math.floor((Math.random()) * 10) + 146;
		}
		if ((race == "dwarf")) {
			var weight = Math.floor((Math.random()) * 10) + Math.floor((Math.random()) * 10) + Math.floor((Math.random()) * 10) + Math.floor((Math.random()) * 10) + 134;
		}
		if ((race == "elf")) {
			var weight = Math.floor((Math.random()) * 10) + Math.floor((Math.random()) * 10) + Math.floor((Math.random()) * 10) + 93;
		}
		if ((race == "gnome")) {
			var weight = Math.floor((Math.random()) * 4) + Math.floor((Math.random()) * 4) + Math.floor((Math.random()) * 4) + Math.floor((Math.random()) * 4) + Math.floor((Math.random()) * 4) + 77;
		}
		if ((race == "half-elf")) {
			var weight = Math.floor((Math.random()) * 12) + Math.floor((Math.random()) * 12) + Math.floor((Math.random()) * 12) + 113;
		}
		if ((race == "halfling")) {
			var weight = Math.floor((Math.random()) * 4) + Math.floor((Math.random()) * 4) + Math.floor((Math.random()) * 4) + Math.floor((Math.random()) * 4) + Math.floor((Math.random()) * 4) + 57;
		}
		$("#next").show();
		$("#roll").hide();
		$("#weight").append(weight);
		$("#height").append(height);
		sessionStorage.setItem("hp", hp);
		sessionStorage.setItem("age", age);
		sessionStorage.setItem("height", height);
		sessionStorage.setItem("weight", weight);
	});
	$("#next").click(function() {
		charactername = $("#charname").val();
		sessionStorage.setItem("name", charactername);
		shortbio = $("#background").val();
		sessionStorage.setItem("bio", shortbio);
	});
});


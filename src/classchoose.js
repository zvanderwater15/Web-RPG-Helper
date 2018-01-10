$(document).ready(function() {
	$(".next").hide();
	var stre = sessionStorage.getItem("strengths");
	var dext = sessionStorage.getItem("dexts");
	var inte = sessionStorage.getItem("ints");
	var wisd = sessionStorage.getItem("wisds");
	var cons = sessionStorage.getItem("consts");
	var chari = sessionStorage.getItem("chars");
	if (stre < 9){
		$('#fighter').addClass('nope');
	}
	if (stre < 12 || cons < 9 || wisd < 13 || chari < 17){
		$('#paladin').addClass('nope');
	}
	if (stre < 13 || dext < 13 || cons < 14 || wisd < 14){
		$("#ranger").addClass("nope");
	}
	if (inte < 9){
		$("#mage").addClass("nope");
	}
	if (wisd < 9){
		$("#cleric").addClass("nope");
	}
	if (wisd < 12 || chari < 15){
		$("#druid").addClass("nope");
	}
	if (dext < 9){
		$("#thief").addClass("nope");
	}
	if (dext < 12 || inte < 13 || chari < 15){
		$("#bard").addClass("nope");
	}
	$(".nope").prop("disabled", true);
	$('#fighter').click(function(){
		$(".next").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var classs = "fighter";
		sessionStorage.setItem("cclass", classs);
	});
	$('#paladin').click(function(){
		$(".next").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var classs = "paladin";
		sessionStorage.setItem("cclass", classs);
	});
	$('#ranger').click(function(){
		$(".next").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var classs = "ranger";
		sessionStorage.setItem("cclass", classs);
	});
	$('#mage').click(function(){
		$(".next").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var classs = "mage";
		sessionStorage.setItem("cclass", classs);
	});
	$('#cleric').click(function(){
	    $(".next").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var classs = "cleric";
		sessionStorage.setItem("cclass", classs);
	});
	$('#druid').click(function(){
		$(".next").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var classs = "druid";
		sessionStorage.setItem("cclass", classs);
	});
	$('#thief').click(function(){
		$(".next").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var classs = "thief";
		sessionStorage.setItem("cclass", classs);
	});
	$('#bard').click(function(){
		$(".next").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var classs = "bard";
		sessionStorage.setItem("cclass", classs);
	});
});


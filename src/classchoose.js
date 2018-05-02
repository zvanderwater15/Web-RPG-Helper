$(document).ready(function() 
{
	//
	$(".next").hide();
	
	//
	var strength = sessionStorage.getItem("strength");
	var dex = sessionStorage.getItem("dex");
	var intel = sessionStorage.getItem("intel");
	var wis = sessionStorage.getItem("wis");
	var con = sessionStorage.getItem("con");
	var cha = sessionStorage.getItem("cha");
	
	//
	if (strength < 9)
	{
		$('#fighter').addClass('nope');
	}
	
	//
	if (strength < 12 || con < 9 || wis < 13 || cha < 17){
		$('#paladin').addClass('nope');
	}
	
	//
	if (strength < 13 || dex < 13 || con < 14 || wis < 14){
		$("#ranger").addClass("nope");
	}
	
	//
	if (intel < 9){
		$("#mage").addClass("nope");
	}
	
	if (wis < 9){
		$("#cleric").addClass("nope");
	}
	
	if (wis < 12 || cha < 15){
		$("#druid").addClass("nope");
	}
	
	if (dex < 9){
		$("#thief").addClass("nope");
	}
	
	if (dex < 12 || intel < 13 || cha < 15){
		$("#bard").addClass("nope");
	}
	
	//
	$(".nope").prop("disabled", true);
	
	//
	$('#fighter').click(function(){
		$(".next").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var classs = "fighter";
		sessionStorage.setItem("cclass", classs);
	});
	
	//
	$('#paladin').click(function(){
		$(".next").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var classs = "paladin";
		sessionStorage.setItem("cclass", classs);
	});
	
	//
	$('#ranger').click(function(){
		$(".next").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var classs = "ranger";
		sessionStorage.setItem("cclass", classs);
	});
	
	//
	$('#mage').click(function(){
		$(".next").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var classs = "mage";
		sessionStorage.setItem("cclass", classs);
	});
	
	//
	$('#cleric').click(function(){
	    $(".next").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var classs = "cleric";
		sessionStorage.setItem("cclass", classs);
	});
	
	//
	$('#druid').click(function(){
		$(".next").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var classs = "druid";
		sessionStorage.setItem("cclass", classs);
	});
	
	//
	$('#thief').click(function(){
		$(".next").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var classs = "thief";
		sessionStorage.setItem("cclass", classs);
	});
	
	//
	$('#bard').click(function(){
		$(".next").show();
		$(".chosen").removeClass("chosen");
		$(this).addClass("chosen");
		var classs = "bard";
		sessionStorage.setItem("cclass", classs);
	});
});


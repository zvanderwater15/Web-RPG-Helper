function addClass(el, charClass) {
	$(".next").show();
	$(".chosen").removeClass("chosen");
	$(el).addClass("chosen");
	sessionStorage.setItem("class", charClass);
}

$(document).ready(function() 
{
	$(".next").hide();
	
	const str = sessionStorage.getItem("str");
	const dex = sessionStorage.getItem("dex");
	const int = sessionStorage.getItem("int");
	const wis = sessionStorage.getItem("wis");
	const con = sessionStorage.getItem("con");
	const cha = sessionStorage.getItem("cha");
	
	// check which classes the character is qualified for
	if (str < 9)
	{
		$('#fighter').prop("disabled", true)
	}
	
	if (str < 12 || con < 9 || wis < 13 || cha < 17){
		$('#paladin').prop("disabled", true)
	}
	
	if (str < 13 || dex < 13 || con < 14 || wis < 14){
		$("#ranger").prop("disabled", true)
	}
	
	if (int< 9){
		$("#mage").prop("disabled", true)
	}

	if (wis < 9){
		$("#cleric").prop("disabled", true)
	}
	
	if (wis < 12 || cha < 15){
		$("#druid").prop("disabled", true)
	}
	
	if (dex < 9){
		$("#thief").prop("disabled", true)
	}
	
	if (dex < 12 || int< 13 || cha < 15){
		$("#bard").prop("disabled", true)
	}
		
	$('#fighter').click(function(){addClass(this, "fighter")});
	$('#paladin').click(function(){addClass(this, "paladin")});
	$('#ranger').click(function(){addClass(this, "ranger")});
	$('#mage').click(function(){addClass(this, "mage")});
	$('#cleric').click(function(){addClass(this, "cleric")});
	$('#druid').click(function(){addClass(this, "druid")});
	$('#thief').click(function(){addClass(this, "thief")});
	$('#bard').click(function(){addClass(this, "bard")});
});


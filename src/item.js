$(document).ready(function() {
	//determine how much money  
	var charclass = sessionStorage.getItem('cclass');
	if ((charclass == "fighter") || (charclass == "paladin") || (charclass == "ranger")) {
		var dolla = (Math.floor((Math.random()) * 4) + Math.floor((Math.random()) * 4) + Math.floor((Math.random()) * 4)+ Math.floor((Math.random()) * 4)+ Math.floor((Math.random()) * 4) + 5) * 10;
	}
	if (charclass == "mage") {
        var dolla = (Math.floor((Math.random()) * 4) + 2) * 10;
	}
	if ((charclass == "cleric") || (charclass == "druid")) {
		var dolla = (Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6)+ Math.floor((Math.random()) * 6)) * 10;
	}
	if (charclass == "thief" || (charclass == "bard")) {
		var dolla = (Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6)) * 10;
	}
	$("#money").append(dolla);
	var items = [];
	$(':input').click(function(event) {
		var spent = 0;
		var count = 0;
		$(':input').each(function() {
			if (this.checked) {
				if (spent < dolla) {
					var item = " " + $(this).attr("name");
					spent = ($(this).val()) + spent;
					var newdolla = dolla-spent;
					$("#money").append(newdolla);
					items[count] = item;
					count++;
				} else {
					event.preventDefault();
				}
			}
		});
	});
	$(".entername").click(function() {
		sessionStorage.setItem("itemss", items);
	});
}); 

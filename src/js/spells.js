var charclass = sessionStorage.getItem('class');

//determine how many spells can be chosen
if (charclass == "mage"){ 
	$(".clericform").hide();
}
if((charclass == "cleric") || (charclass =="druid")){ 
	$(".wizardform").hide();
}

$(document).ready(function(){
	var inte = sessionStorage.getItem('int');
	if (inte < 9){
		var limit = 5;
	}
	if (inte == 9){
		var limit = 6;
	}
	if(inte == 10 || inte == 11 || inte == 12){
		var limit = 7;
	}
	if(inte == 13 || inte == 14){
		var limit = 9;
	}
	if(inte == 15 || inte == 16){
		var limit = 11;
	}
	if (inte == 17){
		var limit = 14;
	}
	if (inte == 18){
		var limit = 18;
	}
	
	$("#spell").append(limit);
	
	//select no more than what can be chosen
	var spellslist = [];
	
   $(':input').click(function(event) {
    	var count = 0;
      $(':input').each(function () {
        if (this.checked)
        { 
        	if (count < limit){
        	var sspell = " " + $(this).val();
        	spellslist[count]= sspell;
            count++;
           }
            else {
            event.preventDefault();
            }
        }
      });
    });
	 
	$("#background").click(function(){
		sessionStorage.setItem("spells", spellslist); 
	});
	
});
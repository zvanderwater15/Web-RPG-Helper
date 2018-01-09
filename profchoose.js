$(document).ready(function(){
	var charclass = sessionStorage.getItem('cclass');
	if ((charclass == "fighter") || (charclass == "paladin") || (charclass == "ranger")){
		var wprof= "4"; 
	}
	if (charclass == "mage"){
		var wprof= "1";
	}
	if((charclass == "cleric") || (charclass == "druid")){
		var wprof= "2";
	}
	if(charclass == "thief" || (charclass =="bard")){
		var wprof= "2"; 
	}
	 var proficiencies = [];
    $(':input').click(function(event) {
    	var count = 0;
      $(':input').each(function () {
        if (this.checked)
        { 
        	if (count < wprof){
        	var weapon = " " + $(this).val();
        	proficiencies[count]= weapon;
            count++;
           }
            else {
            event.preventDefault();
            }
        }
      });
    });
	$("#weapon").append(wprof);
	$(".nextprof").click(function(){
		sessionStorage.setItem("prof", proficiencies);
	});
});
function roll() {
	var sizeNum = Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6);
	if (sizeNum < 0){
		sizeNum = 0;
	}
	var sizes = ["800", "1,600", "3,200", "4,800", "6,400", "8,000", "9,600", "11,200", "12,800", "14,400", "16,000"];
	var size = sizes[sizeNum] + (" km");
	$("#size").text(size)

	var atmNum =  (sizeNum) + (Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6)) - 5;
	if (atmNum < 0){
		atmNum = 0;
	}
	var atms = ["None", "Trace", "Very Thin, Tainted", "Very Thin", "Thin, Tainted", "Thin", "Standard", "Standard, Tainted", "Dense", "Dense, Tainted", "Exotic", "Corrosive", "Insidious", "Dense, High", "Thin, Low"];
	var atm = atms[atmNum];
	$("#atm").text(atm);

	var tempDMList = [0,0,-2,-2,-1,-1,0,0,1,1,2,6,6,2,-1,2];
	var tempDM = tempDMList[atmNum] ;
	var tempNum = (Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6)) + tempDM + 2;
	if (tempNum < 0){
		tempNum = 0;
	}
	if (tempNum > 16){
		tempNum = 16;
	}
	var temps = ["Frozen", "Frozen", "Frozen", "Cold", "Cold", "Temperate", "Temperate", "Temperate", "Temperate", "Temperate", "Hot", "Hot", "Roasting", "Roasting", "Roasting", "Roasting"];
	var temp = temps[tempNum];
	$("#temp").text(temp);

	if (sizeNum == 0 || sizeNum == 1){
		var hydron = 0;
	}
	else {
		var hydrodm1 = 0;
		var hydrodm2 = 0;
		if ((atmNum == 0) || (atmNum == 1) || (atmNum == 10) || (atmNum == 11) || (atmNum == 12)){
		   hydrodm1 = -4;
		}
		if ((tempNum == 10) || (tempNum == 11)){
		   hydrodm2 = -2;
		}
		if (tempNum > 11){
		   hydrodm2 = -6;
		}
		var hydron = (Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6)) + sizeNum + hydrodm1 + hydrodm2 - 5; 
		if (hydron < 0){
			hydron = 0;
		}
		if (hydron > 10)
		{
			hydron = 10;
		}
	}
	var hydros = ["Desert World", "Dry World", "A few small seas", "Small seas and oceans", "Wet world", "Large Oceans", "Slightly more water than land", "Earth-like world", "Water world", "Only a few small islands and archipelagos", "Almost entirely water"];
	var hydro = hydros[hydron];
	$("#hydro").text(hydro);

	var popn = Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6);
	if (popn<0){
		popn = 0;
	}
	var pops = ["None", "Few", "Hundreds", "Thousands", "Tens of thousands", "Hundreds of thousands", "Millions", "Tens of Millions", "Hundreds of Millions", "Billions", "Tens of Billions", "Hundreds of billions", "Trillions"];
	var pop= pops[popn];
	$("#pop").text(pop);

	var govn = Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) - 5 + popn;
	if (govn<0){
		govn = 0;
	}
	var govs = ["None", "Company/Corporation", "Participating democracy", "Self-perpetuating oligarchy", "Representative democracy", "Captive government", "Balkanisation", "Civil service bureaucracy", "Impersonal bureacracy", "Charismatic dictator", "Non-charismatic dictator", "Charismatic oligarchy", "Religious dictatorship"];
	var gov= govs[govn];
	$("#gov").text(gov);

	var fdm = 0;
	if (govn== 0 || govn == 7){
		fdm = 1;
	}
	if (govn > 9){
		fdm = -1;
	}
	
	var facn = Math.floor((Math.random()) * 3)+ 1 + fdm;
	for (i = 0; i < facn; i++) { 
    	var factn = Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6)+1;
    	var facs = ["obscure group","obscure group","obscure group","fringe group","fringe group","minor group", "minor group", "notable group", "notable group", "significant", "significant", "overwhelming popular support"];
    	var fac = facs[factn];
    	var fgovn = Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) - 5 + popn;
		if (fgovn<0){
		  fgovn = 0;
		}
		var fgovs = ["No government", "Company/Corporation", "Participating democracy", "Self-perpetuating oligarchy", "Representative democracy", "Captive government", "Balkanisation", "Civil service bureaucracy", "Impersonal bureacracy", "Charismatic dictator", "Non-charismatic dictator", "Charismatic oligarchy", "Religious dictatorship"];
		var fgov= fgovs[fgovn];
		var count = i + 1;
		$("#factions").html("faction "+ count + "- " + fgov + ", " + fac+"</br>");
    }

    var lawn = Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) - 5 + govn;
    if (lawn<0){
		lawn = 0;
	}
    $("#law").text(lawn);

	var cultn1 = Math.floor((Math.random()) * 6)+ 1;
	var cultn2 = Math.floor((Math.random()) * 6)+ 1;
	var cultnt = "" + cultn1 + cultn2;
	var cult = {11:"sexist", 12: "religious", 13: "artistic", 14:"ritualised", 15: "conservative", 16:"xenophobic", 21:"taboo", 22:"deceptive", 23:"liberal", 24:"honourable", 25:"influenced", 26:"fusion", 31:"barbaric", 32:"remnant", 33:"degenerate", 34:"progressive", 35:"recovering", 36:"nexus", 41:"tourist attraction", 42:"violent", 43:"peaceful", 44:"obsessed", 45:"fashion", 46:"at war", 51:"unusual custom:offworlders", 52:"unusual custom: starport", 53:"unusual custom:media", 54: "unusual customs:technology", 55: "unusual customs: lifecycle", 56: "unusual customs:social standings", 61:"unusual customs:trade", 62:"unusual customs:nobility", 63:"unusual customs: sex", 64:"unusual customs: eating", 65:"unusual customs:travel", 66: "unusual customs: conspiracy"};
	var cultt = cult[cultnt];
	$("#cult").text(cultt); 

    var starn = Math.floor((Math.random()) * 6) + Math.floor((Math.random()) * 6) + 1;
	var stars = ["X", "X", "E", "E", "D", "D", "C", "C", "B", "B", "A", "A"];
	var star = stars[starn];
	$("#star").text(star);

	//tl level dms ahead------------------------------------------------------------------------------
	if (star == "A")
	{
		var stardm = 6;
	}
	else if (star == "B")
	{
		var stardm = 4;
	}
	else if (star == "C")
	{
		var stardm = 2;
	}
	else if (star == "X")
	{
		var stardm = -4;
	}
	else
	{
		var stardm = 0;
	}
	if (sizeNum < 2)
	{
		var sizedm = 2;
	}
	else if (sizeNum == 2 || sizeNum == 3 || sizeNum == 4 )
	{
		var sizedm = 1;
	}
	else{
		var sizedm = 0;
	}
	if (atmNum< 4 || atmNum > 9){
		var atmdm = 1;
	}
	else{
		var atmdm = 0;
	}
	if (hydron == 0 || hydron == 9){
		var hydrodm = 1;
	}
	else if (hydron == 10){
		var hydrodm = 2;
	}
	else{
		var hydrodm = 0;
	}
	if (popn == 1 || popn == 2 || popn == 3 || popn == 4 || popn == 5){
		var popdm = 1;
	}
	else if(popn==10){
		var popdm = 2;
	}
	else if(popn==11){
		var popdm = 3;
	}
	else if(popn==12){
		var popdm = 4;
	}
	else{
		var popdm = 0;
	}
	if (govn == 0 || govn == 5){
		var govdm = 1;
	}
	else if(govn == 7){
		var govdm = 2;
	}
	else if(govn == 13 || govn == 14){
		var govdm = -2;
	}
	else{
		var govdm = 0;
	}
	var tl = Math.floor((Math.random()) * 6)+ 1 + stardm + sizedm + atmdm + hydrodm + popdm + govdm;
	$("#listtl").text(tl);
}

function print() {

}

$(window).on('load', function() {
	roll()
	$("#roll").click(function() {
		roll()
	});
	$("#print").click(function() {
		print()
	});
}); 
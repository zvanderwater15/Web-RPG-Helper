$(document).ready(function(){
	var charprof = sessionStorage.getItem('prof');
	var charnprof = sessionStorage.getItem('nwprof');
	var spellz = sessionStorage.getItem('spells');
	var namez = sessionStorage.getItem('name');
	var str = sessionStorage.getItem('strengths');
	var dex = sessionStorage.getItem('dexts');
	var inte = sessionStorage.getItem('ints');
	var wis = sessionStorage.getItem('wisds');
	var con = sessionStorage.getItem('consts');
	var cha = sessionStorage.getItem('chars');
	var race = sessionStorage.getItem('crace');
	var classs = sessionStorage.getItem('cclass');
	var bio = sessionStorage.getItem('bios');
	var age = sessionStorage.getItem('ages');
	var height = sessionStorage.getItem('heights');
	var weight = sessionStorage.getItem('weights');
	var hp = sessionStorage.getItem('hps');
	//var items = sessionStorage.getItem('itemss');
	$("#listprof").append(charprof);
	$("#listnprof").append(charnprof);
	$("#listspells").append(spellz);
	$("#listname").append(namez);
	$("#listhp").append(hp);
	$("#listage").append(age);
	$("#listheight").append(height);
	$("#listweight").append(weight);
	$("#listbio").append(bio);
	$("#liststr").append(str);
	$("#listdex").append(dex);
	$("#listinte").append(inte);
	$("#listwis").append(wis);
	$("#listcon").append(con);
	$("#listcha").append(cha);
	$("#listrace").append(race);
	$("#listclass").append(classs);
	//$("#listitems").append(items);
	$("#printchar").click(function() {
		window.print();
	});
});
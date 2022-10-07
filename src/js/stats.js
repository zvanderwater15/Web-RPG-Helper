$(document).ready(function () {
  $("#nextRace").hide();

  $("#roll").click(function () {
    const str = roll();
    const dex = roll();
    const int = roll();
    const wis = roll();
    const con = roll();
    const cha = roll();

    //
    $("#str").append(str);
    $("#dex").append(dex);
    $("#int").append(int);
    $("#wis").append(wis);
    $("#con").append(con);
    $("#cha").append(cha);

    //
    sessionStorage.setItem("str", str);
    sessionStorage.setItem("dex", dex);
    sessionStorage.setItem("int", int);
    sessionStorage.setItem("wis", wis);
    sessionStorage.setItem("con", con);
    sessionStorage.setItem("cha", cha);

    // can only roll stats once
    $("#roll").hide();

	// show the button for moving to the next page
	$("#nextRace").show();
  });
});

//
function roll() {
  return (
    Math.floor(Math.random() * 6) +
    Math.floor(Math.random() * 6) +
    Math.floor(Math.random() * 6) +
    3
  );
}

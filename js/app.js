$( document ).ready(function() {

	var commonwords = window.commonwords;
	var commonnames = window.commonnames;
	var testdata = window.testdata;
	console.log(commonwords);
	console.log("hey")
	$("mui-panel").click();
	console.log(commonnames.fred)
	console.log(commonnames.one);
	console.log(_.contains(commonnames, "jason"));
	_.each(testdata, function() {
		console.log("hey");
		// _.contains(commonnames, element)
	});

});
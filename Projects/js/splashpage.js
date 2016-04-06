$(document).ready(function() {
	$signup = $("#signup");
	$contribute = $("#contribute");
	$learnmore = $("#learn-more");

//Change the color of the Sign Up Button on hover
	$signup.hover(function () {
		$(this).css("background-color", "#00486e");
	}, function(){
        $(this).css("background-color", "#007cb2");
	});

//Change the color of the Contribute button on hover
	$contribute.hover(function () {
		$(this).css("background-color", "#9f253f");
	}, function(){
        $(this).css("background-color", "#c72f4f");
	});
});
window.onload = function (){
	$(document).ready(function() {
		$(".cita").click(function() {
		$(this).next().toggleClass( "show-content", "hide-content" );
		$(this).find(".icon-spoiler").toggleClass("abatir expandir");
      		$(this).find(".p-god").toggleClass("p-show p-hide");
      		});    
	});
}

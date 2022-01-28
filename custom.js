$("ul").on("click", "li", function(){
	$(this).toggleClass("tamamlanmis");
});

$("ul").on("click", "span", function(event){
	$(this).parent().remove();	
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){

	if (event.which===13){
		var yeniItem = $(this).val();
		console.log(yeniItem);
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-window-close'> </i> </span>"+ yeniItem +"</li>");	
	}
	
});

$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle();
})

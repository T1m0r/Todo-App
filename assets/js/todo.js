
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
})


$("ul").on("click","span",function(){
	$(this).parent().fadeOut(1200, function(){
		$(this).remove();
	});
	event.stopPropagation();
	
});
$("input[type='text']").keypress(function(event){
	if(event.which == 13){ // When Enter(=13) is pressed
		if($("input[type='text']").val() != ""){
			var innerH = $("ul").html();
			var nToDo = "<li><span class=\"trash\"><i class=\"fas fa-trash\"></i></span>" + $("input").val() +"</li>";
			$("ul").html(innerH + nToDo);
		}
	}
})
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(800);
})
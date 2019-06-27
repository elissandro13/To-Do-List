$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function(e){
    $(this).parent().fadeOut(300,function(){
        $(this).remove();
    });
    e.stopPropagation();
});


$("#inptText").keypress(function(e){
    if(e.which === 13){
        let textInput = $(this).val();
    
    $(this).val("");

    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + textInput + "</li>");
    }
});

$(".fa-plus").click(function(){

    $("#inptText").fadeToggle();
});

$(document).ready(function(){
    $(".btn").click(function(){
        $(".banana").removeClass("d-none");
    })
    $(".close-modal-banana").click(function(){
        $(".banana").addClass("d-none");
    })        
    $(".btn").click(function(event){
        var modalText = $(event.target).text();
        $(".texto-banana").text(modalText);
        $(".texto-batata").text($(event.target).data("chuchu"));
    });
    $(`button[data-sumir]`).click(function(){
        $(".texto-batata").text("");
    })
});
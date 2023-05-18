$('.nombreperfil').html(localStorage.getItem('usuario'));
$("#textoRespuestaVerdadero").click(function () {
        
    $("#verdadero").prop("checked", true);
    console.log("entraste")
})
$("#textoRespuestaFalso").click(function () {
    $("#falso").prop("checked", true);
    console.log("saliste")
})
$("#tf").click(function () {
    $(".tipopregunta").removeClass("d-none");
    $(".tipopregunta").removeClass("d-block");
    $(".tipounica").addClass("d-none");
    $(".tipotf").addClass("d-block");
    $(".tipovarias").addClass("d-none");
    console.log("saliste")
})
$("#unica").click(function () {
    $(".tipopregunta").removeClass("d-none");
    $(".tipopregunta").removeClass("d-block");
    $(".tipounica").addClass("d-block");
    $(".tipotf").addClass("d-none");
    $(".tipovarias").addClass("d-none");
    console.log("saliste")
})
$("#varias").click(function () {
    $(".tipopregunta").removeClass("d-none");
    $(".tipopregunta").removeClass("d-block");
    $(".tipounica").addClass("d-none");
    $(".tipotf").addClass("d-none");
    $(".tipovarias").addClass("d-block");
    console.log("funciono")
})
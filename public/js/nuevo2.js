$("#crearenvio").mouseover(function(){
    console.log("he entrado")
    prueba=$("form :radio[id=unicaopcion]:checked")
    cadena=[]

for (var i = 0; i < "<%=testunico.pregunta.length%>"; i++) {
cadena.push(prueba[i].value);
}
console.log(cadena);


console.log("HOIIIII")
var j= 0;
$("#bloqueunicaopcionfinal").html("")
console.log("asdasdas")
for (var j=0;j< "<%=testunico.pregunta.length%>"; j++){
    console.log("asdasdas2")
    $("#bloqueunicaopcionfinal").append("<input id=\"unicaopcionfinal\" class=\"col-12 col-sm-12 col-md-1 col-lg-1\"name=\"unicaopcionfinal\" value=\""+cadena[j]+"\"/>");
    $("#bloqueunicaopcionfinal").append("<% for(var l=0;l<testunico.pregunta.length; l++) {%><% if(testunico.pregunta[l]){ %><li><%= testunico.pregunta[l] %></li><li><%= testunico.pregunta[l] %></li><li><%= cadena[j] %></li><li><%= testunico.pregunta[l] %></li><% } %><% } %>")
    if(cadena[j]=="<%testunico.unicaopcionfinal[j]%>"){
      console.log("correcto")
    }else{
      console.log(cadena[j])
      console.log("<%testunico.unicaopcionfinal[j]%>")
      console.log("<%testunico.unicaopcionfinal[j]%>")
      console.log("NO correcto")
    }
}
  
}); 
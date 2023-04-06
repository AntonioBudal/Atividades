function Esconder(){
    texto_rs.style.display="none";
    texto_sc.style.display="none";
}

function MostraTexto(estado){
    if(estado =="RS"){
        texto_rs.style.display="flex";   
    }
    if(estado == "SC"){
        texto_sc.style.display="flex"; 
    }
}
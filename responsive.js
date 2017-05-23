//efecto responsivo para celular
//css mediante style
function NavigationResponsive() 
{
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//cambio de estilos
function StylePizarron()
{
	document.getElementById("fondo").style.background = "url('pizarron.jpg')";
}

function StyleMetalico()
{
	document.getElementById("fondo").style.background = "url('metalic.jpg')";
	//document.getElementById("encabezado").style.color ="black";
}

function StyleNormal()
{
	document.getElementById("fondo").style.background = "url('lightblue.jpg')";
}

function StyleMadera()
{
	document.getElementById("fondo").style.background = "url('wooden.jpg')";
}

//colores de texto del table de asistencias
//css mediante style
function TextoBlanco(elemento)
{
    //coloca el fondo en transparente del elemento y el color blanco
    document.getElementById(elemento).style.background = "transparent";
    document.getElementById(elemento).style.color ="white";
    
}

function TextoNegro(elemento)
{
    //coloca el fondo del elemento en color blanco y el texto en color negro
    document.getElementById(elemento).style.background = "white";
    document.getElementById(elemento).style.color ="black";

}

$(document).ready(
    
    function(){
    $("#principal").attr("href", "index.html");
    $("#materias").attr("href", "materias.html");
    $("#grupos").attr("href", "grupos.html");
    $("#criterios_evaluacion").attr("href", "criterios_evaluacion.html");
    $("#plan_trabajo").attr("href", "plan_trabajo.html");
    $("#asistencias").attr("href", "asistencias.html");
    $("#tareas").attr("href", "tareas.html");
    $("#examenes").attr("href", "examenes.html");
    }
);
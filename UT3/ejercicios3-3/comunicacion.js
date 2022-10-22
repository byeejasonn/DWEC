var todosLados=null;

function abrirVentana(){

	const url = document.getElementById('idUrl').value;
	
	const vs = window.open("secundaria.html","Ventana secundaria");	

	
	vs.onload=function(){
		console.log("ventana abierta");
		vs.getUrl(url);
	}
	
	// vs.addEventListener("DOMContentLoaded", () => {
	// 	console.log("ventana abierta");
	// 	vs.getUrl(url);
	// })
	
	todosLados="no nos gusta tampoco";
	
	// Cerrar Venta pasados un 3 segundos
	//setTimeout(cerrarVentana,3000)
}

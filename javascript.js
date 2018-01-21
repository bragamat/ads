function addBola() {
	
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");

	var p1 = Math.floor(Math.random() * 500);
	var p2 = Math.floor(Math.random() * 400);
	var c1 = Math.floor(Math.random() * 10);
	var c2 = Math.floor(Math.random() * 10);
	var c3 = Math.floor(Math.random() * 10);
	bola.setAttribute("style", "left: "+p1+"px;top: "+p2+"px; background-color: #"+c1+""+c2+""+c3+" ;");
	bola.setAttribute("onClick", "estourar(this)");

	document.body.appendChild(bola);

}
function estourar(elemento){
	document.body.removeChild(elemento);
}

function iniciar(){
	setInterval(addBola, 1000);
}
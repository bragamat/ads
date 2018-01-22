function addBola() {
	
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");

	var p1 = Math.floor(Math.random() * 500);
	var p2 = Math.floor(Math.random() * 400);
	var c1 = Math.floor(Math.random() * 10);
	var c2 = Math.floor(Math.random() * 10);
	var c3 = Math.floor(Math.random() * 10);
	bola.setAttribute("style", "left: "+p1+"px;top: "+p2+"px; background-color: #"+c1+""+c2+""+c3+";transition: 0.5s;");
	bola.setAttribute("onClick", "estourar(this)");
	

	document.body.appendChild(bola);

}

var x = 0;

function estourar(elemento){

	document.body.removeChild(elemento);

	var ponto = document.getElementById("pontos");
	
	x = x + Math.floor(Math.random()*10);

	y = x

	document.getElementById('pontos').innerHTML = y;

	y = document.getElementById('pontos').innerHTML;

	if (y >= 100 && y<= 110) {
		var resp;
		alert("Parbéns, você desperdiçou um tempinho da sua vida testando esse jogo! Muito Obrigado.");
		resp = prompt("Deseja continuar jogando ? sim ou nao");
		if (resp === "sim") {
			alert("Okay! pode continuar")
		} else {
			location.reload();
		}
	}  

}

function iniciar(){
	setInterval(addBola, 1000);
}



//Javascript referente ao arquivo teste06.html

aUsuarios = [];
totalUsuarios = 0;


function criarUsuario()
{
	let usuario = document.getElementById("usuario").value;
	let cor1 = document.getElementById("cor1").value;
	let u = {nome:usuario, cor:cor1};
	aUsuarios[totalUsuarios] = u;
	document.getElementById("idUsuarios").innerHTML += "<option value='" + totalUsuarios + "'>" + usuario + "</option>";
	document.getElementById("lista").innerHTML += "<br><span style='color:" + cor1 + "'>" + usuario + "</span>";
	totalUsuarios++;
}
function envia()
{
	let elemento = document.getElementById("saida");
	let usuario = document.getElementById("idUsuarios").value;
	let mensagem = document.getElementById("mensagem").value;

	elemento.innerHTML += mensagem + "<br><span style='color:" + aUsuarios[usuario].cor + "'>por @" + aUsuarios[usuario].nome + "</span><br><hr>";
}


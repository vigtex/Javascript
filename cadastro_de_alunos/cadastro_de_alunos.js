//Javascript referente ao arquivo cadastro_de_alunos.html

nomeMes = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");
aAluno = [];
totalAluno = 0;
var linhaDeleta = null;
function criarAluno()
{
	
	let nome = document.getElementById("nome").value;
	let telefone = document.getElementById("telefone").value;
	let nascimento = document.getElementById("nascimento").value;
	let nota1 = document.getElementById("nota1").value;
	let nota2 = document.getElementById("nota2").value;
	let nota3 = document.getElementById("nota3").value;
	//média final com os números sendo convertidos para Float
	let notaF = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3;
	let cadastro = new Date;
	let aluno = {nome:nome, telefone:telefone, nascimento:nascimento, notaF:notaF, cadastro: cadastro};
	aAluno[totalAluno] = aluno;
	//variável para pegar o nome do aluno na função deletaAluno
	let index = totalAluno;
	
	document.getElementById("listaAlunos").innerHTML += "<td>" + index + "</td>" +
														"<td>" + nome + "</td>" + 
														"<td>" + telefone + "</td>" + 
              											"<td>" + nascimento + "</td>" +
              											//método "toFixed" para deixar a nota com somente dois
              											//números após a vírgula
              											"<td>" + notaF.toFixed(2) + "</td>" +
              											"<td>" + cadastro.getDate() + "/"+ 
              											nomeMes[cadastro.getMonth()] + "/" + 
              											cadastro.getFullYear() + "</td>" + 
              											"<td><button onclick='deletaAluno(this,"+index+")' class='btn btn-primary col-md-6' type='submit'>Excluir</button></td>";
              											
    
    
	totalAluno++;
	

}

function deletaAluno(deleta,i)
{
	
	if (confirm("Quer deletar o aluno "+ aAluno[i].nome +" ?")) 
	{
        
  		var row = deleta.parentNode.parentNode.parentNode;
  		row.parentNode.removeChild(row);
  	}
	
}

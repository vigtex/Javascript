//Javascript referente ao arquivo cadastro_de_alunos.html

nomeMes = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");
aAluno = [];
totalAluno = 0;
var linhaDeleta = null;
function criarAluno()
{
	
	let nota1 = document.getElementById("nota1").value;
	let nota2 = document.getElementById("nota2").value;
	let nota3 = document.getElementById("nota3").value;
	if(document.getElementById('nome').value.length == 0)
	{
		alert('Escreva o nome do aluno.')
		document.getElementById('nome').focus()

	}
	else if (document.getElementById('telefone').value.length < 10 || document.getElementById('telefone').value.length > 11) 
	{
		alert('Número de telefone incorreto.')
		//limpa o número, independente de estar faltando ou sobrando um único dígito
		document.getElementById('telefone').value = ''
		document.getElementById('telefone').focus()
	}
	else if(nota1 > 10 || nota1 < 0 || document.getElementById('nota1').value.length == 0)
	{
		alert('Primeira nota está incorreta.')
		alert('Notas devem ser de 0 a 10')
		alert('utilize ponto "." para notas parciais')
		document.getElementById('nota1').value = ''
		document.getElementById('nota1').focus()
	}
	else if(nota2 > 10 || nota2 < 0 || document.getElementById('nota2').value.length == 0)
	{
		alert('Segunda nota está incorreta.')
		alert('Notas devem ser de 0 a 10')
		alert('utilize ponto "." para notas parciais')
		document.getElementById('nota2').value = ''
		document.getElementById('nota2').focus()
	}
	else if(nota3 > 10 || nota3 < 0 || document.getElementById('nota3').value.length == 0)
	{
		alert('Terceira nota está incorreta.')
		alert('Notas devem ser de 0 a 10')
		alert('utilize ponto "." para notas parciais')
		document.getElementById('nota3').value = ''
		document.getElementById('nota3').focus()
	}
	else
	{	
	let nome = document.getElementById("nome").value;
	let telefone = document.getElementById("telefone").value;
	let nascimento = document.getElementById("nascimento").value;
	//let nota1 = document.getElementById("nota1").value;
	//let nota2 = document.getElementById("nota2").value;
	//let nota3 = document.getElementById("nota3").value;
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
	limpaTela()
	}
}

function deletaAluno(deleta,i)
{
	
	if (confirm("Quer deletar o aluno "+ aAluno[i].nome +" ?")) 
	{
        
  		var row = deleta.parentNode.parentNode.parentNode;
  		row.parentNode.removeChild(row);
  	}
	
}

function limpaTela()
{
	document.getElementById("nome").value = ''
	document.getElementById("telefone").value = ''
	document.getElementById("nascimento").value = ''
	limpaNota()
}
function limpaNota()
{
	document.getElementById("nota1").value = ''
	document.getElementById("nota2").value = ''
	document.getElementById("nota3").value = ''
}

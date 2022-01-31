var cadastro = []
var index = 0

function cadastrar()
{
    var nom = document.getElementById('nom')
    var num = document.getElementById('num')
    var lista = document.getElementById('lista')
    if(nom.value.length == 0 || num.value.length == 0)
    {
        alert('Faltam dados')
    }
    else
    {    
    nom = nom.value
    num = Number(num.value)        
    var dados = {id: index, nome: nom, numero: num}
    cadastro[index] = dados
    lista.innerHTML += `<tr>
                        <td id="tdi"${index}>${index}</td>
                        <td id="tdnom"${index}>${nom}</td>
                        <td id="tdnum"${index}>${num}</td>
                        <td><input type="button" value="altera" onclick="setAlt(${index})"></td>
                        </tr>`
    index++
    telaLimpa()
    }
}

function setAlt(n)//função que põe nos inputs, os valores a serem alterados
{
    alert(`Vamos alterar ${cadastro[n].nome}`)
    document.getElementById('ind').value = cadastro[n].id
    document.getElementById(`nom`).value = cadastro[n].nome
    document.getElementById(`num`).value = cadastro[n].numero
    document.getElementById('btnAlt').disabled = false
    document.getElementById('btnCad').disabled = true
    document.getElementById('head').innerHTML = '<h1>CRUD - Alteração<h1>'
    document.body.style.background = 'gray'
}

function alterar()
{
    var ind = Number(document.getElementById('ind').value)
    var nom = document.getElementById('nom')
    var num = document.getElementById('num')
    var lista = document.getElementById('lista')
    if(nom.value.length == 0 || num.value.length == 0)
    {
        alert('Dados não podem ficar em branco')
    }
    else
    {    
    nom = nom.value
    num = Number(num.value) 
    lista.innerHTML = '<tr><th>Index</th><th>Nome</th><th>Número</th><th>Alterar</th></tr>'
    var dados = {id: ind, nome: nom, numero: num}
    cadastro[ind] = dados
    var i = 0
    
    do
    {
        nom = (cadastro[i].nome).toString()
        num = Number(cadastro[i].numero)
        lista.innerHTML += `<tr>
                            <td id="tdi"${i}>${i}</td>
                            <td id="tdnom"${i}>${nom}</td>
                            <td id="tdnum"${i}>${num}</td>
                            <td><input type="button" value="altera" onclick="setAlt(${i})"></td>
                            </tr>`   
        i++                 
    }while(i < cadastro.length)
    
    telaLimpa()
    }
}
function cancelar()//cancela a operação e volta para a tela de cadastro
{
    alert('Cancela a operação.')
    telaLimpa()
}
function telaLimpa()//volta para a tela inicial (cadastro)
{
    document.getElementById('ind').value = ''
    document.getElementById('nom').value = ''
    document.getElementById('num').value = ''
    document.getElementById('btnAlt').disabled = true
    document.getElementById('btnCad').disabled = false
    document.getElementById('head').innerHTML = '<h1>CRUD - Cadastro<h1>'
    document.body.style.background = 'rgb(70,142,236)'
}
/*
function trataErro(nom,num)
{

    if(nom.lenght == 0 || num.lenght == 0)
    {
        return true
    }
    else
    {
        return false
    }
}*/
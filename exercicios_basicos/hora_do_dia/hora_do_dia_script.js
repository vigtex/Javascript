var add = ''

function carregar()
{
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    var diaSem = data.getDay()
    var sem = ""
    var dia = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()
    var aMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    var mostraMes = aMes[mes]

    
    if(hora <= 4)
    {
        document.body.style.background = '#141A26'
        add = 'madrugada'
        img.src = 'img/madrugada.png'
    }
    else if(hora <=12 )
    {
        document.body.style.background = '#E2CD9F'
        add = 'manhã'
        img.src = 'img/manha.png'
    }
    else if(hora <= 18)
    {
        document.body.style.background = '#D9CB89'
        add = 'tarde'
        img.src = 'img/tarde.png'
    }
    else
    {
        document.body.style.background = '#3376B1'
        add = 'noite'
        img.src = 'img/noite.png'
    }

    
switch(diaSem)
{
case 0:
    sem = 'Domingo'
    break
case 1:
    sem = 'Segunda Feira'
    break    
case 2:
    sem = 'Terça Feira'
    break
case 3:
    sem = 'Quarta Feira'
    break
case 4:
    sem = 'Quinta Feira'
    break
case 5:
    sem = 'Sexta Feira'
    break
case 6:
    sem = 'Sábado'
    break
default:  
console.log('Erro: dia inválido')
    break
}
    
    if(hora < 10)
    {
        hora = '0' + hora
    }
    
    if(minuto < 10)
    {
        minuto = "0" + minuto
    }
    if(segundo < 10)
    {
        segundo = "0" + segundo
    }

    msg.innerHTML = `Agora são <strong>${hora}:${minuto}:${segundo}</strong> horas da ${add}</br>`
    msg.innerHTML += `Hoje é <strong>${sem}, ${dia} de ${mostraMes} de ${ano}</strong>`

    
}
//setando a função para se atulizar a cada um segundo 
var tempoReal = setInterval(carregar,1000)
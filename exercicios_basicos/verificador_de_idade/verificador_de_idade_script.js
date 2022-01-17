
function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano)
    {
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    }
    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked)
        {
            //não havia muito incremento há ser feito no programa
            //alterei a cor do background da section e do body dependendo do sexo
            document.body.style.background = '#7F9BD6'
            document.getElementById('sect').style.background = '#C9B6FA'
            genero = 'Homem'
            if(idade >= 0 && idade < 10)
            {
                img.setAttribute('src', 'pic/homem10.png')
            }
            else if(idade < 21)
            {
                img.setAttribute('src', 'pic/homem20.png')
            }
            else if(idade < 45)
            {
                img.setAttribute('src', 'pic/homem40.png')
            }
            else if(idade < 65)
            {
                img.setAttribute('src', 'pic/homem60.png')
            }
            else
            {
                img.setAttribute('src', 'pic/homem80.png')
            }
        }
        else if (fsex[1].checked)
        {
            
            document.body.style.background = '#FAB1E6'
            document.getElementById('sect').style.background = '#ECC5F2'
            genero = 'Mulher'
            if(idade >=0 && idade < 10)
            {
                img.setAttribute('src', 'pic/mulher10.png')
            }
            else if(idade < 21)
            {
                img.setAttribute('src', 'pic/mulher20.png')
            }
            else if(idade < 45)
            {
                img.setAttribute('src', 'pic/mulher40.png')
            }
            else if(idade < 65)
            {
                img.setAttribute('src', 'pic/mulher60.png')
            }
            else
            {
                img.setAttribute('src', 'pic/mulher80.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}
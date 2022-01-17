function programaPasso()
{
    var res = document.getElementById('res')
    res.innerHTML = ''
    var ini = Number.parseInt(document.getElementById('ini').value)
    var fim = Number.parseInt(document.getElementById('fim').value)
    var pas = Number.parseInt(document.getElementById('pas').value)
    var temp = 0
    //testará todas as variáveis até estarem de acordo adicionando valores a elas
    while((ini > fim)||(pas < 0)||(pas == 0)||(ini == fim)||(pas > (fim - ini)))
    {
        if(ini > fim)
        {
            temp = ini
            ini = fim
            fim = temp
            alert(`Fim menor que Início. Valores alterados`)
            alert(`Novo valor Início: ${ini}`)
            alert(`Novo valor Fim: ${fim}`)
            alert(`Continue com um passo positivo`)
            //novos valores atribuídos aos "inputs"
            //ocorrerá em todas as condições, caso não satisfeitas
            document.getElementById('ini').value = ini
            document.getElementById('fim').value = fim
        }
        else if(pas < 0)
        {
            pas = pas * -1
            alert(`Passo negativo. Novo passo ${pas}`)
            document.getElementById('pas').value = pas
        }
        else if(pas == 0)
        {
            pas = 1
            alert(`Passo igual a zero. Novo passo *1*`)
            document.getElementById('pas').value = pas
        }
        else if(ini == fim)
        {
            ini = ini - 2
            alert(`Início e Fim tem os mesmos valores, não há passo`)
            alert(`Do valor inicial, será subtraído 2`)
            document.getElementById('ini').value = ini
            document.getElementById('fim').value = fim
        }
        else if(pas > (fim - ini))
        {
            pas = (fim - ini)/2
            alert(`Passo maior que diferença entre Fim e Início`)
            alert(`Serão dados 2 passos`)
            document.getElementById('pas').value = pas
        }
    }
    
    while(ini < fim)
    {
        res.innerHTML += `${ini} # `
        ini += pas     
    }
}

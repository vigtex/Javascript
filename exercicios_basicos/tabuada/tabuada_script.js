function tabuada()
{
    var num = Number(document.getElementById('num').value)
    var ini = Number(document.getElementById('ini').value)
    var fim = Number(document.getElementById('fim').value)
    var res = document.getElementById('mostraTab')
    var temp = 0
    if(ini > fim)
    {
        temp = ini
        ini = fim
        fim = temp
        document.getElementById('ini'). value = ini
        document.getElementById('fim'). value = fim
        alert(`Valor de início da tabuada maior que valor de fim dela`)
        alert(`Novos Valores:`)
        alert(`Início: ${ini}`)
        alert(`Fim: ${fim}`)
    }
    res.innerHTML = `<strong>Tabuada do ${num}:</strong></br></br>`
    for(i = ini; i <= fim; i++)
    {
        res.innerHTML += `${num} x ${i} = ${num * i}</br>` 
    }

}
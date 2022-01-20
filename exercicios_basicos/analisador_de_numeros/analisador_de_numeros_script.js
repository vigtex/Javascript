let num = []
//variável a ser usada no select como índice
let index = 0
//variável que guardará o maior valor escolhido
//inicia com 0 que é o menor valor possível uma vez que o mínimo é 1
let maior = 0
//variável que guardará o menor valor escolhido
//inicia com 101 que é o menor valor possível uma vez que o máximo é 100
let menor = 101
//variável que guardará a soma dos valores
let soma = 0


function adicionar()
{
    var temp = null
    var selNum = document.getElementById('selNum')
    temp = document.getElementById('num').value
    if ((temp.length == 0)||(Number(temp) > 100)||(Number(temp) < 1))
    {
        alert(`Deve ser posto um valor entre 1 e 100`)
    }
    else if(varreArray(Number(temp)))
    {
        alert(`Valor já está no array`)
    }
    else
    {
        temp = Number(temp)
        num.push(temp)
        if(menor > temp)
        {
            menor = temp
        }
        if(maior < temp)
        {
            maior = temp
        }
        let item = document.createElement('option')
        item.text = `${index + 1}º elemento do array é: ${num[index]}`
        item.value = `array${index}`
        selNum.appendChild(item)
        index++
        soma += temp
    }
}
function varreArray(n)
{
    for(let i = 0; i <= num.length; i++)
    {
        if(n == num[i])
        {
            return true
        }
    }
    return false
}

function finalizar()
{
    var res = document.getElementById('finalizar')
    res.innerHTML = `<p>Ao todo temos, ${num.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
    let media = (soma/num.length).toFixed(2)
    res.innerHTML += `<p>A média dos valores é ${media}</p>`
}

function limpaDiv()
{
    document.getElementById('finalizar').innerHTML = ''
}
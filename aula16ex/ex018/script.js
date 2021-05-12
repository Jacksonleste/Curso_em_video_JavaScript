var res = document.getElementById('res')
var lista = []
function add(){
    res.innerHTML = ''
    var sel = document.getElementById('sel')
    var num = Number(document.getElementById('num').value)
    if (num > 100 || num < 1 || lista.indexOf(num) != -1){
        window.alert('[ERRO] Valor invalido ou já adicionado')
    }else{
        var item = document.createElement('option')
        item.text = `Número ${num} adicionado.`
        sel.appendChild(item)
        lista.push(num)
    }
}

function final(){
    var soma = 0
    if (lista.length == 0){
        window.alert('[ERRO] Informe um valor para poder continuar')
    }else{
        for (c in lista){
            if (c == 0){
                var maior = lista[c]
                var menor = lista[c]
            }else{
                if (lista[c] > maior){
                    maior = lista[c]
                }
                if (lista[c] < menor){
                    menor = lista[c]
                }
            }
            soma += lista[c]
        }
        var media = soma / lista.length
        res.innerHTML = `<p>Ao todo foram adiconados ${lista.length} valores</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor número foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}
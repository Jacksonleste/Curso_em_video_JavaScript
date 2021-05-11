function contar(){
    var ini = document.querySelector('input#inicio').value
    var fim = document.querySelector('input#fim').value
    var passo = document.querySelector('input#passo').value
    var res =document.querySelector('div#res')
    
    if (ini.length == 0 || fim.lenght == 0 || passo.lenght == 0){
        window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: '
        var i = Number(ini)
        var f = Number(fim)
        var p = Number(passo)
        if (passo <= 0){
            p = 1
            alert('passo inválido, considerando passo 1!')
        }
        if (i > f){
            // Contagem crescente
            for (c=i; c>= f; c-= p){
                 if (c != i){
                res.innerHTML += `\u{1F449} ${c}`
            }else{
                res.innerHTML += `${c}`
            }
            }
        }else{
            // Contagem regressiva
            for(c=i; c<=f; c+=p){
                if (c != i){
                    res.innerHTML += `\u{1F449} ${c}`
                }else{
                    res.innerHTML += `${c}`
                }
            }
        }
    }
    res.innerHTML += `\u{1F3c1}`
    }

function gerar(){
    var num = document.getElementById('num').value
    var sec = document.getElementById('seltab')
    if (num.lenght == 0){
        alert('Por favor, insira um número!')
    }else{
        sec.innerHTML = ''
        var n = Number(num)
        for (c=1; c<=10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            sec.appendChild(item)
    }
    }
}

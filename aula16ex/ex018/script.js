function calc(){
    var sel = document.getElementById('sel')
    var res = document.getElementById('res')
    var num = Number(document.getElementById('num').value)
    var lista = []
    if (num > 100 || num < 1 || lista.indexOf(num) != -1){
        window.alert('[ERRO] Valor invalido ou já adicionado')
    }
}
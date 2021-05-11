function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var anonas = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (anonas.value == 0 || anonas.value > ano_atual ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano_atual - Number(anonas.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade < 3){
                // Bebê
                img.setAttribute('src', 'img-bebe-M.png')
            }else if (idade < 10){
                //Criança
                img.setAttribute('src', 'img-crianca-M.png')
            }else if (idade < 20){
                //Jovem
                img.setAttribute('src', 'img-jovem-M.png')
            }else if (idade < 60){
                //Adulto
                img.setAttribute('src', 'img-adulto-M.png')
            }else{
                img.setAttribute('src', 'img-idoso-M.png')
                //Idoso
            } 
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade < 3){
                // Bebê
                img.setAttribute('src', 'img-bebe-F.png')
            }else if (idade < 10){
                //Criança
                img.setAttribute('src', 'img-crianca-F.png')
            }else if (idade < 20){
                //Jovem
                img.setAttribute('src', 'img-jovem-F.png')
            }else if (idade < 60){
                //Adulto
                img.setAttribute('src', 'img-adulto-F.png')
            }else{
                //Idoso
                img.setAttribute('src', 'img-idoso-F.png')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        img.style.resize = '5px 5px'
        res.appendChild(img)
    }
}
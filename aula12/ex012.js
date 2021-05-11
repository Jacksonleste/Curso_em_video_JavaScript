var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} horas`)
if (horas <= 5){
    console.log('Acho que você deveria estar dormindo.')
}else if (horas > 5 && horas < 12){
    console.log('Bom dia!')
}else if(horas <= 18){
    console.log('Boa tarde!')
}else if (horas > 18){
    console.log('Boa noite!')
} 
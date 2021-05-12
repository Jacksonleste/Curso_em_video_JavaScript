let amigo = {nome: 'Marcos',
 sexo:'M',
idade: 25,
peso: 84,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}
}
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
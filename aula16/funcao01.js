 function parimp(n){
    n = Number(n)
    if (n % 2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
 }
 
 let res = 45
 console.log(`O número ${res} é ${parimp(res)}`)
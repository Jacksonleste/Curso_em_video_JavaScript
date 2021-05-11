function fat(n){
    for(c=n-1; c >= 1; c--){
        var n = n * c
    }
    return n
}

console.log(fat(5))
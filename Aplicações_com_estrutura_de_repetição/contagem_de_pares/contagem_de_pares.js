function contar(){
    let numeroinicial = document.getElementById('ninicial')
    let numerofinal = document.getElementById('nfinal')
    let res = document.getElementById('res')
    let tnum = 0
    if (numeroinicial.value.length == 0 || numerofinal.value.length == 0){
        alert('ERRO! digite os valores solicitados')
    }else{
        res.innerHTML = `intervalo<br>`
        let ni = Number(numeroinicial.value)
        let nf = Number(numerofinal.value)
        for(let c = ni; c <= nf; c++){
            if (c%2 == 0){
                tnum+=1
            res.innerHTML += ` ${c}<br>`
            }
        }
    }
}
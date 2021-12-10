function comparar(){
    var numero1 = document.getElementById('numero1').value
    var numero2 = document.getElementById('numero2').value
    var res = document.getElementById('res')
    var n1 = parseInt(numero1)
    var n2 = parseInt(numero2)

    if (n1 > n2){
        res.innerHTML = `O primeiro numero e maior`

    }else if (n2 > n1){
        res.innerHTML = `O segundo numero e maior`

    }else{
         res.innerHTML = `Os numeros são iguais`
}
}
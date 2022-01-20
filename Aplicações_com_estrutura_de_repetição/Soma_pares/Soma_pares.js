function somar(){
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var n3 = document.getElementById('n3').value
    var n4 = document.getElementById('n4').value
    var n5 = document.getElementById('n5').value
    var n6 = document.getElementById('n6').value
    var resultado = document.getElementById('resultado')
    let num1 = Number(n1)
    if (num1%2==0 && parseInt(num1)){

    }else{
        alert('O numero e impar!, por favor digite somente numeros pares')
    }
    let num2 = Number(n2)
    if (num2%2==0 && parseInt(num2)){

    }else{
        alert('O numero e impar!, por favor digite somente numeros pares')
    }
    let num3 = Number(n3)
    if (num3%2==0 && parseInt(num3)){

    }else{
        alert('O numero e impar!, por favor digite somente numeros pares')
    }
    let num4 = Number(n4)
    if (num4%2==0 && parseInt(num4)){

    }else{
        alert('O numero e impar!, por favor digite somente numeros pares')
    }
    let num5 = Number(n5)
    if (num5%2==0 && parseInt(num5)){

    }else{
        alert('O numero e impar!, por favor digite somente numeros pares')
    }
    let num6 = Number(n6)
    if (num6%2==0 && parseInt(num6)){

    }else{
        alert('O numero e impar!, por favor digite somente numeros pares')
    }
 resultado.innerHTML = `A soma de todos os números é ${num1+num2+num3+num4+num5+num6}`
}

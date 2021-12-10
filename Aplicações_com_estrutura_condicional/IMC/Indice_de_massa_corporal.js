function calcular(){
    var Peso = document.getElementById('peso').value
    var AlturadaPessoa = document.getElementById('altura').value
    var IMC = parseFloat(Peso)/(parseFloat(AlturadaPessoa)*parseFloat(AlturadaPessoa))
    var res = document.getElementById('res')

    /*console.log(IMC)*/

    if (IMC < 18.5){
        res.innerHTML=`Seu IMC é de ${IMC.toFixed(2)},abaixo do peso.`
        res.style.textAlign = 'center'
    }else if (IMC <= 25){
        res.innerHTML = `Seu IMC é de ${IMC.toFixed(2)}, peso ideal.`
        res.style.textAlign = 'center'
    }else if (IMC <= 30){
        res.innerHTML = `Seu IMC é de ${IMC.toFixed(2)}, sobrepeso.`
        res.style.textAlign = 'center'
    }else if (IMC <= 40){
        res.innerHTML = `Seu IMC é de ${IMC.toFixed(2)}, obesidade.`
        res.style.textAlign = 'center'
    }else{
        res.innerHTML = `Seu IMC é de ${IMC.toFixed(2)}, obesidade mórbida.`
        res.style.textAlign = 'center'
    }
    }
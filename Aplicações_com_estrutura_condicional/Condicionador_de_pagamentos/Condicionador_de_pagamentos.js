function desconto(){
    var res = document.getElementById('res')
    var preco = document.getElementById('valor').value
    var preco = parseFloat(preco)
    

    /* 0 - A vista dinheiro/cheque: 10% desconto*/
    var DescontoAvistaDinheiroCheque = (preco*10)/100

    /* 1 - A vista cartão: 5% desconto*/
    var DescontoAvistaCartao = (preco*5)/100

    /*2 - Até 2 vezes no cartão: Preço original*/

    /*3 - 3 x ou mais no cartão: 20% juros */
    var Acrescimo3xouMaisnoCArtao = (preco*20)/100 

    var desconto = document.getElementsByName('desconto')

    

    if (desconto[0].checked){
        res.innerHTML=`Para está condição você teve o desconto de R$${DescontoAvistaDinheiroCheque.toFixed(2)}, você irá pagar o valor de R$${(preco-DescontoAvistaDinheiroCheque).toFixed(2)}`
    }else if( desconto[1].checked){
        res.innerHTML = `Para está condição você teve o desconto de R$${DescontoAvistaCartao.toFixed(2)}, você irá pagar R$${(preco-DescontoAvistaCartao).toFixed(2)}.`
    }else if(desconto[2].checked){
        res.innerHTML = `Para está condição você não tem desconto.`
    }else{
        res.innerHTML = `Para está condição você terá o acréscimo de R$${Acrescimo3xouMaisnoCArtao.toFixed(2)}, você irá pagar o total de R$${(preco+Acrescimo3xouMaisnoCArtao).toFixed(2)}.`
    }

    }
function calcular(){
    var valorCasa = document.getElementById('valorcasa').value
    var salario =  document.getElementById('valorsalario').value
    var anosparaPagamento = document.getElementById('anos').value
    var res = document.getElementById('res')
    var meses = parseInt(anosparaPagamento)* 12
    var valorCasa = parseFloat(valorCasa)
    var valorParcela = valorCasa/meses


    if (valorParcela > (parseFloat(salario)*30)/100){
        res.innerHTML = `Empréstimo reprovado`  
        res.style.textAlign = 'center'
    }else{
        res.innerHTML = `Seu empréstimo foi aprovado para a compra de um imovel
        no valor de R$${valorCasa.toFixed(2)}, onde sua parcela será de R$${valorParcela.toFixed(2)}`
        res.style.textAlign = 'center'
    }
    
}    
    

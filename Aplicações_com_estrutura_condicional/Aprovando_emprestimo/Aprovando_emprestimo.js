function calcular(){
    var valorCasa = document.getElementById('valorcasa').value
    var salario = document.getElementById('Salario').value
    var anosparaPagamento = document.getElementById('Anos').value
    var res = document.getElementById('res')
   
    var meses = anosparaPagamento * 12
    var valorParcela = valorCasa/meses


    if (valorParcela > (salario*30)/100){
        res.innerHTML = `Seu emprestimo foi negado`

    }else{
        res.innerHTML = `Seu empréstimo foi aprovado! sendo o valor da casa
        de ${Number(valorCasa).toFixed(2)}R$, para pagamento em ${anosparaPagamento} anos e o valor da parcela e de ${valorParcela.toFixed(2)}R$`
}

}
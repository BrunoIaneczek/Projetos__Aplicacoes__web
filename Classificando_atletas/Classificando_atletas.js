function classificar(){
    var Ano = new Date()
    var AnoAtual = Ano.getUTCFullYear()
    /*console.log(AnoAtual)*/
    var nome = document.getElementById('nome').value
    var AnodeNascimentodoAtleta = document.getElementById('anonasc').value
    var IdadedoAtleta = AnoAtual - parseInt(AnodeNascimentodoAtleta)
    var res = document.getElementById('res')

    if (IdadedoAtleta < 9){
        res.innerHTML = `A idade do atleta ${nome} é de ${IdadedoAtleta}anos, sua categoria
        é  Mirim`
    }else if(IdadedoAtleta <= 14){
        res.innerHTML=`A idade do atleta ${nome} é de ${IdadedoAtleta},anos sua categoria
        é Infatil`
    }else if(IdadedoAtleta <= 19){
        res.innerHTML=`A idade do atleta ${nome} é de ${IdadedoAtleta},anossua categoria
        é Junior`
    }else if(IdadedoAtleta <= 25){
        res.innerHTML=`A idade do atleta ${nome} é de ${IdadedoAtleta},anos sua categoria
        é Sênior`
    }else{
        res.innerHTML=`A idade do atleta ${nome} é de ${IdadedoAtleta},anos sua categoria
        é Master`
    }
    }
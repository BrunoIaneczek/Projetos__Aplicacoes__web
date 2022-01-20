function verificar(){
    let numinicial = document.getElementById('ninicial')
    let numfinal = document.getElementById('nfinal')
    let intervalo =  document.getElementById('selint')
if (numinicial.value.length == 0 || numfinal.value.length == 0){
    alert('erro digite valores novamente!')
}else{
    let ni = Number(numinicial.value)
    let nf = Number(numfinal.value)
    intervalo.innerHTML = ''
    for (let c = ni; c <= nf; c++){
        if (c%2 == 1 && c%3==0){
            let item = document.createElement('option')
            item.text = `${c}`
            intervalo.appendChild(item)
        }
    }
}

}
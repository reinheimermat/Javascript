function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')//<--Mostra Resultado

    //VERIFICA SE OS CAMPOS ESTÃO PRENCHIDOS
    if (ini.value.length == 0 || fim.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        //Transformando String em Number
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        //Caso o passo for 0
        if (p <= 0){
            window.alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }

        //Caso o inicio for menor que o final
        if (i < f){
            for (var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}` //<-- COD DO EMOTE
            }
            res.innerHTML += `\u{1F3C1}` //<-- COD EMOTE
        } else {
            //Caso o inicio seja maior que o final
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}` //<-- COD EMOTE
        }
        
        

    }
}
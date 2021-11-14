let amigo = {nome:'Matheus', sexo:'Masculino', peso: 85.4, kkk: 2, 
engordar(p=0){
    console.log('ENGORDOU')
    p = this.peso + this.kkk
}}

amigo.engordar(0)
console.log(amigo.engordar())
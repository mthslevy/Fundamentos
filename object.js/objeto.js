const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preço = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)


const prod2 = {
    nome: 'Camisa Polo',
    preço: 79.90,
    obg: {
        blabla: 1,
        obj:{
            blabla:2
        }
    }
}

console.log(prod2)
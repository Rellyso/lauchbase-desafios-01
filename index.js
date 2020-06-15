const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 30

if (sexo == 'M') {
    if (contribuicao >= 35 && (contribuicao + idade) >= 95) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
} else if (sexo == 'F') {
    if (contribuicao >= 30 && (contribuicao + idade) >= 85) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
} else {
    console.log('Dados incorretos')
}

// Se homem, tempo de contribuição mínimo == 35


// Se mulher, contribuicao >= 30
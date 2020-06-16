const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['CSS','Javascript' ] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS.`)
    } else {
        console.log(`O usuário ${usuarios[i].nome} não trabalha com CSS.`)
    }
}


function checaSeUsuarioUsaCSS(usuario) {
    let tecnologia = ''
    for (let i = 0; i < usuario.tecnologias.length; i++) {
        tecnologia = usuario.tecnologias[i]
        console.log(tecnologia)
    
        if (tecnologia == 'CSS') {
            return true
        }
    }
}
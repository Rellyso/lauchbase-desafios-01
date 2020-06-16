const programador = {
    nome: 'Carlos',
    idade: '32',
    tecnologias: [
            {nome: 'C++', especialidade: 'Desktop'},
            {nome: 'Python', especialidade: 'Data Science'},
            {nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ] 
}


console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
const botaoPedra = document.querySelectorAll('#btn')
const jogarNovamente = document.querySelector('#jogar-novamente')

const home = document.querySelector('#secao-home')
const result = document.querySelector('#secao-result')
const resultTela = document.querySelector("#result-tela")
const pontuacaoJogador = document.querySelector('#pontuacao-jogador')
const pontuacaoMaquina = document.querySelector('#pontuacao-maquina')

const suaEscolha = document.querySelector('#sua-escolha')
const escolhaMaquina = document.querySelector('#escolha-maquina')
const jogadorWin = document.querySelector("#jogador-win")
const maquinaWin = document.querySelector("#maquina-win")
const textInfo = document.querySelector("#text-info")

const papel = document.querySelector('.card-papel')
const tesoura = document.querySelector('.card-tesoura')
const pedra = document.querySelector('.card-pedra')

const opcoes = ["Papel", "Tesoura", "Pedra"]
let suaPontuacao = 0
let maquinaPontuaca = 0

const resultados = {
    'PapelPedra': 'Você ganhou',
    'TesouraPapel': 'Você ganhou',
    'PedraTesoura': 'Você ganhou',
    'PedraPapel': 'Você perdeu',
    'PapelTesoura': 'Você perdeu',
    'TesouraPedra': 'Você perdeu'
}

botaoPedra.forEach((opcao) => {
    opcao.addEventListener('click', () => {

        const numeroAleatorio = Math.floor(Math.random() * 3) + 1
        let escolhaDaMaquina = papel

        if (numeroAleatorio == 1) {
            escolhaDaMaquina = papel
        } else if (numeroAleatorio == 2 ) {
            escolhaDaMaquina = tesoura
        } else {
            escolhaDaMaquina = pedra
        }
        
        home.classList.add('troca-none')
        result.classList.remove('troca-none')
        textInfo.classList.remove('troca-none')
        
        escolhaMaquina.innerHTML += escolhaDaMaquina.outerHTML
        suaEscolha.innerHTML += opcao.outerHTML
        
        const imgDaMaquina = escolhaDaMaquina.querySelector('img')
        const imgBotao = opcao.querySelector('img')

        const chave = imgBotao.alt + imgDaMaquina.alt 

        if(resultados[chave]) {
            resultTela.innerHTML += resultados[chave]
        } else {
            resultTela.innerHTML += 'Empate'
        }

        if (resultTela.innerText === 'Você ganhou') {
            suaPontuacao += 1 
            maquinaWin.classList.add('troca-none')
            jogadorWin.classList.remove('troca-none')
            pontuacaoJogador.innerText = suaPontuacao
        } else if (resultTela.innerText === 'Você perdeu') {
            maquinaPontuaca += 1
            jogadorWin.classList.add('troca-none')
            maquinaWin.classList.remove('troca-none')
            pontuacaoMaquina.innerText = maquinaPontuaca
        } else {
            jogadorWin.classList.add('troca-none')
            maquinaWin.classList.add('troca-none')
        }

    })

    jogarNovamente.addEventListener('click', () => {
        home.classList.remove('troca-none')
        result.classList.add('troca-none')
        textInfo.classList.add('troca-none')

        suaEscolha.innerHTML = ''
        escolhaMaquina.innerHTML = ''
        resultTela.innerHTML = ''
    })
})
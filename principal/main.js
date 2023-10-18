'use strict'

async function pegarImagens () {

    const url = 'https://dog.ceo/api/breed/pinscher/images'

    const response = await fetch(url)
    const imagens = await response.json()

    return imagens.message
}

function criarTagImg (imagem) {
    const player = document.getElementById('player')
    const tagImg = document.createElement('img')
    tagImg.src = imagem

    player.appendChild(tagImg)
}

async function carregarFotos () {
    const imagens = await pegarImagens()
    imagens.forEach(criarTagImg)
}

carregarFotos()
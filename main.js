'use strict'

const btnPesquisa = document.getElementById('btnBusca')

function execute(){
    const user = document.getElementById('user').value

    const apiUrl = `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${user}?api_key=RGAPI-941ac739-e778-4ca8-a64a-da33f7b3537c`
    
    fetch(apiUrl)
      .then(response => {
        if (response.status !== 200) {
          console.log(`Erro na requisição: ${response.status}`)
          return
        }
        return response.json()
      })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error('Ocorreu um erro na requisição:', error)
      })
}btnPesquisa.addEventListener('click', execute)
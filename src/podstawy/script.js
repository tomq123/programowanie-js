const element = document.getElementsByTagName('h1')[0]
const pugins = navigator.plugins
console.log('pugins', pugins)
let playerName = ''
const play = () => {
    const isWin = Math.random() < 0.7
    if(isWin) {
        element.innerText = `${playerName}: Win!`
    } else {
        element.innerText = `${navigator.plugins}: Game over!`
    }
}
const myInputElement = document.getElementById('myInput')
myInputElement.addEventListener('input', (event) => {
    playerName = event.target.value
})
const myButtonElement = document.getElementById('myButton')
myButtonElement.addEventListener('click', (event) => {
    play()
})
function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
    var hora =  data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    img.src = 'imagens/manha.png'
    document.body.style.background = 'rgb(255, 231, 124)'
} else if (hora >= 12 && hora < 18) {
    img.src = 'imagens/tarde.png'
    document.body.style.background = 'rgb(139, 71, 15)'
} else {
    img.src = 'imagens/noite.png'
    document.body.style.background = 'rgb(26, 29, 75)'
}
}
document.write('Oi, sou Amanda!')

document.getElementById('teste')
// document.querySelector('#teste') => deve-se definir qual é o tipo do elemento.
// id, class, etc...

let titulo = document.getElementById('titulo')
console.log(titulo.innerText)
titulo.innerText = 'Título Modificado 1'

let textos = document.getElementsByClassName('texto')
console.log(textos.length)

textos[0].innerText = 'Texto Modificado 2'

let paragrafo = document.getElementById('paragrafo')

paragrafo.style.color = 'blue'
paragrafo.style.fontSize = '20pxx'
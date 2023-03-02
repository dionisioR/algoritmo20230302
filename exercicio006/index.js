// entrada
let numero1 = prompt('Digite um número qualquer: ')
let numero2 = prompt('Digite um outo número qualquer: ')

// Casting
numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)

let soma = numero1 + numero2
let sub = numero1 - numero2
let mult = numero1 * numero2
let div = numero1 / numero2
let mod = numero1 % numero2
let media = (numero1 + numero2) / 2

document.write(`O números digitados foram ${numero1} e ${numero2}.<br>`)

document.write(`A soma dos números: ${numero1} e ${numero2}. é ${soma}. <br>`)

document.write(`A soma dos números: ${numero1} e ${numero2}. é ${numero1 + numero2}. <br>`)

document.write(`A subtracao dos números: ${numero1} e ${numero2}. é ${sub}. <br>`)

document.write(`A multiplicação dos números: ${numero1} e ${numero2}. é ${mult}. <br>`)

document.write(`A divisõ  dos números: ${numero1} e ${numero2}. é ${div}. <br>`)

document.write(`O módulo dos números: ${numero1} e ${numero2}. é ${mod}. <br>`)

document.write(`A média dos números: ${numero1} e ${numero2}. é ${media}. <br>`)















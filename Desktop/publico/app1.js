'use strict'

console.log('here\' s a hidden message')

let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElemnetById('date')
selectElement.innerHTML = formatDate
import sum from './sum'

console.log(sum(4, 5))
console.log(sum(5, 5))
console.log(sum(5, -5))

const btn = document.getElementById('btn1')

btn.addEventListener('click', () => {
  console.log('Button was clicked!')
})

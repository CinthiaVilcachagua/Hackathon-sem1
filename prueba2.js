//EJERCICIO 0
let john = { name: 'Jhon', surname: 'Smith', id: 1 }
let pete = { name: 'Pete', surname: 'Hunt', id: 2 }
let mary = { name: 'Mary', surname: 'Key', id: 3 }

let users = [john, pete, mary]

let mapUsers = users.map((user) => ({
   fullName: `${user.name} ${user.surname}`,
   id: `${user.id}`,
}))
console.log(mapUsers)

//EJERCICIO 1
let fruits = ['Apples', 'Pear', 'Orange']
let fruitsNew = fruits.map((arr) => {
   return arr
})
fruitsNew.push('Grapes')

let shoppingCart = fruits
shoppingCart.push('Banana') //En fruits se agrego Banana

alert(fruits.length) // 4

//EJERCICIO 2
let styles = ['Jazz', 'Blues']
styles.push('Rock-n-Roll')
const valorMitad = (arr) => {
   if (arr.length % 2 != 0) {
      return (arr.length - 1) / 2
   }
}
let valorMitadStyles = valorMitad(styles)
styles[valorMitadStyles] = 'Classics'

styles.shift()
console.log(styles)

styles.unshift('Rap', 'Reggae')

//EJERCICIO 3
let array = []

do {
   var date = parseInt(prompt('ingrese un valor'))

   if (isNaN(date) == false) {
      array.push(date)
   }
} while (isNaN(date) == false)

let resultSum = 0
for (let sum of array) {
   resultSum += sum
}
console.log(resultSum)

//EJERCICIO 4
const filterRange = (arr, a, b) => {
   let newArr = arr.filter((e) => {
      if (a <= e && e <= b) {
         return e
      }
   })
   return newArr
}
let arrayEj = [5, 3, 8, 1]
console.log(filterRange(arrayEj, 1, 4)) //[3,1]
console.log(arrayEj) // no modificado

//EJERCICIO 5
const copySorted = (arr) => {
   let newArray = arr.map((x) => x)
   newArray.sort()
   return newArray
}

let array5 = ['HTML', 'Javascript', 'CSS']
console.log(copySorted(array5))
console.log(array5)

//EJERCICIO 6

//EJERCICIO 8
let mensaje
login = 'Director'
login == 'Empleado'
   ? (mensaje = 'Hola')
   : login == 'Director'
   ? (mensaje = 'Saludos')
   : login == ''
   ? (mensaje = 'Sin inicio de sesión')
   : (mensaje = '')
console.log(mensaje)

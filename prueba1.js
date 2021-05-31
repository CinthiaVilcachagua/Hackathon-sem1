//EJERCICIO 1
let admin
let name
name = 'jhon'
admin = name
alert(admin)

//EJERCICIO 2
let earth
let nameUser

//EJERCICIO 3
//No se puede usar como letra inicial de una variable con Mayúscula.

//EJERCICIO 4
let name2 = 'Ilya'

alert(`hello ${1}`) // hello 1
alert(`hello ${'name2'}`) // hello name2
alert(`hello ${name2}`) // hello Ilya

//EJERCICIO 5
const firstObject = new Object()
firstObject.name = 'Jhon'
firstObject.surname = 'Smith'
firstObject.name = 'Pete'
delete firstObject.name
//console.log(firstObject)

//EJERCICIO 6
const isEmpty = (obj) => {
   Object.keys(obj).length == 0
}
/* let schedule = {}
console.log(isEmpty(firstObject))
console.log(isEmpty(schedule)) */

//EJERCICIO 7
let salaries = {
   Jhon: 100,
   Ann: 160,
   Pete: 130,
}
const sumObject = (obj) => {
   let valuesObj = Object.values(obj)
   let sumVariable = 0
   for (let i = 0; i < valuesObj.length; i++) {
      sumVariable += valuesObj[i]
   }
   return sumVariable
}
console.log(sumObject(salaries))

//Ejercicio 8
let menu = {
   width: 200,
   height: 300,
   title: 'My menu',
}
const multObject = (obj) => {
   let valObj = Object.keys(obj)

   for (let i = 0; i < valObj.length; i++) {
      if (typeof obj[valObj[i]] == 'number') {
         obj[valObj[i]] = obj[valObj[i]] * 2
      }
   }
   return obj
}
console.log(multObject(menu))

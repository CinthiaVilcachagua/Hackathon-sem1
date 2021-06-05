//EJERCICIO 0

let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O']

const unique = (arr) => {
   let newValues = new Set(arr) // solo elementos unicos
   return Array.from(newValues)
}
console.log(unique(values)) // ["Hare", "Krishna", ":-O"]

//EJERCICIO 1

let arr = ['nap', 'teachers', 'cheaters', 'pan', 'ear', 'hectares']

const aclean = (arr) => {
   let newArr = new Map() //2 elementos

   for (let i of arr) {
      let sortArr = i.toLowerCase().split('').sort().join('')
      newArr.set(sortArr, i)
   }
   //return newArr - key/values
   //return Array.from(newArr) //Array doble
   return Array.from(newArr.values())
}

console.log(aclean(arr)) //["pan", "hectares", "ear"]

//EJERCICIO 2
let map = new Map()
map.set('name', 'Jhon') // {}
//let keys = map.keys() //{"name"}
//ya que no bota un objeto podriamos usar Array.from
let keys = Array.from(map.keys())
keys.push(5)
console.log(keys) // ["name", 5]

//EJERCICIO 3
//Cual es el ultimo valor ? ¿Porqué?
let i = 3
while (i) {
   alert(i--)
}
//Los numeros enteros mayor o igual a 1 son true, por lo tanto el último valor mostrado sería el 1.

//EJERCICIO 4
/*  
let a = 0
while (++a < 5) {
    alert(a)
}
while (a++ < 5) {
    alert(a)
}  
*/
// ++a, incrementa y retorna enseguida el valor modificado.
// mientras que a++, incrementa, guarda el nuevo valor pero retorna el valor anterior.

//EJERCICIO 5
const ask = (question, yes, no) => {
   confirm(question) ? yes() : no()
}

ask(
   'Do you agree?',
   () => {
      alert('You agreed')
   },
   () => {
      alert('You canceled the execution')
   }
)

//EJERCICIO 6

const makeCounter = () => {
   let num = 0

   const counter = () => {
      return num++
   }

   counter.set = (value) => {
      num = value
   }

   counter.decrease = () => {
      num--
   }
}

//EJERCICIO 7
let date

do {
   date = parseInt(prompt('Ingresa un valor mayor a 100'))
} while (date <= 100 && date)

console.log(date)

//EJERCICIO 8

let list = {
   value: 1,
   next: {
      value: 2,
      next: {
         value: 3,
         next: {
            value: 4,
            next: null,
         },
      },
   },
}

//USANDO UN BUCLE
/*
const printList = (list) => {
   while (list) {
       console.log(list.value); //1 , 2 , 3 ,4
       list = list.next;
   }
}
*/

//USANDO LA RECURSIVIDAD --> funciones que se llaman a si mismas
const printList = (list) => {
   console.log(list.value)

   //llamar a la funcion
   printList(list.next)
}

printList(list)
//prefiero la recursividad por que el codigo es menos complejo y asimple vista mas entendible.

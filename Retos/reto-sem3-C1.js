//RETO CLASE 1

for (let i = 0; i <= 20; i++) {
   if (i % 2 == 0) {
      console.log(`${i}` + ' es par')
   } else {
      console.log(`${i}` + ' es impar')
   }
}

for (let i = 0; i <= 10; i++) {
   console.log(`${i}` + ' * 9 = ' + `${i * 9}`)
}

for (let i = 1; i <= 10; i++) {
   for (let y = 1; y <= 10; y++) {
      console.log(`${i}` + ' * ' + `${y}` + ' es : ' + `${i * y}`)
   }
}

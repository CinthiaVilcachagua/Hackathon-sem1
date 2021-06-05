// EJERCICIO  EL GEOMETRIZADOR
const calcCircumfrence = (r) => {
   if ((r >= 0) & r) {
      console.log('la circunferencia es ' + `${2 * r}` + 'π')
   }
}
const calcArea = (r) => {
   if ((r >= 0) & r) {
      console.log('la circunferencia es ' + `${r * r}` + 'π')
   }
}

calcCircumfrence(5)
calcCircumfrence()
calcArea(5)

//EJERCICIO  LA CALCULADORA DE LA EDAD DEL CACHORRO
const calculateDogAge = (ageCan, agePerson) => {
   if (ageCan) {
      console.log('¡Tu perrito tiene ' + `${(ageCan / 7).toFixed(2)}` + ' años en años de Humano!')
   }

   if (agePerson) {
      console.log('¡Tu tienes ' + `${agePerson * 7}` + ' años en años de perro!')
   }
}

calculateDogAge(10, 20)
calculateDogAge(6)
calculateDogAge()

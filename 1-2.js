var jsonPrueba = JSON.parse(sessionStorage.prueba1);

for(let i=0; i < jsonPrueba.users.length; i++) {
console.log(jsonPrueba.users[i].name + " " + jsonPrueba.users[i].surname);
}


 
 
 //Me faltó tiempo para rematar pero esto he probado por consola, creo que es más eficiente
    var array = [-10, -0.20, 0.30, -40, -50];
   var firstPositivePosition = array.find(function (element) {
      return element > 0;
   });
       switch (firstPositivePosition){
                case 0:
                    console.log('Posición 0')
                case 1:
                    sessionStorage.setItem('position', firstPositivePosition)
                    break
                case 2:
                    console.log('Posición 2')
                    break
                case -1:
                    console.log('No encontrado')
                    break
                default:
                    console.error('Error')
            }

// hacer una funcion reutilizable para traer informacion de un pais por lenguaje hablado  

const lenguaje = 'Hindi';

fetch(`https://restcountries.com/v3.1/lang/${lenguaje}`)  // => Promesa
.then((informacion) => {informacion.json().then((res) => { console.log(res)})})
.catch((error) => console.log(error));


// hacer console.log de solo el NOMBRE de cada pais  ejemplo de peticion https://restcountries.com/v3.1/lang/spa 

fetch('https://restcountries.com/v3.1/lang/spa')  // => Promesa

.then((informacion) => {informacion.json().then((res) => { 
    const countries = res.map((country) => country.name.common);
    console.log(countries)
})})
.catch((error) => console.log(error));
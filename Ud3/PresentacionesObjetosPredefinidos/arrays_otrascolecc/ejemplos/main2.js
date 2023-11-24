let films = ["Brother Bear", "Insidious", "IT"];
films.hola = "adios";
let notas = [7, 1, 4, 8, 6, 11, 10];

console.log(notas.sort()); // (8) [1, 10, 11, 4, 6, 7, 8, 9]
console.log(notas.sort((a,b) => a-b)); // (5) [1, 4, 6, 7, 8, 9, 10, 11]

for (const key in films) {
    if (Object.hasOwnProperty.call(films, key)) {
        const element = films[key];
        console.log("**"+element);
        
    } else {
        console.log("kk"+films[key]);
    }
}

console.log("---");

for (const key in films) {
    console.log(films[key]);
}


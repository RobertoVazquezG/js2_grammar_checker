let story = 'Last weekend, I took literally the\n\
most beautifull bike ride of my life. The route is called\n\
"The 9W to Nyack" and it stretches all the way from\n\
Riverside Park in Manhattan to South Nyack, New Jersey.\n\
It\'s really an adventure from beginning to end! It is a\n\
48 mile loop and it literally took me an entire day. I\n\
stopped at Riverbank State Park to take some artsy photos.\n\
It was a short stop, though, because I had a freaking long\n\
way to go. After a quick photo op at the very popular\n\
Little Red Lighthouse I began my trek across the George\n\
Washington Bridge into New Jersey. The GW is\n\
a breathtaking 4,760 feet long! I was already very tired by the time I got\n\
to the other side. An hour later, I reached Greenbrook\n\
Nature Sanctuary, an extremely beautifull park along the\n\
coast of the Hudson. Something that was very surprising to\n\
me was that near the end of the route you literally cross\n\
back into New York! At this point, you are very close to\n\
the end.';

let storyWords = story.split(' '); //este es un comentario modificado
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

const a = true; //variable creada al azar

//console.log(storyWords);
//Creamos una variable 'count' que almacena el numero 0
//Debajo de 'count' usa un metodo forEach() para iterar sobre
// storyWords. Como argumento de forEach() crea una funcion vacía
// para ser usada como callback function
let count = 0;
storyWords.forEach((word) => {
    count++;
});

console.log(count);

//Se reemplaza la palabra 'literally' del parrafo
//se modifica el texto original

storyWords = storyWords.filter(word => {
    if(word !== unnecessaryWord){
        return word;
    }
});
//console.log(storyWords);

//Ahora verificamos que todas las palabras esten bien escritas
//usando el metodo .map()

storyWords = storyWords.map(word => {
    if(word === misspelledWord){
        return 'beautiful';
    }
    else {
        return word
    };
});
console.log(storyWords);

//Ahora buscamos el indice de la mala palabra 'freaking'
let badWordIndex = storyWords.findIndex(word => {
    return word === badWord;
});
console.log(badWordIndex);
//Reemplazamos la palabra freaking en el indice 75 por la palabra 
//'really'
storyWords[71] = 'really';

//Ahora simplificamos las palabrabas para apelar a una mayor audiencia
//nos aseguramos que cada palabra tiene 10 caracteres o menos
let lengthCheck = storyWords.every(word => {
    return word.length > 10;
});
console.log(lengthCheck);

//Ahora reemplazamos las palabras con mas de 10 caracteres por la palabra
// stunning, dazzling or glorious

storyWords = storyWords.filter(word => {
    if(word.length > 10){
        return 'stunning';
    }
    else{
        return word;
    }
});
//console.log(storyWords);

// Visualizamos siempre el resultado del array con .join()
console.log(storyWords.join(' '));
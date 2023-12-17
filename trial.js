// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

cats.length = 0;

cats.push("Milo", "Otis", "Garfield");



function destructivelyAppendCat(name) {
cats.push(name);
}
function destructivelyPrependCat(name){
cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
cats.shift(name);
}

function appendCat(name) {
return [...cats, name]; 

console.log(updatedCats); 

}



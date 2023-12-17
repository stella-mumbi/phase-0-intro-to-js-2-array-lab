const cats = [
    "Milo", 
    "Otis", 
    "Garfield"
 ]

console.log(cats);

function destructivelyAppendCat() {
cats.push("Ralph")
console.log(cats);
}
destructivelyAppendCat();

function destructivelyPrependCat() {
cats.unshift("Bob")
console.log(cats);
}
destructivelyPrependCat();

function destructivelyRemoveLastCat() {
cats.pop()
console.log(cats);
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
cats.shift()
console.log(cats);
}
destructivelyRemoveFirstCat();

function appendCat(name) {
const newCats = [...cats, name]
return newCats;
}
console.log(appendCat("Broom"));

function prependCat(name) {
const newCats = [name, ...cats]
return newCats;
}
console.log(prependCat("Arnold"));

function removeLastCat() {
const newCats = cats.slice(0, 2);
return newCats;
}
console.log(removeLastCat());

function removeFirstCat() {
const newCats = cats.slice(1);
return newCats;
}
console.log(removeFirstCat());
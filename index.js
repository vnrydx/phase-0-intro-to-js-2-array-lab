// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
} 

console.log(destructivelyAppendCat(Linus));

function destructivelyPrependCat(name) {
    cats.unshift(name);
} 

console.log(destructivelyPrependCat(Lucy));

function destructivelyRemoveLastCat() {
    cats.pop();
} 

console.log(destructivelyRemoveCat());

function destructivelyRemoveFirstCat() {
    cats.shift();
} 

console.log(destructivelyRemoveFirstCat());

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
} 

console.log(appendCat("Broom"));

function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
} 

console.log(prependCat("Charlie"));

function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
} 

console.log(removeFirstCat());

function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
} 

console.log(removeLastCat());
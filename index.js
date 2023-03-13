// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name = "Ralph"){
    cats.push (name)
}
function destructivelyPrependCat(name = "Bob"){
    cats.unshift (name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name= "Broom"){
    const cats2 = cats.slice();
    cats2.push(name)
    return cats2
}
function prependCat(name="Arnold"){
    const cats2 =cats.slice();
    cats2.unshift(name)
    return cats2
}
function removeLastCat(){
    const cats2 =cats.slice();
    cats2.pop()
    return cats2
}
function removeFirstCat(){
    const cats2 =cats.slice();
    cats2.shift()
    return cats2
    
}
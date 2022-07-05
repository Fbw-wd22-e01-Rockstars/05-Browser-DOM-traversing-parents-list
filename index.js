const cite = document.querySelector("cite")

let parents = []
let child = cite


while(child){
    parents.push(child.localName)
    
    child = child.parentElement
}



console.log(parents.reverse().join(" > "))
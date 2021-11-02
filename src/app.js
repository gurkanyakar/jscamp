console.log("Hello World!")

let dolarBugun = 9.30
let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 //euroDun read only
console.log(euroDun)
//js tip güvenli değil
//camelCasing
let konutKredileri = ["Özel Konut Kredisi","Konut kredisi","Emlak konut kredisi","Kamu Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log("</ul>")
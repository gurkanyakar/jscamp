function addToCart(quantity,productName="default value") {
    console.log("sepete eklendi : " + productName + " adet : " + quantity)
}
addToCart(10)
addToCart(12,"Yumurta")
addToCart() //undefined


let sayHello = ()=>{
    console.log("Hello world")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello world 2")
}
sayHello2()
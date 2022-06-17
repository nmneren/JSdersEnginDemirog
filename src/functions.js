function addToCart(quantity,productName="armut") {
    console.log("Sepete eklendi ürün : " + productName + " adet : " + quantity)
}

//addToCart()
//addToCart("yumurta",10)
//addToCart("karpuz")
//addToCart(10)



let sayHello = () => {
    console.log("hello word")
}

//sayHello()

let sayHello2 = function () {
    console.log("hello word 2")
}

//sayHello2()


function addToCart2(productName, quantity, unitprice) {
    
}

//addToCart2("elma",5,10)

let product1 = {productName : "elma", quantity : 5, unitPrice:10} 
function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyar : " + product.unitPrice)
}
//addToCart3(product1)


let product2 = {productName : "elma", quantity : 5, unitPrice:10} 
let product3 = {productName : "elma", quantity : 5, unitPrice:10} 
product2 = product3
product2.productName = "Karpuz"
//console.log(product3.productName)

//sayılar değer tip / objelerde referans tiptir

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi1 = 100
//console.log(sayi2)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName : "elma", quantity : 5, unitPrice:10},
    {productName : "armut", quantity : 2, unitPrice:20},
    {productName : "karpuz", quantity : 4, unitPrice:40}
]

//addToCart4(products)

//rest 
//basına konulan 3 nokta ile içerisine gelen verileri array olarak tutar
//rest kullanılacak functionlarda baska parametre eklenecekse rest en sona eklenir
//yoksa program patlar (birşey,...numbers)
function add(...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    console.log(total)
}
//add(10,20)
//add(10,20,30,40)

//spread
//basına 3 nokta koyarak array yapısından cıkararak ayırmıs oluruz
let numbers = [30,10,50,500,6,120]
//console.log(numbers) // burada array olarak algıladı
//console.log(...numbers) // burada ise ayrı ayrı sayılar olarak
//console.log(Math.max(...numbers))// burada çalışması için spread yapılması gerekir


//destructure
//bize gelen yapıyı bölerek istediğimiz yere atmamızı sağlar
//tek bir array e atıp array[i] değer gibi kullanmak yerine
//kendi özel değişkenine atmamızı sağlar

let [bölge1,bölge2,bölge3,[b1Sehirleri,b2Sehirleri]] = [
    {name : "İç Anadolu" , populations : "20M"},
    {name : "Marmara" , populations : "30M"},
    {name : "Karadeniz" , populations : "10M"},
    [
        ["ankara","konya"],
        ["istanbul","bursa"],
        ["sinop","trabzon"]
    ]
]

//console.log(bölge1)
//console.log(bölge2)
//console.log(bölge3)
//console.log(b1Sehirleri)
//console.log(b2Sehirleri)


let product4 = {productName : "elma", quantity : 5, unitPrice:10}

let {productName:PN,quantity:QT,unitPrice:UN} = {productName : "Pepsi", quantity : 5, unitPrice:10}

//console.log(product4)

//console.log(PN)
//console.log(QT)
//console.log(UN)

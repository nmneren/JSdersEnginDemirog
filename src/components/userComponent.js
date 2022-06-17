import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../Services/userService.js"

console.log("User Components Yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Engin","demiroğ","Ankara")
let user2 = new User(2,"Baran","Gökçekli","Muğla")

//userService.add(user1)
//userService.add(user2)

console.log("-------------------------")
userService.load()

userService.add(new Customer(1,"Seda","Yılmaz","Ankara",25))

console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)

console.log(userService.getCustomersSorted())



//prototyping içerisine sonradan, olmayan bir değer ekleme ve atamadır 
// let customer = {id:1,firstname:"Engin"}

// customer.lastName = "Demiroğ"

// console.log(customer.lastName)


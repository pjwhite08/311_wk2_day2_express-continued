//get access to the db
let db = require("../data/products")

//function for list all products
let list = function(req, res){
    console.log("controllers.products.list WOOHOO")
    res.json(db)
}

//function for show one product details
let show = function(req, res){
    console.log("controllers.products.show YAY")
    
    let id = req.params.id
    let found = db.find(function(element, index){
        if(element._id == id){
            return true
        }
        else{
            return false
        }
    })
    res.json(found)
}

let nextId = 11
let create = function(req, res){
    console.log("controllers.products.create  WOW")
    //store it
    newProduct = req.body
    //give it an id
    newProduct._id = nextId
    //increment the nextId for the next new product
    nextId++
    //add it to the array/ db
    db.push(newProduct)


}

//export
module.exports = {
    list,
    show,
    create
}
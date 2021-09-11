
//access the db
let db = require("../data/contacts")


let list = function (req, res) {
    console.log("controllers.contacts.list WOOHOO")
    res.json(db)
}

let show = function (req, res) {
    console.log("controller.contacts.show  YAY")
    //store the path req
    let id = req.params.id
    //if that id is equal to the path id
    let found = db.find(function(element, index){
        //find the value of the id
        if(element._id == id ){
            return true
        }
        else{
            return false}    
    })
    res.json(found)
}

nextId = 6
let create = function (req, res) {
    console.log("controller.contacts.create WOW")
    //save the body of the request in a variable
    let createdContact = req.body
    //assign the next id to the body of the request
    createdContact._id = nextId
    //increment the next id
    nextId ++
    //add the thing to the db array
    db.push(createdContact)

    //and return ok
    req.sendStatus(204)

}


//export
module.exports = {
    list,
    show,
    create
}
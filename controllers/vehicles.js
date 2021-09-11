//get info from
let db = require("../data/vehicles")

//do stuff with it: whole list, one item, add a something
let list = function(req, res){
    console.log("controller.vehicles.list  WOOHOO")
    res.json(db)
}

let show = function(req, res){
    console.log("controller.vehicles.show YAY")
    //code to show one vehicle based on id
    //get it based on the params
    let id = req.params.id
    //if the id matches, display it
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

let nextId = 21

let create = function(req, res){
    console.log("controllers.vehicles.create WOW")
    //code to create a vehicle
    //place to hold the new vehicle
    let newVehicle = req.body
    //it will need an id
    //there are already 20 in the list, so start with 21 (see above)
    
    //?assign id to this created vehicle
     newVehicle._id = nextId
     //increment the id
     nextId++

    //push it to the array/ db
    db.push(newVehicle)
    req.sendStatus(204)
}
//export info 
module.exports = {
    list,
    show,
    create
}
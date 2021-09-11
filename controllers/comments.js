
//import the initial arry of comments
let db = require("../data/comments")

//this is the thing that's going to handle the route
//return the list of coments that are currently held in the db array
let list = function(req, res){
    console.log("controller.comments.list")
    //code to return all the comments on the response
    res.json(db)
}

//return the first comment whose id matches
let show = function(req, res){
    console.log("controller.comments.show", req.params)
    //code to return a single comment by id
    //the id is going to be a path param

    //get the id from a path parameter
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
//variable used for new ids for new comments as they are created
let nextId = 5
//we will create a comment, assign it an id, and add it to our db array
//the content of the coment will be inside the request body
let create = function(req, res){
    //code to create a new comment
    //and add it to our "database", which is just an array for us
    console.log("controller.comments.create", req.body)

    //store the body we were given (req) as a variable
    let newComment = req.body
    //generate an id
        //?newComment._id accesses the id? why the underscore? because it's unknown?
        //set the id of the current comment to nextId (starting with 5, bc our db has 4 already
    newComment._id = nextId
        //increment the nextId by one, so the next comment will get a new/ next id
        nextId++
    //add it to the db
    db.push(newComment)

    //bc we don't have any data to send back, specifically, just send back a ok code
    req.sendStatus(204)
}

module.exports = {
    list,
    show,
    create
}
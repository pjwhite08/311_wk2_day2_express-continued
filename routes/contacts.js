//access express
const express = require("express")

//this will hold the routes that the application will respond to
//it uses/ calls(?) the Router function(?) or method(?)... blog notes
const router = express.Router()

//access the controllers, the actions
const controller = require("../controllers/contacts")

//route for list; get
//first parameter says use this path, second parameter is a callback function (from the controller)
router.get("/contacts", controller.list)

//route for show; get
//:id is a path parameter
router.get("/contacts/:id", controller.show)

//route for create; post
router.post("/contacts", controller.create)


//export
module.exports = router
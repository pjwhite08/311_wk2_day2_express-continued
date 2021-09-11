const express = require("express")

//this will hold the routes that the application will respond to
const router = express.Router()

//this controller holds the functions/ callbacks of how to handle the requests when theycome in
const controller = require("../controllers/comments")
/**
 * GET /comments
 * GET /comments/:id
 * POST /comments
 */

 //add the routes and which controller functions will respond to them

 //route to get all comments
 router.get("/comments", controller.list)

 //route to get a comment by its id
 router.get("/comments/:id", controller.show)

 //route to create a comment
 router.post("/comments", controller.create)

 //!!! export the router so the app can use it
module.exports = router
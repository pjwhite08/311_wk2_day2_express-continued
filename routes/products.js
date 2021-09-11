//access express
let express = require("express")

//use Router()
let router = express.Router()

//bring in the products actions
let controller = require("../controllers/products")

//create a route for all the products; GET list
router.get("/products", controller.list)

//create a route to get the info of one product; GET show; :id
router.get("/products/:id", controller.show)

// create a route to create a product; POST create
router.post("/products", controller.create)

module.exports = router
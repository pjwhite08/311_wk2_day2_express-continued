const express = require("express")

const router = express.Router()

//get info from
const controller = require("../controllers/vehicles")



router.get("/vehicles", controller.list)

router.get("/vehicles/:id", controller.show)

router.post("/vehicles", controller.create)

module.exports = router
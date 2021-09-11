const express = require("express");

const app = express();
app.use(express.json())

//variable created to access the public folder, static info
let static = (express.static("./public"))
//tell app to use the static info
app.use(static)

//variable to access the comments file
let commentRoutes = require("./routes/comments")
//tell the app to use the comments routes
app.use(commentRoutes)

let vehicleRoutes = require("./routes/vehicles")
app.use(vehicleRoutes)

let contactRoutes = require("./routes/contacts")
app.use(contactRoutes)

let productRoutes = require("./routes/products")
app.use(productRoutes)



const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

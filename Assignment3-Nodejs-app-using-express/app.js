const express = require("express");
const bodyparser = require("body-parser");

const app = express();

const userArray = []
userArray.push({
    name: "Durgesh",
    email: "Durgeshyadav3107@gmail.com",
    age: 23,
    city: "Chandigarh",
    profession: "Student"
})

app.use(bodyparser());

app.set('views', './views');
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render("home.ejs", { userArray });
})

app.get("/form", (req, res) => {
    res.render("form.ejs");
})


app.post("/add/user", (req, res) => {
    // console.log(req.body);
    userArray.push({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        city: req.body.city,
        profession: req.body.profession
    })
 
    res.redirect("/");
})




app.listen(5000, () => console.log("server listening at 5000.."));
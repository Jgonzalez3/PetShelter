var path = require("path");
module.exports = (app)=>{
    var controller = require("../controllers/pets")();
    app.get("/findpets", (req, res)=>{
        controller.index(req, res);
    })
    app.get("/findpet/:id", (req, res)=>{
        controller.pet(req, res);
    })
    app.post("/pet", (req, res)=>{
        controller.createPet(req, res);
    })
    app.put("/pet/edit/:id", (req, res)=>{
        controller.updatePet(req, res);
    })
    app.put("/pet/like/:id", (req, res)=>{
        controller.updatePetLike(req, res);
    })
    app.delete("/pet/delete/:id", (req, res)=>{
        controller.deletePet(req, res);
    })
    app.all("*", (req,res,next)=>{
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}
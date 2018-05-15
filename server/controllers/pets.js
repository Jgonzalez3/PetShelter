module.exports = ()=>{
    require("../models/pet")();
    return{
        index: (req, res)=>{
            Pet.find({}).sort({ type: 1}).exec((err, pets)=>{
                err=err ? console.log("ERROR ALL:", err) & res.json({message: "INDEX ERROR", error: err}): res.json({message: "Success", pets: pets});
            })
        },
        pet: (req, res)=>{
            var petId = req.params.id
            Pet.findById(petId, (err, pet)=>{
                err=err ? console.log("ERROR THIS Pet", err) & res.json({message: "Pet ERROR", error:err}): res.json({message: "Success", pet: pet});
            })
        },
        createPet: (req, res)=>{
            newPet = new Pet({name: req.body.name, type: req.body.type, description: req.body.description, skills: req.body.skills, likes: req.body.likes});
            newPet.save((err)=>{
                err =err ? console.log("Create ERROR") & res.json({message:"CREATE ERROR", error: err}): res.json({message: "Success"})
            })
        },
        updatePet: (req, res)=>{
            var petId = req.params.id;
            Pet.findByIdAndUpdate(petId, {name: req.body.name, type: req.body.type, description: req.body.description, skills: req.body.skills}, {runValidators: true, context: 'query'} , (err)=>{
                err=err ? console.log("UPDATE ERROR", err) & res.json({message: "Update Error", error:err}): res.json({message: "Success"});
            })
        },
        updatePetLike: (req, res)=>{
            var petId = req.params.id;
            Pet.findByIdAndUpdate(petId, {likes: req.body.likes}, (err)=>{
                err=err ? console.log("UPDATE ERROR", err) & res.json({message: "Update Error", error:err}): res.json({message: "Success"});
            })
        },
        deletePet: (req, res)=>{
            var petId = req.params.id;
            console.log(petId);
            Pet.deleteOne({_id: petId}, (err)=>{
                err=err ? console.log("ERRORS Remove", err) & res.json({message: "Delete error", error:err}): res.json({message: "Success"})
            })
        }
    }
}
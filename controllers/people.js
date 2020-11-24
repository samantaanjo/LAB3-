const People = require('../models/people');

exports.index = async (req, res, next) => {
    try{
        const people = await People.find();
        res.status(200).json(people);
    }catch(error){
        next(error)
    }
};
exports.create = async (req, res, next) => {
    try{
        const {id,name,age,phone}= req.body;
        const ppl = await People.create({
            id: id,
            name: name,
            age:age,
            phone:phone
        });

        res.status(200).json({message:"this person was created Successfully",people:ppl});
    }catch(error){
        next(error)
    }
}; 
exports.update = async (req, res, next) => {
    try{
        const {id,name, age,phone}= req.body;
        const ppl = await People.findOneAndUpdate({id:id},
            {
                id:id,
                name:name,
                age: age,
                phone:phone
            });

            res.status(200).json({message:"this person was updated Successfully",people:ppl});
    }catch(error){
        next(error)
    }
}; 
exports.destroy = async (req, res, next) => {
    try{
        const {id} = req.body;
        await People.findOneAndDelete({id:id});
        res.status(200).json({message:"this person was deleted Successfully"});
    }catch(error){
        next(error)
    }
};

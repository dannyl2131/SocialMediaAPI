//add functions for user with module.export in here
const User = require('../models/user');

module.exports = {
    async getUsers(req,res) {
        try {
            const users = User.find();
            res.json(users)
        }
        catch(err) {
            res.status(500).json(err);
        }
    },
    async getUser(req,res) {
        try {
            const user = User.findOne({_id: req.params.userId});
            res.json(user)
        }
        catch(err) {
            res.status(500).json(err)
        }
    },
    async createUser(req,res) {
        try {
            const user = User.create(req.body);
            res.json(user);
        }
        catch(err) {
            res.status(500).json(err)
        }
    },
    async updateUser(req,res) {
        try {
            const user = User.findOneAndUpdate(
                {_id: req.params.userId},
                {$set: req.body},
                {runValidators: true}
            )
            res.json(user);
        }
        catch(err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req,res) {
        try {
            const user = User.findOneAndRemove({_id: req.params.userId});
            if(!user) {
                return res.status(404).json({message: 'No user found with this ID!'})
            }
            res.json({message: "User deleted!"});
        }
        catch(err) {
            res.status(500).json(err);
        }
    }
}
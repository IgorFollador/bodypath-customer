const database = require('../models');

class UserController {
    static async readAllUsers(req, res) {
        try {
            const allUsers = await database.Users.findAll();
            return res.status(200).json(allUsers);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async readUserById(req, res) {
        const { id } = req.params;
        try {
            const pessoa = await database.Users.findOne({ 
                where: { 
                    id: Number(id) 
                } 
            });
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createUser(req, res) {
        const formPessoa = req.body;
        try {
            const pessoa = await database.Users.create(formPessoa);
            return res.status(201).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateUser(req, res) {
        const { id } = req.params;
        const formPessoa = req.body;
        try {
            const user = await database.Users.findByPk(id);
            if(user === null) return res.status(404).json({ message: 'User not found' });
            await database.Users.update(formPessoa, {
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ message: `ID ${id} updated` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteUser(req, res) {
        const { id } = req.params;
        try {
            const user = await database.Users.findByPk(id);
            if(user === null) return res.status(404).json({ message: 'User not found' });
            await database.Users.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ message: `ID ${id} deleted` });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = UserController
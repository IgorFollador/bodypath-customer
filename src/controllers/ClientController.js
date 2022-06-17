const database = require('../models');

class ClientController {
    static async readAllClients(req, res) {
        try {
            const allClients = await database.Clients.findAll({
                include: [{ 
                    model: database.Users,
                    attributes: {exclude: ['password']}
                }]
            });
            return res.status(200).json(allClients);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async readAllClientsByProfessionalUserId(req, res) {
        const { id } = req.params; // professional's user_id

        try {
            const allClients = await database.Clients.findAll({
                include: [{ 
                    model: database.Users,
                    attributes: {exclude: ['password']}
                }],
                where: {
                    professional_id: id
                }
            });
            return res.status(200).json(allClients);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async createClient(req, res) {
        const formClient = req.body;

        const user = await database.Users.findByPk(formClient.user_id);
        if(user === null) return res.status(404).json({ message: 'User not found'})
        const client = await database.Clients.findOne({ where: {user_id: formClient.user_id }});
        if(client) return res.status(507).json({ message: 'User has been client'})
        const selectProfessional = await database.Professionals.findOne({ where: {user_id: formClient.professional_id }});
        if(selectProfessional === null) return res.status(404).json({ message: `Professional with ID ${formClient.professional_id} not found` });

        try {
            const client = await database.Clients.create(formClient);

            //to review
            const STUDENT = 4;
            if(user.profile_id != STUDENT) { // update profile if user is not client
                user.profile_id = STUDENT;
                await database.Users.update(user, {
                    where: { 
                        id: Number(user.id)
                    }
                })
            }
            
            return res.status(201).json(client);

        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async deleteClient(req, res) {
        const { id } = req.params; //USER ID

        try {
            
            const user = await database.Users.findByPk(id);
            if(user === null) return res.status(404).json({ message: 'User not found'})
            const client = await database.Clients.findOne({ where: {user_id: id} })
            if(client === null) return res.status(404).json({ message: 'User is not a Client'})

            await database.Clients.destroy({
                where: {
                    user_id: Number(id)
                }
            })
            return res.status(200).json({ message: `User with ID ${id} deleted from professional reference` });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = ClientController;
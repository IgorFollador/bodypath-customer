const database = require('../models');
const bcrypt = require('bcrypt');
class ClientController {
    static async readAllClients(req, res) {
        try {
            const allClients = await database.Clients.findAll({
                include: [{ 
                    model: database.Users,
                    attributes: {exclude: ['id', 'password']}
                }]
            });
            return res.status(200).json(allClients);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async readAllClientsByProfessionalId(req, res) {
        const { id } = req.params; // professional's id

        try {
            const allClients = await database.Clients.findAll({
                include: [{ 
                    model: database.Users,
                    attributes: {exclude: ['id', 'password', 'profile_id']}
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

    static async createReferenceClient(req, res) {
        const formClient = req.body;

        const user = await database.Users.findByPk(formClient.user_id);
        if(user === null) return res.status(404).json({ message: 'User not found'})
        const client = await database.Clients.findOne({ where: {user_id: formClient.user_id }});
        if(client) return res.status(507).json({ message: 'User has been client'})
        const selectProfessional = await database.Professionals.findOne({ where: {id: formClient.professional_id }});
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

    static async createClient(req, res) {
        const formUser = req.body;
        formUser.profile_id = 4;
        const professional_id = formUser.professional_id;
        delete formUser.professional_id;

        const selectUser = await database.Users.findOne({where: {email: formUser.email}});
        if(selectUser) return res.status(507).json({ message: 'Email has been registered' });
        if(formUser.password === null) return res.status(400).json({ message: 'Password is required' });
        if(formUser.profile_id == null | formUser.profile_id === null) formUser.profile_id = 4;
        
        const selectProfessional = await database.Professionals.findOne({ where: {id: professional_id }});
        if(selectProfessional === null) return res.status(404).json({ message: `Professional with ID ${professional_id} not found` });

        try {
            formUser.password = bcrypt.hashSync(formUser.password, 10);
            const user = await database.Users.create(formUser);
            user.password = null;
            
            const client = await database.Clients.create({ user_id: user.id, professional_id: professional_id });
            client.User = user;
            
            return res.status(201).json(client);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }

    }

    static async deleteClient(req, res) {
        const { id } = req.params; // client's ID

        try {
            const client = await database.Clients.findByPk(id)
            if(client === null) return res.status(404).json({ message: 'Client not found'})

            await database.Clients.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ message: `Client with ID ${id} deleted from professional reference and User referenced too` });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = ClientController;
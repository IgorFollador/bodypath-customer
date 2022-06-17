const database = require('../models');

class ProfessionalController {
    static async readAllProfessionals(req, res) {
        try {
            const allProfessionals = await database.Professionals.findAll({
                include: [{ 
                    model: database.Users,
                    attributes: ['firstName', 'lastName']
                }]
              });
            return res.status(200).json(allProfessionals);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async createProfessional(req, res) {
        const formProfessional = req.body;
        const user = await database.Users.findByPk(formProfessional.user_id);
        if(user === null) return res.status(404).json({ message: 'User not found'})
        const selectProfessional = await database.Professionals.findOne({ where: {user_id: formProfessional.user_id }});
        if(selectProfessional) return res.status(507).json({ message: 'User has been professional' });

        try {
            const professional = await database.Professionals.create(formProfessional);
            
            //to review
            const STUDENT = 4;
            const NUTRICIONIST = 2;
            if(user.profile_id == STUDENT) { // update profile if user is client
                user.profile_id = NUTRICIONIST;
                await database.Users.update(user, {
                    where: { 
                        id: Number(user.id)
                    }
                })
            }
            
            return res.status(201).json(professional);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async deleteProfessional(req, res) {
        const { id } = req.params; //USER ID
        
        try {
            const user = await database.Users.findByPk(id);
            if(user === null) return res.status(404).json({ message: 'User not found'})
            const professional = await database.Professionals.findOne({ where: {user_id: id} });
            if(professional === null) return res.status(404).json({ message: 'User is not a Professional'})

            await database.Professionals.destroy({
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

module.exports = ProfessionalController;
const database = require('../models');

class StudentController {
    static async readAllStudents(req, res) {
        try {
            const allStudents = await database.Students.findAll({
                include: [{ 
                    model: database.Users,
                    attributes: {exclude: ['password']}
                }]
            });
            return res.status(200).json(allStudents);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async readAllStudentsByProfessionalUserId(req, res) {
        const { id } = req.params; // professional's user_id

        try {
            const allStudents = await database.Students.findAll({
                include: [{ 
                    model: database.Users,
                    attributes: {exclude: ['password']}
                }],
                where: {
                    professional_id: id
                }
            });
            return res.status(200).json(allStudents);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async createStudent(req, res) {
        const formStudent = req.body;

        const user = await database.Users.findByPk(formStudent.user_id);
        if(user === null) return res.status(404).json({ message: 'User not found'})
        const student = await database.Students.findOne({ where: {user_id: formStudent.user_id }});
        if(student) return res.status(507).json({ message: 'User has been student'})
        const selectProfessional = await database.Professionals.findOne({ where: {user_id: formStudent.professional_id }});
        if(selectProfessional === null) return res.status(404).json({ message: `Professional with ID ${formStudent.professional_id} not found` });

        try {
            const student = await database.Students.create(formStudent);

            //to review
            const STUDENT = 4;
            if(user.profile_id != STUDENT) { // update profile if user is not student
                user.profile_id = STUDENT;
                await database.Users.update(user, {
                    where: { 
                        id: Number(user.id)
                    }
                })
            }
            
            return res.status(201).json(student);

        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async deleteStudent(req, res) {
        const { id } = req.params; //USER ID

        try {
            
            const user = await database.Users.findByPk(id);
            if(user === null) return res.status(404).json({ message: 'User not found'})
            const student = await database.Students.findOne({ where: {user_id: id} })
            if(student === null) return res.status(404).json({ message: 'User is not a Student'})

            await database.Students.destroy({
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

module.exports = StudentController;
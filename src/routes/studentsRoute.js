const { Router } = require('express');
const studentController = require("../controllers/StudentController");

const router = Router();

router.get('/students', studentController.readAllStudents);
router.get('/students/professional/:id', studentController.readAllStudentsByProfessionalUserId);
router.post('/students', studentController.createStudent);
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;
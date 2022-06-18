const { Router } = require('express');
const professionalController = require("../controllers/ProfessionalController");

const router = Router();

router.get('/professionals', professionalController.readAllProfessionals);
router.get('/professionals/:id', professionalController.readProfessionalById);
router.get('/professionals/user/:id', professionalController.readProfessionalByUserId);
router.post('/professionals', professionalController.createProfessional);
router.delete('/professionals/:id', professionalController.deleteProfessional);

module.exports = router;
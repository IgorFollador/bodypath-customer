const { Router } = require('express');
const clientController = require("../controllers/ClientController");

const router = Router();

router.get('/clients', clientController.readAllClients);
router.get('/clients/professional/:id', clientController.readAllClientsByProfessionalId);
router.post('/clients', clientController.createClient);
router.post('/clients/reference_user', clientController.createReferenceClient);
router.delete('/clients/:id', clientController.deleteClient);

module.exports = router;
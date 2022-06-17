const { Router } = require('express');
const clientController = require("../controllers/ClientController");

const router = Router();

router.get('/clients', clientController.readAllClients);
router.get('/clients/professional/:id', clientController.readAllClientsByProfessionalUserId);
router.post('/clients', clientController.createClient);
router.delete('/clients/:id', clientController.deleteClient);

module.exports = router;
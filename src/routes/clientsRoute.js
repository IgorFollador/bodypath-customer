const { Router } = require('express');
const clientController = require("../controllers/ClientController");

const router = Router();

router.get('/clients', clientController.readAllClients);
router.get('/clients/:id', clientController.readClientById);

router.get('/clients/professional/:id', clientController.readAllClientsByProfessionalId);
router.get('/clients/names/professional/:id', clientController.readAllClientsNamesByProfessionalId);

router.post('/clients', clientController.createClient);
router.post('/clients/reference_user', clientController.createReferenceClient);

router.put('/clients/:id', clientController.updateClientById);
router.delete('/clients/:id', clientController.deleteClientById);

module.exports = router;
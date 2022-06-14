const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.get('/users', UserController.readAllUsers);
router.get('/users/names', UserController.readAllNames);
router.get('/users/:id', UserController.readUserById);
router.get('/users/name/:id', UserController.readNameById);
router.post('/users', UserController.createUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
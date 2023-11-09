const express = require('express');
const servicesController = require('../controllers/servicesController');
const router = express.Router();
const { checkRole } = require('../middleware/rolesMiddleware');

// Get All Services
router.get('/', servicesController.getAllServices);

// Get Single Service by ID
router.get('/:id', servicesController.getServiceById);

// Accessible only by users with the "admin" role
router.post('/', checkRole('admin'), servicesController.createService);
router.put('/:id', checkRole('admin'), servicesController.updateService);
router.delete('/:id', checkRole('admin'), servicesController.deleteService);

module.exports = router;
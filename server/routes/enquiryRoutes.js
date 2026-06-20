const express = require('express');
const router = express.Router();
const { submitEnquiry } = require('../controllers/enquiryController');
const validateEnquiry = require('../middleware/validateEnquiry');

// POST /api/enquiry - Submit a new enquiry
router.post('/enquiry', validateEnquiry, submitEnquiry);

module.exports = router;

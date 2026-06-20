const validateEnquiry = (req, res, next) => {
  const { name, email, phone } = req.body;

  // Check if all fields are present
  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  // Validate email format
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format'
    });
  }

  // Validate phone number (must be exactly 10 digits)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({
      success: false,
      message: 'Phone number must be exactly 10 digits'
    });
  }

  // If all validations pass, proceed to the next middleware/controller
  next();
};

module.exports = validateEnquiry;

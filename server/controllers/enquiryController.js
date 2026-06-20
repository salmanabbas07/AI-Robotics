const fs = require('fs');
const path = require('path');

const submitEnquiry = (req, res) => {
  try {
    console.log('=== New Enquiry Request ===');
    console.log('Request body:', req.body);

    const { name, email, phone } = req.body;
    const enquiry = {
      name,
      email,
      phone,
      timestamp: new Date().toISOString()
    };

    // Save to JSON file
    const dataFilePath = path.join(__dirname, '../data/enquiries.json');
    const dataDir = path.dirname(dataFilePath);

    // Create data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing data or create new array
    let enquiries = [];
    if (fs.existsSync(dataFilePath)) {
      const data = fs.readFileSync(dataFilePath, 'utf8');
      enquiries = JSON.parse(data);
    }

    // Add new enquiry
    enquiries.push(enquiry);

    // Save to file
    fs.writeFileSync(dataFilePath, JSON.stringify(enquiries, null, 2));

    console.log('New enquiry received:', enquiry);
    console.log('Total enquiries:', enquiries.length);
    console.log('Data saved to:', dataFilePath);

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Registration submitted successfully'
    });

  } catch (error) {
    console.error('Error submitting enquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

module.exports = {
  submitEnquiry
};

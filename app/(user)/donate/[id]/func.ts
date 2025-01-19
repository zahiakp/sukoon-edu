// Assuming you're using Express.js for your server-side code

import axios from 'axios';
import express from 'express';

const router = express.Router();

router.get('/donate', async (req:any, res:any) => {
  const transactionId = req.query.transactionId;

  try {
    // Call PhonePe's Payment Query API using the transactionId
    const response = await axios.get(
      `https://api.phonepe.com/apis/hermes/pg/v1/transaction/status`, // Replace with actual API endpoint
      {
        headers: {
          // Add necessary headers for authentication with PhonePe API
        },
        params: {
          merchantTransactionId: transactionId,
        },
      }
    );

    // Extract relevant information from the response
    const paymentStatus = response.data.status; // Example: SUCCESS, FAILED, PENDING
    const paidAmount = response.data.amount; 
    // ... other details you need

    // Render a success/failure page with the details
    if (paymentStatus === 'SUCCESS') {
      res.render('success', { 
        transactionId, 
        paidAmount, 
        // ... other details 
      });
    } else {
      res.render('failure', { 
        transactionId, 
        // ... error message if available 
      });
    }

  } catch (error) {
    console.error('Error fetching transaction details:', error);
    res.status(500).send('Error processing payment');
  }
});

export default router;
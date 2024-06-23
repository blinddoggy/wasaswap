// api.js
import axios from 'axios';

export const sendSol = async (data) => {
  try {
    const response = await axios.post('https://asymmetricfrequency.org/solana/send-sol', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`HTTP error! status: ${error.response ? error.response.status : error.message}`);
  }
};

/* prettier-ignore */
import axios from 'axios';

// Define the API endpoint from environment variables
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

// Create a user login function
export const userLogin = async (email, password) => {
  try {
    console.log(apiEndpoint);
    // Make an HTTP POST request to the login endpoint
    const response = await axios.post(`${apiEndpoint}/admin/login`, { email, password });
    return response;
  } catch (error) {
    throw error; // Rethrow the error for handling in the component
  }
};

export const userRoles = async () => {
  try {
    // Make an HTTP POST request to the login endpoint
    const response = await axios.get(`${apiEndpoint}/admin/roles`);
    return response;
  } catch (error) {
    throw error; // Rethrow the error for handling in the component
  }
};
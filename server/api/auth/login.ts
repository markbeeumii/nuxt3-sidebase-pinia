// api/auth/login.js

export default async function login(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  try {
    console.log(email, password);
    // Here you would make a request to your authentication server to verify the credentials
    // For example, you can use axios to make a POST request to your authentication endpoint
    // Replace 'YOUR_AUTH_ENDPOINT' with your actual authentication endpoint
    //const response = await axios.post('YOUR_AUTH_ENDPOINT', { email, password });

    // Assuming your authentication server returns an access token upon successful login
    //const accessToken = response.data.accessToken;

    // Set the access token in the session or send it back to the client
    // For example, you can use a cookie or local storage to store the access token

    // Send back a success response with the access token
    //res.status(200).json({ accessToken });
  } catch (error) {
    console.error('Login failed:', error);
    // Send back an error response
    res.status(401).json({ message: 'Unauthorized' });
  }
}

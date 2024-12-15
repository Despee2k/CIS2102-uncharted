import dotenv from 'dotenv';
dotenv.config({ path: '.env' }); // Ensure dotenv is correctly loading the environment variables

import * as jwt from 'jsonwebtoken';

// Ensure JWT_SECRET is available
const JWT_SECRET = 'ahs98fh2ojgdsjfbui134b';  // Manually set it for testing purposes
if (!JWT_SECRET) {
    console.error("JWT_SECRET not loaded from .env file.");
    process.exit(1);  // Exit if the secret is not found
}

console.log("JWT_SECRET:", JWT_SECRET);  // Print secret for debugging

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczNDI3NzA1MywiZXhwIjoxNzM0Mjg0MjUzfQ.do7iuXY3mSqskJ-kfIl7yzTV6QF1l8cEYDt-2QDJEzc";  // Replace with an actual JWT token

try {
    const decoded = jwt.verify(token, JWT_SECRET);  // Verifying the token with the loaded secret
    console.log("Token is valid! Decoded payload:", decoded);
} catch (err) {
    console.error("Error verifying token:", err);
    if (err instanceof jwt.TokenExpiredError) {
        console.error("Token has expired.");
    } else if (err instanceof jwt.JsonWebTokenError) {
        console.error("Invalid token.");
    }
}

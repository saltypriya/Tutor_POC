import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/register', {
                username,
                password
            });
            setMessage(`Registered user ID: ${response.data.userId}`);
        } catch (error) {
            setMessage('Error registering user');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>

            <div>{message}</div>

            {/* Link to navigate to login page */}
            <p>
                Already have an account? <Link to="/login">Login here</Link>.
            </p>
        </div>
    );
}

export default Register;

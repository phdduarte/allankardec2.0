import React from 'react'
import { API_BASE_URL } from '../services/document.service'

const Login = () => (
    <iframe
        src={`${API_BASE_URL}/admin`}
        frameBorder="0"
        style={{ width: '100vw', height: '100vh' }}
    ></iframe>
)

export default Login

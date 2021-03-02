import React from 'react'
import { API_BASE_URL } from '../services/document.service'

const Login = props => (
    <div>
        <iframe
            src={props.urlParam}
            frameBorder="0"
            style={{ width: '100vw', height: '100vh' }}
        ></iframe>
    </div>
)

export async function getServerSideProps() {
    const urlParam = `${API_BASE_URL}/admin`
    return {
        props: {
            urlParam: urlParam
        }
    }
}

export default Login

import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { API_BASE_URL } from '../../services/document.service'

const prepareDocument = document => ({
    ...document,
    file: { url: `${API_BASE_URL}${document.file.url}` },
    cover: { url: `${API_BASE_URL}${document.cover.url}` },

})

const Uploads = () => {
    const router = useRouter()
    const id = router.query.id
    console.log(id)
    return (
        <div>
            <Head>
                <title>Allan Kardec - Uploads</title>
            </Head>
            <iframe
                src={`${API_BASE_URL}/uploads/${id}`}
                frameBorder="0"
                style={{ width: '100vw', height: '100vh' }}
            ></iframe>
        </div>
    )
}

export default Uploads

import axios from "axios"

export default async (req, res) => {
    if(req.method === 'POST') {
        const postDocument = req.body
        console.log(postDocument)
        return res.json({
            status: 'Saving post to DB',
            ...postDocument
        })
    }
    else {
        const response = await axios.get('http://134.209.174.64/documents')
        const documents = response.data
        // return res.json(documents.slice(0,20))
        return res.json(documents)
    }    
}
import redirect from 'nextjs-redirect'
import { API_BASE_URL } from '../services/document.service'

export default redirect(`${API_BASE_URL}/admin`)

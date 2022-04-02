import { createRoot } from 'react-dom/client'
import App from './App'

const container = document.getElementById('rootApp') as HTMLDivElement
const root = createRoot(container)
root.render(<App />)

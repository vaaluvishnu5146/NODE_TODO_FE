import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

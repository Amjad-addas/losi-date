import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root
root.render(

<BrowserRouter>
<App />
</BrowserRouter>


); // Render the app using the root
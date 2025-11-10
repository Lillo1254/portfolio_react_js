import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter, Routes, Route } from 'react-router';
import AboutMe from './page/AboutMe.jsx';

createRoot(document.getElementById('root')).render(

    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </HashRouter>
 
);

import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Masters from './components/Masters';
import Services from './components/Services';
import Contacts from './components/Contacts';
import './styles.css';

const links = [
  { to: '/', text: 'Главная' },
  { to: '/masters', text: 'Мастера' },
  { to: '/services', text: 'Услуги' },
  { to: '/contacts', text: 'Контакты' },
];

const routes = [
  { path: '/', element: <Home /> },
  { path: '/masters', element: <Masters /> },
  { path: '/masters/:id', element: <Masters /> },
  { path: '/services', element: <Services /> },
  { path: '/contacts', element: <Contacts /> },
];

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <img src={process.env.PUBLIC_URL + '/logotype.png'} alt="Логотип" className="logo" />
          <h1 className="main-title">Центр красоты <em>"XXI век"</em></h1>
          <nav className="navbar">
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.to}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className="content">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
        <footer className="footer">
          <span>©</span> <strong>Центр красоты <em>"XXI век"</em> 2024</strong>
        </footer>
      </div>
    </Router>
  );
}

export default App;

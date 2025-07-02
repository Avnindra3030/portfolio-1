import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand">Avnindra Singh</a>
        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <span className="navbar-toggle-icon">&#9776;</span>
        </button>
        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="navbar-link" onClick={() => setOpen(false)}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 
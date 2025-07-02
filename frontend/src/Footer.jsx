function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://github.com/Avnindra3030" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="GitHub">
          GitHub
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn">
          LinkedIn
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="Twitter">
          Twitter
        </a>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Avnindra Kumar Singh. All rights reserved.</p>
    </footer>
  );
}

export default Footer; 
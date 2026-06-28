// src/componentes/Footer/Footer.jsx


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Lado esquerdo: Copyright */}
                <span className="copyright">
                    © {new Date().getFullYear()} Copyright progirls.com.br
                </span>
                {/* Lado direito: ícones/Links */}
                <div className="social-icons">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
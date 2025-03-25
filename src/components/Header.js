import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Verifica o tamanho da tela para alternar entre menu mobile e desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setAberto(false); // Fecha o menu em telas maiores
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className=" container-fluid header-container">
      <div className="logo"><img src="logo_white-removebg2.png" width="200px"></img></div>
      <div className="titulo">Aquafish Lda</div>

      {/* Menu para telas maiores */}
      {!isMobile && (
        <nav className="nav-desktop">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
        
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </nav>
      )}

      {/* Menu hambúrguer para telas menores */}
      {isMobile && (
        <>
          <button 
            className="menu-btn" 
            onClick={() => setAberto(true)}
          >
            ☰
          </button>

          <nav className={`nav-menu ${aberto ? "aberto" : ""}`}>
            <button 
              className="fechar-btn" 
              onClick={() => setAberto(false)}
            >
              ✖
            </button>

            <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            </ul>
          </nav>

          {aberto && <div className="overlay" onClick={() => setAberto(false)} />}
        </>
      )}
    </header>
  );
}

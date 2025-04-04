import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../imagens/logo_white-removebg2.png"
import img2 from "../imagens/circle_14025711.png"
export default function Header() {
  const [aberto, setAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrollTo, setScrollTo] = useState(false);

  // Verifica o tamanho da tela para alternar entre menu mobile e desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setAberto(false); // Fecha o menu em telas maiores
      }
    };

    // Função de scroll
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrollTo(true);
      } else {
        setScrollTo(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener("resize", handleResize);

    // Remove os eventos ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Adiciona ou remove a classe 'blurred' no body
  useEffect(() => {
    const container= document.querySelector(".containner");
    if (aberto) {
      container.style.filter = 'blur(5px)';
    } else {
      container.style.filter = 'none';
    }

    // Limpeza para remover o desfoque ao desmontar
    return () => {
      document.body.style.filter = 'none';
    };
  }, [aberto]);

  return (
    <header className={`container-fluid header-container ${scrollTo ? "scrolled" : ""}`}>
      <div className="titulo">Aquafish Lda
      <p> 
        
        <a href="mailto:Aquafishlda@gmail.com"> <img class="logoF" width="15px" src={img2} alt=""/> Email:  Aquafishlda@gmail.com</a> 
        </p>
      </div>
      <div className="logo"><img src={logo} width="200px"></img></div>

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

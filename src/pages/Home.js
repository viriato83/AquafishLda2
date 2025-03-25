import { Link } from "react-router-dom";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import img1 from "../imagens/1.jpg";
import img2 from "../imagens/IMG-20250325-WA0009.jpg";
import img3 from "../imagens/phone-call.png";
import img4 from "../imagens/IMG-20240207-WA0072.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <main className="home-container">

          {/* ✅ Banner principal */}
          <section className="hero-section ">
            <div className="hero-content">
              <h1>Peixe Fresco, Sabor Incomparável!</h1>
              <p>Produção e venda de tilápia com qualidade garantida.</p>
              <a href="#products" className="btn btn-primary">Conheça Nossos Produtos</a>
            </div>
          </section>


          {/* ✅ Produtos em destaque */}
          <section className="products-section" id="products">
            <h2 className="section-title">Nossos Produtos</h2>
            <div className="product-cards">

              <div className="card">
                <img src={img1} alt="Tilápia Fresca" className="card-img" />
                <div className="card-content">
                  <h3>Tilápia Fresca</h3>
                  <p>Peixe saudável e saboroso, direto da nossa produção.</p>
                  <button className="btn btn-primary">
                  <Link to="/contacts" style={{color:"white" }}>Saiba Mais</Link>
              </button>
                </div>
              </div>

              <div className="card">
                <img src={img2} alt="Tilápia Congelada" className="card-img" />
                <div className="card-content">
                  <h3>Tilápia Congelada</h3>
                  <p>Ideal para exportação e armazenamento prolongado.</p>
                  <button className="btn btn-primary">
                  <Link to="/contacts" style={{color:"white" }}>Saiba Mais</Link>
              </button>
                </div>
              </div>

            </div>
          </section>
          <section className="alevinos ale">
          <div className="card ale">
                <img src={img4} alt="Tilápia Congelada" className="card-img" />
                <div className="card-content">
                  <h3>Alevinos de Alta qualidade</h3>
                  <p>Os alevinos recebem cuidados premium podendo proporcionar melhor crescimento e qualidade </p>
                  
                </div>
              </div>
          </section>
          {/* ✅ Seção Sobre */}
          <section className="about-section">
            <div className="about-content">
              <h2>Sobre a Aquafish</h2>
              <p>
                A <strong>Aquafish Lda</strong> é referência em produção e venda de tilápia em Moçambique. 
                Nosso compromisso é levar peixes frescos e saudáveis direto da produção para você.
              </p>
              <button className="btn btn-primary">
                <Link to="/about" style={{color:"white" }}>Saiba Mais</Link>
              </button>
            </div>
          </section>
          {/* ✅ Contato */}
          <section className="contact-section" id="contact">
            <div className="contact-content">
              <h2>Fale Conosco</h2>
              <p>Entre em contato para saber mais sobre nossos produtos e serviços.</p>
              <a href="tel:+258852446502" className="btn btn-primary" style={{color:"blue" }}>Ligue Agora</a>
            </div>
          </section>

        </main>
      </Container>
      <Footer></Footer>
    </>
  );
}

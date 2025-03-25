
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import img1 from "../imagens/IMG-20250316-WA0011.jpg"

export default function About() {
  return (
    <>
      <Header />
      <Container>
        <main className="about-container">
          <section className="about-intro">
            <h1>Sobre a Aquafish</h1>
            <p>
              A <strong>Aquafish Lda</strong> é uma empresa moçambicana localizada em Quissico, Inhambane, 
              especializada na produção e comercialização de peixe tilápia e pesca de peixe do mar. 
              Nosso compromisso é oferecer produtos de alta qualidade, garantindo sustentabilidade e frescor.
            </p>
          </section>

          <div className="card enc">
                <img src={img1} alt="Encubadoras" className="card-img" />
                <div className="card-content ">
                  <h3>Produção de Tilápias</h3>
                  <p> Utilizamos incubadoras modernas para garantir a melhor qualidade na criação de tilápias. 
              Além disso, produzimos alevinos saudáveis e resistentes, proporcionando um ciclo sustentável 
              de produção para atender a demanda do mercado.</p>
                
                </div>
              </div>
          <section className="about-fishing">
            <h2>Pesca de Peixe do Mar</h2>
            <p>
              Além da produção de tilápias, realizamos pesca artesanal e sustentável de diversas espécies 
              de peixe do mar, garantindo frescor e qualidade para nossos clientes.
            </p>
          </section>

          <section className="about-locations">
            <h2>Nossas Lojas</h2>
            <p>
              Para atender melhor nossos clientes, possuímos duas lojas físicas:
            </p>
            <ul>
              <li><strong> 📍 Maputo:</strong> Loja localizada em Khongolote, Mercado.</li>
              <li><strong >📍 Quissico:</strong> Loja localizada no centro da cidade.</li>
            </ul>
          </section>
        </main>
      </Container>
      <Footer></Footer>
    </>
  );
}

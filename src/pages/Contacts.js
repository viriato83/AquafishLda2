import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contacts() {
  return (
    <>
      <Header />
      <Container>
        <main className="contacts-container">
          <section className="contact-info">
            <h1>Entre em Contato</h1>
            <p>Estamos à disposição para esclarecer suas dúvidas e atender às suas solicitações.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h3>📍 Endereço</h3>
                <p>Quissico, Inhambane, Moçambique</p>
                <p>Khongolote_Mercado, Maputo, Moçambique</p>
              </div>
              <div className="contact-item">
                <h3>📞 Telefone</h3>
                <p><a href="tel:+258123456789">+258 85 24 46 502</a></p>
                <p><a href="tel:+258123456789">+258 87 40 33 507</a></p>
                <p><a href="tel:+258123456789">+258 84 64 22 361</a></p>
              </div>
              <div className="contact-item">
                <h3>📧 E-mail</h3>
                <p><a href="mailto:Aquafishlda@gmail.com">Aquafishlda@gmail.comm</a></p>
              </div>
            </div>
          </section>

        </main>
      </Container>
      <Footer></Footer>
    </>
  );
}

import Container from "../components/Container";
import Header from "../components/Header";
import img1 from "../imagens/1.jpg";
import img2 from "../imagens/IMG-20250325-WA0009.jpg";
import img3 from "../imagens/peixeImg3.jpg";
import img4 from "../imagens/garoupa.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Products(){
    const produtos = [
        { id: 1, nome: "Tilápia Fresca", descricao: "Peixe saudável e saboroso.", img: img1 },
        { id: 2, nome: "Tilápia Congelada", descricao: "Ideal para exportação.", img: img2 },
        { id: 3, nome: "Filet de Tilápia", descricao: "Pronto para consumo.", img: img3 },
        { id: 4, nome: "Peixe Do Mar", descricao: "Sabor marcante e único.", img: img4 }
      ];
    return (
      <>
        <Header>
        </Header>
        <Container>
        <motion.section
          className="contact-page "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
                    <section className="container-marketing">
                <h2 className="section-title">Nossos Produtos</h2>
                <p className="section-description">
                    Peixes de qualidade produzidos com os mais altos padrões para garantir sabor e frescor.
                </p>

                <div className="grid-container">
                    {produtos.map((produto) => (
                    <div className="card" key={produto.id}>
                        <img src={produto.img} alt={produto.nome} className="card-img" />
                        
                        <div className="card-content">
                        <h3>{produto.nome}</h3>
                        <p>{produto.descricao}</p>
                        <button className="btn btn-primary">
                  <Link to="/contacts" style={{color:"white" }}>Saiba Mais</Link>
              </button>
                        </div>
                    </div>
                    ))}
                </div>
                </section>
                </motion.section>
        </Container>
        <Footer></Footer>
        </>
    )
}
import img1 from "../imagens/phone-call.png"
import img2 from "../imagens/circle_14025711.png"
export default function Footer(){
    return( 
        
        <footer>
         <div className="footer-content">
            <p>&copy; 2025 AquaFish Sociedade Unipessoal. Todos os direitos reservados. 
            </p> 
        
                <a href="mailto:Aquafishlda@gmail.com"> <img class="logoF" width="15px" src={img2} alt=""/> Email:  Aquafishlda@gmail.com</a> 
                <br></br>
                <a target="_blank"  href="tel:+258878007360" > <img width="15px" class="logoF2" src={img1} alt=""/> Cell:  +258878007360/ 852446502</a>
        </div>
    </footer>
    )

    
}
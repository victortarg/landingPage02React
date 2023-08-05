import Textos from "./textos/textos";
import Imagens from "./imagens/imagem";
import SocialMedia from "./socialMedia/socialMedia";
import "./conteudo.css"

function Conteudo() {
    return(
        <div className="content">
            <div className="text">
                <Textos/>
                <SocialMedia/>
            </div>
            <Imagens/>
        </div>
    )
}

export default Conteudo;
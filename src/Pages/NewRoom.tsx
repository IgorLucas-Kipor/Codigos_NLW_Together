import {Link} from 'react-router-dom'
import illustrationImg from '../Assets/images/illustration.svg'
import logoImg from '../Assets/images/logo.svg'

import { Button } from '../Components/Button';
import '../Styles/auth.scss'
import { useAuth } from '../Hooks/useAuth';
export function NewRoom() {
  const {user} = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Perguntas e Respostas ao vivo! </strong>
        <p>Tire as dúvidas da sua audiência em tempo real!</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Imagem do logo da aplicação" />
          <h2>Criar uma nova sala</h2>
          <form action="">
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit" >
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
import { useHistory } from 'react-router-dom';
import illustrationImg from '../Assets/images/illustration.svg';
import logoImg from '../Assets/images/logo.svg';
import googleIconImage from '../Assets/images/google-icon.svg';

import { Button } from '../Components/Button';
import '../Styles/auth.scss';
import { useAuth } from '../Hooks/useAuth';

// webpack (snowpack, vite, ...)
export function Home() {
  const history = useHistory();
  const {user, signInWithGoogle}= useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/rooms/new')
  }

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
            <button className="create-room" onClick={handleCreateRoom}>
              <img src={googleIconImage} alt="Imagem do ícone da Google" />
              Crie sua sala com o Google
            </button>
            <div className="separator">ou entre em uma sala</div>
            <form action="">
              <input type="text" placeholder="Digite o código da sala" />
              <Button type="submit" >
                Entrar na sala
              </Button>
            </form>
          </div>
        </main>
      </div>
    )
}
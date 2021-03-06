import { Home } from "./Pages/Home";
import { NewRoom } from "./Pages/NewRoom"
import { BrowserRouter, Route } from "react-router-dom"
import { AuthContextProvider } from './Contexts/AuthContext'



function App() {

  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

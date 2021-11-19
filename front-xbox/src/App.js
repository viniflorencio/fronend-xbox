
import './App.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Perfil from './pages/Perfil/Perfil';
import Admin from './pages/Admin/Admin';
import AddJogo from './pages/AddJogo/AddJogo';
import CriarPerfil from './pages/CriarPerfil/CriarPerfil';
import Login from './pages/Login/Login';
import EditarPerfil from './pages/EditarPerfil/EditarPerfil';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path='/usuario'/>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/perfil' exact={true} component={Perfil}/>
        <Route path='/admin' exact={true} component={Admin}/>
        <Route path='/AddJogo' exact={true} component={AddJogo}/>
        <Route path='/CriarPerfil' exact={true} component={CriarPerfil}/>
        <Route path='/Login' exact={true} component={Login}/>
        <Route path='/EditarPerfil' exact={true} component={EditarPerfil}/>
        <Route path='/CriarPerfil' exact={true} component={CriarPerfil}/>

        </Switch>
    </Router>
    </div>
  )
}

export default App;

import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import MainView from './pages/MainView';
import CartView from './pages/CartView';
import EditView from './pages/EditView';
import CreateView from './pages/CreateView';


function App() {
    return (
        <div className="App-body">
            <Navbar/>

                <div className="content">
                    <Switch>
                        <Route path="/" exact component={MainView}/>
                        <Route path="/EditView" component={EditView}/>
                        <Route path="/CreateView" component={CreateView}/>
                        <Route path="/CartView" component={CartView}/>
                        <Redirect to={'/'}/>
                    </Switch>
                </div>
         </div>
    );
}

export default App;

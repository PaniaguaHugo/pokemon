import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import Pokedex from './pages/PokedexPage'

export default function AppRouter(){

    return(
    <Router>
        <Switch>
            <Route exact path="/pokedex" component={Pokedex}/>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="*">
                <NotFoundPage />
            </Route>
        </Switch>
    </Router>
    )
}


import Home from '../pages/Home'
import NewComics from '../pages/NewComics'
import Movies from '../pages/Movies'
import { Switch, Route } from 'react-router-dom'


 function Routes(){
  return (
    <Switch>
      <Route path="/movies" component={Movies}/>
      <Route path="/newcomics" component={NewComics}/>
      <Route path="/" component={Home} exact/>
    </Switch>
  );
}

export default Routes;

import {BrowserRouter as Router, Route, Switch ,Link} from 'react-router-dom';
import Home from '../pages/home';
import Trending from '../components/trendingGiphy';
const AppRouter =()=>{
    
    return (
   
        <Router>
            <div>
               
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/trending">Trending</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/trending" component={Trending}/>
                </Switch>
            </div>
        </Router>
    )
}
export default AppRouter;



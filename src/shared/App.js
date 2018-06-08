import React, {Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home, Posts} from 'pages';
import Menu from 'components/Menu';
import CounterContainer from 'containers/CounterContainer';

class App extends Component{
    render(){
        return(
            <div>
            <Menu />
                <Route exact path ='/' component={Home} />
                <Switch>
                    <Route path ='/counter/:name' component={CounterContainer} />
                    <Route path ='/counter' component={CounterContainer} />
                </Switch>
                <Route path="/posts" component={Posts} />
            </div>
        );
    }
}

export default App;

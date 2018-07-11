import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Index from './page/index.jsx';
import List from './page/list.jsx';

class App extends Component {
    render() {
        return (
            <Router history={ browserHistory }>
                <Route path="/react" component={ Index }></Route>
                <Route path="/react/list" component={ List }></Route>
            </Router>
        )
    }
}

export default App;
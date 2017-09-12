import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component{
    render(){
        var user = {
            name: 'React',
            hobbies: ['sitting','writing','listening', 'none']
        };
        return(
            <div className="container">
                <Header />
                <br />
                <Home name={'Max'} age={27} user={user}>
                    <h1 className="display-6">Insert children here</h1>
                </Home>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));
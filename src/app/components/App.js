import React from 'react';

export class App extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="display-3">Hello React!</h1>
                        <hr className="my-4" />
                    </div>
                </div>
            </div>
        );
    }
}
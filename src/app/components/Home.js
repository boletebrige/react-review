import React from 'react';

export class Home extends React.Component{
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge
        };
        console.log('before');
    }
    onAdd(){
        // this.age += 2;
        // console.log(this.age);
        // console.log(this.state);
        this.setState({
            age: this.state.age + 3
        });
    }
    render(){
        let content = 'This is conetent';
        console.log('onrender');
        return(
            <div className="row">
                <div className="col">
                    <h1 className="display-4">Hello { this.props.user.name } Component</h1>
                    <hr className="my-4" />
                    <p>{ content }</p>
                    <p>Age: { this.state.age }</p>
                    { this.props.children }
                    <button onClick={this.onAdd.bind(this)} className="btn btn-primary">Add</button>
                </div>
            </div>
        );
    }
}

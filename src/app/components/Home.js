import React from 'react';

export class Home extends React.Component{
    constructor(props) {
        super();
        this.age = props.age;
    }
    onAdd(){
        this.age += 2;
        console.log(this.age);
    }
    render(){
        let content = 'This is conetent';
        console.log(this.props.user.hobbies);
        return(
            <div className="row">
                <div className="col">
                    <h1 className="display-4">Hello { this.props.user.name } Component</h1>
                    <hr className="my-4" />
                    <p>{ content }</p>
                    <p>Age: { this.age }</p>
                    { this.props.children }
                    <button onClick={this.onAdd.bind(this)} className="btn btn-primary">Add</button>
                </div>
            </div>
        );
    }
}

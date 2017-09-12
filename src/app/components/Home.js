import React from 'react';

export class Home extends React.Component{
    render(){
        let content = 'This is conetent';
        console.log(this.props.user.hobbies);
        return(
            <div className="row">
                <div className="col">
                    <h1 className="display-4">Hello { this.props.user.name } Component</h1>
                    <hr className="my-4" />
                    <p>{ content }</p>
                    <ul>
                        { this.props.user.hobbies.map((hobby, i) => <li key={i} >{ hobby }</li>) }
                    </ul>
                    { this.props.children }
                </div>
            </div>
        );
    }
}
// PropTypes via the main React package is deprecated, and will be removed in  React v16.0.
// Home.propTypes = {
//     name: React.PropTypes.string,
//     age: React.PropTypes.number,
//     user: React.PropTypes.object
// };
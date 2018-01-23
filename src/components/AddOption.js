import React from 'react';

// below we cannot change to stateless functional component because it has state inside
export default class AddOption extends React.Component {
    // the only function that is not in parent class. Because we modify some form here
    // below method takes as parameter 'event'
    state = {
        error: undefined
    };
    handleAddOption = (e) => {
        //prevents default form submission
        e.preventDefault();
        // trim method removes spaces before and after the string
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button"> Add Option </button>
                </form>
            </div>
        )
    }
}

// below stateless functional component. We must then change 'ReactDOM.render' to incorporate User
// but do not have access to this.props. We must place props as parameter
// they are faster than simple state objects
// if we can we should use them
// basically we should convert some classes into stateless functional components as below

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };
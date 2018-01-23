// our React component is our global

// const obj = {
//   name: "Jason",
//   getName() {
//       return this.name;
//   }  
// };

// // only this way we can access method from 'obj' below
// // bind is needed for binding objects and methods
// const getName = obj.getName.bind(obj);

// below 'options' is actually our state

// stateless functional component - some components are not state objects just functions
// if we have component without state we can replace it with 'const' - stateless functional component

// Lifecycle methods can only be used in Class components not in stateless functional components
// LIFECYCLE METHODS:
// MOUNT
// UPDATE
// UNMOUNT

// we will use localStorage to save some data instead of database for now
// localStorage stores just string
// localStorage.getItem('name'), localStorage.removeItem('name')

// There are 2 JSON methods which will be used
// JSON.stringify - converts data to string value
// JSON.parse - converts JSON object to JS object

// props can be passed from parent to children, can also other way around
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
    // both below returns us information about changes in given component if it is class type
    // below 3 lifecycle methods are used for storing data in localStorage
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }  
        } catch (e) {
            // do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    // this fires just before component is unmounted
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    // below we are setting object
    handleDeleteOptions() {
        // below is going to run only if option array is empty, else it won't be run
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick() {
        // this.setState(())
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option){
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } 
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in hands of a computer";

        return (
            <div>
            {/*Below we are nesting components in Parent component */}
                <Header title = {title} subtitle = {subtitle} />
                <Action 
                hasOptions={this.state.options.length > 0} 
                handlePick={this.handlePick}
                />
                <Options 
                options = {this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}

// this.props is used to access properties of component. So we can make Component dynamic 
// this.props is used for the communication between components
const Header = (props) => {
    return (
        // below route <div>
        <div>
            <h1>{props.title}</h1>
            {/* below is much more efficient. Subtitle will be shown only if it present */}
           {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

// below default props for Header
Header.defaultProps = {
    title: 'Indecision'
};
// stateless functional component
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What should I do?
                </button>
        </div>
    )
}

// above we replaced with stateless functional component
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                 onClick={this.props.handlePick}
//                 disabled = {!this.props.hasOptions}
//                 >What should I do?
//                 </button>
//             </div>
//         )
//     }
// }
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option
                        key={option} 
                        optionText={option} 
                        handleDeleteOption = {props.handleDeleteOption}
                        />
                ))
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
            onClick ={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
            >
            Remove
            </button>
        </div>
    )
}


// below we cannot change to stateless functional component because it has state inside
class AddOption extends React.Component {
    // the only function that is not in parent class. Because we modify some form here
    // below method takes as parameter 'event'
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        //prevents default form submission
        e.preventDefault();
        // trim method removes spaces before and after the string
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }));

        if (!error){
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button> Add Option </button>
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

// below we are rendering the whole app
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
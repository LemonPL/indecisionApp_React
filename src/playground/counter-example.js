// below we are attaching old methods of components through 'super' because we want to add new methods
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // below setting up the default state object for counter to be 0
        this.state = {
          count: 0
        };
    }
    componentDidMount() {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);

            if(!isNaN(count)) {
                this.setState(() => ({ count }));
            }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }
    // this fires just before component is unmounted
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    handleAddOne() {
        // below rendering. After modyfing the state it is rendered automatically
        // in function we have access to previous state
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            };
        });
    };
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    };
    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            };
        });
    };
    // below is actually showing what is being implemented to the screen
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )};
}

// if there is no count it will start at 0
// Counter.defaultProps = {
//     count: 0
// }

// even if there is default it will start at -10
ReactDOM.render(<Counter />, document.getElementById('app'));









// OLD VERSION
// let count = 0;
// let addOne = () => {
//     count++;
//     renderCounterApp();
// };
// let minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById("app");
// // curly braces are for JSX
// // for rendering application - two parameters (JSX, element);
// // to use JSX we need BABEL

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1> Count: {count}</h1>
//             <button onClick={addOne} >+1</button>
//             <button onClick={minusOne} >-1</button>
//             <button onClick={reset} >reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
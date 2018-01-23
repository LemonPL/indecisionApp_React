console.log("App.js is running");

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) =>{
            return {
                visibility: !prevState.visibility
            }
        });
    };
    render(){
        const app = {
            title: "Visibility Toggle",
            option: 'Here you have all the details'
        }
        return(
            <div>
                <h1>{app.title}</h1>
                <button onClick={this.handleToggleVisibility} >
                    {this.state.visibility ? "Hide details" : "Show details"}
                </button>
                {
                    this.state.visibility && (
                        <div>
                            <p>{app.option}</p>
                        </div>
                    )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
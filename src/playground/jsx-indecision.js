console.log("App.js is running");

// app is an object storing some data
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
}

const onFormSubmit = (e) => {
    // below prevents from constant rendering/ refreshing the page
    // e -> event
    e.preventDefault();


    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
}

// JSX below - JavaScript XML - JS syntax extension. It is compiled into code for browser in scripts/app.js
// objects are not supported in JSX, but arrays, numbers, strings are supported
// 'null', 'undefined', 'boolean' is not supported. It will be ommited in rendering

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll} >Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>Option: {option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button> Add Option </button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();


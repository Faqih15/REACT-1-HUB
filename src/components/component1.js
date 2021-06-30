import  { Component } from 'react';
import Component1 from "./components.Component1"



function Welcome(props) {
    return <h1>Halo, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);

function Welcome(props) {
    return <h1>Halo, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Siri" />
            <Welcome name="Suru" />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
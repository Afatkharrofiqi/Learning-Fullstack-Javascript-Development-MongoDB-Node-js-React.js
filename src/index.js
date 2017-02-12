import React from 'react';
import ReactDOM from 'react-dom';

//const color = Math.random() > 0.5 ? 'green' : 'red';

const App = () => {
    return ( 
        <h2 className = "text-center" >
        Hello React with JSX!!
        </h2>
    );
};

ReactDOM.render(
    // React.createElement('h2', null, 'Hello ReactasdSD'),
    <App /> ,
    document.getElementById('root')
);
import React from "react";

function Great(props) {
   function clicked() {
        alert('clciked');
    }
    return <div>
        <h1>Hi this is {props.name}</h1>
        <button onClick={clicked}>  functional</button>
    </div>
}

// const Great = () =>  <div><h1>Hi this is Sivabalan</h1></div>;
// const Great = () =>  React.createElement('div',{id: 'name', className: 'nameClass'}, React.createElement('h1',null,'Hi this is Sivabalan with JS'));

export default Great;
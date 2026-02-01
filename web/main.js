
const React = window.React;
const ReactDOM = window.ReactDOM;


function Name(){
    return  <h1>goutham</h1>;
}

function Want(){
    return <h2>Money</h2>
}


function Oneui(){
    return <>
     <h1>what is my name</h1>
     <Name/>
     <Want/>
    </>
}


const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render( <Oneui/>);

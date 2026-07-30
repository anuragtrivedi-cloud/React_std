
// const element = React.createElement('h1',{id:'title'},"Hello coder army");

// const element2 = React.createElement('div',null,
//     React.createElement('h1',null,"Hello"),
//     React.createElement('h2',null,"Everyone")
// );

// const root = createRoot(document.getElementById('root'));

// root.render(element);
// root.render(element2);


// JSX: javascript XML: Look like HTML
// JSX --> React.createElement() --> React Element(JS Object) --> Real DOM(HTML Element)
//     Babel                     React                       React DOM
// const element = <h1 id ="title" className="first">Hello coder army</h1>

// // React Element
// const element2 = (<div>
//     <h1>Hello coder army</h1>
//     <h2>Kaise ho</h2>
// </div>
// )




// React Component 
// function App(name){
//     return (
//         <h1>Hello Everyone {name}</h1>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(App("kya haal"));


// text/element: Javascript ka expression aap iske andar likh sakte hain
// Number, string, true false, null, undefined, array, object

// Number, string, array
// true false null undefined (render honge lekin kuch display nahi hoga)
// Object: Error

// const isLoggedIn = true;
// const element = <h1>Hello Coder {isLoggedIn?<h2>Logged In</h2>:<h2>Kindly SignIn</h2>}</h1>


// const courses = ["HTML","CSS","Javascript","React"];
// // [<li>HTML</li>,<li>CSS</li>,<li>JavaScript</li>,<li>React</li>]
// const element = (
// <ul>
//     {courses.map(cources => <li>{cources}</li>)}
// </ul>
// )



// function App(props){

//     return (
//         <h1>Hello army {props.name} {props.age}</h1>
//     )
// }
// {
//     name:"Anurag"
//     age:21
// }
// const ab = {background:"orange",color:"white"}
// const element = <App name = "Anurag" age = {21}></App>

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(element);





/////////////SMALL PROJECT//////////////////
function Header({name}){
    return (<h1>Welcome to the Laal kua {name}</h1>)
}

function Main({user}){
    return (
        <>
        <h1>Connected different cities Ways</h1>
        <h1>City {user.city}</h1>
        <h2>Distance from Gaziabad {user.distance}</h2>
        </>
    )
}
function Footer(){
    return(
        <h1>Thanks for Visit
            What's your feedback
        </h1>
        
    )
}

function App(){
    return(
    <>
    <Header name = "Anurag"></Header>
    <Main user = {{city : "Kanpur",distance : 300}}></Main>
    <Footer></Footer>
    </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);

// custom React
// React is an object which has a method called createElement which takes 3 parameters tag, attributes and children. It creates an element using document.createElement and assigns the attributes to the element. It also assigns the children to the textContent of the element. It returns the element.

// attributes={
//     className:"element",
//     id:"first,
//     style:{
//      fontSize:"30px",
//      backgroundColor:"orange",
//      color:"white"}
// }



// element ={
//     tag:"h1",
//     textContent:"Hello Coder Army",
//     className:"element",
//     id:"first",
//     style:{
//      fontSize:"30px",
//      backgroundColor:"orange",
//      color:"white"}
// }


// const React = {
//     createElement: function(tag,attributes,children){
    
//     const element = document.createElement(tag);
//     element.textContent = children;
    
//     for(const key in attributes){
//         if(key==='style'){
//             Object.assign(element.style, attributes.style);
//         }
//         else{
//         element[key] = attributes[key];
//         }
//     }


//     return element;

//     }
// }

// const ReactDOM = {
//     render: function(child, parent){
//         parent.append(child);
//     }
// }
const element1 = React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello Coder Army");
const element2 = React.createElement('h2',{className:"element",id:"second",style:{fontSize:"20px",backgroundColor:"pink",color:"green"}},"Strike is launched");




const root = document.getElementById('root');
ReactDOM.render(element1,root);
ReactDOM.render(element2,root);



// const reactElement = {
//     type:'h1',
//     props:{
//         className:"element",
//         id:"first",
//         style:{fontSize:"30px",backgroundColor:"orange",color:"white"},
//         children: "Hello Coder Army"
//     }
// }

const ReactDOM = {
    render: function(reactElement,root){
       
       root.innerHTML = '';

       const element =  document.createElement(reactElement.type);
        
      const {props} = reactElement;

      for(const key in props){
        if(key==='style'){
            Object.assign(element.style,props.style);
        }
        else if(key==='children'){
            element.textContent = props[key];
        }
        else{
            element[key] = props[key];
        }
      }

      root.append(element);
    }
}

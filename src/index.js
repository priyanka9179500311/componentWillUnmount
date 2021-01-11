//import area

import React from 'react';
import ReactDOM from 'react-dom';

//Create an Child class Component
class Child extends React.Component{
    //1.property
    
    //2.Constructor

    //3.Method
    componentWillUnmount(){
        alert('This child Component is going to unmount');
    }
    //Every method must have render method
    render(){
        //Every render method always return HTML
        return  <h1>Welcome to Myclass</h1>;
    }
}

//Create an Parent class Component
class Myclass extends React.Component{
    //1. Property
  //  state = {};
    //2. Constructor
    constructor(props){
        super(props);
        //Th role of constructor is to initialize the members
        this.state = {show:true};
             
    }

    //3. Method
    //Every method must have render method
    deleteChild = ()=>{
        //alert('hi');
        this.setState({
            show:false
        });
        //alert(this.state.show);
    }
    render(){
        var header;//statement1
        if(this.state.show){//statement2
            //alert('True');
            //console.log('true');
            header = <Child/>;
        }

        //Every render method always return HTML
        return(
            <div>
               { header }
               <button onClick={ this.deleteChild}>Delete Child</button>
            </div>
        );
    }
}

//object.method();
ReactDOM.render(<Myclass />,document.getElementById('root'));//Actual argument 
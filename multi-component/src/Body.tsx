import React, { Component } from 'react';
interface Istate{}
interface Iprops{}
class Body extends Component <Iprops ,Istate>{
    private constructor(props:Iprops) {
        super(props);
       
        
     }  
    render(){
        return(
            <React.Fragment>
            <h2>Women</h2>
            <h2>MEn</h2>
            <h2>Kids</h2>
            <h2>Woolen</h2>
            </React.Fragment>
        )
    }
};
export default Body;

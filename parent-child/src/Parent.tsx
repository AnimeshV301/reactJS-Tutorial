import React, { Component } from "react";
import Child from "./Child"
interface Iprops{}
interface Istate{
    "Sub_one":String,
    "Sub_two":String,
    "Sub_three":String
}
class Parent extends Component<Iprops,Istate>{
    public constructor(props:Iprops){
        super(props);
        this.state={
            "Sub_one":"ReactJs",
            "Sub_two":"Vuejs",
            "Sub_three":"Angular"
        }
    }
    myfun =(arg1:any)=>{
           this.setState({
               Sub_one :arg1.key1,
               Sub_two :arg1.key2,
               Sub_three:arg1.key3
           })
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.state.Sub_one}</h1>
                <h1>{this.state.Sub_two}</h1>
                <h1>{this.state.Sub_three}</h1>
                <Child key1={this.myfun}></Child>
            </React.Fragment>
        )
    }
};
export default Parent;
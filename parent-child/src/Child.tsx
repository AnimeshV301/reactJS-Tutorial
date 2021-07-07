import React, { Component } from "react";
interface Istate{}
interface Iprops{
    key1 :(arg1:any)=>void;
}
class Child extends Component<Iprops ,Istate>{
    public constructor(props:Iprops){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <button onClick={()=>{this.props.key1({"key1":"Typescript","key2":"Javascript","key3":"HTML"})}}>Change</button>
            </React.Fragment>
        )
    }
}
export default Child;
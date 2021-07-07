import React, { Component } from "react";
import Third from "./Third"

interface Iprops{
    key1:String,
    key2:Number,
    key3:any[]
};
interface Istate{}
class Second1 extends Component<Iprops ,Istate>{
    public constructor(props:Iprops){
        super(props);
        
    }
    render(){
        
        return(
            <React.Fragment>
                <Third   key1 ={this.props.key1}
                    key2 ={this.props.key2}
                    key3 ={this.props.key3}
                    key4 ={this.props.children}
                  >
                   
                </Third>
            </React.Fragment>
        )
    }
}
export default Second1;
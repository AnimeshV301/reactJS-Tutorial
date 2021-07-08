
import React, {Component} from "react";
import Child from "./Child"
interface Istate{
   arg1:any;
   arg2:any;
   arg3:any;
}
interface Iprops{}
class Parent extends Component<Iprops,Istate>{
    fun_one =(arg1:any):void=>{
        this.setState({
            arg1:arg1
        })
    }
    fun_two =(arg1:any):void=>{
        this.setState({
            arg2:arg1
        })
    }
    fun_three =(arg1:any):void=>{
        this.setState({
            arg3:arg1
        })
    }
    public constructor(props:Iprops){
        super(props);
        this.state={
            arg1:"",
            arg2:"",
            arg3:""
        };
    }
    render(){
        return(
            <React.Fragment>
               <h1>{this.state.arg1}</h1>
               <h1>{this.state.arg2}</h1>
               <h1>{this.state.arg3}</h1>
                <Child fun_one={this.fun_one}
                        fun_two={this.fun_two}
                        fun_three={this.fun_three}
                ></Child>
            </React.Fragment>
        )
    }
}
export default Parent;
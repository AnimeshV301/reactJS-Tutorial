import React, { Component } from "react";

interface Iprops{
    fun_one :(arg1:any)=>any;
    fun_two :(arg1:any)=>any;
    fun_three :(arg1:any)=>any;
};
interface Istate{}
class Child extends Component<Iprops,Istate>{
    ref1 = React.createRef<HTMLInputElement>();
    ref2 = React.createRef<HTMLInputElement>();
    ref3 = React.createRef<HTMLInputElement>();
    public constructor(props:Iprops){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <input type="text" ref={this.ref1} />
                <input type="text" ref={this.ref2} />
                <input type="text" ref={this.ref3} />
                <button onClick={()=>{this.props.fun_one(this.ref1.current?.value)}}>Button1</button>
                <button onClick={()=>{this.props.fun_two(this.ref2.current?.value)}}>Button2</button>
                <button onClick={()=>{this.props.fun_three(this.ref3.current?.value)}}>Button3</button>
            </React.Fragment>
        )
    }
}
export default Child;
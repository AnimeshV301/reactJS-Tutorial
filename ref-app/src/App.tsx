
import {Component} from "react";
import React from "react";
interface Iprops{}
interface Istate{}
class App extends Component<Iprops,Istate>{
  u_name =React.createRef<HTMLInputElement>();
  u_pw = React.createRef<HTMLInputElement>();
  public constructor(props:Iprops){
    super(props)
  }
  login =()=>{
    if(this.u_name.current?.value === "animesh" && this.u_pw.current?.value === "123"){
      alert("Login Succesfull")
    }
    else{
      alert("login Failed+")
    }
  }
  render(){
    return(
      <React.Fragment>
        <input type="text" ref ={this.u_name} /> <br /><br /><br /><br />
        <input type="password " ref={this.u_pw} /> <br /><br /><br /><br />
        <button onClick={this.login}>Login</button>


      </React.Fragment>
    )
  }
}
export default App;
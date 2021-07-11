import React, {Component} from "react"
import axios from "axios"
interface Istate{
  login:any
}
interface Iprops{

}
class App extends Component<Iprops,Istate>{
  uname = React.createRef<HTMLInputElement>();
  upw = React.createRef<HTMLInputElement>();
  public constructor(props:Iprops){
      super(props)
      this.state={
        login :""
      }
  };
  myfun =()=>{
    this.makeloginrequest();
   /* axios.post("http://localhost:8080/login",{"uname":this.uname.current?.value,"upw":this.upw.current?.value}).then((posres)=>{
      this.setState({
        login : posres.data.login
        
      })
    },(errres)=>{
      console.log(errres)
    })*/
  } 
  async makeloginrequest() {
      const res = await axios.post("http://localhost:8080/login",{"uname":this.uname.current?.value,"upw":this.upw.current?.value})
      const {data} = res;
      this.setState({
        login:data.login
      })
  }
  render(){
    return(
      <React.Fragment>
            <input type="text" ref ={this.uname}></input><br /><br /><br /><b></b>
            <input type ="password" ref = {this.upw}></input><br /><br /><br /><br /><br />
            <button onClick={this.myfun}>Login</button><br /><br /><br /><br /><br />
            <h1>{this.state.login}</h1>
            
      </React.Fragment>
    )
  }
}
export default App;

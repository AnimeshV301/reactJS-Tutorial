import React, {Component} from "react";
import axios from "axios";
interface Istate{
  data:any
}
interface Iprops{}
class App extends Component<Iprops,Istate>{
  public constructor(props:Iprops){
    super(props)
    this.state={
      data :{}
    }
  }
      componentDidMount(){
        axios.get("http://restcountries.eu/rest/v2/all").then((posres)=>{
          this.setState({
            data:posres
          })
        },(erres)=>{})
      }
      render(){
        return(
          <React.Fragment>
            {JSON.stringify(this.state.data)}
          </React.Fragment>
        )
      }
}
export default App;
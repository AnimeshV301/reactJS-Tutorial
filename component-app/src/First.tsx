import {Component} from "react";
interface Istate{}
interface Iprops{}
class First extends Component<Iprops,Istate>{
  constructor(props:Iprops){
    super(props);
    }
  render(){
      return(
          <h1>Welcome To ReactJS</h1>
      )
  }
};
export default First;
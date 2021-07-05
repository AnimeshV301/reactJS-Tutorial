import React , {Component} from "react"
interface Istate{
    "Sub_one" : String
};
interface Iprops{

};
class State extends Component<Iprops ,Istate>{
    public constructor(props:Iprops){
          super(props);
          this.state ={
                "Sub_one":"Reactjs"
          }
    }
    myfun=()=>{
        this.setState({
            Sub_one :"ReactJs with Typescript"
        })
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.state.Sub_one}</h1>
                <button onClick={this.myfun}>Change</button>
            </React.Fragment>
        )
    }
};
export default State;
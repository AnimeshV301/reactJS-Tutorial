

import React, {Component} from "react"
import Second1 from "./Second1";
interface Iprops{}
interface Istate{
    key1:String,
    key2:Number,
    key3:any[]
};
class First1 extends Component<Iprops ,Istate>{
    public constructor(props:Iprops){
        super(props);
        this.state ={
            "key1":"Animesh Verma" ,
            "key2":10000,
            "key3":[
                {"Name":"Sharukh Khan","Movie":"DDLJ","image":"https://bel-india.com/wp-content/uploads/2019/09/Akshay-Kumar.jpg"},
                {"Name":"Sharukh Khan","Movie":"DDLJ","image":"https://bel-india.com/wp-content/uploads/2019/09/Akshay-Kumar.jpg"},
                {"Name":"Sharukh Khan","Movie":"DDLJ","image":"https://bel-india.com/wp-content/uploads/2019/09/Akshay-Kumar.jpg"},
                {"Name":"Sharukh Khan","Movie":"DDLJ","image":"https://bel-india.com/wp-content/uploads/2019/09/Akshay-Kumar.jpg"},
                {"Name":"Sharukh Khan","Movie":"DDLJ","image":"https://bel-india.com/wp-content/uploads/2019/09/Akshay-Kumar.jpg"}
            ]
        }
      
        
    };
    
    render(){
        return(
            <React.Fragment>
                <Second1 key1={this.state.key1}
                         key2 ={this.state.key2}
                         key3={this.state.key3}
                >"Raect with typescript"</Second1>
            </React.Fragment>
        )
    }
}
export default First1;
import React , {Component} from "react"
import Second from "./Second"
interface Istate{
    key1:String,
    key2:Number,
    key3:any[]
    
};
interface Iprops{}
class First extends Component<Iprops ,Istate>{
    public constructor(props:Iprops){
        super(props);
        this.state ={
            "key1" :"ReactJS",
            "key2" :1000,
            "key3":[
                {"name":"Shirt","Price":1000,"Rating":2.5,"image":"https://images.theconversation.com/files/371985/original/file-20201130-13-xieqc.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C5129%2C2560&q=45&auto=format&w=668&h=324&fit=crop"},
                {"name":"Pant","Price":1000,"Rating":2.5,"image":"https://media.istockphoto.com/photos/women-clothes-hanging-on-hangers-clothing-rails-fashion-design-picture-id916092484?k=6&m=916092484&s=612x612&w=0&h=tUKYM82W1Vecsjeat6rl6kTnq7iCFq0JYhI2uR3VxMU="},
                {"name":"TShirt","Price":1000,"Rating":2.5,"image":"https://post.healthline.com/wp-content/uploads/2020/07/Best_Baby_Clothes_732x549.png"}
            ]
            
        }
    };
   render(){
       return(
           <React.Fragment>
               <Second key1={this.state.key1}
                       key2={this.state.key2}
                       key3={this.state.key3}        
               ></Second>
           </React.Fragment>
       )
   }

} 
export default First;
import React ,{ Component } from "react";
interface Iprops{
    key1:String,
    key2:Number,
    key3:any[]
}
interface Istate{}
class Second extends Component<Iprops ,Istate>{
    public constructor(props:Iprops){
        super (props);
    };
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.key1}</h1>
                <h1>{this.props.key2}</h1>
                <table>
                    <tr>
                        <th>SR NO</th>
                        <th>P_name</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Image</th>
                    </tr>
                    {this.props.key3.map((element,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.name}</td>
                            <td>{element.Price}</td>
                            <td>{element.Rating}</td>
                            <td><img width ="100" src={element.image} alt={element.name} /></td>
                        </tr>
                    ))}
                </table>
            </React.Fragment>
        )
    }
}
export default Second;